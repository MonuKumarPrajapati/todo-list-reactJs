// import React from 'react'

// const Modal = () => {
//   return (
//       <div>
//           // src/components/Modal.jsx
// import React from 'react';
// import styled from 'styled-components';

//           // Styled-components for the modal
      
// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContainer = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 400px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ModalHeader = styled.h2`
//   margin-top: 0;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 100%;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Modal = ({ show, task, onSave, onClose }) => {
//   const [editText, setEditText] = React.useState(task ? task.text : '');

//   React.useEffect(() => {
//     if (task) {
//       setEditText(task.text); // Update the text when task changes
//     }
//   }, [task]);

//   if (!show) return null; // Don't render the modal if it's not supposed to be shown

//   const handleSave = () => {
//     onSave(editText); // Call the onSave function passed from props
//     onClose();        // Close the modal after saving
//   };

//   return (
//     <ModalBackground onClick={onClose}>
//       <ModalContainer onClick={(e) => e.stopPropagation()}>
//         <ModalHeader>Edit Task</ModalHeader>
//         <Input
//           type="text"
//           value={editText}
//           onChange={(e) => setEditText(e.target.value)}
//         />
//         <Button onClick={handleSave}>Save</Button>
//       </ModalContainer>
//     </ModalBackground>
//   );
// };

// export default Modal;
//     </div>
//   )
// }

// export default Modal

// import React, { useState } from 'react'

// const Modal = ({todo}) => {
//     const [editText, setEditText] = useState(todo ? todo.todo: '')
//     console.log(editText);

//     const handleSave = () => {
        
//     }
    
//   return (
//       <div className=' fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 flex justify-center items-center' >
//           <div className=' bg-white p-5 rounded-xl w-[400px] shadow-sm'>
//               <div className='mt-0'><h2>Edit Task</h2></div>
//               <input
//           className="  py-1 px-2 my-2 w-[80%] rounded-[14px] font-semibold "
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Write Your Todo"
//               />
//               <button onClick={handleSave}>Save</button>
               
//         </div>
//     </div>
//   )
// }

// export default Modal