import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-[#0f0f1c] overflow-hidden"
      style={{
        backgroundImage: [
          'radial-gradient(circle at 60% 40%, rgba(128,77,238,0.15) 0, transparent 60%)',
          'radial-gradient(circle at 30% 80%, rgba(128,77,238,0.10) 0, transparent 70%)',
          `url(${herobg})`,
          "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50%\" cy=\"50%\" r=\"320\" fill=\"none\" stroke=\"rgba(128,77,238,0.08)\" stroke-width=\"2\"/><circle cx=\"50%\" cy=\"50%\" r=\"220\" fill=\"none\" stroke=\"rgba(128,77,238,0.06)\" stroke-width=\"2\"/><circle cx=\"50%\" cy=\"50%\" r=\"120\" fill=\"none\" stroke=\"rgba(128,77,238,0.04)\" stroke-width=\"2\"/></svg>')"
        ].join(", ") ,
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundSize: "cover, cover, cover, cover",
        backgroundPosition: "center, center, center, center",
        minHeight: '100vh',
      }}
    >
      {/* Overlay for better text visibility on mobile */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Druti</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           Full-stack developer <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      
    </section>
  );
};

export default Hero;