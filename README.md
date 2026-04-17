# Smart E-Learning — Frontend v2 (React + Tailwind + Advanced Features)

A comprehensive, production-ready frontend for a Smart E-Learning Coding Platform with multi-platform problem sources, company interview preparation, and job market insights. Built with React, Tailwind CSS, and interactive animations.

## 🚀 Major Features

### **1️⃣ Dashboard – Enhanced**
- Performance stats: Daily Streak 🔥, Problems Solved ✅, Total Problems 📊, Languages 🗣️
- **Courses in Progress**: Now includes Java, Python, C++, C, SQL, JavaScript
- **Recommended Courses**: Intelligently curated based on learning progress
- **Languages Mastered**: Display all 6+ supported programming languages
- Course cards with progress bars and continue buttons
- Animated welcome message for returning users

### **2️⃣ Multi-Platform Problems Hub** (3 Problem Sources!)
Unified tab-based interface with:

#### **LeetCode Tab 📘**
- Browse 25+ LeetCode problems
- Difficulty levels: Easy, Medium, Hard
- Direct links to LeetCode platform
- Color-coded difficulty badges

#### **HackerRank Tab 🎯**
- Browse 25+ HackerRank problems
- Challenge categories: Warmup, Arrays, Strings, etc.
- Direct links to HackerRank challenges
- Solve "on-platform" without leaving app

#### **Interview Prep Tab 💼** ⭐ NEW
- **Top 8 Companies**: Amazon 🔶 | Flipkart 🛒 | Tesla ⚡ | Walmart 🏪 | OpenAI 🤖 | ServiceNow ☁️ | JustPay 💳 | BP 🛢️
- **Company Selection**: Click company logo to view most-asked questions
- **Interview Questions**: 5 highest-frequency questions per company with:
  - Question title and topic area
  - Difficulty rating
  - Frequency (Very High/High/Medium)
  - Acceptance rates
- **Top Companies**: Shows roles like SDE, Data Engineer, DevOps, ML Engineer, etc.

### **3️⃣ Advanced Coding Workspace** ⭐ NEW
Split-screen learning environment:

#### **Left: Lesson Section**
- Markdown-based lessons for each language
- Syntax-highlighted code examples
- Real-world examples and best practices

#### **Right: Code Editor**
- **Language Switcher**: 6 languages with emoji badges
  - Java ☕ | Python 🐍 | C++ ⚙️ | C 🔤 | SQL 🗄️ | JavaScript 📜
- **Live Code Templates**: Language-specific boilerplate code
- **Run & Submit Buttons**: Ready for integration
- Placeholder for real Monaco/CodeMirror editor

#### **Below: Difficulty-Based Practice** ⭐ NEW
- **Beginner Section**: 5 problems per language
  - Variables, loops, basic functions, arrays, I/O
  - Click to select and start coding
- **Medium Section**: 5 intermediate problems
  - Advanced algorithms, OOP, DSA concepts
  - Linked lists, trees, dynamic programming
- **Interactive Selection**: Highlight selected problem with visual feedback
- **Language-Specific Challenges**: Each language has unique problems suited to its paradigm

#### **Bottom: YouTube Helper**
- Paste stuck problems + search YouTube
- Clipboard paste button for convenience
- Direct YouTube links with optimized queries
- Pro tips for better search results

### **4️⃣ Smart Roadmap** ⭐ NEW SECTIONS

#### **Course Learning Path**
- Visual progression: Beginner → Intermediate → Advanced
- 9+ available courses with progress tracking
- Module connections and dependencies
- Course difficulty progression

#### **Top Mentors Section** 🎓
**Learn from 5 Industry Experts:**
1. **Striver** - DSA & System Design (250K+ students, 4.9★)
2. **Love Babbar** - DSA & Web Dev (300K+ students, 4.8★)
3. **Neetcode** - LeetCode & Interviews (180K+ students, 4.9★)
4. **Gaurav Sen** - System Design & Architecture (150K+ students, 4.8★)
5. **Kevin Naughton Jr** - FAANG Interview Prep (120K+ students, 4.7★)

Each mentor card shows:
- Specialization area
- Rating and student count
- Bio and preferred platforms
- Platform links (YouTube, CodeStudio, etc.)

#### **Trending Jobs Section** 💼 ⭐ NEW
**8 In-Demand 2026 Job Roles:**

