import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../../Components/Header/Header';
import auth from '../../Firebase/Firebase.init';
import style from './Home.module.css'

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(`${user.emailVerified}`);
    console.log(user?user.emailVerified:'');
    return (
      <div className={style.home_wrapper}>
        <Header></Header>
        <h4 className="text-center text-white">
          User email: {user ? user.email : ""}
        </h4>
        <h4 className="text-center text-white">
          User verification: {user? user.emailVerified?"Verified User": "Verification Not Done Yet":''}
        </h4>
      </div>
    );
};

export default Home;