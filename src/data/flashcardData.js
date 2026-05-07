export const FLASHCARDS = [
  // --- BASICS & SYNTAX ---
  {
    id: 1,
    category: "C++ Syntax",
    front: "How to read an entire line including spaces in C++?",
    back: "getline(cin, str);",
    hint: "Use the getline function from <string>."
  },
  {
    id: 2,
    category: "C++ Syntax",
    front: "How to initialize a 2D vector of size N x M with all -1?",
    back: "vector<vector<int>> v(N, vector<int>(M, -1));",
    hint: "Think about vector nesting."
  },
  {
    id: 3,
    category: "C++ Syntax",
    front: "What does 'ios_base::sync_with_stdio(0); cin.tie(0);' do?",
    back: "Disables sync with C streams and unties cin from cout for faster I/O.",
    hint: "Common CP optimization."
  },
  {
    id: 4,
    category: "C++ Syntax",
    front: "How to get the number of set bits in an integer (C++ built-in)?",
    back: "__builtin_popcount(x); // for long long use __builtin_popcountll(x)",
    hint: "GCC built-in function."
  },

  // --- STL CONTAINERS ---
  {
    id: 10,
    category: "STL Containers",
    front: "What is the underlying data structure of std::map?",
    back: "Self-balancing Binary Search Tree (usually Red-Black Tree).",
    hint: "Ensures O(log N) operations."
  },
  {
    id: 11,
    category: "STL Containers",
    front: "Difference between std::map and std::unordered_map?",
    back: "map is ordered (BST, O(log N)), unordered_map is unordered (Hash Table, O(1) avg).",
    hint: "Complexity vs. Order."
  },
  {
    id: 12,
    category: "STL Containers",
    front: "How to remove an element by VALUE from std::vector?",
    back: "v.erase(remove(v.begin(), v.end(), value), v.end());",
    hint: "Erase-remove idiom."
  },
  {
    id: 13,
    category: "STL Containers",
    front: "Which container allows O(1) insertion at both ends?",
    back: "std::deque (Double Ended Queue).",
    hint: "Vector only allows O(1) at the back."
  },
  {
    id: 14,
    category: "STL Containers",
    front: "How to get the smallest element in a std::set?",
    back: "*s.begin();",
    hint: "Set is always sorted."
  },
  {
    id: 15,
    category: "STL Containers",
    front: "What happens if you access a non-existent key in std::map using []?",
    back: "It inserts the key with a default-initialized value (e.g., 0 for int).",
    hint: "Use .find() or .count() to check existence without inserting."
  },

  // --- STL ALGORITHMS ---
  {
    id: 20,
    category: "STL Algorithms",
    front: "How to find the first element NOT LESS than X in a sorted vector?",
    back: "lower_bound(v.begin(), v.end(), X);",
    hint: "Returns an iterator."
  },
  {
    id: 21,
    category: "STL Algorithms",
    front: "How to find the first element GREATER than X in a sorted vector?",
    back: "upper_bound(v.begin(), v.end(), X);",
    hint: "Returns an iterator."
  },
  {
    id: 22,
    category: "STL Algorithms",
    front: "How to generate the next lexicographical permutation of a sequence?",
    back: "next_permutation(v.begin(), v.end());",
    hint: "Sequence must be sorted initially for all permutations."
  },
  {
    id: 23,
    category: "STL Algorithms",
    front: "How to sum all elements in a vector?",
    back: "accumulate(v.begin(), v.end(), 0);",
    hint: "Part of <numeric> header."
  },

  // --- ADVANCED DSA & CP ---
  {
    id: 30,
    category: "Graph Theory",
    front: "What is the time complexity of Dijkstra's algorithm?",
    back: "O((V + E) log V) using a priority queue.",
    hint: "Shortest path in weighted graphs."
  },
  {
    id: 31,
    category: "Graph Theory",
    front: "What is Kahn's algorithm used for?",
    back: "Topological Sorting of a Directed Acyclic Graph (DAG) using BFS.",
    hint: "Uses in-degrees of nodes."
  },
  {
    id: 32,
    category: "Bitmasking",
    front: "How to check if the i-th bit of X is set?",
    back: "(X >> i) & 1",
    hint: "Right shift and mask."
  },
  {
    id: 33,
    category: "Bitmasking",
    front: "How to toggle the i-th bit of X?",
    back: "X ^ (1 << i)",
    hint: "XOR operation."
  },
  {
    id: 34,
    category: "Data Structures",
    front: "What is the query time for a Sparse Table?",
    back: "O(1) for idempotent functions (min, max, gcd).",
    hint: "Build time is O(N log N)."
  },
  {
    id: 35,
    category: "Data Structures",
    front: "What is the advantage of a Fenwick Tree (BIT) over a Segment Tree?",
    back: "Simpler to implement and lower memory constant, but less flexible.",
    hint: "Binary Indexed Tree."
  },

  // --- C++20 & MODERN ---
  {
    id: 40,
    category: "Modern C++",
    front: "What is the 'spaceship operator' in C++20?",
    back: "<=> (Three-way comparison operator).",
    hint: "Generates all comparison operators automatically."
  },
  {
    id: 41,
    category: "Modern C++",
    front: "What are C++20 Concepts?",
    back: "Compile-time constraints on template arguments.",
    hint: "Better than SFINAE for template validation."
  }
];

