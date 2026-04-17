// Expanded data with multiple problem sources and company interview questions

export const problemSources = {
  leetcode: [
    {
      id: 'lc1',
      title: 'Two Sum',
      difficulty: 'Easy',
      platform: 'LeetCode',
      url: 'https://leetcode.com/problems/two-sum/',
      category: 'Arrays'
    },
    {
      id: 'lc2',
      title: 'Add Two Numbers',
      difficulty: 'Medium',
      platform: 'LeetCode',
      url: 'https://leetcode.com/problems/add-two-numbers/',
      category: 'Linked List'
    },
    {
      id: 'lc3',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      platform: 'LeetCode',
      url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
      category: 'Strings'
    },
    {
      id: 'lc4',
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      platform: 'LeetCode',
      url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
      category: 'Arrays'
    },
    {
      id: 'lc5',
      title: 'Reverse Integer',
      difficulty: 'Easy',
      platform: 'LeetCode',
      url: 'https://leetcode.com/problems/reverse-integer/',
      category: 'Math'
    }
  ],
  hackerrank: [
    {
      id: 'hr1',
      title: 'Solve Me First',
      difficulty: 'Easy',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/challenges/solve-me-first/',
      category: 'Warmup'
    },
    {
      id: 'hr2',
      title: 'Simple Array Sum',
      difficulty: 'Easy',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/challenges/simple-array-sum/',
      category: 'Arrays'
    },
    {
      id: 'hr3',
      title: 'Compare the Triplets',
      difficulty: 'Easy',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/challenges/compare-the-triplets/',
      category: 'Arrays'
    },
    {
      id: 'hr4',
      title: 'A Very Big Sum',
      difficulty: 'Easy',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/challenges/a-very-big-sum/',
      category: 'Arrays'
    },
    {
      id: 'hr5',
      title: 'Diagonal Difference',
      difficulty: 'Easy',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/challenges/diagonal-difference/',
      category: 'Arrays'
    }
  ]
}

