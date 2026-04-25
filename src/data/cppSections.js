// ─── C++ SYNTAX DATA ──────────────────────────────────────────────────────────
export const CPP_SECTIONS = [
  {
    tier: "T1",
    label: "MUST KNOW",
    sublabel: "Used in literally every single problem",
    color: "#FF2D55",
    items: [
      {
        title: "#include & namespace",
        note: "One line replaces every individual header. Always use this in CP.",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // your code here
    return 0;
}`
      },
      {
        title: "Fast I/O",
        note: "Without this, cin/cout is slow and you'll get TLE on large inputs.",
        code: `ios_base::sync_with_stdio(false);
cin.tie(NULL);
// Put these 2 lines at the top of main() always`
      },
      {
        title: "Vector — declare & use",
        note: "Vector is your go-to array. Dynamic size, no overflow.",
        code: `vector<int> v;                   // empty
vector<int> v(n, 0);             // size n, all zeros
vector<int> v = {1, 2, 3};      // initialized

v.push_back(5);                  // add to end
v.pop_back();                    // remove from end
v.size();                        // number of elements
v[i];                            // access index i
v.front();  v.back();            // first / last

// 2D vector
vector<vector<int>> grid(n, vector<int>(m, 0));`
      },
      {
        title: "For loops",
        note: "Range-based loop is cleaner. Use indexed loop when you need the index.",
        code: `// Indexed
for (int i = 0; i < n; i++) { }

// Range-based (read)
for (int x : v) { cout << x; }

// Range-based (modify)
for (int& x : v) { x *= 2; }

// Reverse
for (int i = n-1; i >= 0; i--) { }`
      },
      {
        title: "Common constants",
        note: "Use 1e18 or LLONG_MAX for long long infinity. Never INT_MAX + anything — it overflows.",
        code: `INT_MAX      // 2,147,483,647  (~2×10^9)
INT_MIN      // -2,147,483,648
LLONG_MAX    // ~9.2×10^18  (long long max)
1e9 + 7      // common MOD value in CP

// Use long long when values > 10^9
long long x = 1e18;
typedef long long ll;   // shorthand`
      },
      {
        title: "auto keyword",
        note: "Saves typing, especially with iterators and pairs. Use freely.",
        code: `auto x = 5;               // int
auto it = v.begin();      // iterator
auto [a, b] = make_pair(1, 2);  // structured binding

for (auto& [key, val] : mp) {   // iterate map
    cout << key << " " << val;
}`
      },
      {
        title: "min / max / abs / swap",
        note: "Built-in. Use min/max with same types — cast if needed.",
        code: `min(a, b);          // smaller of two
max(a, b);          // larger of two
abs(x);             // absolute value (int)
swap(a, b);         // swap two values
min({a, b, c});     // min of multiple values
__gcd(a, b);        // GCD of two numbers
__lcm(a, b);        // LCM (C++17)`
      },
      {
        title: "Sorting",
        note: "Default sort is ascending. Custom comparator for descending or complex objects.",
        code: `sort(v.begin(), v.end());                     // ascending
sort(v.begin(), v.end(), greater<int>());     // descending

// Custom comparator
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;  // descending
});

// Sort array of pairs by second element
sort(v.begin(), v.end(), [](auto& a, auto& b) {
    return a.second < b.second;
});`
      },
    ]
  },
  {
    tier: "T2",
    label: "VERY FREQUENT",
    sublabel: "Used in almost every pattern — HashMap, Heap, BFS, DFS, DP",
    color: "#FF6B35",
    items: [
      {
        title: "unordered_map (HashMap)",
        note: "O(1) average for get/set. Use when order doesn't matter (most cases).",
        code: `unordered_map<int, int> mp;

mp[key] = value;           // insert / update
mp[key]++;                 // increment count
mp.count(key);             // 1 if exists, 0 if not
mp.find(key) != mp.end();  // check existence
mp.erase(key);             // delete

// Iterate
for (auto& [k, v] : mp) cout << k << " " << v;

// Frequency map pattern
for (int x : arr) freq[x]++;`
      },
      {
        title: "unordered_set (HashSet)",
        note: "When you only need to check existence, not store values.",
        code: `unordered_set<int> st;

st.insert(x);
st.count(x);               // 1 if exists
st.erase(x);
st.find(x) != st.end();    // check existence

// Ordered set (sorted, O(log n))
set<int> s;
s.insert(x);
s.begin();  s.rbegin();    // min / max
*s.begin(); *s.rbegin();   // get min / max value`
      },
      {
        title: "map (ordered)",
        note: "Use when you need keys in sorted order. O(log n) — slower than unordered_map.",
        code: `map<int, int> mp;
mp[key] = val;
mp.lower_bound(k);   // first key >= k
mp.upper_bound(k);   // first key > k

// Count elements in range [l, r]
auto lo = mp.lower_bound(l);
auto hi = mp.upper_bound(r);`
      },
      {
        title: "Priority Queue (Heap)",
        note: "Max-heap by default. For min-heap, negate values or use the comparator.",
        code: `// Max-heap (default)
priority_queue<int> maxpq;
maxpq.push(x);
maxpq.top();      // peek max
maxpq.pop();      // remove max

// Min-heap
priority_queue<int, vector<int>, greater<int>> minpq;

// Min-heap of pairs (sorted by first element)
priority_queue<pair<int,int>,
  vector<pair<int,int>>,
  greater<pair<int,int>>> pq;
pq.push({dist, node});`
      },
      {
        title: "Stack",
        note: "LIFO. Use for matching brackets, monotonic stack, undo operations.",
        code: `stack<int> st;
st.push(x);
st.top();        // peek top (don't remove)
st.pop();        // remove top
st.empty();
st.size()`
      },
      {
        title: "Queue & Deque",
        note: "Queue for BFS. Deque for sliding window maximum (use deque as monotonic queue).",
        code: `// Queue — BFS
queue<int> q;
q.push(x);
q.front();       // peek front
q.pop();         // remove front
q.empty();

// Deque — double-ended
deque<int> dq;
dq.push_back(x);
dq.push_front(x);
dq.pop_back();
dq.pop_front();
dq.front(); dq.back();`
      },
      {
        title: "pair & tuple",
        note: "Use pair to store (value, index), (dist, node), (x, y) etc.",
        code: `pair<int, int> p = {1, 2};
p.first;  p.second;

make_pair(a, b);       // alternative

// Sorting pairs sorts by first, then second by default

// Tuple (3+ values)
tuple<int, int, int> t = {1, 2, 3};
get<0>(t); get<1>(t);  // access

// Structured binding (C++17)
auto [x, y] = p;
auto [a, b, c] = t;`
      },
      {
        title: "String operations",
        note: "Know these cold — string problems appear constantly.",
        code: `string s = "hello";
s.size();  s.length();
s[i];                         // char access
s.substr(start, len);         // substring
s.find("lo");                 // index or string::npos
s.find('l');                  // find char
s += " world";                // concatenation
reverse(s.begin(), s.end());

// Char checks
isalpha(c);  isdigit(c);  isalnum(c);
tolower(c);  toupper(c);

// Convert
stoi("42");               // string → int
to_string(42);            // int → string
(int)(c - '0');           // char digit → int
(char)('a' + i);          // int → char`
      },
    ]
  },
  {
    tier: "T3",
    label: "FREQUENT",
    sublabel: "Essential for Binary Search, Graphs, Trees, Sliding Window",
    color: "#FFB300",
    items: [
      {
        title: "Binary Search (manual)",
        note: "Write this from scratch when you need to binary search on the ANSWER.",
        code: `int lo = 0, hi = n - 1;
while (lo <= hi) {
    int mid = lo + (hi - lo) / 2;   // avoids overflow
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
}
// lo = insertion point if not found`
      },
      {
        title: "lower_bound / upper_bound",
        note: "Built-in binary search. Only works on sorted containers.",
        code: `// lower_bound: first element >= target
auto it = lower_bound(v.begin(), v.end(), target);
int idx = it - v.begin();   // get index

// upper_bound: first element > target
auto it = upper_bound(v.begin(), v.end(), target);

// Count occurrences of target
int cnt = upper_bound(...) - lower_bound(...);

// On sets/maps
s.lower_bound(x);   // returns iterator directly`
      },
      {
        title: "BFS template",
        note: "Memorize this. Every BFS problem is a variation of this template.",
        code: `vector<vector<int>> adj(n);  // adjacency list
vector<bool> visited(n, false);
queue<int> q;

q.push(start);
visited[start] = true;

while (!q.empty()) {
    int node = q.front(); q.pop();
    // process node
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            q.push(neighbor);
        }
    }
}`
      },
      {
        title: "DFS template",
        note: "Recursive DFS for tree/graph traversal. Add visited array for graphs.",
        code: `vector<vector<int>> adj(n);
vector<bool> visited(n, false);

void dfs(int node) {
    visited[node] = true;
    // process node
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor);
        }
    }
}

// Grid DFS (4-directional)
int dx[] = {0,0,1,-1};
int dy[] = {1,-1,0,0};
void dfs(int r, int c) {
    if (out of bounds || visited) return;
    visited[r][c] = true;
    for (int d = 0; d < 4; d++)
        dfs(r + dx[d], c + dy[d]);
}`
      },
      {
        title: "1D DP template",
        note: "Bottom-up DP. Define state clearly first, then fill the table.",
        code: `// Coin change example
vector<int> dp(amount + 1, INT_MAX);
dp[0] = 0;

for (int i = 1; i <= amount; i++) {
    for (int coin : coins) {
        if (coin <= i && dp[i - coin] != INT_MAX)
            dp[i] = min(dp[i], dp[i - coin] + 1);
    }
}
return dp[amount] == INT_MAX ? -1 : dp[amount];`
      },
      {
        title: "2D DP template",
        note: "For string/grid DP. dp[i][j] = answer using first i of s1 and j of s2.",
        code: `// LCS example
int m = s1.size(), n = s2.size();
vector<vector<int>> dp(m+1, vector<int>(n+1, 0));

for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        if (s1[i-1] == s2[j-1])
            dp[i][j] = dp[i-1][j-1] + 1;
        else
            dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
    }
}
return dp[m][n];`
      },
      {
        title: "Sliding Window template",
        note: "Variable window. Expand right, shrink left when condition breaks.",
        code: `int left = 0, result = 0;
unordered_map<char, int> freq;

for (int right = 0; right < s.size(); right++) {
    freq[s[right]]++;             // expand window

    while (window is invalid) {   // shrink window
        freq[s[left]]--;
        if (freq[s[left]] == 0) freq.erase(s[left]);
        left++;
    }
    result = max(result, right - left + 1);
}
return result;`
      },
      {
        title: "Backtracking template",
        note: "Choose → Explore → Unchoose. This pattern solves subsets, permutations, combinations.",
        code: `vector<vector<int>> result;

void backtrack(vector<int>& nums, vector<int>& current, int start) {
    result.push_back(current);      // add current state

    for (int i = start; i < nums.size(); i++) {
        current.push_back(nums[i]);          // CHOOSE
        backtrack(nums, current, i + 1);     // EXPLORE
        current.pop_back();                  // UNCHOOSE
    }
}
// call: backtrack(nums, {}, 0);`
      },
    ]
  },
  {
    tier: "T4",
    label: "MODERATE",
    sublabel: "Needed for specific patterns — Trie, DSU, advanced DP",
    color: "#00BFFF",
    items: [
      {
        title: "Union-Find (DSU) template",
        note: "With path compression + union by rank. O(α(n)) ≈ O(1). Memorize this completely.",
        code: `vector<int> parent, rank_;

void init(int n) {
    parent.resize(n); rank_.resize(n, 0);
    iota(parent.begin(), parent.end(), 0); // parent[i] = i
}

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);  // path compression
    return parent[x];
}

bool unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return false;        // already connected
    if (rank_[px] < rank_[py]) swap(px, py);
    parent[py] = px;
    if (rank_[px] == rank_[py]) rank_[px]++;
    return true;
}`
      },
      {
        title: "Trie template",
        note: "Insert and search words. Each node has 26 children (one per letter).",
        code: `struct TrieNode {
    TrieNode* children[26] = {};
    bool isEnd = false;
};

TrieNode* root = new TrieNode();

void insert(string word) {
    TrieNode* node = root;
    for (char c : word) {
        int i = c - 'a';
        if (!node->children[i])
            node->children[i] = new TrieNode();
        node = node->children[i];
    }
    node->isEnd = true;
}

bool search(string word) {
    TrieNode* node = root;
    for (char c : word) {
        int i = c - 'a';
        if (!node->children[i]) return false;
        node = node->children[i];
    }
    return node->isEnd;
}`
      },
      {
        title: "Bit manipulation",
        note: "These appear in Meta and Google interviews constantly. Know them cold.",
        code: `// Check if bit i is set
(n >> i) & 1

// Set bit i
n | (1 << i)

// Clear bit i
n & ~(1 << i)

// Toggle bit i
n ^ (1 << i)

// Remove lowest set bit
n & (n - 1)

// Check power of 2
(n & (n-1)) == 0

// Count set bits
__builtin_popcount(n)      // int
__builtin_popcountll(n)    // long long

// XOR trick: a ^ a = 0, a ^ 0 = a
// All pairs cancel → only single element remains`
      },
      {
        title: "Linked List node",
        note: "LeetCode provides this, but know the struct and basic pointer manipulation.",
        code: `struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// Reverse a linked list
ListNode* prev = nullptr, *curr = head;
while (curr) {
    ListNode* next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
}
return prev;  // new head`
      },
      {
        title: "Tree node",
        note: "LeetCode provides this. Know preorder/inorder/postorder by heart.",
        code: `struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// Inorder (Left → Root → Right)
void inorder(TreeNode* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->val;
    inorder(root->right);
}

// Level order BFS
queue<TreeNode*> q;
q.push(root);
while (!q.empty()) {
    int sz = q.size();       // size of current level
    for (int i = 0; i < sz; i++) {
        auto node = q.front(); q.pop();
        if (node->left)  q.push(node->left);
        if (node->right) q.push(node->right);
    }
}`
      },
      {
        title: "multiset",
        note: "Like set but allows duplicates. Useful for sliding window with ordered data.",
        code: `multiset<int> ms;
ms.insert(x);
ms.count(x);              // how many times x appears
ms.erase(ms.find(x));     // remove ONE occurrence (not all!)
ms.erase(x);              // removes ALL occurrences — be careful

*ms.begin();              // minimum
*ms.rbegin();             // maximum`
      },
      {
        title: "STL algorithms",
        note: "These save time writing loops. Know the most common ones.",
        code: `// Fill array with a value
fill(v.begin(), v.end(), 0);

// Accumulate (sum)
int sum = accumulate(v.begin(), v.end(), 0);

// Count occurrences
int cnt = count(v.begin(), v.end(), target);

// Find element
auto it = find(v.begin(), v.end(), target);

// Reverse
reverse(v.begin(), v.end());

// Unique (remove consecutive duplicates, must sort first)
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());

// Max/min element
*max_element(v.begin(), v.end());
*min_element(v.begin(), v.end());

// Next permutation
do { /* process */ } while (next_permutation(v.begin(), v.end()));`
      },
      {
        title: "Modular arithmetic",
        note: "Use when problem says 'return answer mod 10^9+7'. Prevents integer overflow.",
        code: `const int MOD = 1e9 + 7;

// Addition
(a + b) % MOD

// Multiplication — always mod BEFORE overflow
(1LL * a * b) % MOD

// Subtraction (add MOD to prevent negative)
(a - b + MOD) % MOD

// Fast power: a^b mod MOD in O(log b)
long long power(long long base, long long exp, long long mod) {
    long long result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return result;
}`
      },
    ]
  },
  {
    tier: "T5",
    label: "ADVANCED CP",
    sublabel: "Codeforces, ICPC, hard LeetCode — needed after 3+ months",
    color: "#C084FC",
    items: [
      {
        title: "Segment Tree template",
        note: "Range queries + point updates in O(log n). Fenwick Tree is simpler for just prefix sums.",
        code: `// Range sum segment tree
vector<int> tree;
int n;

void build(vector<int>& arr, int node, int start, int end) {
    if (start == end) { tree[node] = arr[start]; return; }
    int mid = (start + end) / 2;
    build(arr, 2*node, start, mid);
    build(arr, 2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
}

int query(int node, int start, int end, int l, int r) {
    if (r < start || end < l) return 0;
    if (l <= start && end <= r) return tree[node];
    int mid = (start + end) / 2;
    return query(2*node, start, mid, l, r)
         + query(2*node+1, mid+1, end, l, r);
}

void update(int node, int start, int end, int idx, int val) {
    if (start == end) { tree[node] = val; return; }
    int mid = (start + end) / 2;
    if (idx <= mid) update(2*node, start, mid, idx, val);
    else update(2*node+1, mid+1, end, idx, val);
    tree[node] = tree[2*node] + tree[2*node+1];
}`
      },
      {
        title: "Fenwick Tree (BIT)",
        note: "Simpler than segment tree. Only for prefix sum queries + point updates.",
        code: `vector<int> bit;
int n;

void update(int i, int delta) {
    for (++i; i <= n; i += i & (-i))
        bit[i] += delta;
}

int query(int i) {  // prefix sum [0..i]
    int sum = 0;
    for (++i; i > 0; i -= i & (-i))
        sum += bit[i];
    return sum;
}

int range_query(int l, int r) {
    return query(r) - (l > 0 ? query(l-1) : 0);
}`
      },
      {
        title: "Dijkstra's algorithm",
        note: "Shortest path in weighted graph. O((V + E) log V). Use min-heap.",
        code: `vector<vector<pair<int,int>>> adj(n);  // {neighbor, weight}
vector<int> dist(n, INT_MAX);
priority_queue<pair<int,int>,
  vector<pair<int,int>>, greater<>> pq;

dist[src] = 0;
pq.push({0, src});  // {distance, node}

while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d > dist[u]) continue;  // stale entry

    for (auto [v, w] : adj[u]) {
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            pq.push({dist[v], v});
        }
    }
}`
      },
      {
        title: "Topological Sort (Kahn's BFS)",
        note: "For DAGs with dependencies. If result size < n, there's a cycle.",
        code: `vector<vector<int>> adj(n);
vector<int> indegree(n, 0);

// Build graph and compute in-degrees
for (auto [u, v] : edges) {
    adj[u].push_back(v);
    indegree[v]++;
}

queue<int> q;
for (int i = 0; i < n; i++)
    if (indegree[i] == 0) q.push(i);

vector<int> order;
while (!q.empty()) {
    int u = q.front(); q.pop();
    order.push_back(u);
    for (int v : adj[u]) {
        if (--indegree[v] == 0) q.push(v);
    }
}
// order.size() == n means no cycle`
      },
      {
        title: "CP boilerplate / macros",
        note: "Common competitive programming shortcuts used in contest code.",
        code: `#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define pii pair<int,int>
#define vi vector<int>
#define vll vector<long long>
#define pb push_back
#define mp make_pair
#define all(x) x.begin(), x.end()
#define sz(x) (int)x.size()
#define f0(i,n) for(int i=0;i<n;i++)
#define f1(i,n) for(int i=1;i<=n;i++)

const ll MOD = 1e9 + 7;
const ll INF = 1e18;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t; cin >> t;
    while (t--) {
        // solve
    }
}`
      },
    ]
  },
];
