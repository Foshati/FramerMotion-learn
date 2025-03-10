import { motion, useScroll } from "framer-motion";

function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      {/* Progress bar برای نمایش پیشرفت اسکرول */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "#0070f3",
          transformOrigin: "0%",
          zIndex: 1000
        }}
      />

      {/* بخش‌های مختلف صفحه */}
      <div style={{ height: "200vh", padding: "20px" }}>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <h1>Section 1</h1>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <h1>Section 2</h1>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d0d0d0",
            borderRadius: "10px"
          }}
        >
          <h1>Section 3</h1>
        </motion.section>
      </div>
    </div>
  );
}

export default ScrollAnimations;