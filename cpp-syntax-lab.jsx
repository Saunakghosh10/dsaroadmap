import { useState, useEffect, useRef } from "react";

// ─── WHY SECTION ─────────────────────────────────────────────────────────────
const WHY_DATA = [
  {
    title: "Why vector<int> and not just vector?",
    short: "C++ templates — one container, any type",
    explanation: `In C++, vector is a "template class". Think of it like a blueprint that needs to know WHAT type of things it will store.

vector<int>    → a dynamic array of integers
vector<string> → a dynamic array of strings
vector<float>  → a dynamic array of floats

The <int> part is called the "template argument" — you're telling C++ what TYPE to store inside.

This is called GENERICS. You write the container once, and it works for any type.

Mental model: vector is a box factory. <int> tells it to make a box specifically for integers.`,
    example: `vector<int> nums;           // box for integers
vector<string> names;       // box for strings
vector<vector<int>> grid;   // box of boxes (2D array!)
vector<pair<int,int>> pts;  // box of pairs`
  },
  {
    title: "Why unordered_map<int, int>?",
    short: "Two template args — key type and value type",
    explanation: `A map stores KEY → VALUE pairs. So it needs TWO type arguments:
  1. The type of the KEY (what you look up by)
  2. The type of the VALUE (what you get back)

unordered_map<int, int>
    → key is int, value is int
    → e.g. player number → loss count (exactly like your screenshot!)

unordered_map<string, int>
    → key is string, value is int
    → e.g. word → frequency count

unordered_map<int, vector<int>>
    → key is int, value is a whole vector
    → e.g. node → list of neighbors (adjacency list!)

"unordered" means it uses a hash table internally → O(1) lookup.
"map" (without unordered) uses a sorted tree → O(log n) but sorted.`,
    example: `unordered_map<int, int> lost_map;    // player → losses
unordered_map<string, int> freq;     // word → count
unordered_map<int, vector<int>> adj; // node → neighbors

// Access works exactly like array indexing:
lost_map[5]++;      // increment value at key 5
freq["hello"] = 3;  // set value at key "hello"`
  },
  {
    title: "Why vector<vector<int>>?",
    short: "Nested templates — a 2D grid",
    explanation: `When you write vector<vector<int>>, you're saying:
"I want a vector whose elements are themselves vectors of int."

This creates a 2D array (a grid / matrix).

The outer vector holds rows.
Each inner vector<int> is one row of integers.

This is extremely common in:
- Grid/matrix problems (number of islands etc.)
- Adjacency lists for graphs
- Storing multiple arrays together`,
    example: `// 3x4 grid initialized to 0
vector<vector<int>> grid(3, vector<int>(4, 0));
grid[0][0] = 1;   // row 0, col 0
grid[2][3] = 5;   // row 2, col 3

// Adjacency list for graph with n nodes
vector<vector<int>> adj(n);
adj[0].push_back(1);  // edge 0 → 1
adj[0].push_back(2);  // edge 0 → 2`
  },
  {
    title: "Why priority_queue<int, vector<int>, greater<int>>?",
    short: "Three template args — type, container, comparator",
    explanation: `priority_queue takes up to 3 template arguments:
  1. The type of elements stored
  2. The underlying container (almost always vector<T>)
  3. The comparator that decides ordering

Default (max-heap — largest element on top):
priority_queue<int>
→ uses less<int> comparator by default
→ larger elements have higher priority

Min-heap (smallest element on top):
priority_queue<int, vector<int>, greater<int>>
→ greater<int> flips the comparison
→ smaller elements have higher priority

Why do you need all three for min-heap?
C++ requires you to specify arg 2 before you can specify arg 3.
So you must write vector<int> as the container even though you never change it.

Think of greater<int> as: "greater value = lower priority"`,
    example: `// Max-heap (default) - largest on top
priority_queue<int> maxpq;
maxpq.push(3); maxpq.push(1); maxpq.push(5);
maxpq.top(); // returns 5

// Min-heap - smallest on top
priority_queue<int, vector<int>, greater<int>> minpq;
minpq.push(3); minpq.push(1); minpq.push(5);
minpq.top(); // returns 1

// Min-heap of pairs (useful for Dijkstra)
priority_queue<pair<int,int>,
  vector<pair<int,int>>,
  greater<pair<int,int>>> pq;
pq.push({5, 0}); // {distance, node}`
  },
  {
    title: "Why pair<int,int> and p.first / p.second?",
    short: "A struct that holds exactly two values",
    explanation: `pair is a simple container that holds exactly TWO values of any types.
You access them with .first and .second.

It's incredibly useful in CP for:
- Storing (value, index) together
- BFS with (distance, node)
- Sorting by one field then another
- Returning two things from a function

Sorting behavior: pairs sort by .first first, then by .second.
This is automatic — super useful.`,
    example: `pair<int, int> p = {3, 7};
p.first;   // 3
p.second;  // 7

// make_pair is an older way to create pairs
auto p2 = make_pair(1, 2);

// Structured binding (C++17) — cleaner way to unpack
auto [dist, node] = p;

// Sort vector of pairs — sorts by .first, then .second
vector<pair<int,int>> v = {{3,1},{1,5},{1,2}};
sort(v.begin(), v.end());
// Result: {{1,2},{1,5},{3,1}}`
  },
  {
    title: "Why lost_map.find(x) == lost_map.end()?",
    short: "Iterators — C++'s way of checking existence",
    explanation: `In C++, containers use "iterators" (like pointers) to point to elements.

lost_map.find(key) returns:
→ An iterator pointing TO the element if found
→ lost_map.end() if NOT found (end is a special "past the end" marker)

So the check:
  if (lost_map.find(winner) == lost_map.end())
means: "if winner is NOT in the map"

This is the classic C++ existence check. It's verbose but correct.

Simpler alternative: lost_map.count(key) returns 1 if exists, 0 if not.
Even simpler (C++20): lost_map.contains(key)

In your screenshot (line 19): it checks if the winner has never lost.
If find returns end(), winner is not in lost_map → they never lost.`,
    example: `unordered_map<int, int> mp;
mp[1] = 10;

// Method 1: find + end (classic)
if (mp.find(5) == mp.end()) {
    // 5 is NOT in the map
}

// Method 2: count (simpler)
if (mp.count(5) == 0) {
    // 5 is NOT in the map
}

// Method 3: contains (C++20, cleanest)
if (!mp.contains(5)) {
    // 5 is NOT in the map
}`
  },
  {
    title: "Why auto& [key, val] in range-based for?",
    short: "Structured bindings — unpacking pairs automatically",
    explanation: `When you iterate over a map, each element is a pair<key, value>.

Old way (verbose):
  for (auto& p : mp) { p.first; p.second; }

New way with structured binding (C++17):
  for (auto& [key, val] : mp) { key; val; }

The & means "by reference" — you're not copying, you're accessing directly.
Without &, you'd copy each element (slower for big objects).

auto deduces the type automatically.
[key, val] unpacks the pair into two named variables.

This pattern appears EVERYWHERE in modern CP code.`,
    example: `unordered_map<string, int> freq;
freq["apple"] = 3;
freq["banana"] = 1;

// Old way
for (auto& p : freq) {
    cout << p.first << ": " << p.second << "\n";
}

// New way (C++17 structured binding) — preferred
for (auto& [word, count] : freq) {
    cout << word << ": " << count << "\n";
}

// Also works with pairs in vectors
vector<pair<int,int>> edges = {{1,2},{3,4}};
for (auto& [u, v] : edges) {
    cout << u << " -> " << v << "\n";
}`
  },
  {
    title: "Why v.begin() and v.end() everywhere?",
    short: "Iterator range — how STL algorithms work",
    explanation: `Almost every STL algorithm (sort, find, reverse, etc.) takes a RANGE defined by two iterators:
  begin() → points to the FIRST element
  end()   → points ONE PAST the last element (not the last!)

This design lets you apply algorithms to:
- The whole container: begin(), end()
- A part of it: begin()+2, begin()+5 (elements 2,3,4)

Why "one past the end"? So that an empty range is begin()==end().
It's a consistent design across all C++ containers.

sort(v.begin(), v.end()) means: sort everything from first to last.
sort(v.begin(), v.begin()+k) means: sort only first k elements.`,
    example: `vector<int> v = {5, 3, 1, 4, 2};

sort(v.begin(), v.end());           // sort all → {1,2,3,4,5}
sort(v.begin(), v.begin()+3);       // sort first 3 only → {1,3,5,4,2}
reverse(v.begin(), v.end());        // reverse all
auto it = find(v.begin(), v.end(), 4); // find value 4

// C++11 range-based for (cleaner when you don't need index)
for (int x : v) { cout << x; }

// Equivalent to:
for (auto it = v.begin(); it != v.end(); ++it) {
    cout << *it;  // dereference iterator to get value
}`
  },
];

