import React from "react";
import "./App.css";

const posts = Array(8).fill({
  imgSrc: "trump.png",
  title: "Trump Is Back trade war on all the countries",
  link: "single.html",
  text: "Trump Is Back trade war between all the countries imposed tax on all the countries",
});

const Content = () => {
  return (
    <div className="content clearfix">
      {/* Sidebar comes first (doesn’t matter much, but safer sometimes) */}
      <aside className="sidebar">
        <section className="section search">
          <h2 className="section-title">Search</h2>
          <form action="index.html" method="post">
            <input
              type="text"
              name="search-term"
              className="text-input"
              placeholder="Search....."
            />
          </form>
        </section>

        <section className="section topics">
          <h2 className="section-title">Topics</h2>
          <ul>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Fitness</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Investing</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Sports</a></li>
          </ul>
        </section>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="recent-post-title">Recent Posts</h1>
        {posts.map((post, index) => (
          <div className="post clearfix" key={index}>
            <img src={post.imgSrc} alt="trade" className="post-image" />
            <div className="post-preview">
              <h2><a href={post.link}>{post.title}</a></h2>
              <i className="bx bxs-user">Pavan Kumar P</i>
              <i className="bx bx-calendar">April 6, 2025</i>
              <p className="preview-text">{post.text}</p>
              <a href={post.link} className="btn read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
