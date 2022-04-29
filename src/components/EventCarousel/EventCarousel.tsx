import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import schooled from "../../assets/schooled.jpg";
import mizkif from "../../assets/mizkif.jpg";
import awards from "../../assets/awards.jpg";
import qt from "../../assets/qt.jpg";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { IconButton } from "@mui/material";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import "./EventCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventCards = [
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
  {
    eventTitle: "OTK Schooled ft. Mizkif",
    creatorName: "Mizkif",
    eventTime: "10:00 AM - 1:00 PM CT",
    eventImg: schooled,
    profilePic: mizkif,
  },
  {
    eventTitle: "Streamer Awards",
    creatorName: "QTCinderella",
    eventTime: "8:00 PM - 12:00 AM PST",
    eventImg: awards,
    profilePic: qt,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export default function EventCarousel() {
  const settings = {
    swipe: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    accessability: true,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <h2 style={{ color: "white" }}>Sponsored Events</h2>
      <Slider
        // beforeChange={(current, next) => setImageIndex(next)}
        {...settings}
      >
        {EventCards.map((eventCard) => (
          <div>
            <EventCard
              eventTitle={eventCard.eventTitle}
              creatorName={eventCard.creatorName}
              eventTime={eventCard.eventTime}
              eventImg={eventCard.eventImg}
              profilePic={eventCard.profilePic}
            ></EventCard>
          </div>
        ))}
      </Slider>
    </div>
  );
}
