import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: false,
  autoplaySpeed: 2000,
};

// 테스트
let n = [
  {
    id: 0,
    src: "img/slideImage_80052_712927.9489474806_0.jpg",
  },
  {
    id: 1,
    src: "img/slideImage_80052_792339.5438769294_1.jpg",
  },
];

const Notification = () => {
  return (
    <div className="notification w-full h-auto bg-[#F7F8FA]">
      <div className="inner max-w-screen-2xl h-auto m-auto">
        <Slider {...settings}>
          {n.map((item) => (
            <Link
              className="block w-full h-auto focus:outline-0"
              to={"/"}
              key={item.id}
            >
              <img
                className="notification-img block w-full object-cover rounded"
                src={item.src}
                alt="공지이미지"
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Notification;
