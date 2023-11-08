
import styles from './Summary.module.css'

import heroImage from '../../assets/hero/heroImage.png'
import myimg from '../../assets/hero/myimg.png'

const Summary = () => {


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Massoud Rahmani</h1>
                <p className={styles.description}>I'm a full-stack developer experienced with React, Node.js, MongoDb, Java, SQL</p>
                <a className={styles.contactBtn} href="mailto:rahmanimassoud8@gmail.com">Contact Me</a>
            </div>
                <img className={styles.heroImg} src={myimg} alt="hero image" />
            <div className={styles.topBlur}>

            </div>
            <div className={styles.bottomBlur}>

            </div>
        </section>
    );
};

export default Summary;
