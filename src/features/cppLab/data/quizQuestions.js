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
];

