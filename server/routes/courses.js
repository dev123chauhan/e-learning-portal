const express = require('express');
const router = express.Router();


const coursesContent = [
  {
    id: 1, 
    image: "/images/Html css and javascript.png",
    title: "Html Css & Javascript",
    description: "Master the basics of web development with HTML, CSS, and JavaScript, the foundational technologies that power the web. In this course, you'll learn to build responsive and visually appealing websites from scratch.",
    bullets: [
      "Introduction to HTML structure and elements",
      "Styling websites with CSS, including Flexbox and Grid",
      "Dynamic content creation using JavaScript",
      "Building responsive layouts",
      "Best practices for web design and development"
    ],
    tag: "Web Development",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 2,
    image: "/images/python.jpg",
    title: "Python Fundamentals",
    description: "Learn Python, one of the most popular and versatile programming languages, from the ground up. This course covers basic to intermediate concepts, allowing you to write efficient and readable code.",
    bullets: [
      "Understanding Python syntax and semantics",
      "Working with data structures like lists, tuples, and dictionaries",
      "Control flow and loops in Python",
      "Introduction to functions and modules",
      "Basic file handling and exception handling"
    ],
    tag: "Programming",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 3,
    image: "/images/c programming.png",
    title: "C Programming",
    description: "Get a solid understanding of C programming, a powerful language used in a variety of applications from system programming to game development. This course provides a strong foundation in procedural programming.",
    bullets: [
      "Basics of C language syntax and structure",
      "Memory management and pointers",
      "Working with arrays, strings, and structures",
      "Understanding functions and recursion",
      "File handling in C"
    ],
    tag: "Programming",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 4,
    image: "/images/c++.jpg",
    title: "C++",
    description: "Advance your programming skills with C++, focusing on object-oriented principles and system-level programming. This course will help you develop efficient and high-performance applications.",
    bullets: [
      "Introduction to object-oriented programming concepts",
      "Working with classes and objects",
      "Inheritance, polymorphism, and encapsulation",
      "Memory management and smart pointers",
      "Templates and exception handling in C++"
    ],
    tag: "Programming",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 5,
    image: "/images/react.jpg",
    title: "React",
    description: "Learn React, a JavaScript library for building user interfaces, and create dynamic web applications. This course covers everything from setting up a React environment to building complex applications.",
    bullets: [
      "Introduction to React and JSX",
      "Managing state and props",
      "Component lifecycle methods",
      "Building single-page applications (SPAs)",
      "Working with React Router and Redux"
    ],
    tag: "Web Development",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 6,
    image: "/images/nodejs.jpg",
    title: "NodeJs",
    description: "Discover how to build fast and scalable server-side applications with Node.js. This course will guide you through the process of creating APIs and handling asynchronous operations.",
    bullets: [
      "Introduction to Node.js and npm",
      "Building RESTful APIs with Express.js",
      "Asynchronous programming and event-driven architecture",
      "Working with databases (MongoDB, SQL)",
      "Deploying Node.js applications"
    ],
    tag: "Backend Development",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 7,
    image: "/images/mongodb.png",
    title: "Mongodb",
    description: "Learn how to work with MongoDB, a leading NoSQL database, to store and manage large datasets. This course covers the fundamentals of MongoDB and its integration with other technologies.",
    bullets: [
      "Introduction to NoSQL databases and MongoDB",
      "CRUD operations in MongoDB",
      "Data modeling and schema design",
      "Indexing and aggregation in MongoDB",
      "Integrating MongoDB with Node.js"
    ],
    tag: "Database",
    duration: "3 Months",
    price: "$80"
  },
  {
    id: 8,
    image: "/images/java.jpg",
    title: "Java",
    description: "Gain a strong foundation in Java, one of the most widely used programming languages in the world. This course covers everything from basic syntax to more advanced concepts like multithreading and networking.",
    bullets: [
      "Understanding Java syntax and object-oriented programming",
      "Working with classes, interfaces, and inheritance",
      "Exception handling and file I/O",
      "Multithreading and concurrency in Java",
      "Introduction to networking and Java APIs"
    ],
    tag: "Programming",
    duration: "3 Months",
    price: "$80"
  },
];



router.get('/courses', (req, res) => {
  const { search } = req.query;

  if (search) {
    const lowerCaseSearch = search.toLowerCase();
    const regex = new RegExp(lowerCaseSearch, 'i'); // 'i' flag for case-insensitive search

    const filteredCourses = coursesContent.filter(course => 
      regex.test(course.title) ||
      regex.test(course.description) ||
      regex.test(course.tag)
    );

    res.json(filteredCourses);
  } else {
    res.json(coursesContent);
  }
});


router.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = coursesContent.find(c => c.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

module.exports = router;


// router.get('/courses', (req, res) => {
//   const { search } = req.query;
  
//   if (search) {
//     const filteredCourses = coursesContent.filter(course => 
//       course.title.toLowerCase().includes(search.toLowerCase()) ||
//       course.description.toLowerCase().includes(search.toLowerCase()) ||
//       course.tag.toLowerCase().includes(search.toLowerCase())
//     );
//     res.json(filteredCourses);
//   } else {
//     res.json(coursesContent);
//   }
// });
// router.get('/courses', (req, res) => {
//   const { search } = req.query;

//   if (search) {
//     const searchTerm = search.trim().toLowerCase();
//     const searchRegex = new RegExp(searchTerm, 'i');

//     const filteredCourses = coursesContent.filter(course => 
//       searchRegex.test(course.title) ||
//       searchRegex.test(course.description) ||
//       searchRegex.test(course.tag)
//     );

//     res.json(filteredCourses);
//   } else {
//     res.json(coursesContent);
//   }
// });


// router.get('/courses', (req, res) => {
//   const { search } = req.query;

//   if (search) {
//     const lowerCaseSearch = search.toLowerCase();

//     const filteredCourses = coursesContent.filter(course => 
//       course.title.toLowerCase().includes(lowerCaseSearch) ||
//       course.description.toLowerCase().includes(lowerCaseSearch) ||
//       course.tag.toLowerCase().includes(lowerCaseSearch)
//     );

//     res.json(filteredCourses);
//   } else {
//     res.json(coursesContent);
//   }
// });


// const coursesContent = [
//   {
//     id: 1, 
//     image: "/images/Html css and javascript.png",
//     title: "Html Css & Javascript",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 2,
//     image: "/images/python.webp",
//     title: "Python Fundamentals",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 3,
//     image: "/images/c programming.png",
//     title: "C Programming",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 4,
//     image: "/images/c++.jpg",
//     title: "C++",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 5,
//     image: "/images/react.jpg",
//     title: "React",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 6,
//     image: "/images/nodejs.jpg",
//     title: "NodeJs",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 7,
//     image: "/images/mongodb.png",
//     title: "Mongodb",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
//   {
//     id: 8,
//     image: "/images/java.jpg",
//     title: "Java",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     tag: "Design",
//     duration: "3 Month",
//     price: "$80"
//   },
// ];