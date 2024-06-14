import { useRef, useState } from "react";
import "./contact.css";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import {sendEmail} from "../utils/sentRequest"
import { Loader, Linkedin, Mail, Github, Phone } from "lucide-react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loding, setLoding] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [massage, setMassage] = useState("")

  const isInView = useInView(ref, { margin: "-10px" });

  const sentData = (e) => {
    e.preventDefault();
    
    if (!name || name.length < 3) {
      setError("Invalid name");
      return;
    }

    if (!email) {
      setError("Invalid email");
      return;
    }

    if (!massage || massage.length <= 10) {
      setError("message must be at least 10 characters");
      return;
    }

    sendEmail(name,email,massage,setError,setSuccess,setLoding);


    setName("");
    setEmail("");
    setMassage("");
    };

  return (
    <div
      id="contact"
      className={`md:py-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
    >
      <motion.div ref={ref} className="contact" variants={variants}>
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let’s work together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>
              <a href={`mailto:riteshdhapatepatil966@gmail.com`}>
                riteshdhapatepatil966@gmail.com
              </a>
            </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>413114 Anthurne , maharashtra, India</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>
              <a href="tel:+917745817717">+91 7745817717</a>
            </span>
          </motion.div>
          {/* <motion.div className="item flex gap-2" variants={variants}>
            <div
              className="bg-blue-800 p-2 rounded-lg cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/ritesh-dhapate")
              }
            >
              <Linkedin />
            </div>
            <div
              className="bg-black p-2 rounded-lg cursor-pointer"
              onClick={() => window.open("https://github.com/riteshdhapate")}
            >
              <Github />
            </div>
            <div
              className="bg-[red]/80 p-2 rounded-lg cursor-pointer"
              onClick={() =>
                window.open("mailto:riteshdhapatepatil966@gmail.com")
              }
            >
              <Mail />
            </div>
            <div
              className="bg-[green] p-2 rounded-lg cursor-pointer"
              onClick={() => window.open("tel:+917745817717")}
            >
              <Phone />
            </div>
          </motion.div> */}
          <motion.div
            className="social-links item flex gap-2"
            variants={variants}
          >
            <ul class="wrapper flex ">
              <li
                class="icon facebook"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ritesh-dhapate")
                }
              >
                <span class="tooltip">LinkedIn</span>
                <Linkedin />
              </li>
              <li
                class="icon twitter"
                onClick={() => window.open("https://github.com/riteshdhapate")}
              >
                <span class="tooltip">GitHub</span>
                <Github />
              </li>
              <li
                class="icon instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/ritesh_d_966")
                }
              >
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </li>
            </ul>
            
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg viewBox="0 0 32.666 32.666">
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 0.8 }}
                transition={{ duration: 3 }}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={(e) => sentData(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input
              type="text"
              required
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              value={massage}
              onChange={(e) => setMassage(e.target.value)}
            />
            <button disabled={loding}>
              {loding ? <Loader className="animate-spin" /> : "Sent"}
            </button>
            {error && error}
            {success && "Email sent successfully "}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
