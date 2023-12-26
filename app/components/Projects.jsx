"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

let projects = [
    {
        img: "/assets/fitness-appv1.png",
        name: 'fitness website',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://fitness-app-jet.vercel.app/",
        code: "https://github.com/prudhvic/fitness_app"
    },
    {
        img: "/assets/Momentum.png",
        name: 'Responsive site',
        tools: ["HTML", "CSS"],
        link: "https://res-sittev2.vercel.app/#",
        code: "https://github.com/prudhvic/res_sittev2"
    },
    {
        img: "/assets/Musify-App.png",
        name: 'Musify website',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://react-player-inky.vercel.app/",
        code: "https://github.com/prudhvic/react-player"
    },
    {
        img: "/assets/Tip-calculator.png",
        name: 'Tip calculator',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://tipcalc-tau.vercel.app/",
        code: "https://github.com/prudhvic/tipcalc"
    },
    {
        img: "/assets/woodstock.png",
        name: 'ecommerce site',
        tools: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
        link: "https://shopping-cart-lake-rho.vercel.app/",
        code: "https://github.com/prudhvic/shopping_cart"
    }
]

const Projects = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
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
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);
    return (

        <section className="container">
            <h2>Projects</h2>
            <motion.div ref={ref}
                variants={container}
                initial="hidden"
                animate={control} className="projects">
                {projects.map((project) => (
                    <motion.div variants={item} key={project.name}>
                        <div className="img-container">

                            <img src={project.img} layout="fill" />
                            <div className="overlay">
                                <a href={project.link} target="_blank" rel="noreferrer">Visit site</a>
                                <a href={project.code} target="_blank" rel="noreferrer">Visit code</a>
                            </div>
                        </div>
                        <p>{project.name}</p>
                        <p className="tools">{project.tools.join(" ,  ")}</p>

                    </motion.div>
                ))
                }
            </motion.div>



        </section>
    )
}

export default Projects