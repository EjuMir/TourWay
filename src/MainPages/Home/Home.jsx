import { Typewriter } from "react-simple-typewriter";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useContext, useEffect, useState } from "react";
import { AuthFirebase } from "../../Firebase/FIrebase";
import { CgProfile } from "react-icons/cg";
import SingleCountryCard from "../AddCountry/SingleCountryCard";

const Home = () => {

    const loadTourCard = useLoaderData();
    const {user, loading} = useContext(AuthFirebase);
    const [show, setShow] = useState(true);
    const [add, setAdd] = useState([]);

    useEffect(()=>{
        fetch('https://tourway-ph-10.vercel.app/country')
        .then(res=>res.json())
        .then(data => setAdd(data))
    },[])
 
    if(loading){
       return <div className="mx-auto text-center mt-10"><p className="loading loading-bars loading-lg"></p></div>
    }
    
    const handleShowMore = () => {
        setShow(!show);
    }

    return (
        <div>
            {/* banner section */}
            <div className="mt-20 bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
                <img src="banner-tourist-spot.jpg" alt="" className="w-full h-full object-cover absolute mix-blend-overlay" />
                <h1 style={{ paddingTop: '5rem', margin: 'auto', fontStyle: "italic", fontWeight: 'bold', fontSize: '70px', color: 'black', textAlign: 'center' }}>
                    LIFE IS ABOUT <br />{' '}
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        {/* Typewriter */}
                        <Typewriter
                            words={['Traveling', 'Enjoying', 'Praying']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>

            {/* banner slider */}

            <div className="my-10 w-full">
                <div className="mb-7">
                    <h1 style={{ paddingTop: '5rem', margin: 'auto', fontStyle: "italic", fontWeight: 'bold', fontSize: '50px', color: 'black', textAlign: 'center' }}>
                        YOUR VACATION {' '}
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Typewriter */}
                            <Typewriter
                                words={['STARTS NOW', 'IS OUR PRIORITY', 'MAY NEVER STOP']}
                                loop={3}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className="mx-auto">
                            <div className="bg-gradient-to-tl from-cyan-200 to-black h-96 w-full relative">
                                <h2 className="absolute text-6xl text-white mx-auto font-bold">CHOOSE</h2>
                                <img src="Malaysia-Sets-Out-Tourism-Recovery-Plan-2-1024x668.jpg" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="bg-gradient-to-tl from-black to-cyan-200 h-96 w-full relative">
                            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white mx-auto font-bold">YOUR</h2>
                            <img src="thailand-home.webp" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
                                <h2 className="absolute top-2/3 left-2/3 text-6xl text-white mx-auto font-bold">DESTINATION</h2>
                                <img src="1 JD7lUyrUdRGhjppG7j0dcQ.jpg" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>

            {/* Tourist Spot Section */}

            <div className="my-10">
                <h2 className="text-center text-5xl font-bold italic mb-10">TOURISTS <span className="text-orange-400">SPOT</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        show ? loadTourCard.slice(0, 3).map(card => <HomeCard key={card._id} card={card}></HomeCard>) :
                            loadTourCard.map(card => <HomeCard key={card._id} card={card}></HomeCard>)
                    }
                </div>
                <div className="text-center my-10">
                    <button onClick={handleShowMore} className="btn btn-secondary">
                        {
                            show ? 'Show More' : 'Show less'
                        }
                    </button>
                </div>
            </div>

            {/* Country section */}
              <div className="my-14">
              <h2 className="text-center text-5xl font-bold italic mb-10"> CHOOSE YOUR <span className="text-orange-400">DESTINATION</span></h2>
              <div className="grid lg:grid-cols-4 gap-10 place-items-center">
                {
                    add.map(data=> <SingleCountryCard key={data._id} data={data}></SingleCountryCard>)
                }
              </div>
              </div>
            {/* Accordion section (Extra) */}

            <div className="w-3/4 mx-auto my-16">
                <h2 className="text-center text-5xl font-bold italic mb-10"> WE BRING <span className="text-orange-400">YOU</span></h2>
               <div className="border-2 rounded-md p-4">
               <div className="collapse collapse-arrow bg-orange-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is this website about?
                    </div>
                    <div className="collapse-content">
                        <p>This website is meant to bring your vacation package to your doorstep</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-orange-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How does this website can benefit me?
                    </div>
                    <div className="collapse-content">
                        <p>It brings you the best offer every month to ensure your vacation</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-orange-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Who can have these advantages?
                    </div>
                    <div className="collapse-content">
                        <p>We bring you various offers and extraordinary destinations, so that people from every walk of life can enjoy their vacation</p>
                    </div>
                </div>
               </div>
               
            </div>

            {/* extra section 2 */}
            <div className="mx-auto text-center my-16">
                <h2 className="text-center text-5xl font-bold italic mb-10"> OUR <span className="text-orange-400">ACHIEVEMENT</span></h2>
                <div className="stats shadow border-2 flex flex-col lg:flex-row">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Interactions</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Website Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    {
                                        user ? <img src={user.photoURL} /> : <CgProfile className="rounded-lg w-full h-full"></CgProfile>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">User</div>
                        <div className="stat-title">Logged in</div>
                        <div className="stat-desc text-secondary">Contributer</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;