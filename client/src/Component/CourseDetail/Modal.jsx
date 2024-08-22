// import styled, { keyframes } from 'styled-components';
// import PropTypes from 'prop-types';
// const zoomIn = keyframes`
//   from {
//     transform: scale(0.7);
//     opacity: 0;
//   }
//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 500px;
//   max-width: 100%;
//   animation: ${zoomIn} 0.3s ease-in-out;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 0px;
//   background: none;
//   border: none;
//   font-size: 20px;
//   cursor: pointer;
// `;

// function Modal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={onClose}>×</CloseButton>

//       </ModalContent>
//     </ModalOverlay>
//   );
// }
// Modal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };
// export default Modal;


import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const zoomIn = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  animation: ${zoomIn} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Course Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="firstName">First Name</Label>
          <InputField id="firstName" type="text" required />

          <Label htmlFor="lastName">Last Name</Label>
          <InputField id="lastName" type="text" required />

          <Label htmlFor="email">Email</Label>
          <InputField id="email" type="email" required />

          <Label htmlFor="courseDuration">Course Duration</Label>
          <InputField id="courseDuration" type="text" required />

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
