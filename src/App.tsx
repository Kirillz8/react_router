import React from 'react';
import styles from './components/Site.module.css';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';

import {S} from './components/pages/_styles'


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PROTECTED: '/protected',
    // LOGIN: '/login',
} as const

function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED}>Protected page</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <a className={styles.LinkLikeButton} href={'http://localhost:3000/adidas'}>
                            Back to main page
                        </a>
                        <button className={styles.ButtonLikeLink} onClick={navigateHandler}>Back</button>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



