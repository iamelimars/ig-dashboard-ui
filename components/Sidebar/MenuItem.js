import React from "react";
import { motion } from "framer-motion";

const MenuItem = ({ children }) => {
  return <motion.li>{children}</motion.li>;
};

export default MenuItem;
