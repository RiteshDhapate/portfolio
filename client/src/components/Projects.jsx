import {motion} from "framer-motion"
import { styles } from "../styles";
import {Tilt} from "react-tilt"
import github from "../assets/github.png"
import { Globe } from "lucide-react";



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                loading="lazy"
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute top-0 right-11 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Globe className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects =({data})=>{



    return (

        <section id="work">
        <div
          className={`mt-28 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
        >
          <motion.div
          >
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </motion.div>
    
          <div className='w-full flex'>
            <motion.p
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </motion.p>
          </div>
    
          <div className='mt-20 flex flex-wrap justify-center gap-7'>
            {data?.projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
        </section>
      );
}

export default Projects
