export const WHY_DATA = [
  {
    title: "Why is dict the default for frequency counting?",
    short: "dict is a hash map → O(1) average lookup/update",
    explanation: `For DSA, you often need to count occurrences.

Python dict is a hash table:
- Insert / lookup / update is O(1) on average
- Perfect for: frequency maps, last-seen index, grouping

Tip: use collections.Counter / defaultdict(int) for even cleaner code.`,
    example: `from collections import defaultdict

freq = defaultdict(int)
for x in nums:
    freq[x] += 1

# plain dict also works:
mp = {}
mp[x] = mp.get(x, 0) + 1`,
    accent: "#FFD166",
  },
  {
    title: "Why does slicing sometimes feel slow?",
    short: "Slicing creates a new list/string (copy) most of the time",
    explanation: `In Python, many slices allocate a new object.

This can be expensive in tight loops:
  s[i:j]  -> creates a new substring
  a[i:j]  -> creates a new list

For sliding window, prefer indices (l, r) instead of slicing.`,
    example: `# Bad for performance inside loops:
sub = s[l:r]

# Better: keep indices
while r < n:
    # use s[r] / s[l] without slicing
    r += 1`,
    accent: "#06D6A0",
  },
  {
    title: "Why is heapq a min-heap only?",
    short: "Python ships a min-heap; max-heap is done via negation",
    explanation: `heapq implements a min-heap:
- heappop returns the smallest element

To simulate a max-heap:
- push negative values: (-x)
- or store tuples with a negated key`,
    example: `import heapq

h = []
heapq.heappush(h, 5)
heapq.heappush(h, 2)
heapq.heappop(h)  # 2

# max-heap
h = []
heapq.heappush(h, -5)
heapq.heappush(h, -2)
-heapq.heappop(h)  # 5`,
    accent: "#EF476F",
  },
  {
    title: "Why use deque for BFS, not list?",
    short: "popleft on list is O(n); deque popleft is O(1)",
    explanation: `BFS needs queue operations:
- append (push back)
- popleft (pop front)

list pop(0) shifts elements → O(n)
collections.deque popleft is O(1) → correct tool for BFS.`,
    example: `from collections import deque

q = deque([start])
while q:
    node = q.popleft()
    for nei in adj[node]:
        q.append(nei)`,
    accent: "#118AB2",
  },
  {
    title: "Why tuples are used as keys but lists aren't?",
    short: "dict/set keys must be hashable (immutable)",
    explanation: `Keys in dict/set must be hashable → they can't change.

tuple is immutable → hashable (if its items are hashable)
list is mutable → NOT hashable

Common DSA use: (r, c) grid positions in a visited set.`,
    example: `visited = set()
visited.add((r, c))     # ok

# visited.add([r, c])  # TypeError: unhashable type: 'list'`,
    accent: "#FFD166",
  },
  {
    title: "Why recursion sometimes crashes in Python?",
    short: "Recursion depth limit + call overhead",
    explanation: `Deep DFS recursion can hit Python's recursion limit.

For trees/graphs, you can:
- increase the limit (careful)
- or use an explicit stack (iterative DFS)`,
    example: `import sys
sys.setrecursionlimit(10**6)

# Iterative DFS pattern:
stack = [start]
while stack:
    node = stack.pop()
    for nei in adj[node]:
        stack.append(nei)`,
    accent: "#C084FC",
  },
];

