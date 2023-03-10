import React, { useState } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";

import Box from "@mui/material/Box";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Radial from "../components/Radial";

const drawerBleeding = 14;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "white" : grey[900],
  padding: "0%",
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const Popup = ({ window, open, setOpen, toggleDrawer }) => {
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: "visible",
            position: "absolute",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "false",
            right: 0,
            left: 0,
            height: "14.5px",
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className="py-2 md:flex md:flex-wrap md:justify-center md:gap-4 lg:flex lg:flex-wrap lg:gap-6 lg:justify-center px-1 bg-gray-100">
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 mt-8 md:mt-10 lg:mt-10 mb-16"
              }
              text1={"80%"}
              text2={"Javascript"}
              color={"text-yellow-400"}
              perc={"300"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-10 mb-16"
              }
              text1={"80%"}
              text2={"ReactJs"}
              color={"text-blue-500"}
              perc={"300"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-10 mb-16"
              }
              text1={"70%"}
              text2={"VueJs"}
              color={"text-green-400"}
              perc={"287"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-7 lg:mt-10 mb-16"
              }
              text1={"50%"}
              text2={"AngularJs"}
              color={"text-red-600"}
              perc={"245"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-7 lg:mt-7 mb-5"
              }
              text1={"65%"}
              text2={"Laravel"}
              color={"text-orange-400"}
              perc={"270"}
            />
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default Popup;
