import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Phone from '../../assets/pngs/phone.png';
import Address from '../../assets/pngs/address.png';
import Email from '../../assets/pngs/email.png';
import Style from './Contact.module.scss';
import { info } from "../../information/information";

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
    <div className={Style.c}>
      <div className={Style.cbg}></div>
      <div className={Style.cwrapper}>
        <div className={Style.cleft}>
          <h1 className={Style.ctitle}>Contact Me</h1>
          <div className={Style.cinfo}>
            <div className={Style.cinfoitem}>
              <img src={Phone} alt="" className={Style.cicon} />
              +91 81001 53339
            </div>
            <div className={Style.cinfoitem}>
              <img className={Style.cicon} src={Email} alt="" />
              shirso369@gmail.com
            </div>
            <div className={Style.cinfoitem}>
              <img className={Style.cicon} src={Address} alt="" />
              43/1,G.M. Sinha Lane, P.O-Seoraphuli, Dist-Hooghly, State-West Bengal,Pin-712223,Country-India.
            </div>
          </div>
        </div>
        <div className={Style.cright}>
          <p className={Style.cdesc}>
            <b>What’s your story?</b> Get in touch. Always available to get to know your contributions as a problem solver.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" name="user_name" />
            </div>
            <div>
              <input type="text" placeholder="Subject" name="user_subject" />
            </div>
            <div>
              <input type="text" placeholder="Email" name="user_email" />
            </div>
            <div>
              <textarea rows="5" placeholder="Message" name="message" />
            </div>
            <button style={{padding:"1rem 1.5rem",background:info.gradient}}>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
