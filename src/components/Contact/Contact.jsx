import styles from './Contact.module.css'

import emailIcon from '../../../public/contact/emailIcon.png';

const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="email" />
                    <a href="mailto:rahmanimassoud8@gmail.com">Rahmanimassoud8@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={emailIcon} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/massoudrahmani/">linkedin.com/massoudrahmani</a>
                </li>
                <li className={styles.link}>
                    <img src={emailIcon} alt="github" />
                    <a href="https://github.com/Rahmanimassoud">github.com/Rahmanimassoud</a>
                </li>
            </ul>
        </footer>
    )
};

export default Contact;