**Tech Roles (6):**
- **Software Development Engineer (SDE)** - $120K-$200K, Very High Demand
- **Machine Learning Engineer** - $130K-$250K, Very High Demand  
- **DevOps Engineer** - $110K-$180K, High Demand
- **Data Engineer** - $125K-$210K, Very High Demand
- **Cloud Architect** - $140K-$230K, High Demand
- **Engineering Manager** - $150K-$300K, Medium Demand

**Non-Tech Roles (2):**
- **Management Consultant** - $100K-$200K, Medium Demand
- **Product Manager** - $120K-$220K, High Demand

**Each Job Shows:**
- Salary range and demand level
- 3-5 required skills
- **Complete Learning Roadmap** with 4 steps:
  - Step 1: Fundamentals (timeline)
  - Step 2: Core concepts (timeline)
  - Step 3: Advanced topics (timeline)
  - Step 4: Real projects/interviews (timeline)
- Total time to master: 4-9 months
- Full roadmap button for detailed learning path

**Job Market Insights:**
- Total positions available
- Average starting salary across all roles
- Typical time to master a role

### **5️⃣ Dashboard Enhancements**
- Now showing all 6 programming languages mastered
- Extended course library with C, C++, Python prominently featured
- 4+ courses in progress simultaneously
- 8+ recommended courses for various skill levels

## 📊 Data & Content

### **Problem Coverage**
- **LeetCode**: 25 problems across arrays, strings, linked lists, trees
- **HackerRank**: 25 problems across warmup, arrays, strings, algorithms
- **Interview Prep**: 40 company-specific questions (8 companies × 5 questions)

### **Company Database**
Interview questions from top tech companies with frequency tracking:
- Amazon
- Flipkart
- Tesla
- Walmart
- OpenAI
- ServiceNow
- JustPay
- BP

### **Difficulty-Based Exercises**
- **Beginner**: 30 problems (5 per language × 6 languages)
- **Medium**: 30 problems (5 per language × 6 languages)
- Categories include: arrays, strings, trees, DP, graphs, etc.

## 🎨 UI/UX Enhancements

### **Visual Design**
- Dark mode optimized for coding
- Color-coded difficulty levels (Green/Yellow/Red)
- Company logos as visual identifiers
- Emoji badges for language selection
- Modern card-based layout with hover effects

### **Animations**
- Fade-in on page load
- Staggered slide-up for list items
- Scale-up for interactive selections
- Smooth transitions on all hover states
- Custom scrollbar styling

### **Responsive Design**
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly buttons
- Collapsible menus on mobile

## 📂 Project Structure

