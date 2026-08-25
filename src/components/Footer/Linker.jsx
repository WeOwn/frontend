import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Linker = ({ heading, links }) => {
    return (
        <div className={styles.linkBox}>
            <div className={styles.title}>
                <h1>{heading}</h1>
            </div>
            <div className={styles.sub}>
                {links.map((link) => (
                    <Link key={link.label} className={styles.ref} to={link.to}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Linker;
