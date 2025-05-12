import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const posts = [
  { imgSrc: "trump.png", altText: "Trade War", title: "Global Trade Tensions", link: "singlepage.html", author: "John Doe", date: "April 5, 2025" },
  { imgSrc: "earthquake.png", altText: "Earthquake", title: "The Earthquake", link: "second.html", author: "Emily Carter", date: "May 1, 2025" },
  { imgSrc: "fitness.png", altText: "Fitness", title: "Wearable Fitness Technology", link: "single.html", author: "Michael Smith", date: "March 27, 2025" },
  { imgSrc: "Yoga.png", altText: "Yoga", title: "Mental Health and Exercise", link: "single.html", author: "Sarah Johnson", date: "February 14, 2025" },
  { imgSrc: "ai.png", altText: "AI", title: "AI-Powered Robo Advisors", link: "single.html", author: "David Lee", date: "April 10, 2025" },
];

const sliderSettings = {
  dots: true,  // ✅ Ensures pagination dots are visible
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  adaptiveHeight: false,
  variableWidth: false,
  centerMode: true,
  appendDots: dots => (
    <div style={{ position: "absolute", bottom: "350px", width: "100%", textAlign: "center" }}>
      <ul style={{ padding: "0px", margin: "0px" }}> {dots} </ul>
    </div>
  ),
};

const Post = ({ imgSrc, altText, title, link, author, date }) => (
  <div className="post">
    <img 
      src={imgSrc} 
      alt={altText} 
      className="slider-image"
      style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "4px" }}
    />
    <div className="post-info">
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title} <i className='bx bx-link-external'></i>
        </a>
      </h4>
      <p className="post-meta">
        <i className='bx bx-user'></i> <strong>{author}</strong> | <i className='bx bx-calendar'></i> <span>{date}</span>
      </p>
    </div>
  </div>
);

const PostSlider = () => {
  return (
    <div className="post-slider">
      <h1 className="slider-title">Trending Posts</h1>
      <Slider {...sliderSettings}>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </Slider>
    </div>
  );
};

export default PostSlider;
