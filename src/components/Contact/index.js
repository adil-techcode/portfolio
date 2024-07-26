import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from 'styled-components';


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
background: ${({ theme }) => theme.white};
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 1rem 80px 1rem;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 3rem;
text-align: center;
font-weight: 600;
  color: ${({ theme }) => theme.dark};
  @media (max-width: 768px) {
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-top: 60px;
    color: ${({ theme }) => theme.dark};
    @media (max-width: 768px) {
        margin-top: 30px;
        font-size: 16px;
        padding: 0 1rem;
    }
`;




const Contact = () => {

  
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const theme = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <Container id="contact">
      <div className='line'></div>
      <Wrapper>
        <Desc>Get in Touch</Desc>
        <Title>Contact Me</Title>
        <div className='contact-info-upper-container'>
        <form action="mailto:adil.techcode@gmail.com" method="post" enctype="text/plain">
    <div className='info-field'>
        <input type="text" placeholder='Name' required />
        <input type="email" placeholder='Email' required />
    </div>
    <div>
        <input type="text" placeholder='Subject' className='subject-field' required />
    </div>
    <div>
        <textarea placeholder='Message' required></textarea>
    </div>
    <div  className='btn-div' >
        <button type="submit"   style={{padding: '10px 16px', borderRadius:"10px" ,background: `${theme.text_primary}`, color: 'white',width: 'max-content'}}     >Send</button>
    </div>
</form>

          
      </div>
      </Wrapper>
    </Container>
  )
}

export default Contact