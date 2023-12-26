"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Skills = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    let skills = [
        {
            name: "HTMl",
            experience: "4"
        },
        {
            name: "CSS",
            experience: "4"
        },
        {
            name: "Javascript",
            experience: "3"
        },
        {
            name: "React.js",
            experience: "3"
        },
        {
            name: "Next.js",
            experience: "3"
        },
        {
            name: "Node.js",
            experience: "3"
        }
        ,
        {
            name: "Express.js",
            experience: "3"
        }
        ,
        {
            name: "Mongodb",
            experience: "3"
        }
        ,
        {
            name: "Mysql",
            experience: "3"
        }


    ]
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <motion.section className='skills'
            ref={ref}
            variants={container}
            initial="hidden"
            animate={control} >
            {
                skills.map((skill) => {
                    return (
                        <motion.div variants={item} key={skill.name}>
                            <h3>{skill.name}</h3>
                            <p>{skill.experience} years Experience</p>
                        </motion.div>
                    )
                })
            }
        </motion.section>

    )
}

export default Skills