
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import experience from '../../data/experince.json'
import { getImageUrl } from '../../utilityFunctions';

const Experience = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((eachSkill, id)=> {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImgContainer}>
                                    {/* not rendering the images, might be something wrong */}
                                    <img src={eachSkill.imageSrc}  alt={eachSkill.title} />
                                </div>
                                <p>{eachSkill.title}</p>
                            
                            </div>
                        )
                            
                    })}

                </div>
                <ul className={styles.experience}>
                    {
                        experience.map((eachExperince, id)=> {
                            return (
                                <li key={id} className={styles.experinceItem}>
                                    {/* icon for the company that you worked for */}
                                    <img src={eachExperince.imageSrc} alt={`${eachExperince.organisation}logo`} />
                                    <div className={styles.experinceItemDetails}>
                                        <h3>{`${eachExperince.role}, ${eachExperince.organisation}`}</h3>
                                        <p>{`${eachExperince.startDate} - ${eachExperince.endDate}`}</p>
                                        <ul>
                                            {eachExperince.experiences.map((eachExpr, id)=> {
                                                return (
                                                    <li key={id}>
                                                        {eachExpr}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>

        </section>

    )
};

export default Experience;
