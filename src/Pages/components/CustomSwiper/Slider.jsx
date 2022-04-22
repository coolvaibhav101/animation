import React, { useEffect } from 'react'


// Import Swiper React components
import Swiper from "swiper"
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Scrollbar,EffectFade,Keyboard,Mousewheel,Autoplay  } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './test.scss';
import data from './data.json';
import Transition from '../Transition/Transition';
import gsap from 'gsap';

import logo from './h3alogo.svg';
const Slider = () => {
    const contact = gsap.timeline();

    useEffect(() => {

		const swiper = new Swiper(".mySwiper", {
		modules:[Navigation,Pagination,Scrollbar,EffectFade,Keyboard,Mousewheel,Autoplay ],
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		  },
		  mousewheel: {
			invert: true,
		  },
		navigation: {
			nextEl: ".swiper-next-button",
			prevEl: ".swiper-prev-button"
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		  },
    //    speed: 1400,
    //    spaceBetween: 5,
		effect: "fade",
		loop: "infinite",
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			}
	});
	swiper.on('slideChange', function () {
		// console.log('slide changed');
	  });
    }, [])
    
  return (
	<div className="swiperMainContainer">
        <Transition timeline={contact} />
	<div className="header" style={{ border:"none" }} >
		{/* <a className="menu-icon" href="#ok">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
			</svg>
		</a>
		<img className="logo" src={logo} alt="ok" />
		&nbsp; H3A
		<div className="header-menu">
			<a href="#ok">Home</a>
			<a href="#ok">About</a>
			<a href="#ok">Services</a>
			<a href="#ok">Contact</a>
		</div>
		<div className="header-icons">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</div> */}
	</div>
	<div className="mySwiper">
		<div className="main-wrapper swiper-wrapper">

			{React.Children.toArray( data.map((elm)=>{
				return(
					<div className="main swiper-slide" id={elm.id}>
				<div className="left-side">
					<div className="main-wrapper">
						<h3 className="main-header">{elm.mainHeader }</h3>
						<h1 className="main-title">{elm.mainTitle}</h1>
						<h2 className="main-subtitle">{elm.mainSubtitle }</h2>
					</div>
					<div className="main-content">
						<div className="main-content__title">{elm.mainContentTitle }</div>
						<div className="main-content__subtitle">{elm.mainContentSubtitle }</div>
						<div className="more-menu">
							Shop Now
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="-5" y1="12" x2="19" y2="12" />
								<line x1="15" y1="16" x2="19" y2="12" />
								<line x1="15" y1="8" x2="19" y2="12" />
							</svg>
						</div>
					</div>
				</div>
				<div className="center">
					<div className="right-side__img">
						<img className="bottle-bg" src={elm.imgbg } alt="okImg"/>
						<img className="bottle-img" src={elm.img } alt="okImg" />
					</div>
				</div>
			</div>
				)
			}) )}
			
			
			{/* <div className="main swiper-slide" id="beach">
				<div className="left-side">
					<div className="main-wrapper">
						<h3 className="main-header">Closca Bottle</h3>
						<h1 className="main-title">Beach</h1>
						<h2 className="main-subtitle">€ 39.90</h2>
					</div>
					<div className="main-content">
						<div className="main-content__title">In 20 years, there could be more plastic in our oceans than fish.</div>
						<div className="main-content__subtitle">Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.</div>
						<div className="more-menu">
							Shop Now
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="-5" y1="12" x2="19" y2="12" />
								<line x1="15" y1="16" x2="19" y2="12" />
								<line x1="15" y1="8" x2="19" y2="12" />
							</svg>
						</div>
					</div>
				</div>
				<div className="center">
					<div className="right-side__img">
						<img className="bottle-bg" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530" alt="okImg"/>
						<img className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" alt="okImg" />
					</div>
				</div>
			</div>
			 */}
	</div>
	</div>
	<div className="button-wrapper">
		<div className="swiper-button swiper-prev-button">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
			</svg>
		</div>
		<div className="swiper-button swiper-next-button">
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
			</svg>
		</div>
	</div>
	<div className="swiper-pagination"></div>
</div>
  )
}

export default Slider