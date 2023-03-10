import React, { useState } from "react";
import ToggleBtn from "../components/ToggleBtn";
import Popup from "./Popup";

const Service = (props) => {
  const { window } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="Service">
      <section className="home-hero">
        <h1 className="heading-primary">About Me</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div className="">
          <div className="">
          <div className="home-hero__cta">
          <a className="btn btn--bg" onClick={toggleDrawer(true)}><ToggleBtn cusClassName={'outline-none'} cusOnClick={toggleDrawer(true)} /></a>
        </div>
        
          </div>
         
        </div>
       

        <Popup
          window={window}
          open={open}
          setOpen={setOpen}
          toggleDrawer={toggleDrawer}
        />
      </section>
    </div>
  );
};

export default Service;
