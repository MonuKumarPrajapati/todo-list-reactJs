import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Model';

// Styled-components
const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #e0e0e0;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.color || '#007bff'};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#0056b3'};
  }
`;


const ClearAllContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SecondaryButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;


const TodoList = ({ tasks, onDeleteTask, onUpdateTask,totalTasks, onClear }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Open modal and set the current task for editing
  const handleEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  // Handle the save operation in modal
  const handleSave = (newText) => {
    onUpdateTask(taskToEdit.id, newText);
    setIsModalOpen(false); // Close modal after saving
  };

  return (
    <>
      <ListContainer>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <span>{task.text}</span>
            <div>
              <Button onClick={() => handleEdit(task)} color="orange" hoverColor="darkorange">
                Edit
              </Button>
              <Button onClick={() => onDeleteTask(task.id)} color="red" hoverColor="darkred">
                Delete
              </Button>
            </div>
          </ListItem>
        ))}
      </ListContainer>





      {/* Render the modal and pass props */}
      <Modal
        show={isModalOpen}
        task={taskToEdit}
        onSave={handleSave}
        onClose={() => setIsModalOpen(false)}
      />





       <ClearAllContainer>
        <p>Total Tasks: {totalTasks}</p>
         <SecondaryButton onClick={onClear}>Clear All Tasks</SecondaryButton>
       </ClearAllContainer>

      





    </>
  );
};

export default TodoList;