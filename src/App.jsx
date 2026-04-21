import { useState } from "react";

const roadmap = [
  {
    phase: "01",
    title: "Foundations",
    subtitle: "Build your base — get comfortable with patterns",
    color: "#00FF88",
    totalProblems: 80,
    topics: [
      {
        name: "Arrays & Strings",
        tag: "ENTRY",
        easy: 15, medium: 10, hard: 0,
        keyProblems: [
          "Two Sum", "Best Time to Buy & Sell Stock", "Contains Duplicate",
          "Product of Array Except Self", "Maximum Subarray (Kadane's)",
          "Rotate Array", "Find All Duplicates", "Valid Anagram",
          "Longest Common Prefix", "String Compression"
        ],
        note: "Master iteration, indexing, and in-place manipulation first."
      },
      {
        name: "Two Pointers",
        tag: "YOU ARE HERE",
        easy: 8, medium: 8, hard: 2,
        keyProblems: [
          "Valid Palindrome", "Two Sum II (sorted)", "3Sum", "Container With Most Water",
          "Trapping Rain Water", "Remove Duplicates from Sorted Array",
          "Move Zeroes", "Merge Sorted Array", "4Sum", "Dutch National Flag"
        ],
        note: "Left-right shrink, fast-slow pointer — master both variants."
      },
      {
        name: "Sliding Window",
        tag: "NEXT UP",
        easy: 5, medium: 10, hard: 2,
        keyProblems: [
          "Max Average Subarray", "Longest Substring Without Repeating",
          "Minimum Window Substring", "Permutation in String",
          "Fruits into Baskets", "Longest Repeating Character Replacement",
          "Max Consecutive Ones III", "Subarrays with K Different Integers"
        ],
        note: "Variable window vs fixed window — know when to expand/shrink."
      },
      {
        name: "Hashing & Prefix Sum",
        tag: "PARALLEL",
        easy: 8, medium: 7, hard: 0,
        keyProblems: [
          "Subarray Sum Equals K", "Longest Consecutive Sequence",
          "Group Anagrams", "Top K Frequent Elements",
          "Range Sum Query (Prefix)", "Count Subarrays with Equal 0s and 1s",
          "Contiguous Array", "Find the Duplicate Number"
        ],
        note: "HashMap is a cheat code. Learn to reduce O(n²) → O(n) using maps."
      },
    ]
  },
  {
    phase: "02",
    title: "Core Data Structures",
    subtitle: "The tools every competitive programmer lives by",
    color: "#00BFFF",
    totalProblems: 100,
    topics: [
      {
        name: "Binary Search",
        tag: "MUST MASTER",
        easy: 5, medium: 12, hard: 3,
        keyProblems: [
          "Binary Search (classic)", "Search in Rotated Sorted Array",
          "Find Minimum in Rotated Array", "Koko Eating Bananas",
          "Capacity to Ship Packages", "Median of Two Sorted Arrays",
          "Split Array Largest Sum", "Find Peak Element",
          "Search a 2D Matrix", "Aggressive Cows (classic CP)"
        ],
        note: "Binary search on ANSWER is the real skill, not just sorted arrays."
      },
      {
        name: "Linked Lists",
        tag: "CLASSIC",
        easy: 8, medium: 8, hard: 2,
        keyProblems: [
          "Reverse Linked List", "Merge Two Sorted Lists", "Linked List Cycle",
          "Find Duplicate (Floyd's)", "Remove Nth Node From End",
          "Reorder List", "Copy List with Random Pointer",
          "LRU Cache", "Merge K Sorted Lists", "Reverse Nodes in k-Group"
        ],
        note: "Draw pointers on paper. Every bug is a pointer bug."
      },
      {
        name: "Stacks & Queues",
        tag: "PATTERN-HEAVY",
        easy: 6, medium: 10, hard: 2,
        keyProblems: [
          "Valid Parentheses", "Min Stack", "Daily Temperatures",
          "Largest Rectangle in Histogram", "Next Greater Element",
          "Implement Queue using Stacks", "Sliding Window Maximum",
          "Asteroid Collision", "Basic Calculator II", "Decode String"
        ],
        note: "Monotonic stack is a pattern — it appears in 30+ LC problems."
      },
      {
        name: "Binary Trees",
        tag: "FUNDAMENTAL",
        easy: 8, medium: 12, hard: 3,
        keyProblems: [
          "Inorder/Preorder/Postorder Traversals", "Maximum Depth",
          "Balanced Binary Tree", "Same Tree", "Invert Binary Tree",
          "Level Order Traversal (BFS)", "Binary Tree Right Side View",
          "Diameter of Binary Tree", "LCA of BST", "Serialize & Deserialize"
        ],
        note: "Recursion is THE skill here. Think: what do I return up to parent?"
      },
      {
        name: "BST & Heaps",
        tag: "INTERMEDIATE",
        easy: 5, medium: 10, hard: 3,
        keyProblems: [
          "Validate BST", "Kth Smallest in BST", "BST Iterator",
          "Kth Largest Element (Heap)", "Top K Frequent (Heap)",
          "Find Median from Data Stream", "Task Scheduler",
          "K Closest Points to Origin", "Merge K Sorted Lists (Heap)"
        ],
        note: "Heaps solve 'top-K' problems. Know min-heap vs max-heap."
      },
    ]
  },
  {
    phase: "03",
    title: "Graphs & Recursion",
    subtitle: "Where 60% of hard interview problems live",
    color: "#FF6B35",
    totalProblems: 90,
    topics: [
      {
        name: "Recursion & Backtracking",
        tag: "MIND-BENDING",
        easy: 4, medium: 12, hard: 4,
        keyProblems: [
          "Subsets", "Permutations", "Combination Sum",
          "Letter Combinations of Phone Number", "Palindrome Partitioning",
          "Word Search", "N-Queens", "Sudoku Solver",
          "Generate Parentheses", "Restore IP Addresses"
        ],
        note: "Draw the recursion tree. Every backtracking problem is: choose → explore → unchoose."
      },
      {
        name: "Graphs — BFS & DFS",
        tag: "MUST MASTER",
        easy: 5, medium: 15, hard: 5,
        keyProblems: [
          "Number of Islands", "Clone Graph", "Pacific Atlantic Water Flow",
          "Rotting Oranges (BFS)", "Course Schedule (Topo Sort)",
          "Word Ladder", "Surrounded Regions", "All Paths Source to Target",
          "Walls and Gates", "Shortest Path in Binary Matrix"
        ],
        note: "Represent graph as adjacency list. BFS = shortest path, DFS = exploration."
      },
      {
        name: "Union-Find (DSU)",
        tag: "CP ESSENTIAL",
        easy: 2, medium: 8, hard: 4,
        keyProblems: [
          "Number of Provinces", "Redundant Connection",
          "Graph Valid Tree", "Accounts Merge",
          "Minimum Spanning Tree (Kruskal)", "Swim in Rising Water",
          "Number of Islands II", "Most Stones Removed"
        ],
        note: "Implement with path compression + union by rank. Template it."
      },
      {
        name: "Greedy Algorithms",
        tag: "INTUITION",
        easy: 5, medium: 12, hard: 3,
        keyProblems: [
          "Jump Game", "Jump Game II", "Gas Station",
          "Hand of Straights", "Meeting Rooms II (Intervals)",
          "Non-overlapping Intervals", "Merge Intervals",
          "Partition Labels", "Candy Distribution", "Minimum Platforms"
        ],
        note: "Greedy = make locally optimal choice at each step. Prove why it works."
      },
    ]
  },
  {
    phase: "04",
    title: "Dynamic Programming",
    subtitle: "The final boss of DSA — master this and you're elite",
    color: "#C084FC",
    totalProblems: 95,
    topics: [
      {
        name: "1D DP — Linear",
        tag: "START HERE",
        easy: 5, medium: 12, hard: 2,
        keyProblems: [
          "Climbing Stairs", "House Robber", "House Robber II",
          "Min Cost Climbing Stairs", "Decode Ways",
          "Word Break", "Coin Change", "Coin Change II",
          "Perfect Squares", "Maximum Product Subarray"
        ],
        note: "Start with: define state → recurrence → base case. Write top-down first, then optimize."
      },
      {
        name: "2D DP — Grid & Strings",
        tag: "LEVEL UP",
        easy: 3, medium: 15, hard: 5,
        keyProblems: [
          "Unique Paths", "Minimum Path Sum", "Longest Common Subsequence",
          "Edit Distance", "Longest Palindromic Subsequence",
          "Interleaving String", "Regular Expression Matching",
          "Maximal Square", "Dungeon Game", "Triangle"
        ],
        note: "dp[i][j] usually = best answer using first i chars of s1 and j chars of s2."
      },
      {
        name: "Knapsack Patterns",
        tag: "CP CORE",
        easy: 2, medium: 10, hard: 5,
        keyProblems: [
          "0/1 Knapsack (classic)", "Subset Sum", "Partition Equal Subset Sum",
          "Target Sum", "Last Stone Weight II", "Ones and Zeroes",
          "Profitable Schemes", "Count of Subset Sum", "Unbounded Knapsack"
        ],
        note: "0/1 Knapsack template solves 15+ LC problems. Memorize it."
      },
      {
        name: "DP on Trees & Intervals",
        tag: "ADVANCED",
        easy: 0, medium: 8, hard: 8,
        keyProblems: [
          "House Robber III (Tree DP)", "Binary Tree Cameras",
          "Burst Balloons", "Strange Printer",
          "Remove Boxes", "Minimum Cost to Cut Stick",
          "Longest Increasing Subsequence (LIS)", "Russian Doll Envelopes",
          "Number of LIS"
        ],
        note: "Interval DP: think dp[l][r] = answer for subarray from l to r."
      },
    ]
  },
  {
    phase: "05",
    title: "Advanced & CP-Specific",
    subtitle: "This is where Codeforces / ICPC / Google problems live",
    color: "#FF2D55",
    totalProblems: 80,
    topics: [
      {
        name: "Advanced Graphs",
        tag: "HARD GRIND",
        easy: 0, medium: 8, hard: 10,
        keyProblems: [
          "Dijkstra's Shortest Path", "Bellman-Ford",
          "Floyd-Warshall", "Topological Sort (Kahn's)",
          "Critical Connections (Bridges/Tarjan)", "Strongly Connected Components",
          "Network Flow (basic)", "Minimum Cost Flow",
          "Eulerian Path", "Hamiltonian Path (NP—DP bitmask)"
        ],
        note: "Dijkstra = weighted shortest path. Learn with priority queue."
      },
      {
        name: "Tries & Advanced Trees",
        tag: "SPECIALIZED",
        easy: 2, medium: 8, hard: 4,
        keyProblems: [
          "Implement Trie", "Word Search II (Trie + Backtrack)",
          "Design Add and Search Words", "Maximum XOR of Two Numbers (Trie)",
          "Segment Tree (Range Sum)", "Segment Tree (Range Min/Max)",
          "Fenwick Tree / BIT", "Range Query with Updates"
        ],
        note: "Fenwick Tree and Segment Tree are essential for CP contests."
      },
      {
        name: "Bit Manipulation",
        tag: "CP TRICKS",
        easy: 5, medium: 8, hard: 3,
        keyProblems: [
          "Single Number I, II, III", "Number of 1 Bits",
          "Reverse Bits", "Missing Number", "Sum of Two Integers",
          "Counting Bits", "Bitmask DP (Traveling Salesman)",
          "Maximum AND / XOR Subsets", "Divide Two Integers"
        ],
        note: "XOR cancels pairs. AND/OR for masks. Bitmask DP for subset enumeration."
      },
      {
        name: "Math & Number Theory",
        tag: "COMPETITIVE",
        easy: 3, medium: 8, hard: 5,
        keyProblems: [
          "Sieve of Eratosthenes", "GCD & LCM (Euclidean)",
          "Modular Arithmetic & Fast Exponentiation",
          "Combinatorics & Pascal's Triangle",
          "Catalan Numbers", "Count Primes",
          "Ugly Number", "Probability & Expected Value",
          "Matrix Exponentiation"
        ],
        note: "Google loves combinatorics. Learn modular inverse and nCr % MOD."
      },
    ]
  }
];

