import React from 'react';
import '../styles.css'
import {API} from '../backend'
import Base from './Base'
const Home = (props) => {
console.log(API)
    return(
        
    <Base title="Base">
    <h1 className="text-white">hello frontend </h1>
   </Base>
    )
}


export default Home;
 