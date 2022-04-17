import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Home = () => {

const txt = useRef(null);
useEffect(()=>{
    const el = txt.current;
    gsap.from("#text",{
        duration:3,
        y:"100",
        opacity:0,
        ease:'ease-In',
        scrollTrigger:{
         trigger: '#text',
         // trigger: '#ok2',
         start:'top 90%',
         end:"bottom 60%",
         toggleActions:'restart complete reverse reset',
    }} )
    gsap.from("#text2",{
        duration:3,
        y:"100",
        opacity:0,
        ease:'ease-In',
        scrollTrigger:{
         trigger: '#text2',
         start:'top 90%',
         end:"bottom 60%",
         // markers:true,
         toggleActions:'restart complete reverse reset',
    }} )
    // gsap.fromTo(el,{rotation:0},{rotation: 180,duration:3,ScrollTrigger:{
    //      trigger: el
    // }} )
})

    return (
  <>
  <div className="Home">
    <div className="container">
       <h1 id="text"> Akhilesh </h1>
    </div>
    <div className="container" id='ok2'>
       <h1  ref={txt}> Hello2 </h1>
    </div>
    <div className="container" id='onMe'>
       <h1 id="text2" > Hello3 </h1>
    </div>
    <div className="container">
       <h1> Hello4 </h1>
    </div>
  </div>
  </>
  )
}

export default Home