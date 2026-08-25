import React from 'react';
import styles from './styles.module.css';
import houseImg from './buyhouse.png';
import homeImg from './home.png';
import brand from './brand.png';
import Linker from './Linker';

const columns = [
    {
        heading: 'Explore',
        links: [
            { label: 'Browse Properties', to: '/properties' },
            { label: 'Popular Builders', to: '/builders' },
            { label: 'Group Investment', to: '/investment_homepage' },
            { label: 'Filtered Search', to: '/properties_filter' },
        ],
    },
    {
        heading: 'Account',
        links: [
            { label: 'My Activity', to: '/activity' },
            { label: 'Login', to: '/login' },
            { label: 'Create Account', to: '/signup' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'Home', to: '/home' },
            { label: 'Contact a Builder', to: '/contact_builders' },
        ],
    },
];

function Footer(){

    return(

        <div className={styles.main}>
            <div className={styles.images}>
                <img className={styles.img1} src={houseImg} alt="" />
                <img className={styles.img2} src={homeImg} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img className={styles.brand} src={brand} alt="weOwn" />
                </div>
                <div className={styles.links}>
                    {columns.map((col) => (
                        <Linker key={col.heading} heading={col.heading} links={col.links} />
                    ))}
                </div>
                <div className={styles.copyrights}>
                    <div className={styles.foot}>
                    <h2 className={styles.text}>&copy; 2026 weOwn. All rights reserved.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