```
src/
├── context/
│   ├── AuthContext.jsx           # Login/signup state
│   └── UserContext.jsx           # User progress
├── components/
│   ├── Navbar.jsx                # Top navigation
│   ├── CourseCard.jsx            # Course display
│   ├── LanguageSwitcher.jsx      # 6-language selector
│   ├── YouTubeHelper.jsx         # Problem → YouTube
│   ├── EditorPlaceholder.jsx     # Code editor
│   ├── LessonMarkdown.jsx        # Lesson renderer
│   └── LearningPath.jsx          # Roadmap visualization
├── pages/
│   ├── Login.jsx                 # Authentication
│   ├── Dashboard.jsx             # Main dashboard (updated)
│   ├── ProblemsTab.jsx           # Multi-platform problems (NEW)
│   ├── WorkspaceAdvanced.jsx     # Advanced workspace (NEW)
│   ├── RoadmapAdvanced.jsx       # Advanced roadmap (NEW)
│   └── [...legacy pages]
├── data/
│   └── expanded.js               # All new data (NEW)
├── utils/
│   └── codeSnippets.js           # Code templates
├── App.jsx                       # Main app routing (updated)
└── ...
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Styling
- **Vite 5** - Bundler
- **Lucide React** - Icons
- **JavaScript ES6+** - Logic & animations

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

**Demo Login:**
- Email: `demo@example.com`
- Password: `demo123`

## 🎓 How to Use

### **Dashboard**
1. View your streak and progress statistics
2. See courses currently in progress
3. Get recommendations based on learning history
4. Start a new course with one click

### **Problems Hub**
1. Choose platform: LeetCode, HackerRank, or Interview Prep
2. For **LeetCode/HackerRank**: Browse, filter by difficulty, solve
3. For **Interview Prep**: 
   - Select a company (Amazon, Tesla, etc.)
   - View top 5 most-asked questions
   - Practice problems from real interviews

### **Workspace**
1. Select programming language
2. Read lesson on the left
3. See code template on the right
4. Select Beginner or Medium difficulty
5. Click problem to start coding challenge
6. If stuck, scroll down to YouTube Helper
7. Paste problem → Search YouTube → Learn from videos

### **Roadmap**
1. **Browse Courses**: See all available learning paths
2. **Learn from Top Mentors**: 
   - See specializations and ratings
   - Find mentor for your learning goals
3. **Explore Jobs**:
   - Filter by Tech/Non-Tech roles
   - View salary and demand
   - Read 4-step learning roadmap
   - Click "View Full Roadmap" for detailed path

## 🎯 Key Features Summary

| Feature | Source | Details |
|---------|--------|---------|
| **LeetCode Integration** | LeetCode | 25+ problems with platform links |
| **HackerRank Integration** | HackerRank | 25+ problems with platform links |
| **Company Interviews** | Custom DB | 40 questions from 8 top companies |
| **Beginner/Medium Problems** | Custom DB | 60 problems across 6 languages |
| **Top Mentors** | Custom DB | 5 mentors with 4.7-4.9★ ratings |
| **Job Market Insights** | Custom DB | 8 trending jobs with salary & roadmaps |
| **Multi-Language Support** | Platform | Java, Python, C++, C, SQL, JavaScript |
| **Dark Theme** | Design | Professional developer aesthetic |
| **Responsive UI** | Design | Mobile, tablet, desktop optimized |

## 🌟 What's Unique

1. **All-in-One Learning Platform**: LeetCode + HackerRank + Company Interviews in one app
2. **Company-Specific Practice**: Real interview questions from top tech companies
3. **Smart Job Matching**: See trending roles and their complete learning paths
4. **Multi-Language Support**: Practice same concepts in 6 different languages
5. **Industry Mentor Directory**: Connect with top educators in one place
6. **Interactive Workspace**: Integrated YouTube helper for when you get stuck

## 🚀 Next Steps

- Deploy to Vercel/Netlify
- Integrate real code execution (Monaco Editor)
- Add problem submission & testing
- Connect to backend API
- Implement real database for user progress
- Add problem discussion forums
- Real-time competitive coding
- Leaderboards and achievements

## 📄 License

Open source for educational purposes.

---

**Built with ❤️ for developers | Smart E-Learning v2.0**

## 🚀 Features

### **Authentication**
- Fully functional login/signup system
- Form validation with error handling
- Beautiful gradient-based auth UI with animations
- Demo credentials: `demo@example.com` / `demo123`

### **Dashboard**
- Performance stats: Daily Streak, Problems Solved, Total Problems, Languages
- Courses in Progress tracking
- Recommended courses based on learning path
- Interactive course cards with progress bars
- Language badges

### **Coding Problems Hub** (LeetCode-Inspired)
- Browse 50+ coding problems across multiple levels
- Filter by difficulty: Easy, Medium, Hard
- Filter by programming language: Java, Python, C++, JavaScript, SQL
- Search functionality by problem title/category
- Problem metrics: Acceptance rate, likes, difficulty color-coding
- Problem status tracking (Solved/Unsolved)
- Statistics summary (Easy/Medium/Hard breakdown)

### **Programming Languages Supported**
- Java ☕
- Python 🐍
- C++ ⚙️
- C 🔤
- SQL 🗄️
- JavaScript 📜

### **Smart Roadmap**
- Visual learning path showing course progression
- Module connections (e.g., Java Basics → OOP → Collections)
- Course dependency visualization
- Difficulty progression tracking

### **Advanced Coding Workspace** ⭐ NEW
- **Multi-Language Support**: Switch between Java, Python, C++, C, SQL, JavaScript instantly
- **Language Switcher Component**: Beautiful emoji-based language selection UI
- **Live Code Templates**: Language-specific code examples (boilerplate patterns)
- **Code Preview**: See syntax highlighting for each language
- **YouTube Helper Tool** 🎬 NEW:
  - **Paste Problem Feature**: Users can paste coding problems directly
  - **Clipboard Import**: One-click paste button for quick content transfer
  - **YouTube Search Integration**: Automatically search YouTube for solutions
  - **Direct Links**: Open YouTube search results in new tab with optimized queries
  - **Smart Suggestions**: Tips for better search results (include language + topic)
  - **Beautiful Red-themed UI**: Matches YouTube branding
  - **Responsive Design**: Works on mobile and desktop
- **Run & Submit Buttons**: Ready for future code execution integration
- **Real Code Editor Placeholder**: Space reserved for Monaco/CodeMirror integration
- Course search bar
- Notification bell with indicator
- User profile dropdown with logout
- Responsive mobile menu
- Navigation between all sections

## 🎨 Design & Animations

### **Visual Features**
- **Dark Mode Default**: Professional dev-friendly dark theme
- **Color Scheme**: Accent purple (#7c3aed) + grayscale palette
- **Typography**: Inter font family with 6+ font weights
- **Responsive**: Mobile-first design with Tailwind Grid/Flexbox

### **Interactive Animations**
- Fade-in effects on page load
- Slide-up animations for cards
- Smooth hover transitions on interactive elements
- Scale-up animations for course cards
- Pulse-glow effects for notifications
- Custom scrollbar styling

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Styling & responsive design
- **Vite 5** - Lightning-fast bundler
- **Lucide React** - Clean, consistent icons
- **JavaScript** - Interactive features & animations

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start the dev server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:5173/`

