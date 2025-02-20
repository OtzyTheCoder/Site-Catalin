import trainingsData from "@/data/trainingsData";
import { useRef } from "react";
import Slider from "react-slick";
import TrainingCardThree from "../card/TrainingCardThree";
import SliderNavigation from "../common/SliderNavigation";

const Training = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 2,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="section training--tertiary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Trainings</h5>
              <h2 className="section__header-title">
                We make unique golf training
              </h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-12">
            <Slider
              {...settings}
              className="training__slider--tertiary"
              ref={sliderRef}
            >
              {trainingsData.map((itm) => (
                // Training Card Three
                <TrainingCardThree key={itm.id} training={itm} />
              ))}
            </Slider>
            <div className="row">
              <div className="col-12">
                {/* Slider Navigation */}
                <SliderNavigation sliderRef={sliderRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
