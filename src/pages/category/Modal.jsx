import "./modal.css";

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={item.pic} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Modal;
