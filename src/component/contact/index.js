import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { CheckCircle } from '@mui/icons-material';
import { ScaleLoader } from 'react-spinners';
import { styled as muiStyled } from '@mui/material/styles'; // Fix this line

import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const Contact = () => {
  const [loading, setLoading] = useState(false); // For spinner
  const [open, setOpen] = useState(false); // For success modal
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const formElements = form.current.elements;
    let validationErrors = {};
    let isValid = true;

    if (!formElements['from_email'].value) {
      validationErrors.from_email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formElements['from_email'].value)) {
      validationErrors.from_email = 'Invalid email format';
      isValid = false;
    }

    if (!formElements['from_name'].value) {
      validationErrors.from_name = 'Name is required';
      isValid = false;
    }

    if (!formElements['subject'].value) {
      validationErrors.subject = 'Subject cannot be empty';
      isValid = false;
    }

    if (!formElements['message'].value) {
      validationErrors.message = 'Message cannot be empty';
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Validation errors:', errors);
      return;
    }

    setLoading(true); // Start spinner
    emailjs
      .sendForm('service_z810jqf', 'template_2zvduqh', form.current, 'ZA_j519mzvnaPMiKn')
      .then(
        () => {
          setLoading(false); // Stop spinner
          setOpen(true); // Open success modal
          form.current.reset();
          setErrors({});
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const StyledDialog = muiStyled(Dialog)`
  .MuiPaper-root {
    color: white;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 
                0px 24px 38px 3px rgba(0, 0, 0, 0.14), 
                0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    background: rgb(23, 23, 33);
    border-radius: 14px;
    border: 0.1px solid rgb(133, 76, 230);
  }
`;

const StyledDialogTitle = muiStyled(DialogTitle)`
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-size: 62px;
  font-style: normal;
  text-align: center;
  color: white;
`;

const StyleDialogActions = muiStyled(DialogActions)`
   display: flex;
    justify-content: center;
`;



  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <div>
            <ContactInput placeholder="Your Email" name="from_email" />
            {errors.from_email && (
              <p style={{ color: '#e14646', fontSize: '10px', marginLeft: '10px' }}>{errors.from_email}</p>
            )}
          </div>
          <div>
            <ContactInput placeholder="Your Name" name="from_name" />
            {errors.from_name && (
              <p style={{ color: '#e14646', fontSize: '10px', marginLeft: '10px' }}>{errors.from_name}</p>
            )}
          </div>
          <div>
            <ContactInput placeholder="Subject" name="subject" />
            {errors.subject && (
              <p style={{ color: '#e14646', fontSize: '10px', marginLeft: '10px' }}>{errors.subject}</p>
            )}
          </div>
          <div>
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            {errors.message && (
              <p style={{ color: '#e14646', fontSize: '10px', marginLeft: '10px' }}>{errors.message}</p>
            )}
          </div>
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        {loading && <ScaleLoader color="#6c63ff" />}
        <StyledDialog open={open} onClose={handleCloseModal}>
        <StyledDialogTitle>Thank You</StyledDialogTitle>
        <DialogContent>
          <p className='param'>Your email has been sent successfully!</p>
        </DialogContent>
        <StyleDialogActions>
          <Button className='okbtn' onClick={handleCloseModal} style={{ color: 'white' }}>OK</Button>
        </StyleDialogActions>
      </StyledDialog>

      </Wrapper>
    </Container>
  );
};
