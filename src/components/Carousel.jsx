import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";

const mockItems = [
  {
    id: "1",
    title: "카파도키아",
    content:
      "터키 카파도키아의 지명'아름다운 말이 있는 곳'이란 페르시아어에서 유래했다고 합니다. 명물로는 벌룬투어와 동굴교회 괴레메 야외박물관,지하도시 데린쿠유, 파샤바 계곡 등이 있습니다.",
    country: "튀르키에공화국",
  },
  {
    id: "2",
    title: "한라산",
    content: "제주도에 있는 아름다운 산.",
    country: "대한민국(제주도)",
  },
  {
    id: "3",
    title: "교토",
    content: "교토의 장소",
    country: "일본",
  },
];

export default function Carousel() {
  const [items, setItems] = useState(mockItems);

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
        {items.map((item, i) => {
          return <CarouselItem key={item.id} item={item} index={i} />;
        })}
      </Slider>
    </div>
  );
}