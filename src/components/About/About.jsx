import React from "react";
import styles from './About.module.css'
import middle from '../../assets/about/middle.png'

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}></h2>
            <h2 className={styles.about}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={middle} alt="setting with lab" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Software Engineer</h3>
                            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>

    )
};

export default About;
