import { useState } from "react";
import { categoryItems } from "../../data/category";
import Modal from "./Modal";
import { motion } from "framer-motion";
import "./category.css";

const Category = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <center>
        <h1 style={{ color: "green" }}>
          Derman serişdeleri we saglygy goraýyş
        </h1>
      </center>
      <motion.div
        className="category_container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categoryItems.map((item) => (
          <motion.div
            key={item.id}
            className="category_card"
            onClick={() => handleClick(item)}
            variants={cardVariants}
          >
            <img src={item.pic} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        ))}
        <Modal item={selectedItem} onClose={handleCloseModal} />
      </motion.div>
    </>
  );
};

export default Category;
