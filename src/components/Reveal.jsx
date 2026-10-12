import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Aparición suave al entrar en pantalla. Si el usuario pidió "reducir movimiento", se muestra sin animar.
const Reveal = ({ children, delay = 0, as = "div", ...props }) => {
  const reducir = useReducedMotion();

  if (reducir) {
    const Tag = as;
    return <Tag {...props}>{children}</Tag>;
  }

  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
