import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navContainer}>
                    
                    <a href='/' className={styles.iconLink}><span className={styles.icon + ' fa fa-tasks'}></span></a>
                    
                    <ul className={styles.linkList}>
                        <li><a href='/' >Home</a></li>
                        <li><a href='/favourite' >Favorite</a></li>
                        <li><a href='/about' >About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;