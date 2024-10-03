import { useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/autoplay";
import "./pharmacy.css";
import { pharmacyItems } from "../../data/pharmacy";

const Pharmacy = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "easeOut",
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "easeOut",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "easeOut",
    });
  };

  return (
    <div className="pharmacy_container">
      <h2>Dermanhanalar</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={4}
        loop
        speed={3000}
      >
        {pharmacyItems.map((item, index) => (
          <SwiperSlide key={`pharmacy_key${item.id}`}>
            <div
              className="pharmacy_card"
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="card_default">
                <img src={item.pic} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
              <div className="card_hover">
                <h3>{item.title}</h3>
                <h4>{item.work_time}</h4>
                <h4>{item.phone}</h4>
                <h4>{item.address}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Pharmacy;
