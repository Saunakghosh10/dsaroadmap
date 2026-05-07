export const TECH_DOCS = [
  {
    id: "cpp",
    title: "C++ (Modern C++17/20)",
    description: "High-performance language widely used in Competitive Programming and System Design.",
    keyPoints: [
      "Memory management with Smart Pointers (unique_ptr, shared_ptr)",
      "Standard Template Library (STL) for efficient data structures",
      "RAII (Resource Acquisition Is Initialization) pattern",
      "Template metaprogramming for generic code"
    ],
    resources: [
      { name: "cppreference.com", url: "https://en.cppreference.com/" },
      { name: "LearnCpp.com", url: "https://www.learncpp.com/" }
    ]
  },
  {
    id: "react",
    title: "React.js",
    description: "A JavaScript library for building user interfaces with a component-based architecture.",
    keyPoints: [
      "Virtual DOM for performance optimization",
      "Hooks (useState, useEffect) for state and lifecycle",
      "Declarative UI updates",
      "One-way data flow"
    ],
    resources: [
      { name: "Official React Docs", url: "https://react.dev/" },
      { name: "Beta Docs (Next.js focus)", url: "https://react.dev/learn" }
    ]
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    keyPoints: [
      "Non-blocking I/O model",
      "Single-threaded event loop",
      "NPM ecosystem for package management",
      "Excellent for real-time applications"
    ],
    resources: [
      { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
      { name: "Node Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" }
    ]
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Designing scalable, reliable, and maintainable large-scale systems.",
    keyPoints: [
      "Load Balancing & Horizontal Scaling",
      "Caching Strategies (Redis, Memcached)",
      "Database Sharding & Replication",
      "Microservices vs Monolithic Architecture",
      "CAP Theorem & Consistency Models"
    ],
    resources: [
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { name: "Grokking Modern System Design", url: "https://www.educative.io/" }
    ]
  },
  {
    id: "databases",
    title: "Databases (SQL & NoSQL)",
    description: "Understanding data storage, retrieval, and indexing techniques.",
    keyPoints: [
      "ACID Properties & Transactions",
      "B-Tree vs LSM-Tree Indexing",
      "Normalization vs Denormalization",
      "SQL (PostgreSQL, MySQL) vs NoSQL (MongoDB, Cassandra)",
      "Query Optimization & Execution Plans"
    ],
    resources: [
      { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
      { name: "MongoDB University", url: "https://university.mongodb.com/" }
    ]
  },
  {
    id: "os",
    title: "Operating Systems",
    description: "Core concepts of how software interacts with hardware.",
    keyPoints: [
      "Process vs Thread Management",
      "Memory Management & Virtual Memory",
      "File Systems & I/O Scheduling",
      "Concurrency & Deadlocks",
      "System Calls & Kernel Space"
    ],
    resources: [
      { name: "OS Course (OSTEP)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
      { name: "GeeksforGeeks OS", url: "https://www.geeksforgeeks.org/operating-systems/" }
    ]
  }
];
