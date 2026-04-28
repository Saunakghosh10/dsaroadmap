export const WHY_DATA = [
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
vector<pair<int,int>> pts;  // box of pairs`,
    accent: "#00FF88",
  },
  {
    title: "Why unordered_map<int, int>?",
    short: "Two template args — key type and value type",
    explanation: `A map stores KEY → VALUE pairs. So it needs TWO type arguments:
  1. The type of the KEY (what you look up by)
  2. The type of the VALUE (what you get back)

unordered_map<int, int>
    → key is int, value is int
    → e.g. player number → loss count

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
freq["hello"] = 3;  // set value at key "hello"`,
    accent: "#FF6B35",
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
adj[0].push_back(2);  // edge 0 → 2`,
    accent: "#00BFFF",
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
pq.push({5, 0}); // {distance, node}`,
    accent: "#FF2D55",
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
// Result: {{1,2},{1,5},{3,1}}`,
    accent: "#FFB300",
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
Even simpler (C++20): lost_map.contains(key)`,
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
}`,
    accent: "#C084FC",
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
    cout << p.first << ": " << p.second << "\\n";
}

// New way (C++17 structured binding) — preferred
for (auto& [word, count] : freq) {
    cout << word << ": " << count << "\\n";
}`,
    accent: "#00FF88",
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
It's a consistent design across all C++ containers.`,
    example: `vector<int> v = {5, 3, 1, 4, 2};

sort(v.begin(), v.end());           // sort all → {1,2,3,4,5}
sort(v.begin(), v.begin()+3);       // sort first 3 only → {1,3,5,4,2}
reverse(v.begin(), v.end());        // reverse all
auto it = find(v.begin(), v.end(), 4); // find value 4`,
    accent: "#00BFFF",
  },
];

