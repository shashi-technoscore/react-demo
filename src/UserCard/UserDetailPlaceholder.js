import React from "react";
import { motion, useInvertedScale } from "framer-motion";
import UserDetail from "./UserDetail";

 const UserDetailPlaceholder = React.memo(() => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
    <UserDetail />
    </motion.div>
  );
});
export default UserDetailPlaceholder;