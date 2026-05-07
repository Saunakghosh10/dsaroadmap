import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_MESSAGES = [
  { 
    role: 'ai', 
    text: "Hello! I'm your AI Technical Interviewer. I'm here to help you prepare for your next big DSA interview. Shall we start with some C++ internals or jump straight into a LeetCode pattern discussion?" 
  }
];

export default function AiInterviewPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [model, setModel] = useState("gemini-3-flash-preview");
  const [nvidiaKey, setNvidiaKey] = useState(localStorage.getItem('nvidia_api_key') || "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");
  const [geminiKey, setGeminiKey] = useState(localStorage.getItem('gemini_api_key') || "AIzaSyAm2bdETQNGy7diqgUiLQ_F36atUgpPiD4");
  const [showSettings, setShowSettings] = useState(!nvidiaKey && !geminiKey);

  const saveKeys = (nvKey, gemKey) => {
    localStorage.setItem('nvidia_api_key', nvKey);
    localStorage.setItem('gemini_api_key', gemKey);
    setNvidiaKey(nvKey);
    setGeminiKey(gemKey);
    setShowSettings(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const isGemini = model.includes("gemini");
    const isGLM = model.includes("glm");
    const activeKey = isGemini ? geminiKey : nvidiaKey;

    if (!activeKey) {
      setMessages(prev => [...prev, { role: 'ai', text: `Please enter your ${isGemini ? 'Gemini' : 'NVIDIA'} API Key in settings!` }]);
      setIsTyping(false);
      return;
    }

    try {
      let response;
      let messageId = Date.now();
      let aiText = "";
      let reasoningText = "";

      if (isGemini) {
        const isGemini3 = model.includes("gemini-3");
        response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${activeKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [...messages, userMsg].map(m => ({
              role: m.role === 'ai' ? 'model' : 'user',
              parts: [{ text: m.text }]
            })),
            systemInstruction: { parts: [{ text: "You are a Senior Technical Interviewer at Google. Grill the candidate on C++ and DSA. Use your thinking capability to analyze their code deeply before responding. Be professional and concise." }] },
            generationConfig: isGemini3 ? {
              thinking_config: { include_thoughts: true },
              max_output_tokens: 65536,
              temperature: 1
            } : { temperature: 1 }
          })
        });
      } else {
        const systemPrompt = "You are a Senior Technical Interviewer. Grill the candidate on C++ and DSA. Be professional and concise.";
        const payload = {
          model: model,
          messages: [
            { role: 'user', content: `[SYSTEM: ${systemPrompt}]` },
            ...messages.filter(m => m.text).map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.text })),
            { role: 'user', content: input }
          ],
          temperature: 1,
          top_p: isGLM ? 1 : 0.95,
          max_tokens: 2048,
          stream: true
        };

        if (isGLM) {
          payload.extra_body = { chat_template_kwargs: { enable_thinking: true, clear_thinking: false } };
        }

        response = await fetch("/api/nvidia/v1/chat/completions", {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${activeKey.trim()}`
          },
          body: JSON.stringify(payload)
        });
      }

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(`API Error ${response.status}: ${errData.message || response.statusText || "Request failed"}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      setMessages(prev => [...prev, { role: 'ai', text: "", reasoning: "", id: messageId }]);
      setIsTyping(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') break;
            
            try {
              const data = JSON.parse(dataStr);
              if (isGemini) {
                // Handle Gemini 3 Thinking + Content
                const part = data.candidates[0].content.parts[0];
                
                if (part.thought) {
                  reasoningText += part.text; // Thoughts sometimes come in the text field if thinking is enabled
                  setMessages(prev => prev.map(m => m.id === messageId ? { ...m, reasoning: reasoningText } : m));
                } else if (part.text) {
                  aiText += part.text;
                  setMessages(prev => prev.map(m => m.id === messageId ? { ...m, text: aiText } : m));
                }
              } else {
                const delta = data.choices[0].delta;
                if (delta.reasoning_content) {
                  reasoningText += delta.reasoning_content;
                  setMessages(prev => prev.map(m => m.id === messageId ? { ...m, reasoning: reasoningText } : m));
                }
                if (delta.content) {
                  aiText += delta.content;
                  setMessages(prev => prev.map(m => m.id === messageId ? { ...m, text: aiText } : m));
                }
              }
            } catch (e) {}
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: `Connection failed. ${error.message}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ 
      height: 'calc(100vh - 80px)', 
      maxWidth: '900px', 
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '24px'
    }}>
      <header style={{ marginBottom: '24px', textAlign: 'center', position: 'relative' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#E8E8E8' }}>
          AI Mock <span style={{ color: '#00FF88' }}>Interviewer</span>
        </h1>
        <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex', gap: '8px' }}>
          <select 
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={{
              background: '#0D0D14', border: '1px solid #18181F',
              color: '#00FF88', fontSize: '11px', padding: '4px 10px',
              borderRadius: '6px', cursor: 'pointer', outline: 'none'
            }}
          >
            <option value="gemini-3-flash-preview">Gemini 3 Flash (Thinking)</option>
            <option value="gemini-3.1-flash-lite-preview">Gemini 3.1 Flash-Lite</option>
            <option value="gemini-3.1-pro">Gemini 3.1 Pro (Expert)</option>
            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
            <option value="minimaxai/minimax-m2.7">MiniMax M2.7</option>
            <option value="z-ai/glm4.7">GLM-4.7 (Thinking)</option>
          </select>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            style={{
              background: 'transparent', border: '1px solid #18181F',
              color: '#555', fontSize: '11px', padding: '4px 10px',
              borderRadius: '6px', cursor: 'pointer'
            }}
          >
            {showSettings ? 'Close' : 'API'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ 
              background: '#0D0D14', border: '1px solid #00FF8830', 
              borderRadius: '16px', padding: '20px', marginBottom: '20px',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#00FF88', marginBottom: '8px', fontWeight: 700 }}>
                  NVIDIA NIM Key
                </label>
                <input 
                  type="password"
                  placeholder="nvapi-..."
                  defaultValue={nvidiaKey}
                  id="nv-key-input"
                  style={{
                    width: '100%', background: '#05050A', border: '1px solid #18181F',
                    borderRadius: '8px', padding: '10px 16px', color: '#EEE', fontSize: '13px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#4285F4', marginBottom: '8px', fontWeight: 700 }}>
                  Gemini API Key
                </label>
                <input 
                  type="password"
                  placeholder="AIza..."
                  defaultValue={geminiKey}
                  id="gem-key-input"
                  style={{
                    width: '100%', background: '#05050A', border: '1px solid #18181F',
                    borderRadius: '8px', padding: '10px 16px', color: '#EEE', fontSize: '13px'
                  }}
                />
              </div>
            </div>
            <button 
              onClick={() => saveKeys(document.getElementById('nv-key-input').value, document.getElementById('gem-key-input').value)}
              style={{
                marginTop: '16px', width: '100%', background: '#00FF88', color: '#05050A', 
                border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer'
              }}
            >
              Save All Keys
            </button>
            <p style={{ marginTop: '10px', fontSize: '11px', color: '#444' }}>
              Switch to <b>Gemini 2.5 Flash</b> for the fastest response times.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ 
        flex: 1, 
        background: '#0A0A12', 
        border: '1px solid #18181F', 
        borderRadius: '24px', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        {/* Chat Area */}
        <div style={{ 
          flex: 1, 
          padding: '24px', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px' 
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', maxWidth: '80%' }}>
              {msg.role === 'ai' && msg.reasoning && (
                <div style={{ 
                  background: '#0D0D14', border: '1px solid #18181F', 
                  padding: '12px 16px', borderRadius: '16px', marginBottom: '8px',
                  fontSize: '11px', color: '#555', fontStyle: 'italic',
                  maxHeight: '150px', overflowY: 'auto'
                }}>
                  <div style={{ marginBottom: '4px', fontSize: '10px', color: '#333', fontWeight: 800, textTransform: 'uppercase' }}>Thought Process</div>
                  {msg.reasoning}
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                style={{
                  background: msg.role === 'ai' ? '#12121A' : '#00FF88',
                  color: msg.role === 'ai' ? '#DDD' : '#05050A',
                  padding: '16px 20px',
                  borderRadius: msg.role === 'ai' ? '20px 20px 20px 4px' : '20px 20px 4px 20px',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  border: msg.role === 'ai' ? '1px solid #18181F' : 'none',
                  position: 'relative'
                }}
              >
                {msg.text || (msg.role === 'ai' && !msg.reasoning ? "Thinking..." : "")}
              </motion.div>
            </div>
          ))}
          {isTyping && (
            <div style={{ alignSelf: 'flex-start', background: '#12121A', padding: '12px 20px', borderRadius: '20px', display: 'flex', gap: '4px' }}>
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '6px', height: '6px', background: '#00FF88', borderRadius: '50%' }} />
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '6px', height: '6px', background: '#00FF88', borderRadius: '50%' }} />
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '6px', height: '6px', background: '#00FF88', borderRadius: '50%' }} />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '24px', borderTop: '1px solid #18181F', background: '#0D0D14' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your response..."
              style={{
                flex: 1,
                background: '#05050A',
                border: '1px solid #18181F',
                borderRadius: '12px',
                padding: '14px 20px',
                color: '#EEE',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            <button 
              onClick={handleSend}
              style={{
                background: '#00FF88',
                color: '#05050A',
                border: 'none',
                padding: '0 24px',
                borderRadius: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
