export const QUIZ_QUESTIONS = [
  {
    q: "What does vector<int> v(n, 0) do?",
    options: ["Creates vector of size 0", "Creates vector of size n, all zeros", "Creates n separate vectors", "Creates vector with value n"],
    ans: 1,
  },
  {
    q: "unordered_map<string, int> stores...",
    options: ["int keys and string values", "string keys and int values", "Only strings", "Only integers"],
    ans: 1,
  },
  {
    q: "What does mp.find(k) == mp.end() mean?",
    options: ["k is the last key", "k IS in the map", "k is NOT in the map", "The map is empty"],
    ans: 2,
  },
  {
    q: "priority_queue<int, vector<int>, greater<int>> is...",
    options: ["Max-heap", "Min-heap", "Sorted vector", "A set"],
    ans: 1,
  },
  {
    q: "What does auto& [k,v] : mp do?",
    options: ["Creates new pair", "Unpacks each map entry into k and v", "Copies the map", "Sorts the map"],
    ans: 1,
  },
  {
    q: "lower_bound(v.begin(), v.end(), x) returns...",
    options: ["Index of x", "Iterator to first element > x", "Iterator to first element >= x", "Count of x"],
    ans: 2,
  },
  {
    q: "What does (n & (n-1)) == 0 check?",
    options: ["n is odd", "n is even", "n is prime", "n is power of 2"],
    ans: 3,
  },
  {
    q: "v.back() returns...",
    options: ["First element", "Last element", "Element before last", "Size of vector"],
    ans: 1,
  },
  {
    q: "Why does sort() need begin() and end()?",
    options: ["For size", "Iterators define the range to sort", "To avoid copying", "They're optional"],
    ans: 1,
  },
  {
    q: "stoi(\"42\") returns...",
    options: ["String \"42\"", "Char '4'", "Integer 42", "Float 42.0"],
    ans: 2,
  },
  {
    q: "What is deque useful for vs queue?",
    options: ["Faster BFS", "Push and pop from BOTH ends", "Sorted order", "Hash lookup"],
    ans: 1,
  },
  {
    q: "get<0>(t) on a tuple t does...",
    options: ["Gets size", "Gets first element", "Gets last element", "Deletes first"],
    ans: 1,
  },
  {
    q: "In C++, `unordered_map` average lookup is...",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    ans: 0,
  },
  {
    q: "Which container keeps keys sorted by default?",
    options: ["unordered_map", "map", "unordered_set", "vector"],
    ans: 1,
  },
  {
    q: "Why does `sort` take `begin()` and `end()`?",
    options: ["Iterators define the range", "It needs container size", "It avoids templates", "It only works for vectors"],
    ans: 0,
  },
  {
    q: "In BFS, when should you mark a node visited?",
    options: ["After popping", "Before pushing/enqueuing", "Only at the end", "Never"],
    ans: 1,
  },
  {
    q: "What does `lower_bound` return?",
    options: ["First element > x", "First element >= x", "Last element <= x", "Count of x"],
    ans: 1,
  },
  {
    q: "What does `upper_bound` return?",
    options: ["First element > x", "First element >= x", "Last element < x", "Index of x"],
    ans: 0,
  },
  {
    q: "A `priority_queue<int, vector<int>, greater<int>>` is a...",
    options: ["Max-heap", "Min-heap", "Sorted set", "Queue"],
    ans: 1,
  },
  {
    q: "Which is true about `end()` iterator?",
    options: ["Points to last element", "Points one past last element", "Points to first element", "Only exists for vectors"],
    ans: 1,
  },
  {
    q: "Structured binding `auto& [k,v]` requires at least...",
    options: ["C++11", "C++14", "C++17", "C++20"],
    ans: 2,
  },
  {
    q: "Why prefer `auto&` in `for (auto& x : v)`?",
    options: ["It copies faster", "Avoids copying elements", "Forces sorting", "Makes it const"],
    ans: 1,
  },
  {
    q: "Monotonic stack is commonly used for...",
    options: ["Frequency counting", "Next greater/smaller element", "Hashing strings", "Dijkstra"],
    ans: 1,
  },
  {
    q: "In sliding window max using deque, why pop_back while `a[dq.back()] <= a[r]`?",
    options: ["Keep deque sorted decreasing", "Remove expired indices", "Make it a stack", "Avoid duplicates only"],
    ans: 0,
  },
  {
    q: "DSU / Union-Find is best for...",
    options: ["Shortest path", "Connectivity under unions", "Topological sort", "Sorting"],
    ans: 1,
  },
  {
    q: "Path compression in DSU does what?",
    options: ["Sorts parent array", "Flattens trees during find", "Removes nodes", "Creates adjacency list"],
    ans: 1,
  },
  {
    q: "DP state should be...",
    options: ["As large as possible", "Minimal to represent subproblem", "Always 2D", "Always recursive only"],
    ans: 1,
  },
  {
    q: "Binary search on answer works when predicate is...",
    options: ["Random", "Monotonic", "Always true", "Always false"],
    ans: 1,
  },
  {
    q: "Why is `lo + (hi-lo)/2` safer than `(lo+hi)/2`?",
    options: ["It is faster", "Avoids overflow", "Avoids floating point", "Works only for vectors"],
    ans: 1,
  },
];

