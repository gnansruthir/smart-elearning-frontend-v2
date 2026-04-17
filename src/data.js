export const courses = [
  {
    id: 'java-basics',
    title: 'Java Basics',
    languages: ['Java'],
    level: 'Beginner',
    progress: 35,
    recommended: true,
    problems: 24
  },
  {
    id: 'java-oop',
    title: 'Object-Oriented Programming',
    languages: ['Java', 'Python'],
    level: 'Intermediate',
    progress: 0,
    recommended: false,
    problems: 18
  },
  {
    id: 'python-fundamentals',
    title: 'Python Fundamentals',
    languages: ['Python'],
    level: 'Beginner',
    progress: 50,
    recommended: true,
    problems: 28
  },
  {
    id: 'cpp-programming',
    title: 'C++ Programming',
    languages: ['C++'],
    level: 'Intermediate',
    progress: 25,
    recommended: true,
    problems: 35
  },
  {
    id: 'c-programming',
    title: 'C Programming Essentials',
    languages: ['C'],
    level: 'Beginner',
    progress: 15,
    recommended: false,
    problems: 22
  },
  {
    id: 'sql-foundations',
    title: 'SQL Foundations',
    languages: ['SQL'],
    level: 'Beginner',
    progress: 60,
    recommended: true,
    problems: 32
  },
  {
    id: 'python-dsa',
    title: 'Data Structures & Algorithms',
    languages: ['Python', 'Java', 'C++'],
    level: 'Intermediate',
    progress: 45,
    recommended: true,
    problems: 48
  },
  {
    id: 'js-web',
    title: 'JavaScript & Web Dev',
    languages: ['JavaScript', 'HTML/CSS'],
    level: 'Intermediate',
    progress: 20,
    recommended: false,
    problems: 28
  },
  {
    id: 'cpp-advanced',
    title: 'Advanced C++ Concepts',
    languages: ['C++'],
    level: 'Advanced',
    progress: 0,
    recommended: false,
    problems: 52
  }
]

export const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    languages: ['Java', 'Python', 'C++', 'JavaScript'],
    acceptanceRate: 47.3,
    solved: false,
    likes: 28500,
    dislikes: 900,
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.'
  },
  {
    id: 2,
    title: 'Reverse String',
    difficulty: 'Easy',
    category: 'Strings',
    languages: ['Java', 'Python', 'JavaScript', 'C++'],
    acceptanceRate: 78.5,
    solved: true,
    likes: 5200,
    dislikes: 300,
    description: 'Write a function that reverses a string. The input string is given as an array of characters.'
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'Strings',
    languages: ['Java', 'Python', 'C++', 'JavaScript'],
    acceptanceRate: 33.8,
    solved: false,
    likes: 18900,
    dislikes: 800,
    description: 'Given a string s, find the length of the longest substring without repeating characters.'
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    category: 'Arrays',
    languages: ['Java', 'Python', 'C++'],
    acceptanceRate: 28.5,
    solved: false,
    likes: 14200,
    dislikes: 2100,
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.'
  },
  {
    id: 5,
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    category: 'Trees',
    languages: ['Java', 'Python', 'C++', 'JavaScript'],
    acceptanceRate: 60.2,
    solved: false,
    likes: 9800,
    dislikes: 200,
    description: 'Given the root of a binary tree, return the level order traversal of its nodes values (level by level).'
  }
]

export const lessons = {
  'java-basics': {
    id: 'l1',
    title: 'Intro to Java & Setup',
    language: 'Java',
    markdown: `# Welcome to Java\n\nThis lesson covers the basics of Java, how to set up your environment, and run your first program.\n\n## Example\n\n\`\`\`java\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}\n\`\`\``
  },
  'python-dsa': {
    id: 'p1',
    title: 'Python Lists & Arrays',
    language: 'Python',
    markdown: `# Python Lists & Arrays\n\nLearn how to work with Python lists, perform operations, and manipulate array-like data structures.\n\n## Example\n\n\`\`\`python\nnumbers = [1, 2, 3, 4, 5]\nprint("List:", numbers)\nprint("First element:", numbers[0])\nprint("Sum:", sum(numbers))\n\`\`\``
  },
  'cpp-advanced': {
    id: 'c1',
    title: 'C++ Pointers & Memory',
    language: 'C++',
    markdown: `# C++ Pointers & Memory Management\n\nUnderstand pointers, memory allocation, and how to manage dynamic memory in C++.\n\n## Example\n\n\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 10;\n  int* ptr = &x;  // pointer to x\n  cout << "Value: " << *ptr << endl;\n  cout << "Address: " << ptr << endl;\n  return 0;\n}\n\`\`\``
  },
  'sql-foundations': {
    id: 's1',
    title: 'SELECT Queries',
    language: 'SQL',
    markdown: `# SELECT Queries\n\nLearn how to query tables using SELECT, filter with WHERE, and sort with ORDER BY.\n\n## Example\n\n\`\`\`sql\nSELECT * FROM users WHERE age > 18 ORDER BY name ASC;\n\`\`\``
  }
}

export const userProgress = {
  id: 'user123',
  username: 'devlearner',
  email: 'dev@example.com',
  streak: 7,
  totalProblems: 156,
  solvedProblems: 89,
  coursesInProgress: ['java-basics', 'sql-foundations', 'python-fundamentals', 'cpp-programming'],
  languages: ['Java', 'Python', 'C++', 'C', 'SQL', 'JavaScript'],
  preferences: {
    theme: 'dark',
    language: 'en'
  }
}
