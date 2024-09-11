import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../Utility/animation";
// import { Fadeup } from "../../Utility/animation";

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
const Banner3 =() => {
    return(
        <section className="container mb-12">
        <div 
            style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-8 py-14 rounded-3xl">
        {/* blank div */}
            <div></div>
                {/* Brand Info */}
            <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1 
                        variants={FadeLeft(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl lg:text-6xl font-bold uppercase text-gray-950"
                        >
                            {" "} Brand Info
                            </motion.h1>
                        <motion.p
                        variants={FadeLeft(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-gray-950"
                        >
                            Crisp and sweet, red apples are rich in fiber and antioxidants,
                         promoting heart health and aiding digestion
                         Juicy and tangy, oranges are high in vitamin C,
                        </motion.p>
                        <motion.p
                        variants={FadeLeft(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-gray-950"
                        >
                        Crisp and sweet, red apples are rich in fiber and antioxidants,
                         promoting heart health and aiding digestion
                         Juicy and tangy, oranges are high in vitamin C,
                        </motion.p>
                            {/* Button section */}
                              <motion.div 
                                variants={FadeLeft(1.1)}
                                initial="hidden"
                                animate="visible"
                                className="flex justify-center md:justify-start">
                                <button className="primary-btn">
                                    Learn More
                                    </button>
                              </motion.div>
                </div>
            </div>  
        </div>
       </section>
    );
};
export default Banner3;


