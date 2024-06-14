import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import "./skills.css";

const Skill = ({skill}) => {
  return (
    <div className="w-[100px] h-[40px] mx-1  border-white-100 rounded-lg flex items-center justify-center gap-2">
      <img
        loading="lazy"
        src={skill?.img}
        alt="skill logo"
        className="w-5 h-5 rounded-full"
      />
      <h6 
      className="text-1xl"
      >{skill?.name}</h6>
    </div>
  );
};

const ServiceCard = ({ index, skills }) => (
  <div>
  <Tilt className="xs:w-[450px] w-full ">
    <div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12  "
      >
        <h5 className="text-center text-[1.5rem] font-semibold skill-title">{skills?.title}</h5>

        <div className="flex flex-wrap gap-3 ">
          {
            skills?.allSkils.map((item,index) =>(
              <>
              <Skill  key={index} skill={item}/>
              </>
            ))
          }
        </div>
      </div>
    </div>
  </Tilt>
  </div>
);

const Skills = ({data}) => {
  return (
    <>
      <section >
        <div
          className={`mt-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
        >
          {/* title section start */}
          <motion.div
          >
            <h2 className={styles.sectionHeadText}>Skills.</h2>
            <p className={styles.sectionSubText}>
              {
                data?.skills?.massage
              }
            </p>
          </motion.div>
          {/* title section end */}

          {/* skill card section start */}
          <div className="mt-10 flex flex-wrap gap-10 justify-center ">
           {
             data?.skills?.skillSection.map((item,index)=>(
               <>
               <ServiceCard key={index} index={1} skills={item} />
              </>
             ))
           }
          </div>
          {/* skill card section end */}
        </div>
      </section>
    </>
  );
};

export default Skills;
