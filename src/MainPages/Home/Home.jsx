import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <div>
            {/* banner section */}
           <div className="bg-gradient-to-tl from-black to-orange-300 h-96 w-full relative">
            <img src="/public/banner-tourist-spot.jpg" alt="" className="w-full h-full object-cover absolute mix-blend-overlay" />
            <h1 style={{ paddingTop: '5rem', margin: 'auto', fontStyle:"italic", fontWeight: 'bold', fontSize:'70px', color:'black', textAlign:'center' }}>
                LIFE IS ABOUT <br />{' '}
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
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
           {/* typewriter section */}
            
        </div>
    );
};

export default Home;