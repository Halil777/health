import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <div className="home_container">
      <motion.div
        className="home_left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Crafting Financial Wellness Where Precision Meets Personalization in
          Medical Billing Solutions.
        </h1>
        <h3>Our claim acceptance rate stands at 99.9%.</h3>
        <p>
          From the moment a patient steps through your doors to the successful
          collection of payments, our dedicated Revenue Cycle Management (RCM)
          team is committed to identifying and resolving any obstacles hindering
          your financial growth.
        </p>
      </motion.div>
      <motion.div
        className="home_right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src="/images/home.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Home;
