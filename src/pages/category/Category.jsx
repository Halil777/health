import { useState } from "react";
import { categoryItems } from "../../data/category";
import Modal from "./Modal";
import "./category.css";

const Category = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="category_container">
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="category_card"
          onClick={() => handleClick(item)}
        >
          <img src={item.pic} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
      <Modal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
};

export default Category;
