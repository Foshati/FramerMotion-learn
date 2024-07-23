import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ShowAnim() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="btn m-4" onClick={() => setShow(!show)}>
        show anim
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            className="card bg-black w-96 shadow-xl m-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
