import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

class Resume extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Back</NavLink>
        <h2>Resume</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Resume;