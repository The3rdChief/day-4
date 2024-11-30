import { motion } from "framer-motion";

const Hero = () => {
  const text =
    "Discover the power of clean beauty, where purity meets performance. Feel good about what you put on your skin—because you deserve products that are as kind to you as they are to the planet.";
  const words = text.split(" ");

  return (
    <section className="flex flex-col gap-10 items-center justify-center text-center w-11/12 mx-auto">
      <header>
        <motion.p
          initial={{ letterSpacing: "20%" }}
          whileInView={{ letterSpacing: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="uppercase text-secondary tracking-[60%]"
        >
          introduction
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-semibold font-dmSans leading-[1.2] text-primary"
        >
          Refined Natural Beauty
        </motion.h1>
      </header>

      <p className="text-secondary text-2xl leading-[1.6] max-w-3xl flex flex-wrap items-center justify-center">
        {words.map((word, i) => (
          <span key={i} className="mr-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-5">
        <motion.button
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-16 grid place-items-center px-8 border-2 border-primary text-primary rounded-full uppercase sm:text-[18px] min-w-max"
        >
          get samples
        </motion.button>
        <motion.button
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          className="h-16 grid place-items-center px-8 border-2 border-primary bg-primary text-background rounded-full uppercase sm:text-[18px] min-w-max"
        >
          shop now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