const diffBadge = (easy, medium, hard) => (
  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
    {easy > 0 && <span style={{ background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>E×{easy}</span>}
    {medium > 0 && <span style={{ background: "#FFB30020", color: "#FFB300", border: "1px solid #FFB30040", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>M×{medium}</span>}
    {hard > 0 && <span style={{ background: "#FF4D4D20", color: "#FF6B6B", border: "1px solid #FF4D4D40", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>H×{hard}</span>}
  </div>
);

export default function App() {
  const [openPhase, setOpenPhase] = useState(0);
  const [openTopic, setOpenTopic] = useState({ phase: 0, topic: 1 });

  const totalProblems = roadmap.reduce((a, p) => a + p.totalProblems, 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#090909",
      color: "#E8E8E8",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        padding: "48px 32px 32px",
        borderBottom: "1px solid #1A1A1A",
        background: "linear-gradient(180deg, #0D0D0D 0%, #090909 100%)",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ color: "#555", fontSize: "11px", letterSpacing: "4px", marginBottom: "12px", textTransform: "uppercase" }}>
            COMPETITIVE PROGRAMMING
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            margin: "0 0 8px",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            fontFamily: "'Inter', system-ui, sans-serif",
            textTransform: "uppercase",
          }}>
            DSA MASTERY<br />
            <span style={{ color: "#333" }}>ROADMAP</span>
          </h1>
          <p style={{ color: "#555", fontSize: "13px", margin: "12px 0 24px", lineHeight: 1.6 }}>
            Zero to competitive programmer. {totalProblems} problems. 5 phases. No fluff.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {roadmap.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color }} />
                <span style={{ fontSize: "11px", color: "#555" }}>Phase {p.phase}</span>
                <span style={{ fontSize: "11px", color: "#333" }}>{p.totalProblems}Q</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phases */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 32px" }}>
        {roadmap.map((phase, pi) => (
          <div key={pi} style={{ marginBottom: "12px" }}>
            {/* Phase Header */}
            <div
              onClick={() => setOpenPhase(openPhase === pi ? -1 : pi)}
              onMouseEnter={(e) => { if (openPhase !== pi) e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = phase.color + "30"; }}
              onMouseLeave={(e) => { if (openPhase !== pi) e.currentTarget.style.background = "#0D0D0D"; e.currentTarget.style.borderColor = "#1A1A1A"; }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 24px",
                background: openPhase === pi ? "#111" : "#0D0D0D",
                border: `1px solid ${openPhase === pi ? phase.color + "40" : "#1A1A1A"}`,
                borderRadius: openPhase === pi ? "12px 12px 0 0" : "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{
                fontSize: "32px",
                fontWeight: 900,
                color: phase.color + "30",
                lineHeight: 1,
                fontFamily: "'Inter', system-ui, sans-serif",
                minWidth: "48px",
              }}>{phase.phase}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.3px", fontFamily: "'Inter', system-ui, sans-serif" }}>{phase.title}</span>
                  <span style={{ fontSize: "11px", color: phase.color, background: phase.color + "15", padding: "2px 8px", borderRadius: "4px" }}>{phase.totalProblems} problems</span>
                </div>
                <div style={{ fontSize: "12px", color: "#555", marginTop: "2px" }}>{phase.subtitle}</div>
              </div>
              <div style={{
                color: openPhase === pi ? phase.color : "#444",
                fontSize: "14px",
                transform: openPhase === pi ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}>▼</div>
            </div>

            {/* Topics */}
            {openPhase === pi && (
              <div style={{
                border: `1px solid ${phase.color + "40"}`,
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                overflow: "hidden",
              }}>
                {phase.topics.map((topic, ti) => {
                  const isOpen = openTopic.phase === pi && openTopic.topic === ti;
                  return (
                    <div key={ti} style={{ borderBottom: ti < phase.topics.length - 1 ? "1px solid #151515" : "none" }}>
                      {/* Topic Row */}
                      <div
                        onClick={() => setOpenTopic(isOpen ? { phase: -1, topic: -1 } : { phase: pi, topic: ti })}
                        onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.background = "#0F0F0F"; }}
                        onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.background = "transparent"; }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          padding: "16px 24px",
                          background: isOpen ? "#111" : "transparent",
                          cursor: "pointer",
                          transition: "background 0.15s ease",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ flex: 1, minWidth: "200px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                            <span style={{ fontSize: "14px", fontWeight: 600, fontFamily: "'Inter', system-ui, sans-serif" }}>{topic.name}</span>
                            {topic.tag === "YOU ARE HERE" && (
                              <span style={{ fontSize: "10px", background: "#FFB30030", color: "#FFB300", border: "1px solid #FFB30050", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>
                                ◉ YOU ARE HERE
                              </span>
                            )}
                            {topic.tag === "NEXT UP" && (
                              <span style={{ fontSize: "10px", background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>
                                → NEXT UP
                              </span>
                            )}
                            {topic.tag !== "YOU ARE HERE" && topic.tag !== "NEXT UP" && (
                              <span style={{ fontSize: "10px", color: "#444", border: "1px solid #222", padding: "1px 6px", borderRadius: "4px" }}>
                                {topic.tag}
                              </span>
                            )}
                          </div>
                          <div style={{ marginTop: "6px" }}>
                            {diffBadge(topic.easy, topic.medium, topic.hard)}
                          </div>
                        </div>
                        <div style={{
                color: isOpen ? "#888" : "#444",
                fontSize: "12px",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}>▼</div>
                      </div>

                      {/* Topic Detail */}
                      {isOpen && (
                        <div style={{ padding: "0 24px 20px", background: "#0C0C0C" }}>
                          {/* Note */}
                          <div style={{
                            background: phase.color + "08",
                            border: `1px solid ${phase.color + "20"}`,
                            borderRadius: "8px",
                            padding: "10px 14px",
                            marginBottom: "16px",
                            fontSize: "12px",
                            color: "#888",
                            lineHeight: 1.6,
                          }}>
                            💡 {topic.note}
                          </div>

                          {/* Problems */}
                          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "2px", marginBottom: "10px" }}>PROBLEMS TO SOLVE</div>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "6px" }}>
                            {topic.keyProblems.map((p, i) => (
                              <div key={i} style={{
                                padding: "8px 12px",
                                background: "#111",
                                border: "1px solid #1A1A1A",
                                borderRadius: "6px",
                                fontSize: "12px",
                                color: "#C0C0C0",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}>
                                <span style={{ color: "#333", fontSize: "10px", minWidth: "16px" }}>{String(i + 1).padStart(2, "0")}</span>
                                {p}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Bottom Summary */}
        <div style={{
          marginTop: "40px",
          padding: "24px",
          background: "#0D0D0D",
          border: "1px solid #1A1A1A",
          borderRadius: "12px",
        }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "16px" }}>THE STRATEGY</div>
          {[
            ["WHERE TO PRACTICE", "LeetCode for patterns. Codeforces for real contests. CSES Problem Set for theory. AtCoder Beginner Contests weekly."],
            ["HOW TO PRACTICE", "Don't read solutions before 30 min of genuine struggle. After solving, read the editorial anyway. Pattern recognition > memorization."],
            ["TIMELINE", "Phase 1-2 → 3 months. Phase 3-4 → 3 months. Phase 5 → ongoing. Start Codeforces Div 3 contests from month 2."],
            ["DAILY HABIT", "2-3 problems per day minimum. On weekends, do a full virtual contest. Track your submissions, not just solves."],
          ].map(([label, text], i) => (
            <div key={i} style={{ marginBottom: i < 3 ? "16px" : "0", paddingBottom: i < 3 ? "16px" : "0", borderBottom: i < 3 ? "1px solid #151515" : "none" }}>
              <div style={{ fontSize: "11px", color: "#555", letterSpacing: "1px", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