export const topCompanies = [
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '🔶',
    questions: [
      { title: 'Two Sum', topic: 'Arrays', frequency: 'Very High', difficulty: 'Easy' },
      { title: 'Create Maximum Number', topic: 'Arrays', frequency: 'High', difficulty: 'Hard' },
      { title: 'Number of Islands', topic: 'BFS/DFS', frequency: 'High', difficulty: 'Medium' },
      { title: 'LRU Cache', topic: 'Design', frequency: 'High', difficulty: 'Hard' },
      { title: 'Longest Palindromic Substring', topic: 'Strings', frequency: 'Medium', difficulty: 'Medium' }
    ]
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: '🛒',
    questions: [
      { title: 'Array Rotation', topic: 'Arrays', frequency: 'Very High', difficulty: 'Medium' },
      { title: 'Binary Tree Level Order', topic: 'Trees', frequency: 'High', difficulty: 'Medium' },
      { title: 'Find Pairs', topic: 'Hash Table', frequency: 'High', difficulty: 'Easy' },
      { title: 'Stock Buy Sell', topic: 'Dynamic Programming', frequency: 'Medium', difficulty: 'Medium' },
      { title: 'Reverse String', topic: 'Strings', frequency: 'Medium', difficulty: 'Easy' }
    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    logo: '⚡',
    questions: [
      { title: 'Rotated Sorted Array Search', topic: 'Binary Search', frequency: 'High', difficulty: 'Medium' },
      { title: 'Merge K Sorted Lists', topic: 'Heap', frequency: 'High', difficulty: 'Hard' },
      { title: 'Word Ladder', topic: 'BFS', frequency: 'Medium', difficulty: 'Hard' },
      { title: 'Longest Increasing Subsequence', topic: 'DP', frequency: 'Medium', difficulty: 'Medium' },
      { title: 'Regular Expression Matching', topic: 'DP', frequency: 'Low', difficulty: 'Hard' }
    ]
  },
  {
    id: 'walmart',
    name: 'Walmart',
    logo: '🏪',
    questions: [
      { title: 'Kth Largest Element', topic: 'Heap', frequency: 'Very High', difficulty: 'Medium' },
      { title: 'Meeting Rooms', topic: 'Sorting', frequency: 'High', difficulty: 'Medium' },
      { title: 'Top K Frequent Elements', topic: 'Heap', frequency: 'High', difficulty: 'Medium' },
      { title: 'Word Break', topic: 'DP', frequency: 'Medium', difficulty: 'Medium' },
      { title: 'Course Schedule', topic: 'Graph', frequency: 'Medium', difficulty: 'Medium' }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: '🤖',
    questions: [
      { title: 'Merge K Sorted Arrays', topic: 'Heaps', frequency: 'High', difficulty: 'Hard' },
      { title: 'Design Cache', topic: 'Design', frequency: 'High', difficulty: 'Hard' },
      { title: 'Serialize Deserialize Tree', topic: 'Trees', frequency: 'Medium', difficulty: 'Hard' },
      { title: 'Minimum Window Substring', topic: 'Sliding Window', frequency: 'Medium', difficulty: 'Hard' },
      { title: 'Maximal Rectangle', topic: '2D DP', frequency: 'Low', difficulty: 'Hard' }
    ]
  },
  {
    id: 'servicenow',
    name: 'ServiceNow',
    logo: '☁️',
    questions: [
      { title: 'Validate Parentheses', topic: 'Stack', frequency: 'Very High', difficulty: 'Easy' },
      { title: 'Longest Valid Parentheses', topic: 'Stack/DP', frequency: 'High', difficulty: 'Hard' },
      { title: 'Remove Duplicates', topic: 'Array', frequency: 'High', difficulty: 'Easy' },
      { title: 'Search Insert Position', topic: 'Binary Search', frequency: 'Medium', difficulty: 'Easy' },
      { title: 'Single Number', topic: 'Bit Manipulation', frequency: 'Medium', difficulty: 'Easy' }
    ]
  },
  {
    id: 'justpay',
    name: 'JustPay',
    logo: '💳',
    questions: [
      { title: 'Transaction Sorting', topic: 'Sorting', frequency: 'Very High', difficulty: 'Easy' },
      { title: 'Payment Verification', topic: 'Hash Map', frequency: 'High', difficulty: 'Medium' },
      { title: 'Duplicate Detection', topic: 'Set', frequency: 'High', difficulty: 'Easy' },
      { title: 'Range Sum Query', topic: 'Segment Tree', frequency: 'Medium', difficulty: 'Hard' },
      { title: 'LRU Cache', topic: 'Design', frequency: 'Medium', difficulty: 'Hard' }
    ]
  },
  {
    id: 'bp',
    name: 'BP (British Petroleum)',
    logo: '🛢️',
    questions: [
      { title: 'Production Optimization', topic: 'Greedy', frequency: 'High', difficulty: 'Hard' },
      { title: 'Resource Allocation', topic: 'DP', frequency: 'High', difficulty: 'Hard' },
      { title: 'Network Flow', topic: 'Graph', frequency: 'Medium', difficulty: 'Hard' },
      { title: 'Matrix Path Sum', topic: 'DP', frequency: 'Medium', difficulty: 'Medium' },
      { title: 'Project Scheduling', topic: 'Topological Sort', frequency: 'Medium', difficulty: 'Hard' }
    ]
  }
]

export const topMentors = [
  {
    id: 'm1',
    name: 'Striver',
    specialization: 'DSA & System Design',
    rating: 4.9,
    students: 250000,
    expertise: ['DSA', 'System Design', 'Coding'],
    bio: 'Expert in Competitive Coding, DSA, and System Design. Creator of popular DSA series.',
    platforms: ['YouTube', 'CodeStudio']
  },
  {
    id: 'm2',
    name: 'Love Babbar',
    specialization: 'DSA & Web Development',
    rating: 4.8,
    students: 300000,
    expertise: ['DSA', 'Web Dev', 'Full Stack'],
    bio: 'Full Stack Developer with focus on DSA. Known for comprehensive coding playlists.',
    platforms: ['YouTube', 'Coding Ninjas']
  },
  {
    id: 'm3',
    name: 'Neetcode',
    specialization: 'LeetCode Problems & Interviews',
    rating: 4.9,
    students: 180000,
    expertise: ['LeetCode', 'Interviews', 'Patterns'],
    bio: 'Covers all LeetCode patterns. Specializes in interview preparation.',
    platforms: ['YouTube', 'Neetcode.io']
  },
  {
    id: 'm4',
    name: 'Gaurav Sen',
    specialization: 'System Design & Architecture',
    rating: 4.8,
    students: 150000,
    expertise: ['System Design', 'Architecture', 'Scaling'],
    bio: 'System Design expert. Teaches architecture for large-scale applications.',
    platforms: ['YouTube']
  },
  {
    id: 'm5',
    name: 'Kevin Naughton Jr',
    specialization: 'Interview Prep & DSA',
    rating: 4.7,
    students: 120000,
    expertise: ['Interviews', 'DSA', 'FAANG'],
    bio: 'Google engineer. Focuses on FAANG interview preparation.',
    platforms: ['YouTube']
  }
]

export const trendingJobs = [
  {
    id: 'sde',
    title: 'Software Development Engineer (SDE)',
    category: 'Tech',
    demand: 'Very High',
    avgSalary: '$120K - $200K',
    skills: ['DSA', 'System Design', 'OOP'],
    roadmap: [
      { step: 1, name: 'Master DSA', duration: '3 months' },
      { step: 2, name: 'Learn System Design', duration: '2 months' },
      { step: 3, name: 'Practice Mock Interviews', duration: '1 month' },
      { step: 4, name: 'Interview Preparation', duration: '2 weeks' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning Engineer',
    category: 'Tech',
    demand: 'Very High',
    avgSalary: '$130K - $250K',
    skills: ['Python', 'ML Libraries', 'Mathematics'],
    roadmap: [
      { step: 1, name: 'Python Fundamentals', duration: '1 month' },
      { step: 2, name: 'Statistics & Math', duration: '2 months' },
      { step: 3, name: 'ML Algorithms', duration: '3 months' },
      { step: 4, name: 'Deep Learning & Projects', duration: '3 months' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    category: 'Tech',
    demand: 'High',
    avgSalary: '$110K - $180K',
    skills: ['Linux', 'Docker', 'Kubernetes', 'CI/CD'],
    roadmap: [
      { step: 1, name: 'Linux Basics', duration: '1 month' },
      { step: 2, name: 'Docker & Containerization', duration: '2 months' },
      { step: 3, name: 'Kubernetes & Orchestration', duration: '2 months' },
      { step: 4, name: 'CI/CD & Cloud', duration: '2 months' }
    ]
  },
  {
    id: 'dataeng',
    title: 'Data Engineer',
    category: 'Tech',
    demand: 'Very High',
    avgSalary: '$125K - $210K',
    skills: ['SQL', 'Spark', 'Hadoop', 'ETL'],
    roadmap: [
      { step: 1, name: 'SQL & Databases', duration: '2 months' },
      { step: 2, name: 'Apache Spark', duration: '2 months' },
      { step: 3, name: 'Data Pipelines', duration: '2 months' },
      { step: 4, name: 'Cloud Data Platforms', duration: '1.5 months' }
    ]
  },
  {
    id: 'cloudarch',
    title: 'Cloud Architect',
    category: 'Tech',
    demand: 'High',
    avgSalary: '$140K - $230K',
    skills: ['AWS/Azure', 'System Design', 'Security'],
    roadmap: [
      { step: 1, name: 'AWS/Azure Basics', duration: '2 months' },
      { step: 2, name: 'Advanced Services', duration: '2 months' },
      { step: 3, name: 'Security & Compliance', duration: '1.5 months' },
      { step: 4, name: 'Real-world Projects', duration: '2 months' }
    ]
  },
  {
    id: 'manager',
    title: 'Engineering Manager',
    category: 'Tech',
    demand: 'Medium',
    avgSalary: '$150K - $300K',
    skills: ['Leadership', 'Communication', 'Technical Depth'],
    roadmap: [
      { step: 1, name: 'Technical Excellence', duration: '6 months' },
      { step: 2, name: 'Leadership Training', duration: '3 months' },
      { step: 3, name: 'Mentorship Skills', duration: '2 months' },
      { step: 4, name: 'Management Experience', duration: 'Ongoing' }
    ]
  },
  {
    id: 'consultant',
    title: 'Management Consultant',
    category: 'Non-Tech',
    demand: 'Medium',
    avgSalary: '$100K - $200K',
    skills: ['Analysis', 'Communication', 'Business Acumen'],
    roadmap: [
      { step: 1, name: 'Business Fundamentals', duration: '2 months' },
      { step: 2, name: 'Data Analysis', duration: '2 months' },
      { step: 3, name: 'Case Studies', duration: '2 months' },
      { step: 4, name: 'Interview Prep', duration: '1 month' }
    ]
  },
  {
    id: 'product',
    title: 'Product Manager',
    category: 'Tech',
    demand: 'High',
    avgSalary: '$120K - $220K',
    skills: ['Strategy', 'Analytics', 'Leadership'],
    roadmap: [
      { step: 1, name: 'Product Fundamentals', duration: '1 month' },
      { step: 2, name: 'Analytics & Data', duration: '2 months' },
      { step: 3, name: 'Product Strategy', duration: '2 months' },
      { step: 4, name: 'Case Interviews', duration: '1.5 months' }
    ]
  }
]

export const questionsByDifficultyAndLanguage = {
  beginner: {
    java: [
      { id: 'b-j1', title: 'Hello World', category: 'Basics' },
      { id: 'b-j2', title: 'Variables & Data Types', category: 'Basics' },
      { id: 'b-j3', title: 'Simple Calculator', category: 'Operators' },
      { id: 'b-j4', title: 'Loop Practice', category: 'Control Flow' },
      { id: 'b-j5', title: 'Array Basics', category: 'Arrays' }
    ],
    python: [
      { id: 'b-p1', title: 'Print Statements', category: 'Basics' },
      { id: 'b-p2', title: 'Variables & Types', category: 'Basics' },
      { id: 'b-p3', title: 'String Operations', category: 'Strings' },
      { id: 'b-p4', title: 'List Basics', category: 'Collections' },
      { id: 'b-p5', title: 'Loops & Conditions', category: 'Control Flow' }
    ],
    cpp: [
      { id: 'b-c1', title: 'First C++ Program', category: 'Basics' },
      { id: 'b-c2', title: 'Data Types', category: 'Basics' },
      { id: 'b-c3', title: 'Input & Output', category: 'I/O' },
      { id: 'b-c4', title: 'Simple Loops', category: 'Control Flow' },
      { id: 'b-c5', title: 'Arrays & Vectors', category: 'Data Structures' }
    ],
    c: [
      { id: 'b-c-1', title: 'Printf & Scanf', category: 'Basics' },
      { id: 'b-c-2', title: 'Variables & Operators', category: 'Basics' },
      { id: 'b-c-3', title: 'Loops', category: 'Control Flow' },
      { id: 'b-c-4', title: 'Arrays', category: 'Arrays' },
      { id: 'b-c-5', title: 'Functions', category: 'Functions' }
    ],
    javascript: [
      { id: 'b-js1', title: 'Console Logging', category: 'Basics' },
      { id: 'b-js2', title: 'Variables & Types', category: 'Basics' },
      { id: 'b-js3', title: 'String Manipulation', category: 'Strings' },
      { id: 'b-js4', title: 'Array Operations', category: 'Arrays' },
      { id: 'b-js5', title: 'Functions Basics', category: 'Functions' }
    ],
    sql: [
      { id: 'b-sql1', title: 'SELECT Query', category: 'Basics' },
      { id: 'b-sql2', title: 'WHERE Clause', category: 'Filtering' },
      { id: 'b-sql3', title: 'ORDER BY', category: 'Sorting' },
      { id: 'b-sql4', title: 'COUNT & Aggregates', category: 'Functions' },
      { id: 'b-sql5', title: 'LIMIT', category: 'Basics' }
    ]
  },
  medium: {
    java: [
      { id: 'm-j1', title: 'Two Sum', category: 'Arrays' },
      { id: 'm-j2', title: 'Reverse Array', category: 'Arrays' },
      { id: 'm-j3', title: 'Binary Search', category: 'Search' },
      { id: 'm-j4', title: 'Linked List', category: 'Data Structures' },
      { id: 'm-j5', title: 'Stack Operations', category: 'Data Structures' }
    ],
    python: [
      { id: 'm-p1', title: 'List Comprehension', category: 'Collections' },
      { id: 'm-p2', title: 'Dictionary Operations', category: 'Collections' },
      { id: 'm-p3', title: 'Sorting & Searching', category: 'Algorithms' },
      { id: 'm-p4', title: 'Class & Objects', category: 'OOP' },
      { id: 'm-p5', title: 'File Handling', category: 'I/O' }
    ],
    cpp: [
      { id: 'm-c1', title: 'Pointers', category: 'Advanced' },
      { id: 'm-c2', title: 'STL Vectors', category: 'Data Structures' },
      { id: 'm-c3', title: 'Sorting & Searching', category: 'Algorithms' },
      { id: 'm-c4', title: 'String Operations', category: 'Strings' },
      { id: 'm-c5', title: 'Classes & Objects', category: 'OOP' }
    ],
    c: [
      { id: 'm-c-1', title: 'Pointers & Memory', category: 'Advanced' },
      { id: 'm-c-2', title: 'Structures', category: 'Data Structures' },
      { id: 'm-c-3', title: 'String Handling', category: 'Strings' },
      { id: 'm-c-4', title: 'File I/O', category: 'I/O' },
      { id: 'm-c-5', title: 'Linked Lists', category: 'Data Structures' }
    ],
    javascript: [
      { id: 'm-js1', title: 'Async/Await', category: 'Advanced' },
      { id: 'm-js2', title: 'DOM Manipulation', category: 'Web' },
      { id: 'm-js3', title: 'Closures', category: 'Advanced' },
      { id: 'm-js4', title: 'Array Methods', category: 'Arrays' },
      { id: 'm-js5', title: 'Error Handling', category: 'Advanced' }
    ],
    sql: [
      { id: 'm-sql1', title: 'JOINs', category: 'Advanced' },
      { id: 'm-sql2', title: 'Subqueries', category: 'Advanced' },
      { id: 'm-sql3', title: 'GROUP BY & HAVING', category: 'Aggregation' },
      { id: 'm-sql4', title: 'Window Functions', category: 'Advanced' },
      { id: 'm-sql5', title: 'Complex Queries', category: 'Advanced' }
    ]
  }
}

export const topPeers = [
  {
    id: 1,
    name: 'Arjun Sharma',
    college: 'IIT Delhi',
    branch: 'Computer Science',
    year: '3rd Year',
    rating: 4.9,
    reviewCount: 287,
    solvedProblems: 1205,
    responseTime: '1 min',
    expertise: ['DSA', 'Competitive Programming', 'System Design'],
    bio: 'Codeforces expert (1900+). Love helping beginners master DSA.',
    avatar: 'AS',
    collegeBadge: '🎓 IIT Delhi',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 2,
    name: 'Neha Verma',
    college: 'IIT Bombay',
    branch: 'Computer Science',
    year: '4th Year',
    rating: 4.8,
    reviewCount: 243,
    solvedProblems: 987,
    responseTime: '2 mins',
    expertise: ['Web Development', 'DSA', 'Database Design'],
    bio: 'Full-stack developer. Passionate about making DSA easy!',
    avatar: 'NV',
    collegeBadge: '🎓 IIT Bombay',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 3,
    name: 'Rohan Patel',
    college: 'IIIT Hyderabad',
    branch: 'Computer Science',
    year: '3rd Year',
    rating: 4.85,
    reviewCount: 198,
    solvedProblems: 856,
    responseTime: '3 mins',
    expertise: ['Competitive Programming', 'Algorithms', 'Graph Theory'],
    bio: 'AtCoder expert. Available for mock interviews & pair coding.',
    avatar: 'RP',
    collegeBadge: '🎓 IIIT Hyderabad',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 4,
    name: 'Priya Singh',
    college: 'NIT Rourkee',
    branch: 'Computer Science',
    year: '2nd Year',
    rating: 4.7,
    reviewCount: 156,
    solvedProblems: 634,
    responseTime: '5 mins',
    expertise: ['DSA', 'Java Programming', 'Problem Solving'],
    bio: 'Patient educator. Great at explaining complex problems simply.',
    avatar: 'PS',
    collegeBadge: '🎓 NIT Rourkee',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 5,
    name: 'Vikram Kumar',
    college: 'IIT Madras',
    branch: 'Computer Science',
    year: '3rd Year',
    rating: 4.75,
    reviewCount: 215,
    solvedProblems: 743,
    responseTime: '2 mins',
    expertise: ['DSA', 'Dynamic Programming', 'Greedy Algorithms'],
    bio: 'LeetCode 500+ problems solved. Help on tough optimization questions.',
    avatar: 'VK',
    collegeBadge: '🎓 IIT Madras',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 6,
    name: 'Isha Kapoor',
    college: 'IIIT Delhi',
    branch: 'Computer Science',
    year: '2nd Year',
    rating: 4.8,
    reviewCount: 182,
    solvedProblems: 712,
    responseTime: '4 mins',
    expertise: ['Arrays', 'Strings', 'Problem Solving Strategies'],
    bio: 'Mentor college juniors. Love breaking down hard problems!',
    avatar: 'IK',
    collegeBadge: '🎓 IIIT Delhi',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 7,
    name: 'Aditya Singh',
    college: 'NIT Surathkal',
    branch: 'Computer Science',
    year: '4th Year',
    rating: 4.72,
    reviewCount: 168,
    solvedProblems: 821,
    responseTime: '1 min',
    expertise: ['Trees', 'Graphs', 'Recursion'],
    bio: 'Interview cracker. Help with both coding and interview prep.',
    avatar: 'AS',
    collegeBadge: '🎓 NIT Surathkal',
    platforms: { chat: true, googleMeet: true }
  },
  {
    id: 8,
    name: 'Shreya Gupta',
    college: 'IIT Bombay',
    branch: 'Computer Science',
    year: '2nd Year',
    rating: 4.65,
    reviewCount: 134,
    solvedProblems: 589,
    responseTime: '6 mins',
    expertise: ['DSA Fundamentals', 'Sorting', 'Searching'],
    bio: 'Recently solved many LeetCode easy/medium. Perfect for beginners!',
    avatar: 'SG',
    collegeBadge: '🎓 IIT Bombay',
    platforms: { chat: true, googleMeet: true }
  }
]

// Team members from MAANG/FAANG companies working in various roles in India
export const roleTeamMembers = {
  'sde': [
    {
      id: 'tm1',
      name: 'Aditya Sharma',
      role: 'Senior Software Engineer',
      company: 'Google India',
      logo: 'GI',
      location: 'Bangalore',
      yearsExperience: 6,
      rating: 4.9,
      bio: 'Leading backend systems at Google. Expert in scalable architectures.',
      email: 'aditya.sharma@google.com',
      linkedin: 'https://linkedin.com/in/aditya-sharma',
      availability: 'Wed-Fri, 6-8 PM IST'
    },
    {
      id: 'tm2',
      name: 'Priya Patel',
      role: 'Software Engineer',
      company: 'Amazon India',
      logo: 'AI',
      location: 'Bangalore',
      yearsExperience: 4,
      rating: 4.8,
      bio: 'Full-stack engineer at Amazon Web Services. Passionate about cloud tech.',
      email: 'priya.patel@amazon.com',
      linkedin: 'https://linkedin.com/in/priya-patel',
      availability: 'Tue-Thu, 7-9 PM IST'
    },
    {
      id: 'tm3',
      name: 'Rohan Gupta',
      role: 'SDE-2',
      company: 'Microsoft India',
      logo: 'MI',
      location: 'Pune',
      yearsExperience: 5,
      rating: 4.7,
      bio: 'Azure cloud specialist. Loves mentoring junior developers.',
      email: 'rohan.gupta@microsoft.com',
      linkedin: 'https://linkedin.com/in/rohan-gupta',
      availability: 'Mon-Wed, 8-10 PM IST'
    }
  ],
  'ml': [
    {
      id: 'tm13',
      name: 'Kavya Nair',
      role: 'Senior ML Engineer',
      company: 'Google India',
      logo: 'GI',
      location: 'Bangalore',
      yearsExperience: 7,
      rating: 4.9,
      bio: 'Deep learning and NLP specialist. Built ML models for search.',
      email: 'kavya.nair@google.com',
      linkedin: 'https://linkedin.com/in/kavya-nair',
      availability: 'Tue-Thu, 6-8 PM IST'
    },
    {
      id: 'tm14',
      name: 'Nikhil Saxena',
      role: 'ML Engineer',
      company: 'Meta India',
      logo: 'MI',
      location: 'Mumbai',
      yearsExperience: 5,
      rating: 4.8,
      bio: 'Computer vision expert. Experience with recommendation systems.',
      email: 'nikhil.saxena@meta.com',
      linkedin: 'https://linkedin.com/in/nikhil-saxena',
      availability: 'Wed-Fri, 7-9 PM IST'
    }
  ],
  'devops': [
    {
      id: 'tm8',
      name: 'Arjun Reddy',
      role: 'Senior DevOps Engineer',
      company: 'Amazon India',
      logo: 'AI',
      location: 'Hyderabad',
      yearsExperience: 6,
      rating: 4.9,
      bio: 'Kubernetes & Docker expert. CI/CD pipeline optimization specialist.',
      email: 'arjun.reddy@amazon.com',
      linkedin: 'https://linkedin.com/in/arjun-reddy',
      availability: 'Mon-Fri, 8-10 PM IST'
    },
    {
      id: 'tm15',
      name: 'Manisha Thakur',
      role: 'DevOps Engineer',
      company: 'Microsoft India',
      logo: 'MI',
      location: 'Pune',
      yearsExperience: 4,
      rating: 4.7,
      bio: 'Infrastructure automation expert. Terraform & Ansible specialist.',
      email: 'manisha.thakur@microsoft.com',
      linkedin: 'https://linkedin.com/in/manisha-thakur',
      availability: 'Mon-Fri, 6-8 PM IST'
    }
  ],
  'dataeng': [
    {
      id: 'tm16',
      name: 'Ravi Mohan',
      role: 'Senior Data Engineer',
      company: 'Flipkart India',
      logo: 'FI',
      location: 'Bangalore',
      yearsExperience: 8,
      rating: 4.9,
      bio: 'Big data distributed systems expert. Spark and Hadoop specialist.',
      email: 'ravi.mohan@flipkart.com',
      linkedin: 'https://linkedin.com/in/ravi-mohan',
      availability: 'Tue-Thu, 6-8 PM IST'
    },
    {
      id: 'tm17',
      name: 'Supriya Dasgupta',
      role: 'Data Engineer',
      company: 'Amazon India',
      logo: 'AI',
      location: 'Bangalore',
      yearsExperience: 5,
      rating: 4.8,
      bio: 'Data pipeline architect. ETL and data warehouse expert.',
      email: 'supriya.dasgupta@amazon.com',
      linkedin: 'https://linkedin.com/in/supriya-dasgupta',
      availability: 'Mon-Wed, 7-9 PM IST'
    }
  ],
  'cloudarch': [
    {
      id: 'tm18',
      name: 'Sameer Desai',
      role: 'Cloud Architect',
      company: 'AWS India',
      logo: 'AI',
      location: 'Mumbai',
      yearsExperience: 9,
      rating: 4.9,
      bio: 'Multi-cloud architect with focus on security and scalability.',
      email: 'sameer.desai@aws.com',
      linkedin: 'https://linkedin.com/in/sameer-desai',
      availability: 'Wed-Fri, 5-7 PM IST'
    },
    {
      id: 'tm19',
      name: 'Ritika Bhardwaj',
      role: 'Cloud Solutions Architect',
      company: 'Microsoft India',
      logo: 'MI',
      location: 'Bangalore',
      yearsExperience: 6,
      rating: 4.8,
      bio: 'Azure specialist. Enterprise cloud migration expert.',
      email: 'ritika.bhardwaj@microsoft.com',
      linkedin: 'https://linkedin.com/in/ritika-bhardwaj',
      availability: 'Mon-Thu, 6-8 PM IST'
    }
  ],
  'manager': [
    {
      id: 'tm20',
      name: 'Rahul Gupta',
      role: 'Engineering Manager',
      company: 'Google India',
      logo: 'GI',
      location: 'Bangalore',
      yearsExperience: 10,
      rating: 4.9,
      bio: 'Led teams of 20+ engineers. Expert in team building and scaling.',
      email: 'rahul.gupta@google.com',
      linkedin: 'https://linkedin.com/in/rahul-gupta',
      availability: 'Tue-Thu, 5-7 PM IST'
    },
    {
      id: 'tm21',
      name: 'Ananya Singh',
      role: 'Tech Lead Manager',
      company: 'Meta India',
      logo: 'MI',
      location: 'Mumbai',
      yearsExperience: 7,
      rating: 4.8,
      bio: 'Managing product teams. Expertise in Agile and Scrum.',
      email: 'ananya.singh@meta.com',
      linkedin: 'https://linkedin.com/in/ananya-singh',
      availability: 'Wed-Fri, 6-8 PM IST'
    }
  ],
  'consultant': [
    {
      id: 'tm22',
      name: 'Vivek Kapoor',
      role: 'Senior Management Consultant',
      company: 'McKinsey India',
      logo: 'MI',
      location: 'Mumbai',
      yearsExperience: 8,
      rating: 4.9,
      bio: 'Strategy & operations expert. Worked on Fortune 500 companies.',
      email: 'vivek.kapoor@mckinsey.com',
      linkedin: 'https://linkedin.com/in/vivek-kapoor',
      availability: 'Mon-Fri, 7-9 PM IST'
    },
    {
      id: 'tm23',
      name: 'Meera Chatterjee',
      role: 'Business Consultant',
      company: 'Boston Consulting Group India',
      logo: 'BC',
      location: 'Bangalore',
      yearsExperience: 5,
      rating: 4.8,
      bio: 'Digital transformation specialist. Experience in fintech and healthcare.',
      email: 'meera.chatterjee@bcg.com',
      linkedin: 'https://linkedin.com/in/meera-chatterjee',
      availability: 'Tue-Thu, 6-8 PM IST'
    }
  ],
  'product': [
    {
      id: 'tm10',
      name: 'Rahul Iyer',
      role: 'Senior Product Manager',
      company: 'Flipkart India',
      logo: 'FI',
      location: 'Bangalore',
      yearsExperience: 9,
      rating: 4.8,
      bio: 'E-commerce product expert. Led multiple successful product launches.',
      email: 'rahul.iyer@flipkart.com',
      linkedin: 'https://linkedin.com/in/rahul-iyer',
      availability: 'Wed-Fri, 6-8 PM IST'
    },
    {
      id: 'tm24',
      name: 'Deepa Sharma',
      role: 'Product Manager',
      company: 'Google India',
      logo: 'GI',
      location: 'Bangalore',
      yearsExperience: 6,
      rating: 4.8,
      bio: 'Consumer product expert. Data-driven decision maker.',
      email: 'deepa.sharma@google.com',
      linkedin: 'https://linkedin.com/in/deepa-sharma',
      availability: 'Mon-Fri, 5-7 PM IST'
    }
  ]
}
