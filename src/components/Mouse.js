import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(7px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SVG = styled.svg`
  g {
    animation: ${fadeIn} 3s;
    animation-delay: 2s;
  }
  circle#Scroll-Wheel {
    animation-name: ${scroll};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }
`;

const Mouse = props => (
  <SVG width="40px" height="72px" viewBox="0 0 19 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Mouse</title>
    <desc>Created with Sketch.</desc>
    <g id="Mouse" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g>
            <rect id="Rectangle" stroke={props.color ? props.color : "black"} x="0.5" y="0.5" width="18" height="33" rx="8"></rect>
            <circle id="Scroll-Wheel" fill={props.color ? props.color : "black"} cx="9.5" cy="7.5" r="2.5"></circle>
        </g>
    </g>
  </SVG>
);

export default Mouse;