import { Table } from 'antd';
// const AssignmentItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   margin-bottom: 10px;
//   background-color: #f0f0f0;
//   border-radius: 5px;
//   margin-top: 10px;
// `;

const Assignment = () => {
  const assignments = [
    { id: 1, title: 'HTML Basics - Document Structure', dueDate: '2024-09-05', completed: false },
    { id: 2, title: 'HTML Forms and Input Elements', dueDate: '2024-09-08', completed: false },
    { id: 3, title: 'HTML5 Semantic Elements', dueDate: '2024-09-11', completed: false },
    { id: 4, title: 'HTML Tables and Lists', dueDate: '2024-09-14', completed: false },
    { id: 5, title: 'CSS Selectors and Specificity', dueDate: '2024-09-17', completed: false },
    { id: 6, title: 'CSS Box Model and Layouts', dueDate: '2024-09-20', completed: false },
    { id: 7, title: 'CSS Flexbox', dueDate: '2024-09-23', completed: false },
    { id: 8, title: 'CSS Grid', dueDate: '2024-09-26', completed: false },
    { id: 9, title: 'CSS Transitions and Animations', dueDate: '2024-09-29', completed: false },
    { id: 10, title: 'Responsive Web Design with CSS', dueDate: '2024-10-02', completed: false },
    { id: 11, title: 'JavaScript Variables and Data Types', dueDate: '2024-10-05', completed: false },
    { id: 12, title: 'JavaScript Functions and Scope', dueDate: '2024-10-08', completed: false },
    { id: 13, title: 'JavaScript Arrays and Objects', dueDate: '2024-10-11', completed: false },
    { id: 14, title: 'DOM Manipulation with JavaScript', dueDate: '2024-10-14', completed: false },
    { id: 15, title: 'JavaScript Event Handling', dueDate: '2024-10-17', completed: false },
    { id: 16, title: 'Asynchronous JavaScript - Promises and Async/Await', dueDate: '2024-10-20', completed: false },
    { id: 17, title: 'JavaScript ES6+ Features', dueDate: '2024-10-23', completed: false },
    { id: 18, title: 'JavaScript Error Handling and Debugging', dueDate: '2024-10-26', completed: false }
  ];

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Assignment Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
  ];


  return (
    <div style={{ padding: '20px' }}>
    <h2>HTML, CSS, and JavaScript Assignments</h2>
    <Table 
      columns={columns} 
      dataSource={assignments} 
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  </div>
  );
};

export default Assignment;













// import  { useState } from 'react';



// const Assignment = () => {
//   const [code, setCode] = useState('');
//   const [feedback, setFeedback] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // This is where you'd typically send the code to a backend for evaluation
//     // For this example, we'll just check if the code includes certain keywords
//     if (code.includes('<html>') && code.includes('<body>') && code.includes('</html>')) {
//       setFeedback({ type: 'success', message: 'Great job! Your HTML structure looks correct.' });
//     } else {
//       setFeedback({ type: 'error', message: 'Oops! Make sure you have the basic HTML structure in place.' });
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>HTML Structure Assignment</h2>
//       <p style={{ marginBottom: '20px' }}>
//         Create a basic HTML structure including <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.
//       </p>
      
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           style={{
//             width: '100%',
//             height: '200px',
//             padding: '10px',
//             marginBottom: '20px',
//             border: '1px solid #ccc',
//             borderRadius: '4px'
//           }}
//           placeholder="Enter your HTML code here..."
//         />
//         <button 
//           type="submit"
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Submit
//         </button>
//       </form>

//       {feedback && (
//         <div 
//           style={{
//             marginTop: '20px',
//             padding: '10px',
//             borderRadius: '4px',
//             backgroundColor: feedback.type === 'success' ? '#d4edda' : '#f8d7da',
//             color: feedback.type === 'success' ? '#155724' : '#721c24'
//           }}
//         >
//           <p>{feedback.message}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assignment;
// import styled from "styled-components";
