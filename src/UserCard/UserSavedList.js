import * as React from "react";
import { motion } from "framer-motion";

const savedList = [0, 1, 2, 3, 5, 6, 7, 8, 9];

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
export const UserSavedLists = () => (
    <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="saveList"
    >
            <h4>Saved Lists</h4>
            <div className="listArea style-3">
                <ul>
                    {
                        savedList.map(i => (
                            <li key={"savedList"+i}>
                                <span className="liName">{'List Name '+(++i)}</span>
                            </li>
                        ))

                    }
                </ul>
            </div>
        


    </motion.div>
);
