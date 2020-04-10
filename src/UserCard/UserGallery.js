import * as React from "react";
import { motion } from "framer-motion";

const dataList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
export const UserGallery = () => (
    <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="phtoAlbm style-3"
    >        
                <ul className="">
                    {
                        dataList.map(i => (
                            <li key = {"userGallery"+i}><a href="#"> <img src={require('../images/photo_g.png')} alt=""/> </a></li>
                        ))

                    }
                </ul>

    </motion.div>
);