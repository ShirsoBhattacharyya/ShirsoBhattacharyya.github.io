import Phone from "../../assets/pngs/phone.png";
import Address from "../../assets/pngs/address.png";
import Email from "../../assets/pngs/email.png";
import Style from "./Contact.module.scss";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" positon="relative">
      <h1 style={{ padding: "4rem 0", textAlign: "center", fontSize: "38px" }}>
        CONTACT ME :
      </h1>
      <Box
        border="2px solid"
        borderRadius="25px"
        padding="2rem 0"
        margin="4rem"
      >
        <Box
          padding="2rem"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
              What’s your story? Get in touch. Always available to get to know
              your contributions as a problem solver.
            </p>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          margin="0 1rem"
          borderRadius="25px"
        >
          <Box className={Style.contactinfoitem}>
            <img src={Phone} alt="" className={Style.cicon} />
            +91 81001 53339
          </Box>
          <Box className={Style.contactinfoitem}>
            <img className={Style.cicon} src={Email} alt="" />
            shirso369@gmail.com
          </Box>
          <Box className={Style.contactinfoitem}>
            <img className={Style.cicon} src={Address} alt="" />
            Hooghly, West Bengal, India.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
