import { motion } from "framer-motion";

function CustomCursor({ x, y }) {
  return (
    <motion.div
      animate={{
        height: 36,
        width: 36,
        borderRadius: "99rem",
        backgroundColor: "black",
        // mixBlendMode: "difference",
        y,
        x,
      }}
      style={{
        position: "fixed",
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 1000, // high value to keep the cursor on top
        // mixBlendMode: "difference",
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}

export default CustomCursor;
