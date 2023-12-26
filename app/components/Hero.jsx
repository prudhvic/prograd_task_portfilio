import Rings from "./Rings"

const Hero = () => {
    return (
        <>
            <section className='hero-section'>
                <div className="content">
                    <Rings />
                    <h2><strong>Nice To meet You!</strong>I{"'"}m Prudhvi</h2>
                    <p className='leading-text'>
                        As a full-stack developer, I possess a diverse set of skills and expertise in both front-end and back-end web development. My portfolio showcases my ability to create visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript frameworks. I also demonstrate proficiency in server-side programming languages like Node.js, along with expertise in database management. With a focus on delivering end-to-end solutions, I highlight my experience in software architecture, version control, and deployment strategies. My portfolio reflects my versatility and problem-solving abilities in developing comprehensive web applications.
                    </p>
                </div>
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

                <a href="#contact" className="contact-link">Contact me</a>
            </section>
        </>

    )
}

export default Hero