// ─── SYNTAX CARDS DATA ────────────────────────────────────────────────────────
const SYNTAX_CARDS = [
  {
    category: "Vector",
    color: "#00FF88",
    items: [
      { syntax: "vector<int> v;", meaning: "Empty vector of ints", use: "Start with unknown size" },
      { syntax: "vector<int> v(n, 0);", meaning: "Size n, all zeros", use: "DP arrays, visited arrays" },
      { syntax: "vector<int> v = {1,2,3};", meaning: "Initialize with values", use: "Small fixed input" },
      { syntax: "vector<vector<int>> g(n);", meaning: "n empty vectors — adjacency list", use: "Graph problems" },
      { syntax: "vector<vector<int>> g(n, vector<int>(m,0));", meaning: "n×m grid, all zeros", use: "2D DP, matrix problems" },
      { syntax: "v.push_back(x);", meaning: "Add x to end", use: "Building result arrays" },
      { syntax: "v.pop_back();", meaning: "Remove last element", use: "Backtracking" },
      { syntax: "v.size()", meaning: "Number of elements (returns size_t)", use: "Loop bounds" },
      { syntax: "v[i]", meaning: "Access index i (no bounds check)", use: "Direct access" },
      { syntax: "v.front() / v.back()", meaning: "First / Last element", use: "Stack-like access" },
    ]
  },
  {
    category: "unordered_map",
    color: "#FF6B35",
    items: [
      { syntax: "unordered_map<int,int> mp;", meaning: "Hash map: int key → int value", use: "Two Sum, frequency count" },
      { syntax: "unordered_map<string,int> mp;", meaning: "Hash map: string key → int value", use: "Word frequency, anagram grouping" },
      { syntax: "unordered_map<int,vector<int>> mp;", meaning: "Key → list of values", use: "Group by key" },
      { syntax: "mp[key]++", meaning: "Increment value at key (creates with 0 if missing)", use: "Frequency counting" },
      { syntax: "mp[key] = val;", meaning: "Set value at key", use: "Store computation result" },
      { syntax: "mp.count(key)", meaning: "Returns 1 if exists, 0 if not", use: "Existence check" },
      { syntax: "mp.find(k)==mp.end()", meaning: "True if key NOT in map", use: "Classic existence check" },
      { syntax: "mp.erase(key);", meaning: "Delete key-value pair", use: "Sliding window cleanup" },
      { syntax: "for(auto&[k,v]:mp)", meaning: "Iterate all key-value pairs", use: "Process all entries" },
    ]
  },
  {
    category: "unordered_set",
    color: "#00BFFF",
    items: [
      { syntax: "unordered_set<int> st;", meaning: "Hash set of ints — no duplicates, O(1)", use: "Visited tracking, dedup" },
      { syntax: "st.insert(x);", meaning: "Add element", use: "Mark as visited/seen" },
      { syntax: "st.count(x)", meaning: "1 if exists, 0 if not", use: "Check if seen before" },
      { syntax: "st.erase(x);", meaning: "Remove element", use: "Sliding window visited" },
      { syntax: "set<int> s;", meaning: "Sorted set — O(log n) but ordered", use: "Need sorted order" },
      { syntax: "*s.begin()", meaning: "Smallest element in set", use: "Get minimum" },
      { syntax: "*s.rbegin()", meaning: "Largest element in set", use: "Get maximum" },
      { syntax: "s.lower_bound(x)", meaning: "Iterator to first element >= x", use: "Binary search on set" },
    ]
  },
  {
    category: "Priority Queue (Heap)",
    color: "#FF2D55",
    items: [
      { syntax: "priority_queue<int> pq;", meaning: "Max-heap — largest element on top", use: "Get maximum repeatedly" },
      { syntax: "priority_queue<int,vector<int>,greater<int>> pq;", meaning: "Min-heap — smallest on top", use: "Get minimum, Dijkstra" },
      { syntax: "pq.push(x);", meaning: "Insert element", use: "Add to heap" },
      { syntax: "pq.top()", meaning: "Peek top element (don't remove)", use: "See max/min" },
      { syntax: "pq.pop();", meaning: "Remove top element", use: "Process max/min" },
      { syntax: "pq.size() / pq.empty()", meaning: "Size / Is empty", use: "Loop condition" },
      { syntax: "priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq;", meaning: "Min-heap of pairs", use: "Dijkstra: {dist, node}" },
    ]
  },
  {
    category: "Stack & Queue",
    color: "#C084FC",
    items: [
      { syntax: "stack<int> st;", meaning: "LIFO stack", use: "Brackets, monotonic stack" },
      { syntax: "st.push(x); st.pop(); st.top();", meaning: "Insert, remove top, peek top", use: "Stack operations" },
      { syntax: "queue<int> q;", meaning: "FIFO queue", use: "BFS" },
      { syntax: "q.push(x); q.pop(); q.front();", meaning: "Insert back, remove front, peek front", use: "BFS operations" },
      { syntax: "deque<int> dq;", meaning: "Double-ended queue", use: "Sliding window max, monotonic deque" },
      { syntax: "dq.push_back(x); dq.push_front(x);", meaning: "Add to back / front", use: "Deque operations" },
      { syntax: "dq.pop_back(); dq.pop_front();", meaning: "Remove from back / front", use: "Deque shrink" },
      { syntax: "dq.front(); dq.back();", meaning: "Peek front / back", use: "Access ends" },
    ]
  },
  {
    category: "Pairs & Tuples",
    color: "#FFB300",
    items: [
      { syntax: "pair<int,int> p = {3,7};", meaning: "Pair of two ints", use: "(distance, node), (value, index)" },
      { syntax: "p.first; p.second;", meaning: "Access first and second value", use: "Read pair values" },
      { syntax: "auto [a, b] = p;", meaning: "Unpack pair into variables (C++17)", use: "Cleaner access" },
      { syntax: "make_pair(a, b)", meaning: "Create pair (older style)", use: "Pre-C++17 codebases" },
      { syntax: "tuple<int,int,int> t = {1,2,3};", meaning: "Three values", use: "When pair isn't enough" },
      { syntax: "get<0>(t); get<1>(t);", meaning: "Access tuple by index", use: "Read tuple values" },
      { syntax: "auto [x,y,z] = t;", meaning: "Unpack tuple", use: "Cleaner tuple access" },
    ]
  },
  {
    category: "Sorting",
    color: "#00FF88",
    items: [
      { syntax: "sort(v.begin(), v.end());", meaning: "Sort ascending (default)", use: "Most common sort" },
      { syntax: "sort(v.begin(), v.end(), greater<int>());", meaning: "Sort descending", use: "Reverse sort" },
      { syntax: "sort(v.begin(), v.end(), [](int a, int b){ return a>b; });", meaning: "Custom comparator — descending", use: "Custom order" },
      { syntax: "sort(v.begin(), v.end(), [](auto& a, auto& b){ return a.second < b.second; });", meaning: "Sort pairs by second value", use: "Sort by custom field" },
      { syntax: "stable_sort(v.begin(), v.end());", meaning: "Sort preserving equal element order", use: "When order of equals matters" },
      { syntax: "lower_bound(v.begin(), v.end(), x);", meaning: "Iterator to first element >= x (sorted!)", use: "Binary search" },
      { syntax: "upper_bound(v.begin(), v.end(), x);", meaning: "Iterator to first element > x (sorted!)", use: "Count occurrences" },
    ]
  },
  {
    category: "String Operations",
    color: "#FF6B35",
    items: [
      { syntax: "s.size() / s.length()", meaning: "Length of string", use: "Loop bounds" },
      { syntax: "s.substr(start, len)", meaning: "Substring starting at index, of given length", use: "Extract part of string" },
      { syntax: "s.find(\"lo\")", meaning: "Index of first occurrence, or string::npos", use: "Search in string" },
      { syntax: "s += \" world\"", meaning: "Concatenate strings", use: "Build strings" },
      { syntax: "stoi(s)", meaning: "String to integer", use: "Parse input" },
      { syntax: "to_string(42)", meaning: "Integer to string", use: "Convert for output" },
      { syntax: "s[i] - '0'", meaning: "Char digit to int (e.g. '5' → 5)", use: "Parse digit characters" },
      { syntax: "isalpha(c) / isdigit(c)", meaning: "Check if letter / digit", use: "Char validation" },
      { syntax: "tolower(c) / toupper(c)", meaning: "Convert case", use: "Case-insensitive compare" },
      { syntax: "reverse(s.begin(), s.end())", meaning: "Reverse string in-place", use: "Palindrome problems" },
    ]
  },
  {
    category: "Useful STL Functions",
    color: "#00BFFF",
    items: [
      { syntax: "min(a,b) / max(a,b)", meaning: "Smaller / larger of two values", use: "Comparisons" },
      { syntax: "min({a,b,c})", meaning: "Minimum of multiple values", use: "3+ value comparison" },
      { syntax: "abs(x)", meaning: "Absolute value", use: "Distance, difference" },
      { syntax: "__gcd(a,b)", meaning: "GCD of two numbers", use: "Number theory" },
      { syntax: "swap(a,b)", meaning: "Swap two variables", use: "In-place swap" },
      { syntax: "fill(v.begin(),v.end(),0)", meaning: "Fill container with value", use: "Reset arrays" },
      { syntax: "accumulate(v.begin(),v.end(),0)", meaning: "Sum of all elements", use: "Total sum" },
      { syntax: "count(v.begin(),v.end(),x)", meaning: "Count occurrences of x", use: "Frequency" },
      { syntax: "*max_element(v.begin(),v.end())", meaning: "Maximum value in container", use: "Find max" },
      { syntax: "*min_element(v.begin(),v.end())", meaning: "Minimum value in container", use: "Find min" },
      { syntax: "__builtin_popcount(n)", meaning: "Count set bits (1s) in n", use: "Bit manipulation" },
    ]
  },
  {
    category: "Bit Manipulation",
    color: "#FF2D55",
    items: [
      { syntax: "(n >> i) & 1", meaning: "Check if bit i is set", use: "Bitmask DP, subsets" },
      { syntax: "n | (1 << i)", meaning: "Set bit i", use: "Turn on a bit" },
      { syntax: "n & ~(1 << i)", meaning: "Clear bit i", use: "Turn off a bit" },
      { syntax: "n ^ (1 << i)", meaning: "Toggle bit i", use: "Flip a bit" },
      { syntax: "n & (n-1)", meaning: "Remove lowest set bit", use: "Count set bits trick" },
      { syntax: "(n & (n-1)) == 0", meaning: "Check if n is power of 2", use: "Power of 2 check" },
      { syntax: "a ^ b ^ a", meaning: "XOR: cancels a, leaves b", use: "Find single number" },
      { syntax: "a & (-a)", meaning: "Isolate lowest set bit", use: "Fenwick Tree" },
    ]
  },
];

