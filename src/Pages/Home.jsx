import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Home = () => {
   gsap.registerPlugin(ScrollTrigger)


const txt = useRef(null);
useEffect(()=>{
   //  const el = txt.current;
    let tl = gsap.timeline({
      scrollTrigger:{
         trigger: '#text2',
         start:"top 70%",   
         id:"text2",
         end:"bottom 90%",  
         pin:true,
         // markers:true,
         toggleActions:'restart none reverse none',
         // toggleActions:'restart complete reverse reset',
    }
   });
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
         toggleActions:'restart none complete pause',
    }} )
    tl.from("#text2",{
        duration:3,
        y:"100",
        opacity:0,
        ease:'ease-In',
        } )
    gsap.from("#text3",{
        duration:3,
      //   ease:'none',
        ease:'ease-In',
        scrollTrigger:{
         trigger: '#text3',
         start:'top 60%',
         end:"bottom 50%",
         // markers:true,
         scrub:1,
         // toggleActions:'restart complete reverse reset',
         },
         marker:true,
         rotation:360,
         x:400
   } )
    gsap.from("#text4",{
        duration:3,
        ease:'ease-In',
        scrollTrigger:{
         trigger: '#text4',
         start:'top 60%',
         end:"bottom 70%",
         scrub:1,
         pin:true,
         },
   } )
    gsap.from("#text4_1",{
        duration:2,
        ease:'ease-In',
        y:"100",
        opacity:0,
        scrollTrigger:{
         trigger: '#text4_1',
         start:'top 30%',
         end:"bottom 100%",
         // toggleActions:'restart none none reset',
         toggleActions:'restart none reverse none',
         // toggleActions:'restart none reverse none',
         },
   } )
   gsap.utils.toArray(".inner").forEach((panel ,i)=>{
      ScrollTrigger.create({
         trigger:panel,
         start: "top top",
         pin:true,
         pinSpacing: false
      })
   })
   let section = gsap.utils.toArray('.container');
   gsap.to(section,{
      // xPercent: -100 * (section.length -1),
      ease:"none",
      scrollTrigger:{
         trigger: ".Home",
         pin:"true",
         scrub:1,
         snap:1/(section.length -1 ),
         // snap:1,
         id:"snap",
         // markers:true,
         end: ()=>"+=" +
         // document.querySelector('.container').offsetHeight
         document.querySelector('.container').offsetWidth
      }
   })
 
}, [])



    return (
  <>
  <div className="Home">
    {/* <div className="container">
       <h1 className='text' id="text"> VaibhaV </h1>
    </div>
    <div className="container" id='ok2'>
       <h1 className='text'  ref={txt}> Hello2 </h1>
    </div>
    <div className="container" id='onMe'>
       <h1 className='text' id="text2" > Hello3 </h1>
    </div> */}
    
    <div className="outer">
       <div className="inner div1">
         <h2> Hello Inner1 </h2>
       </div>
       <div className="inner div2">
         <h2> Hello5 Inner2</h2>
       </div>
       <div className="inner div3">
         <h2> Hello5 Inner3</h2>
       </div>
    </div>
     <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container" id='onMe'>
       <h1 className='text' id="text2" > Hello3 </h1>
    </div>
    {/* <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container">
         <h1 className='text' >Hello</h1>
    </div>
    <div className="container">
         <h1 className='text' >Hello</h1>
    </div> */}
    {/* <div className="container">
       <h1 id="text3"  > 4 </h1>
       <h1 id="text3_1"> 56 </h1>
    </div>
    <div className="container" style={{ flexDirection:"column" }}>
       <h1 id="text4_1"  > ... </h1>
       <h1 id="text4"  > Hello5 </h1>
       <h1  > &nbsp; </h1>
    </div>
    <div className="container">
       <h1> ... </h1>
       <h1 > Hello6 </h1>
       <h1  > &nbsp; </h1>
    </div> */}

  </div>
  </>
  )
}

export default Home