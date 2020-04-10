import * as React from "react";
import { motion } from "framer-motion";

const dataList = [0, 1, 2, 3, 4, ];


export const UserBadges = ({ i, expanded, setExpanded }) => {
    const isOpen =  expanded;
    console.log("Expended>>>", expanded);
    return(
        <motion.div
        variants={{
            open: { opacity: 1, height: 130, padding:25},
            collapsed: { opacity: 0, height: 0, padding:0}
          }}
            initial={expanded === false? "open" : "collapsed"}
            animate={expanded=== false? "open" : "collapsed"}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="badges"
    >
        <h4>BADGES</h4>
        <ul className="bg_list">
            {
                dataList.map(i => (
                    <li key = {"badge"+i}></li>
                ))

            }
        </ul>

    </motion.div>
    );
};
