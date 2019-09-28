import React, { Component } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import "./nav.css";
import SliderNav from "./slideNav";

export default class TitleBar extends Component {
  state = {
    isOpen: false
  };

  toOpenfun = () => {
    console.log("clicked");
    this.setState(state => {
      return { ...state, isOpen: !this.state.isOpen };
    });
  };

  render() {
    var para;
    if (this.state.isOpen) {
      para = <SliderNav />;
    }
    return (
      <div>
        <AppBar position="absolute" className="navBar">
          <Toolbar>
            <Typography variant="h5">App Bar</Typography>
            <div className="nothing"></div>
            <IconButton color="inherit" onClick={this.toOpenfun}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        {para}
      </div>
    );
  }
}
