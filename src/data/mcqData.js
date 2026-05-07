export const MCQ_DATA = [
  {
    id: 1,
    question: "What is the time complexity of pushing an element to the back of a `std::vector` in C++?",
    options: ["O(1) amortized", "O(log n)", "O(n)", "O(1) worst-case"],
    answer: 0,
    explanation: "std::vector::push_back is O(1) amortized. Occasionally it needs to reallocate and copy elements, which is O(n), but this happens rarely enough that the average time is O(1)."
  },
  {
    id: 2,
    question: "Which C++ STL container should you use for constant-time insertion and deletion at both ends?",
    options: ["std::vector", "std::list", "std::deque", "std::set"],
    answer: 2,
    explanation: "std::deque (double-ended queue) supports O(1) insertion/deletion at both front and back."
  },
  {
    id: 3,
    question: "In C++, what does `ios_base::sync_with_stdio(false);` do?",
    options: ["Clears the buffer", "Disables synchronization with C standard streams", "Enables faster memory allocation", "None of the above"],
    answer: 1,
    explanation: "It disables the synchronization between C++ standard streams and their corresponding C standard streams, which can significantly speed up I/O operations."
  },
  {
    id: 4,
    question: "What is the default sorting order of `std::priority_queue`?",
    options: ["Ascending", "Descending", "Random", "None"],
    answer: 1,
    explanation: "By default, std::priority_queue is a max-heap, meaning the largest element is at the top (descending order when popped)."
  },
  {
    id: 5,
    question: "Which of the following is NOT a stable sorting algorithm in C++ STL?",
    options: ["std::sort", "std::stable_sort", "std::list::sort", "None of the above"],
    answer: 0,
    explanation: "std::sort is typically implemented using Introsort (a hybrid of QuickSort, HeapSort, and InsertionSort), which is not stable. std::stable_sort is provided for cases where stability is required."
  },
  {
    id: 6,
    question: "What is the time complexity of building a heap from N elements using `std::make_heap`?",
    options: ["O(N log N)", "O(N)", "O(log N)", "O(N^2)"],
    answer: 1,
    explanation: "Building a heap (heapify) is a linear time operation, O(N)."
  },
  {
    id: 7,
    question: "In a std::priority_queue, which element is at the top by default?",
    options: ["Smallest", "Largest", "First inserted", "Last inserted"],
    answer: 1,
    explanation: "By default, std::priority_queue is a max-heap, so the largest element is at the top."
  },
  {
    id: 8,
    question: "What is the complexity of accessing an element by index in a `std::list`?",
    options: ["O(1)", "O(log N)", "O(N)", "O(sqrt(N))"],
    answer: 2,
    explanation: "std::list is a doubly linked list, so accessing an element by index requires traversing the list, which is O(N)."
  },
  {
    id: 9,
    question: "Which header is required to use `std::accumulate` and `std::iota`?",
    options: ["<algorithm>", "<numeric>", "<functional>", "<vector>"],
    answer: 1,
    explanation: "<numeric> contains numerical algorithms like accumulate, iota, inner_product, etc."
  },
  {
    id: 10,
    question: "What does the `mutable` keyword do when applied to a class member?",
    options: ["Allows it to be changed in a const member function", "Makes it thread-safe", "Prevents it from being inherited", "Forces it to be stored in registers"],
    answer: 0,
    explanation: "The mutable keyword allows a member to be modified even if the containing object is const or the function is const."
  }
];
