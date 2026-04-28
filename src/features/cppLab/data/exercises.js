export const EXERCISES = [
  {
    day: "Day 1",
    title: "Vector Fundamentals",
    color: "#00FF88",
    tasks: [
      { label: "Type from memory", prompt: "Declare a vector of int called 'nums', size 5, all zeros", answer: "vector<int> nums(5, 0);" },
      { label: "Type from memory", prompt: "Declare a 3×4 2D grid of ints initialized to -1", answer: "vector<vector<int>> grid(3, vector<int>(4, -1));" },
      { label: "Type from memory", prompt: "Add element 42 to end of vector v, then remove last element", answer: "v.push_back(42);\nv.pop_back();" },
      { label: "Fill in the blank", prompt: "Sort vector v descending: sort(v.begin(), v.end(), ___)", answer: "greater<int>()" },
      { label: "Explain it", prompt: "Why does vector<vector<int>> adj(n) create an adjacency list?", answer: "It creates n empty vectors — each index i holds the list of neighbors for node i." },
    ],
  },
  {
    day: "Day 2",
    title: "HashMap Mastery",
    color: "#FF6B35",
    tasks: [
      { label: "Type from memory", prompt: "Declare a HashMap mapping int to int called 'freq'", answer: "unordered_map<int, int> freq;" },
      { label: "Type from memory", prompt: "Count frequency of each element in vector v using freq map", answer: "for (int x : v) freq[x]++;" },
      { label: "Type from memory", prompt: "Check if key 'k' does NOT exist in map 'mp'", answer: "if (mp.find(k) == mp.end()) { }" },
      { label: "Fill in the blank", prompt: "Iterate over all key-value pairs in map 'mp': for (auto& [___, ___] : mp)", answer: "key, val" },
      { label: "Explain it", prompt: "What's the difference between unordered_map and map?", answer: "unordered_map uses hash table → O(1) average but unordered. map uses BST → O(log n) but always sorted." },
    ],
  },
  {
    day: "Day 3",
    title: "Heap & Priority Queue",
    color: "#FF2D55",
    tasks: [
      { label: "Type from memory", prompt: "Declare a max-heap of integers", answer: "priority_queue<int> pq;" },
      { label: "Type from memory", prompt: "Declare a min-heap of integers", answer: "priority_queue<int, vector<int>, greater<int>> pq;" },
      { label: "Type from memory", prompt: "Declare a min-heap of pairs (for Dijkstra)", answer: "priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;" },
      { label: "Fill in the blank", prompt: "To peek the top of heap without removing: pq.___", answer: "top()" },
      { label: "Explain it", prompt: "Why do you need vector<int> as second arg for min-heap?", answer: "C++ requires you to specify template arg 2 before you can specify arg 3 (the comparator). You must write vector<T> even though you never change it." },
    ],
  },
  {
    day: "Day 4",
    title: "BFS & DFS Templates",
    color: "#00BFFF",
    tasks: [
      { label: "Type from memory", prompt: "Write the BFS setup: create queue, mark start visited, push start", answer: "queue<int> q;\nvector<bool> vis(n, false);\nvis[start] = true;\nq.push(start);" },
      { label: "Type from memory", prompt: "Write the BFS loop header and node extraction", answer: "while (!q.empty()) {\n    int node = q.front(); q.pop();" },
      { label: "Type from memory", prompt: "Write grid DFS direction arrays (4-directional)", answer: "int dx[] = {0,0,1,-1};\nint dy[] = {1,-1,0,0};" },
      { label: "Fill in the blank", prompt: "In BFS, why do we mark visited BEFORE pushing to queue, not after popping?", answer: "To avoid pushing the same node multiple times if multiple neighbors point to it." },
      { label: "Explain it", prompt: "When do you use BFS vs DFS?", answer: "BFS for shortest path (unweighted) and level-by-level. DFS for exploring all paths, connected components, cycle detection." },
    ],
  },
  {
    day: "Day 5",
    title: "String & Char Operations",
    color: "#FFB300",
    tasks: [
      { label: "Type from memory", prompt: "Convert char digit '7' to integer 7", answer: "int n = '7' - '0';" },
      { label: "Type from memory", prompt: "Convert integer 42 to string", answer: "string s = to_string(42);" },
      { label: "Type from memory", prompt: "Get substring of s starting at index 2, length 4", answer: "s.substr(2, 4);" },
      { label: "Fill in the blank", prompt: "Check if char c is a letter: ___(c)", answer: "isalpha(c)" },
      { label: "Explain it", prompt: "Why do we use s.find() == string::npos to check if substring not found?", answer: "find() returns string::npos (a special max value) when not found. Comparing to it is the standard way to check." },
    ],
  },
  {
    day: "Day 6",
    title: "Sorting & Binary Search",
    color: "#C084FC",
    tasks: [
      { label: "Type from memory", prompt: "Sort vector v of pairs by second element ascending", answer: "sort(v.begin(), v.end(), [](auto& a, auto& b){ return a.second < b.second; });" },
      { label: "Type from memory", prompt: "Binary search: find first index in sorted v where value >= target", answer: "int idx = lower_bound(v.begin(), v.end(), target) - v.begin();" },
      { label: "Type from memory", prompt: "Manual binary search template (lo, hi, mid, avoid overflow)", answer: "int lo=0, hi=n-1;\nwhile(lo<=hi){\n    int mid=lo+(hi-lo)/2;\n}" },
      { label: "Fill in the blank", prompt: "To count occurrences of x in sorted v: upper_bound(...) - ___bound(...)", answer: "lower" },
      { label: "Explain it", prompt: "Why use lo + (hi-lo)/2 instead of (lo+hi)/2 for mid?", answer: "To avoid integer overflow. If lo and hi are both large ints, lo+hi can exceed INT_MAX." },
    ],
  },
  {
    day: "Day 7",
    title: "Bit Manipulation",
    color: "#FF2D55",
    tasks: [
      { label: "Type from memory", prompt: "Check if bit i is set in n", answer: "if ((n >> i) & 1) { }" },
      { label: "Type from memory", prompt: "Check if n is a power of 2", answer: "(n & (n-1)) == 0" },
      { label: "Type from memory", prompt: "XOR all elements in vector v to find the single number", answer: "int res = 0;\nfor (int x : v) res ^= x;" },
      { label: "Fill in the blank", prompt: "Count set bits in integer n: __builtin___(n)", answer: "popcount" },
      { label: "Explain it", prompt: "Why does XOR of all elements find the single number?", answer: "XOR of a number with itself = 0. XOR with 0 = the number itself. So all pairs cancel out, leaving only the single number." },
    ],
  },
];

