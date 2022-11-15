import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Phone from '../../assets/pngs/phone.png';
import Address from '../../assets/pngs/address.png';
import Email from '../../assets/pngs/email.png';
import Style from './Contact.module.scss';
import { info } from "../../information/information";
import {Box} from '@mui/material';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
  <Box id='contact' positon='relative'>
      <h1 style={{padding:'4rem 0',textAlign:'center',fontSize:'38px'}}>CONTACT ME :</h1>
      {/* <Box width='2.5rem' height='60%' top='50' left='0' position='absolute' style={{background:info.gradient, WebkitTextFillColor: 'transparent'}}></Box> */}
      <Box border='2px solid' borderRadius='25px' padding='2rem 0' margin='4rem'>
        <Box padding='2rem' display='flex' flexDirection='column' alignItems='center'>
            <Box display='flex' flexWrap='wrap' justifyContent='center'>
              <p style={{fontWeight:'600',fontSize:'18px'}}>
                What’s your story? Get in touch. Always available to get to know your contributions as a problem solver.
              </p>
            </Box>
          {/* <form ref={formRef} onSubmit={handleSubmit} >
            <br />
            <Box>
              <input type="text" placeholder="Name" name="user_name" />
            </Box>
            <Box>
              <input type="text" placeholder="Subject" name="user_subject" />
            </Box>
            <Box>
              <input type="text" placeholder="Email" name="user_email" />
            </Box>
            <Box>
              <textarea rows="4" placeholder="Message" name="message" />
            </Box>
            <button style={{padding:"1rem 1.5rem",background:info.gradient}}>Submit</button>
            {done && "Thanks for contacting"}
          </form> */}
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' margin='0 1rem' borderRadius='25px'>
          {/* <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding='1rem 2rem' gap='2rem'> */}
            <Box className={Style.contactinfoitem}>
              <img src={Phone} alt="" className={Style.cicon} />
              +91 81001 53339
            </Box>
            <Box className={Style.contactinfoitem}>
              <img className={Style.cicon} src={Email} alt="" />
              shirso369 @gmail.com
            </Box>
            <Box className={Style.contactinfoitem}>
              <img className={Style.cicon} src={Address} alt="" />
              Hooghly, West Bengal, India.
            </Box>
          </Box> 
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Contact;
