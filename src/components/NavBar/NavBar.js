import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navContainer}>
                    
                    <Link to='/' className={styles.iconLink}><span className={styles.icon + ' fa fa-tasks'}></span></Link>
                    
                    <ul className={styles.linkList}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/' >Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/favourite' >Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/about' >About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;