// ─── DAILY EXERCISES ─────────────────────────────────────────────────────────
const EXERCISES = [
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
];

// ─── MINI QUIZ DATA ───────────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  { q: "What does vector<int> v(n, 0) do?", options: ["Creates vector of size 0", "Creates vector of size n, all zeros", "Creates n separate vectors", "Creates vector with value n"], ans: 1 },
  { q: "unordered_map<string, int> stores...", options: ["int keys and string values", "string keys and int values", "Only strings", "Only integers"], ans: 1 },
  { q: "What does mp.find(k) == mp.end() mean?", options: ["k is the last key", "k IS in the map", "k is NOT in the map", "The map is empty"], ans: 2 },
  { q: "priority_queue<int, vector<int>, greater<int>> is...", options: ["Max-heap", "Min-heap", "Sorted vector", "A set"], ans: 1 },
  { q: "What does auto& [k,v] : mp do?", options: ["Creates new pair", "Unpacks each map entry into k and v", "Copies the map", "Sorts the map"], ans: 1 },
  { q: "lower_bound(v.begin(), v.end(), x) returns...", options: ["Index of x", "Iterator to first element > x", "Iterator to first element >= x", "Count of x"], ans: 2 },
  { q: "What does (n & (n-1)) == 0 check?", options: ["n is odd", "n is even", "n is prime", "n is power of 2"], ans: 3 },
  { q: "v.back() returns...", options: ["First element", "Last element", "Element before last", "Size of vector"], ans: 1 },
  { q: "Why does sort() need begin() and end()?", options: ["For size", "Iterators define the range to sort", "To avoid copying", "They're optional"], ans: 1 },
  { q: "stoi(\"42\") returns...", options: ["String \"42\"", "Char '4'", "Integer 42", "Float 42.0"], ans: 2 },
  { q: "What is deque useful for vs queue?", options: ["Faster BFS", "Push and pop from BOTH ends", "Sorted order", "Hash lookup"], ans: 1 },
  { q: "get<0>(t) on a tuple t does...", options: ["Gets size", "Gets first element", "Gets last element", "Deletes first"], ans: 1 },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
