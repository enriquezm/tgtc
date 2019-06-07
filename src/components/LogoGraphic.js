import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    transition: all 0.2s;
    &:hover {
        text {
            fill: #009FFF;
            transition: all 0.2s;
        }
        
    }
`;

const LogoGraphic = () => (
    <SVG width="80px" height="80px" viewBox="0 0 85 85" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>logo1</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="logo1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="logo" transform="translate(3.000000, 3.000000)">
            <text id="THAT-GUY-THAT-CODES" font-family="Heebo-Light, Heebo Light" font-size="12" font-weight="normal" line-spacing="13" fill="#000000">
                <tspan x="16" y="22">THAT</tspan>
                <tspan x="16" y="37">GUY</tspan>
                <tspan x="16" y="52">THAT</tspan>
                <tspan x="16" y="67" font-family="Heebo-ExtraBold, Heebo ExtraBold" font-weight="600">CODES</tspan>
            </text>
            <rect id="Rectangle-Copy" stroke="#000000" stroke-width="3" x="1.5" y="1.5" width="75" height="75"></rect>
        </g>
    </g>
</SVG>
);

export default LogoGraphic;