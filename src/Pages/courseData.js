// courseData.js

const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn React from scratch with hands-on examples.',
      detailedDescription: `This course is designed for beginners who want to master React. We’ll start with the fundamentals like JSX, components, state, and props. By the end of this course, you'll be able to build simple React applications. The course will also cover React Router for navigation and state management using React Context. 
      Fees: $199. Start Date: 1st March 2025. Duration: 4 weeks. 
      Requirements: Basic knowledge of HTML, CSS, and JavaScript.`,
      instructor: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyoAP6-adn7bAxTWigCpTv-5cW6XMxdUZjg&s',
    },
    {
      id: 2,
      title: 'Advanced Python Programming',
      description: 'Master Python programming with real-world projects.',
      detailedDescription: `Take your Python skills to the next level with this advanced course. Learn about Python's powerful features like decorators, generators, and context managers. The course will dive deep into building real-world applications including web scrapers, data analysis with Pandas, and more. 
      Fees: $249. Start Date: 15th April 2025. Duration: 6 weeks. 
      Requirements: Intermediate Python knowledge is recommended.`,
      instructor: 'Jane Smith',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      description: 'Understand the basics of design and user experience.',
      detailedDescription: `This course introduces the principles of UI/UX design. You'll learn how to create intuitive and attractive interfaces. Topics include wireframing, prototyping, and user testing. You'll also gain experience in tools like Figma and Adobe XD. 
      Fees: $150. Start Date: 10th February 2025. Duration: 3 weeks. 
      Requirements: No prior design knowledge is required, but basic computer skills are helpful.`,
      instructor: 'Emily Clark',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 4,
      title: 'Data Science with Python',
      description: 'Analyze and visualize data using Python.',
      detailedDescription: `In this course, you'll learn how to analyze and visualize data using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn. You'll work on real-world data analysis projects, from data cleaning to creating interactive dashboards.
      Fees: $299. Start Date: 1st May 2025. Duration: 8 weeks. 
      Requirements: Basic knowledge of Python programming is required.`,
      instructor: 'Samuel Green',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 5,
      title: 'Machine Learning with Python',
      description: 'Learn how to implement machine learning algorithms using Python.',
      detailedDescription: `This course will guide you through the basics of machine learning. You will cover both supervised and unsupervised learning techniques, including linear regression, decision trees, and clustering. By the end, you'll have the skills to implement machine learning models from scratch.
      Fees: $349. Start Date: 5th June 2025. Duration: 10 weeks. 
      Requirements: Intermediate Python skills are required, along with basic math knowledge.`,
      instructor: 'Robert Williams',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      description: 'Build full-stack web applications from scratch.',
      detailedDescription: `This bootcamp covers everything you need to know to build a modern, full-stack web application. From HTML, CSS, and JavaScript to server-side programming and database management, you'll get hands-on experience in every aspect of web development.
      Fees: $499. Start Date: 1st July 2025. Duration: 12 weeks. 
      Requirements: No prior programming knowledge required.`,
      instructor: 'Alex Johnson',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 7,
      title: 'Digital Marketing Strategy',
      description: 'Learn digital marketing techniques to grow your business.',
      detailedDescription: `This course will teach you how to develop and implement a digital marketing strategy. Topics include SEO, social media marketing, content marketing, email marketing, and Google Ads. You'll also learn how to analyze and optimize your marketing campaigns.
      Fees: $199. Start Date: 20th August 2025. Duration: 6 weeks. 
      Requirements: No prior marketing knowledge is necessary.`,
      instructor: 'Sarah Mitchell',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 8,
      title: 'Cloud Computing Fundamentals',
      description: 'Understand cloud computing and how to deploy applications on cloud platforms.',
      detailedDescription: `This course will give you an introduction to cloud computing, covering the basics of cloud infrastructure, cloud storage, and cloud services. You'll learn how to deploy applications on platforms like AWS and Azure.
      Fees: $249. Start Date: 25th September 2025. Duration: 4 weeks. 
      Requirements: Basic understanding of programming is recommended.`,
      instructor: 'William Brown',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 9,
      title: 'Cybersecurity Essentials',
      description: 'Learn how to protect data and networks from cyber threats.',
      detailedDescription: `This course covers the fundamentals of cybersecurity, including how to secure networks, prevent hacking attempts, and protect sensitive data. You'll learn about encryption, firewalls, and ethical hacking techniques.
      Fees: $199. Start Date: 1st October 2025. Duration: 5 weeks. 
      Requirements: Basic computer literacy required.`,
      instructor: 'David Lee',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
    {
      id: 10,
      title: 'Blockchain Technology and Cryptocurrencies',
      description: 'Understand how blockchain works and its applications in cryptocurrencies.',
      detailedDescription: `This course introduces the concepts of blockchain technology and its use in cryptocurrencies. Learn how Bitcoin and Ethereum work, and explore decentralized applications (DApps), smart contracts, and blockchain development.
      Fees: $299. Start Date: 15th November 2025. Duration: 7 weeks. 
      Requirements: Basic understanding of programming is recommended.`,
      instructor: 'Olivia Evans',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGOw3UqnJ79dkaFlvFENKnO5B9HYpSuiTw&s',
    },
  ];
  
  export default courses;
  