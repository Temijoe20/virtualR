import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../Utility/animation";
// import { Fadeup } from "../../Utility/animation";
const Banner =() => {
    return(
       <section className="bg-secondary/10">
        <div className="container grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-8 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
            <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
             src={BannerPng} alt="" className="w-[300px] md:max-w-[400px] h-full
                object-cover drop-shadow"/>
            </div>
                
            <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1 
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={ {once: true} }
                        className="text-3xl lg:text-6xl font-bold uppercase">
                            {" "} Brand Info</motion.h1>
                        <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        > Crisp and sweet, red apples are rich in fiber and antioxidants,
                         promoting heart health and aiding digestion
                         Juicy and tangy, oranges are high in vitamin C,
                          boosting immunity and supporting skin health
                          Creamy and nutrient-dense, avocados are a great source of healthy fats, potassium
                          , and vitamins, supporting heart and brain health
                          Sweet or tart, cherries are packed with antioxidants,
                           reducing inflammation and supporting sleep through melatonin content</motion.p>
                           <motion.p
                           variants={FadeUp(0.9)}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true }}>Red apples, oranges, avocados, and cherries are nutrient-rich fruits that offer antioxidants,
                             vitamins, and healthy fats, promoting overall health and wellness.</motion.p>
                              <motion.div 
                                variants={FadeUp(1.5)}
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
export default Banner;