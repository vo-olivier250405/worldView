"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

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

// Création de la figure
const color: string = "#fff";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref = useRef(Object as unknown as any);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const Scene = ({ numStars = 100 }: { numStars: number }) => {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress.get(), "here");
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }: { camera: any }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <>
        <Star p={progress(0, numStars, i)} />
      </>
    );
  }
  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
};

export const AnimatedPLanet = ({ className }: { className: string }) => {
  return (
    <>
      <Canvas gl={{ antialias: false }}>
        <Scene numStars={100} />
      </Canvas>
    </>
  );
};
