import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Web Developer | Software Developer</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hello! I am [Bimochan Bajimaya], a passionate web developer with a
            keen interest in creating user-friendly and visually appealing
            websites. I love experimenting with new technologies and learning
            from different projects.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
        </section>
        <section>
          <h2>Contact</h2>
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} [Bimochan Bajimaya]. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
