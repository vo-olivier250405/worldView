"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const PageWrapper = ({ children }: { children: any }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const HoverAnimation = ({ children }: { children: any }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const RotateOnClick = ({ children }: { children: any }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 90 : 0,
      }}
    >
      {children}
    </motion.div>
  );
};
