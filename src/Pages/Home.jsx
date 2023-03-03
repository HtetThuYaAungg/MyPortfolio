import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <section className="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, My name is Htet Thu Ya Aung</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">Projects</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="/yt-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="#"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="/insta-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default Home
