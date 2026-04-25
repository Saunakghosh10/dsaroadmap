export const roadmap = [
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
