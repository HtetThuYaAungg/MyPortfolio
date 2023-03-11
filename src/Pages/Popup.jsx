import React, { useState } from "react";
import Radial from "../components/Radial";
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TabsPopup from "./TabsPopup";
import RadialPopup from "./RadialPopup";


const drawerBleeding = 56;

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

  const today = new Date();
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
            visibility: "visible",
            right: 0,
            left: 0,
            height: "60px",
          }}
        >
          <Puller />
          {/* <TabsPopup/> */}
          
          <Typography className=" justify-center flex space-x-7" sx={{ p: 2, color: 'text.secondary' }}><p className='text-green-900 hover:text-green-700'>Skills and Tools &copy; {today.getFullYear()}</p></Typography>
          
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
          <RadialPopup/>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default Popup;
