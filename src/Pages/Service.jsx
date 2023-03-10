import React, { useState } from "react";
import ToggleBtn from "../components/ToggleBtn";
import NavigationIcon from "@mui/icons-material/Navigation";
import Popup from "./Popup";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
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
        <h1 className="heading-primary  shadow-xl ">About Me</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div className=" float-right pr-4 relative">
        <div className="">
            <div className= "lg:pt-52 hidden lg:block">
            <Tooltip  title="Skills" placement="top" arrow>
              <Fab aria-label="add" onClick={toggleDrawer(true)}>
                <NavigationIcon />
                </Fab>
                </Tooltip>
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
