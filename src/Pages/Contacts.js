import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import "../Styles/Contacts.css";

export default function Contacts() {
  return (
    <div id="contact">
      <div>
        <h1>Get in touch</h1>
        <span />
        <div id="contacts">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/davide-oliveira-1b7312333"
          >
            <FaLinkedin />
          </a>
          <a 
            target="_blank"
            href="mailto:davide.gl.oliveira@gmail.com"
          >
            <IoMdMail />
          </a>
          <a 
            target="_blank"
            href="https://github.com/DGLOliveira"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}