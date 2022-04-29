import React from 'react';
import Header from '../../Components/Header/Header';
import style from './Home.module.css'
const Home = () => {
    return (
        <div className={style.home_wrapper}>
            <Header></Header>
        </div>
    );
};

export default Home;