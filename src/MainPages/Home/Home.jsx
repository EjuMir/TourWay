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
import { useState } from "react";

const Home = () => {
   
       const loadTourCard = useLoaderData();
       const [show, setShow] = useState(true);

       const handleShowMore = () =>{
            setShow(!show);
       }

    return (
        <div>
            {/* banner section */}
            <div className="mt-20 bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
                <img src="/public/banner-tourist-spot.jpg" alt="" className="w-full h-full object-cover absolute mix-blend-overlay" />
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
                            <img src="/public/Malaysia-Sets-Out-Tourism-Recovery-Plan-2-1024x668.jpg" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="bg-gradient-to-tl from-black to-cyan-200 h-96 w-full relative">
                        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white mx-auto font-bold">YOUR</h2>
                        <img src="/public/thailand-home.webp" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
                        <h2 className="absolute top-2/3 left-2/3 text-6xl text-white mx-auto font-bold">DESTINATION</h2>
                            <img src="/public/1 JD7lUyrUdRGhjppG7j0dcQ.jpg" className="w-full h-96 object-cover absolute mix-blend-overlay" alt="" />
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
            </div>

            {/* Tourist Spot Section */}

            <div className="my-10">
                <h2 className="text-center text-5xl font-bold italic mb-10">TOURISTS <span className="text-orange-400">SPOT</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                    {
                       show ? loadTourCard.slice(0,2).map(card => <HomeCard key={card._id} card={card}></HomeCard>):
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

        </div>
    );
};

export default Home;