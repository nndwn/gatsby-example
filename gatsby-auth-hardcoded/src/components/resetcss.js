import React from "react";
import { Global, css } from "@emotion/react";

const ResetCss = ({color, font, children, style}) => (
    <>
    <Global styles= {css`
        *, :after, :before {
            box-sizing: border-box;
        }
        @media (prefers-reduced-motion: no-preference){
            :root {
                scroll-behavior: smooth;
            }
        }
        body {
            -webkit-font-smoothing: antialiased;
            font-family: ${font == null ? "" : font + ','}sans-serif;
            line-height: 1.6;
            color: ${color};
        }
        a{
            color: inherit;
            text-decoration: none;
        }
        h1,h2,h3,h4 {
            font:inherit;
        }
        ul,h1,h2,h3,h4 {
            padding: 0;
        }
        body, p, ul, h1, h2, h3,h4 {
            margin: 0
        }
        input, label {
            outline: 0;
        }
        svg {
            fill: inherit
        }
        ${style}
    `}/>
    {children}
    </>
)

export default ResetCss