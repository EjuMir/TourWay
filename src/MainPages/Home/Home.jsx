import { Typewriter } from "react-simple-typewriter";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className="bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
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
            {/* react banner slider */}
            <div className="my-14 w-full">
                <div className="mb-5">
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
                        <div>
                            <img src="/public/Malaysia-Sets-Out-Tourism-Recovery-Plan-2-1024x668.jpg" className="w-full h-[500px]" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div>
                        <img src="/public/thailand-home.webp" className="w-full h-[500px]" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/public/1 JD7lUyrUdRGhjppG7j0dcQ.jpg" className="w-full h-[500px]" alt="" />
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>

        </div>
    );
};

export default Home;