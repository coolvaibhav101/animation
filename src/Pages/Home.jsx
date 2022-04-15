import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Home = () => {

const txt = useRef(null);
useEffect(()=>{
    const el = txt.current;
    gsap.from("#text",{
    // gsap.from("#onMe",{
        duration:3,
        y:"100",
        opacity:0,
        ease:'ease-In',
        ScrollTrigger:{
        //  trigger: '#text',
         trigger: '#onMe',
         start:'top 90%',
         end:"bottom 60%",
         marker:true,
         toggleAction:'restart complete reverse reset',
    }} )
    // gsap.fromTo(el,{rotation:0},{rotation: 180,duration:3,ScrollTrigger:{
    //      trigger: el
    // }} )
})

    return (
  <>
  <div className="Home">
    <div className="container">
       <h1 > hello1 </h1>
    </div>
    <div className="container">
       <h1  ref={txt}> hello2 </h1>
    </div>
    <div className="container" id='onMe'>
       <h1 id="text" > hello3 </h1>
    </div>
    <div className="container">
       <h1> hello4 </h1>
    </div>
  </div>
  </>
  )
}

export default Home