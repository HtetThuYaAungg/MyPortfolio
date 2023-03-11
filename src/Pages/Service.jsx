import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import Popup from "./Popup";
import { Fab, Tooltip } from "@mui/material";

const Service = (props) => {
  const { window } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="Service">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">About Me</h1>
          <div className="home-hero__info ">
            <div className=" about__content-main">
              <p>Get to know me!</p>
              <div class="about__content-details-para">
                Hey! It's&nbsp;
                <strong>Htet Thu Ya Aung&nbsp;</strong>
                and I'm a <strong> Frontend Web Developer </strong> located in
                Yangon, Myanmar. I've done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong>digital products </strong>
                for both business and consumer use.
              </div>
              <div class="about__content-details-para">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Feel free to
                <strong> contact</strong> me here.
              </div>
            </div>
            <div className="home-hero__cta">
              <a href="./#projects" className="btn btn--bg">
                Contact Me
              </a>
              <br />
            </div>
          </div>
        </div>
        <Popup
          window={window}
          open={open}
          setOpen={setOpen}
          toggleDrawer={toggleDrawer}
        />

        <div className=" float-right pr-4 relative">
          <div className="">
            <div className="lg:pt-96 hidden lg:block">
              <Tooltip title="Tools" placement="top" arrow>
                <Fab aria-label="add" onClick={toggleDrawer(true)}>
                  <NavigationIcon />
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>

        
        
      </section>
     
    </div>
  );
};

export default Service;
