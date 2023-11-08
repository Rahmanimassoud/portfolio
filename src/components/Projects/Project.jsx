import styles from './Project.module.css';
import projects from '../../data/projects.json'

const Project = () => {
    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}> Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <div key={id} className={styles.cardContainer}>
                                <img src={project.imageSrc} alt={project.title} className={styles.cardImg}/>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <ul className={styles.cardSkills}>
                                    {
                                        project.skills.map((skill, id)=> {
                                            return (
                                                <li key={id} className={styles.cardSkill}>{skill}</li>

                                            )
                                        })
                                    }
                                </ul>
                                <div className={styles.cardLinks}>
                                    <a href={project.demo} className={styles.cardLink}>Demo</a>
                                    <a href={project.source} className={styles.cardLink}>Code</a>
                                </div>

                            </div>

                        )
                    })
                }

            </div>
        </section>
    )
};

export default Project;