### **Build for production:**
```bash
npm run build
npm run preview
```

## 📚 Project Structure

```
src/
├── context/
│   ├── AuthContext.jsx        # Authentication state management
│   └── UserContext.jsx        # User progress & preferences
├── components/
│   ├── Navbar.jsx             # Top navigation & user menu
│   ├── CourseCard.jsx         # Course progress cards
│   ├── LessonMarkdown.jsx    # Markdown lesson renderer
│   ├── EditorPlaceholder.jsx # Language-specific code editor
│   ├── LanguageSwitcher.jsx  # Multi-language selection UI
│   ├── YouTubeHelper.jsx     # Problem → YouTube search integration
│   └── LearningPath.jsx      # Learning roadmap visualization
├── pages/
│   ├── Login.jsx              # Auth (Login/Sign Up)
│   ├── Dashboard.jsx          # Main dashboard & stats
│   ├── Problems.jsx           # Problem explorer hub
│   ├── Workspace.jsx          # Advanced coding workspace
│   └── Roadmap.jsx           # Learning path visualization
├── utils/
│   └── codeSnippets.js       # Language-specific code templates
├── App.jsx                    # Main app routing
├── main.jsx                   # React entry point
├── index.css                  # Global styles + animations
└── data.js                    # Mock data (courses, problems, user)
```

## 🎯 Key References (Inspired by)

### **LeetCode Elements**
- Problem difficulty levels (Easy/Medium/Hard)
- Acceptance rate percentages
- Problem statistics & filtering
- Solve/Unsolved tracking

### **CodeChef Elements**
- Language-specific problem sets
- Multiple language support (Java, Python, C++, JavaScript, SQL)
- Category-based problem organization
- Contest-like problem organization

### **GeeksforGeeks Elements**
- Topic-based learning paths
- Structured course progression
- Module dependencies
- Concept-driven roadmaps

## 🔮 Future Enhancements

- Integrate **Monaco Editor** or **CodeMirror** for real code execution
- Backend API integration for user persistence
- Real-time collaborative coding
- Problem submissions & test cases
- Leaderboards & achievements
- Code syntax highlighting improvements
- Dark/Light theme toggle
- User preferences & settings

## 🎓 Usage

### **Coding Workspace - Using YouTube Helper**
1. Navigate to **Workspace** page
2. Click on language button to switch between Java, Python, C++, C, SQL, JavaScript
3. View language-specific code templates in the editor
4. If you're stuck on a problem:
   - Scroll down to **"Need Help? Find Solutions on YouTube"** section
   - **Option A**: Paste your problem statement in the text area
   - **Option B**: Click **"📋 Paste from Clipboard"** to auto-paste
   - Click **"Search YouTube"** button
   - A YouTube search opens automatically with your query
   - Find the most relevant tutorial videos
5. Return and continue learning!

**Example Queries:**
- "Python list comprehension tutorial"
- "LeetCode Two Sum solution Java"
- "C++ pointer segmentation fault error"
- "SQL JOIN query example"

### **First-Time User**
1. Sign up with email & full name
2. Select preferred programming language
3. Browse dashboard for recommended courses
4. Click "Start" on any course to begin learning

### **Experienced User**
1. Login with credentials
2. Check daily streak on dashboard
3. Browse **Problems** section for coding challenges
4. Use **Workspace** to read lessons and code
5. Follow **Roadmap** for structured learning paths

## 🎨 Customization

### **Change Accent Color**
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#your-color-here'
}
```

### **Add New Courses**
Update `src/data.js`:
```javascript
export const courses = [
  { id: 'new-id', title: 'New Course', ... }
]
```

### **Modify Animations**
Edit animation timing in `src/index.css` animation sections.

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for developers | Smart E-Learning Platform**
