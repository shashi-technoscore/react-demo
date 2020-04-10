import * as React from "react";
import { motion } from "framer-motion";

const dataList = [0, 1, 2, 3];

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
export const UserInterests = () => (
    <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="intSection"
    >        
     <h4>Interests</h4>
                 <ul className="bg_list">
                    {
                        dataList.map(i => (
                            <li key={"savedList"+i}>
                                <span className="liName">{'List Name '+(++i)}</span>
                            </li>
                        ))

                    }
                </ul>
         


    </motion.div>
);
