export const SYNTAX_CARDS = [
  {
    category: "Lists (Arrays)",
    color: "#FFD166",
    items: [
      { syntax: "a = []", meaning: "Empty list", use: "Initialize array" },
      { syntax: "a = [0] * n", meaning: "Size n filled with 0", use: "DP/visited arrays" },
      { syntax: "a.append(x)", meaning: "Push back", use: "Build results" },
      { syntax: "a.pop()", meaning: "Pop last", use: "Stack / backtracking" },
      { syntax: "a[i]", meaning: "Index access", use: "O(1) access" },
      { syntax: "for i, x in enumerate(a):", meaning: "Index + value loop", use: "Two-pointer / scans" },
      { syntax: "a.sort()", meaning: "In-place sort", use: "Two pointers, greedy" },
      { syntax: "sorted(a, key=...)", meaning: "Sorted copy with key", use: "Custom sorting" },
    ],
  },
  {
    category: "dict & set (Hashing)",
    color: "#06D6A0",
    items: [
      { syntax: "mp = {}", meaning: "Empty dict", use: "Frequency / last seen" },
      { syntax: "mp.get(k, 0)", meaning: "Get with default", use: "Counting" },
      { syntax: "mp[k] = mp.get(k,0) + 1", meaning: "Increment count", use: "Frequency map" },
      { syntax: "from collections import defaultdict", meaning: "Default dict", use: "Cleaner counting" },
      { syntax: "freq = defaultdict(int)", meaning: "Int default 0", use: "Counting" },
      { syntax: "st = set()", meaning: "Empty set", use: "Visited / dedup" },
      { syntax: "if x in st:", meaning: "Membership test", use: "O(1) average lookup" },
      { syntax: "st.add(x) / st.remove(x)", meaning: "Insert / delete", use: "Sliding window" },
    ],
  },
  {
    category: "Queue / BFS",
    color: "#118AB2",
    items: [
      { syntax: "from collections import deque", meaning: "Deque import", use: "Queue for BFS" },
      { syntax: "q = deque([start])", meaning: "Init queue with start", use: "BFS setup" },
      { syntax: "node = q.popleft()", meaning: "Pop front (O(1))", use: "BFS traversal" },
      { syntax: "q.append(nei)", meaning: "Push back", use: "BFS expansion" },
    ],
  },
  {
    category: "Heap / Priority Queue",
    color: "#EF476F",
    items: [
      { syntax: "import heapq", meaning: "Heap library (min-heap)", use: "K smallest, Dijkstra" },
      { syntax: "heapq.heappush(h, x)", meaning: "Push", use: "Insert to heap" },
      { syntax: "x = heapq.heappop(h)", meaning: "Pop smallest", use: "Extract min" },
      { syntax: "heapq.heapify(a)", meaning: "List -> heap in O(n)", use: "Build heap fast" },
      { syntax: "heapq.heappush(h, (-x))", meaning: "Max-heap trick", use: "K largest" },
      { syntax: "heapq.heappush(h, (dist, node))", meaning: "Heap of tuples", use: "Dijkstra" },
    ],
  },
  {
    category: "Binary Search",
    color: "#C084FC",
    items: [
      { syntax: "import bisect", meaning: "Binary search helpers", use: "Lower/upper bound" },
      { syntax: "i = bisect.bisect_left(a, x)", meaning: "First index with >= x", use: "Lower bound" },
      { syntax: "j = bisect.bisect_right(a, x)", meaning: "First index with > x", use: "Upper bound" },
    ],
  },
  {
    category: "Handy DSA tools",
    color: "#FFD166",
    items: [
      { syntax: "from collections import Counter", meaning: "Frequency counter", use: "Counts in one line" },
      { syntax: "from collections import defaultdict", meaning: "Auto-init map", use: "Graph adjacency" },
      { syntax: "from itertools import accumulate", meaning: "Prefix sums iterator", use: "Prefix sum patterns" },
      { syntax: "from math import inf", meaning: "Infinity constant", use: "Initialize distances" },
    ],
  },
];

