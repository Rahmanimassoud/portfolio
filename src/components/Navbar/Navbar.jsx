import styles from './Navbar.module.css'
import menuIcon from '../../assets/nav/menuIcon.png'
import closeIcon from '../../assets/nav/closeIcon.png'
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className={styles.navbar}>

            <a className={styles.title} href="/" >Rahmani.dev</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menu ? closeIcon : menuIcon} alt="new"  onClick={()=> setMenu(!menu)}/>
                <ul className={`${styles.menuItems} ${menu && styles.menuOpen}`} onClick={()=> setMenu(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
};

export default Navbar;
