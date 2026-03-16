import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Homepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-full overflow-y-auto relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <Section1 mousePosition={mousePosition} />
      
      {/* Feature Section 1 */}
      <Section2 />
      
      {/* Feature Section 2 */}
      <Section3 />
      
      {/* Feature Section 3 */}
      <Section4 />
      
      {/* Final Section */}
      <Section5 />
    </div>
  );
}

function Section1({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const parallaxX = (mousePosition.x - window.innerWidth / 2) / 50;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) / 50;

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{
          x: -parallaxX,
          y: -parallaxY,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            M-PREG
          </h1>
        </motion.div>
        
        <motion.p
          className="text-2xl md:text-3xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Experience the future of gaming
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
            Explore Now
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
}

function Section2() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background py-20">
      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-8">
          Blazing Fast
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Built with cutting-edge technology to deliver an experience that's smoother than ever before.
          Every interaction is optimized for maximum performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "<10ms", label: "Response Time" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-card rounded-2xl border border-border"
            >
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Section3() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          style={{ opacity }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div style={{ x: useTransform(x, (value) => value * 0.5) }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Designed for
              <br />
              <span className="text-primary">Everyone</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Intuitive interfaces meet powerful features. Whether you're a beginner or a pro,
              you'll feel right at home.
            </p>
            <ul className="space-y-4">
              {[
                "Seamless user experience",
                "Advanced customization",
                "Real-time updates",
                "Cross-platform support",
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{ x: useTransform(x, (value) => -value * 0.5) }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-card rounded-2xl border border-border flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Section4() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 1.1]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-card py-20">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-8">
          Security First
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-16">
          Your data is protected with enterprise-grade encryption.
          We never compromise on security.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🔒", label: "Encrypted" },
            { icon: "🛡️", label: "Protected" },
            { icon: "✓", label: "Verified" },
            { icon: "⚡", label: "Fast" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-2xl border border-border cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-lg font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Section5() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-background py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-primary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(28, 228, 121, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Ready to start?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Join thousands of users who have already discovered the future.
          </p>
          
          <motion.button
            className="px-12 py-6 bg-primary text-primary-foreground rounded-full text-xl font-medium hover:bg-primary/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <div className="mt-20 text-sm text-muted-foreground">
            Scroll up to explore more
          </div>
        </motion.div>
      </div>
    </section>
  );
}