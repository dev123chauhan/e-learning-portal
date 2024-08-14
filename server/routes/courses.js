const express = require('express');
const router = express.Router();
const coursesContent = [
  {
    id: 1, 
    image: "/images/card1.png",
    title: "Html Css & Javascript",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 2,
    image: "/images/card2.png",
    title: "Python Fundamental",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 3,
    image: "/images/card3.png",
    title: "C Programming",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 4,
    image: "/images/card4.png",
    title: "C++",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 5,
    image: "/images/card5.png",
    title: "React",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 6,
    image: "/images/card6.png",
    title: "Node.Js",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 7,
    image: "/images/card7.png",
    title: "Mongodb",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 8,
    image: "/images/card8.png",
    title: "Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
];

router.get('/courses', (req, res) => {
  const { search } = req.query;
  
  if (search) {
    const filteredCourses = coursesContent.filter(course => 
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.text.toLowerCase().includes(search.toLowerCase()) ||
      course.tag.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredCourses);
  } else {
    res.json(coursesContent);
  }
});

module.exports = router;
