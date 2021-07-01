import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
        return (
            <div className={`${styles.footer}`} >
            <div className="text-center p-3">
                © 2020 Copyright Monk shopping app
            </div>
            </div>
        );
    };

export default Footer;