const bg = "#05050A", card = "#0D0D14", border = "#18181F";

function TypeChecker({ task, idx }) {
  const [val, setVal] = useState("");
  const [checked, setChecked] = useState(false);
  const correct = val.trim().replace(/\s+/g,' ') === task.answer.trim().replace(/\s+/g,' ');

  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", marginBottom: "6px" }}>
        {idx+1}. {task.label}
      </div>
      <div style={{ fontSize: "13px", color: "#AAA", marginBottom: "8px", lineHeight: 1.6 }}>
        {task.prompt}
      </div>
      <textarea
        value={val}
        onChange={e => { setVal(e.target.value); setChecked(false); }}
        placeholder="Type your answer here..."
        rows={val.split('\n').length + 1}
        style={{
          width: "100%", padding: "10px 14px",
          background: checked ? (correct ? "#00FF8808" : "#FF4D4D08") : "#080810",
          border: `1px solid ${checked ? (correct ? "#00FF8830" : "#FF4D4D30") : border}`,
          borderRadius: "6px", color: "#C0C0C0", fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace", resize: "vertical",
          outline: "none", boxSizing: "border-box", lineHeight: 1.7,
        }}
      />
      <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
        <button onClick={() => setChecked(true)} style={{
          padding: "6px 14px", background: "#00FF88", color: "#05050A",
          border: "none", borderRadius: "5px", fontSize: "11px", fontWeight: 800,
          cursor: "pointer", fontFamily: "inherit", letterSpacing: "1px"
        }}>CHECK</button>
        <button onClick={() => { setVal(""); setChecked(false); }} style={{
          padding: "6px 10px", background: card, color: "#444",
          border: `1px solid ${border}`, borderRadius: "5px", fontSize: "11px",
          cursor: "pointer", fontFamily: "inherit"
        }}>CLEAR</button>
        {checked && !correct && (
          <button onClick={() => setVal(task.answer)} style={{
            padding: "6px 12px", background: "#FF6B3520", color: "#FF6B35",
            border: "1px solid #FF6B3530", borderRadius: "5px", fontSize: "11px",
            cursor: "pointer", fontFamily: "inherit"
          }}>SHOW ANSWER</button>
        )}
        {checked && (
          <span style={{ fontSize: "12px", color: correct ? "#00FF88" : "#FF6B6B", display: "flex", alignItems: "center", fontWeight: 700 }}>
            {correct ? "✓ Correct!" : "✗ Not quite"}
          </span>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("why");
  const [openWhy, setOpenWhy] = useState(0);
  const [openCat, setOpenCat] = useState(0);
  const [openEx, setOpenEx] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSel, setQuizSel] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  const TABS = ["why","syntax","exercises","quiz"];
  const TAB_LABELS = { why: "WHY", syntax: "SYNTAX", exercises: "DAILY", quiz: "QUIZ" };

  function handleQuizSubmit() {
    if (quizSel === null) return;
    setQuizSubmitted(true);
    if (quizSel === QUIZ_QUESTIONS[quizIdx].ans) setQuizScore(s => s+1);
  }

  function handleQuizNext() {
    if (quizIdx + 1 >= QUIZ_QUESTIONS.length) { setQuizDone(true); return; }
    setQuizIdx(i => i+1);
    setQuizSel(null);
    setQuizSubmitted(false);
  }

  function restartQuiz() {
    setQuizIdx(0); setQuizSel(null); setQuizSubmitted(false);
    setQuizScore(0); setQuizDone(false);
  }

  const filteredSyntax = SYNTAX_CARDS.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      !searchQ ||
      item.syntax.toLowerCase().includes(searchQ.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQ.toLowerCase()) ||
      item.use.toLowerCase().includes(searchQ.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'JetBrains Mono', monospace", color: "#DDD" }}>
      {/* Header */}
      <div style={{ padding: "32px 24px 20px", borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#222", marginBottom: "8px" }}>C++ SYNTAX LAB</div>
          <h1 style={{ fontFamily: "system-ui", fontSize: "clamp(26px,5vw,42px)", fontWeight: 900, margin: "0", letterSpacing: "-2px", lineHeight: 1 }}>
            UNDERSTAND<br /><span style={{ color: "#00FF88" }}>THE SYNTAX.</span>
          </h1>
          <p style={{ color: "#333", fontSize: "11px", marginTop: "8px" }}>
            WHY it's written that way · WHAT every piece means · Daily exercises to make it muscle memory
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: "16px 24px 0", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "4px", background: card, padding: "4px", borderRadius: "8px", border: `1px solid ${border}`, width: "fit-content" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "7px 16px", background: tab===t ? "#00FF88" : "transparent",
              color: tab===t ? "#05050A" : "#444", border: "none", borderRadius: "6px",
              fontSize: "11px", fontWeight: tab===t ? 800 : 400, cursor: "pointer",
              letterSpacing: "1px", fontFamily: "inherit"
            }}>{TAB_LABELS[t]}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "20px 24px 48px" }}>

        {/* ── WHY TAB ── */}
        {tab === "why" && (
          <div>
            <div style={{ fontSize: "11px", color: "#333", marginBottom: "20px", lineHeight: 1.7 }}>
              Before memorizing syntax, understand WHY it's written that way. This makes it impossible to forget.
            </div>
            {WHY_DATA.map((item, i) => (
              <div key={i} style={{ marginBottom: "8px", background: card, border: `1px solid ${openWhy===i?"#00FF8830":border}`, borderRadius: "10px", overflow: "hidden" }}>
                <div onClick={() => setOpenWhy(openWhy===i?-1:i)} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", cursor: "pointer" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: "#00FF8815", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#00FF88", fontWeight: 900, flexShrink: 0 }}>?</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#E0E0E0", fontFamily: "system-ui" }}>{item.title}</div>
                    <div style={{ fontSize: "10px", color: "#444", marginTop: "2px" }}>{item.short}</div>
                  </div>
                  <span style={{ color: "#333", fontSize: "14px" }}>{openWhy===i?"▲":"▼"}</span>
                </div>
                {openWhy===i && (
                  <div style={{ padding: "0 20px 20px" }}>
                    <div style={{ background: "#060610", border: `1px solid #00FF8815`, borderRadius: "8px", padding: "16px", marginBottom: "14px" }}>
                      <pre style={{ fontSize: "12px", color: "#8A8A8A", lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
                        {item.explanation}
                      </pre>
                    </div>
                    <div style={{ fontSize: "10px", color: "#333", letterSpacing: "2px", marginBottom: "8px" }}>CODE EXAMPLE</div>
                    <pre style={{
                      background: "#080810", border: "1px solid #00FF8820", borderRadius: "7px",
                      padding: "14px 16px", fontSize: "12px", color: "#A8E6CF", margin: 0,
                      lineHeight: 1.8, fontFamily: "'JetBrains Mono', monospace", overflowX: "auto"
                    }}>{item.example}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── SYNTAX TAB ── */}
        {tab === "syntax" && (
          <div>
            <input
              placeholder="Search syntax... (e.g. push_back, lower_bound, XOR)"
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", background: card, border: `1px solid ${border}`, borderRadius: "7px", color: "#CCC", fontSize: "12px", fontFamily: "inherit", marginBottom: "20px", outline: "none", boxSizing: "border-box" }}
            />
            {filteredSyntax.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: "12px" }}>
                <div onClick={() => setOpenCat(openCat===ci?-1:ci)} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", background: card, border: `1px solid ${openCat===ci?cat.color+"30":border}`, borderRadius: openCat===ci?"10px 10px 0 0":"10px", cursor: "pointer" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color }} />
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#D0D0D0", fontFamily: "system-ui" }}>{cat.category}</span>
                  <span style={{ fontSize: "10px", color: "#333", marginLeft: "auto" }}>{cat.items.length} syntaxes</span>
                  <span style={{ color: "#333" }}>{openCat===ci?"▲":"▼"}</span>
                </div>
                {openCat===ci && (
                  <div style={{ border: `1px solid ${cat.color}30`, borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                    {/* Header row */}
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr", gap: "0", padding: "8px 18px", background: "#09090F", borderBottom: `1px solid ${border}` }}>
                      {["SYNTAX", "MEANING", "USE WHEN"].map(h => (
                        <div key={h} style={{ fontSize: "9px", color: "#333", letterSpacing: "2px" }}>{h}</div>
                      ))}
                    </div>
                    {cat.items.map((item, ii) => (
                      <div key={ii} style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr", gap: "0", padding: "11px 18px", background: ii%2===0?"#0D0D14":"#0A0A10", borderBottom: ii<cat.items.length-1?`1px solid ${border}`:"none", alignItems: "start" }}>
                        <code style={{ fontSize: "11px", color: cat.color, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, wordBreak: "break-all" }}>{item.syntax}</code>
                        <div style={{ fontSize: "11px", color: "#888", lineHeight: 1.6, paddingLeft: "12px" }}>{item.meaning}</div>
                        <div style={{ fontSize: "10px", color: "#444", lineHeight: 1.5, paddingLeft: "8px" }}>{item.use}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── EXERCISES TAB ── */}
        {tab === "exercises" && (
          <div>
            <div style={{ fontSize: "11px", color: "#333", marginBottom: "20px", lineHeight: 1.7 }}>
              Type each answer from memory. Don't look at the reference. This builds muscle memory faster than reading.
            </div>

            {/* Exercise selector */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {EXERCISES.map((ex, i) => (
                <button key={i} onClick={() => setOpenEx(i)} style={{
                  padding: "6px 14px", background: openEx===i?ex.color+"20":card,
                  border: `1px solid ${openEx===i?ex.color+"50":border}`,
                  color: openEx===i?ex.color:"#444", borderRadius: "6px",
                  fontSize: "10px", cursor: "pointer", fontFamily: "inherit", fontWeight: openEx===i?700:400
                }}>{ex.day}</button>
              ))}
            </div>

            {/* Current exercise */}
            {EXERCISES[openEx] && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 900, color: EXERCISES[openEx].color, background: EXERCISES[openEx].color+"15", padding: "4px 10px", borderRadius: "5px" }}>{EXERCISES[openEx].day}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#E0E0E0", fontFamily: "system-ui" }}>{EXERCISES[openEx].title}</span>
                </div>
                {EXERCISES[openEx].tasks.map((task, ti) => (
                  <TypeChecker key={`${openEx}-${ti}`} task={task} idx={ti} />
                ))}

                {/* Daily habit reminder */}
                <div style={{ marginTop: "24px", padding: "16px", background: "#00FF8808", border: "1px solid #00FF8820", borderRadius: "8px", fontSize: "11px", color: "#555", lineHeight: 1.8 }}>
                  💡 <strong style={{ color: "#00FF8870" }}>Daily habit:</strong> Do this exercise every morning before LeetCode. After 7 days of the same exercise, your hands will type it automatically without thinking.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ TAB ── */}
        {tab === "quiz" && (
          <div style={{ maxWidth: "560px" }}>
            {quizDone ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#333", marginBottom: "10px" }}>QUIZ COMPLETE</div>
                <div style={{ fontSize: "64px", fontWeight: 900, fontFamily: "system-ui", color: "#00FF88", lineHeight: 1 }}>
                  {quizScore}<span style={{ fontSize: "28px", color: "#222" }}>/{QUIZ_QUESTIONS.length}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#444", marginTop: "8px", marginBottom: "32px" }}>
                  {quizScore >= 10 ? "🔥 Syntax master!" : quizScore >= 7 ? "👍 Getting there!" : "Keep practicing daily!"}
                </div>
                <button onClick={restartQuiz} style={{ padding: "13px 32px", background: "#00FF88", color: "#05050A", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer", letterSpacing: "2px", fontFamily: "inherit" }}>
                  RETRY QUIZ
                </button>
              </div>
            ) : (
              <div>
                {/* Progress */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ fontSize: "10px", color: "#333" }}>{quizIdx+1} / {QUIZ_QUESTIONS.length}</span>
                  <span style={{ fontSize: "10px", color: "#00FF88" }}>{quizScore} correct</span>
                </div>
                <div style={{ height: "2px", background: "#111", borderRadius: "2px", marginBottom: "24px" }}>
                  <div style={{ height: "100%", background: "#00FF88", width: `${(quizIdx/QUIZ_QUESTIONS.length)*100}%`, borderRadius: "2px", transition: "width 0.3s" }} />
                </div>

                {/* Question */}
                <div style={{ padding: "20px", background: card, border: `1px solid ${border}`, borderRadius: "10px", marginBottom: "16px" }}>
                  <div style={{ fontSize: "10px", color: "#333", letterSpacing: "3px", marginBottom: "10px" }}>C++ SYNTAX QUIZ</div>
                  <div style={{ fontSize: "15px", color: "#E0E0E0", fontWeight: 700, lineHeight: 1.6, fontFamily: "system-ui" }}>
                    {QUIZ_QUESTIONS[quizIdx].q}
                  </div>
                </div>

                {/* Options */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                  {QUIZ_QUESTIONS[quizIdx].options.map((opt, oi) => {
                    const isSelected = quizSel === oi;
                    const isCorrect = quizSubmitted && oi === QUIZ_QUESTIONS[quizIdx].ans;
                    const isWrong = quizSubmitted && isSelected && oi !== QUIZ_QUESTIONS[quizIdx].ans;
                    return (
                      <button key={oi} onClick={() => !quizSubmitted && setQuizSel(oi)} style={{
                        padding: "12px 16px", textAlign: "left",
                        background: isCorrect?"#00FF8812":isWrong?"#FF4D4D12":isSelected?"#FFFFFF06":card,
                        border: `1px solid ${isCorrect?"#00FF8840":isWrong?"#FF4D4D40":isSelected?"#2A2A3A":border}`,
                        borderRadius: "7px", color: isCorrect?"#00FF88":isWrong?"#FF6B6B":isSelected?"#DDD":"#666",
                        fontSize: "12px", fontWeight: isSelected||isCorrect?700:400,
                        cursor: quizSubmitted?"default":"pointer", fontFamily: "inherit", transition: "all 0.12s"
                      }}>
                        {isCorrect?"✓ ":isWrong?"✗ ":""}{opt}
                      </button>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <button onClick={handleQuizSubmit} disabled={quizSel===null} style={{
                    width: "100%", padding: "12px", background: quizSel!==null?"#00FF88":"#111",
                    color: quizSel!==null?"#05050A":"#333", border: "none", borderRadius: "7px",
                    fontSize: "12px", fontWeight: 800, cursor: quizSel!==null?"pointer":"default",
                    letterSpacing: "2px", fontFamily: "inherit"
                  }}>LOCK IN →</button>
                ) : (
                  <button onClick={handleQuizNext} style={{
                    width: "100%", padding: "12px", background: "#00FF88", color: "#05050A",
                    border: "none", borderRadius: "7px", fontSize: "12px", fontWeight: 800,
                    cursor: "pointer", letterSpacing: "2px", fontFamily: "inherit"
                  }}>{quizIdx+1>=QUIZ_QUESTIONS.length?"SEE RESULTS →":"NEXT →"}</button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #05050A; }
        ::-webkit-scrollbar-thumb { background: #181818; border-radius: 2px; }
        textarea::placeholder { color: #2A2A2A; }
        input::placeholder { color: #2A2A2A; }
      `}</style>
    </div>
  );
}
