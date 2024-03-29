import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://diary-back.fly.dev/api/v1/diary");
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
    
      await fetch(`https://diary-back.fly.dev/api/v1/diary/${id}`, {
        method: 'DELETE',
      });

      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("삭제 오류:", error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container w-3/5 h-full m-auto">
      <Slider {...settings}>
        {items.map((item, i) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            country={item.country}
            image={item.image}
            onDelete={() => handleDeleteItem(item.id)}
          />
        ))}
      </Slider>
    </div>
  );
}