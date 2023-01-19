import React from 'react'
import './Shared.css'
//Anchor icon (align view to the top position of the page)
export function AnchorIcon({ 
  width, 
  height, 
  fill="none", 
  stroke="currentColor" 
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      viewBox="-8 -8 37 37"
    >
      <g
        fill={ fill }
        fillRule="evenodd"
        stroke={ stroke }
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4-1.136-1.157-2.864-1.157-4 0l-2 2"></path>
        <path d="M11.5 10.57c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025 1.136 1.157 2.864 1.157 4 0l2-2"></path>
      </g>
    </svg>
  );
}
// Menubar: open 
export function MenuOpenIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2"
}) {
  return (
    <svg 
      className='test-icon-style'
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height } 
      viewBox="0 0 24 24"
    >
      <path
        fill={ "none" }
        stroke={ stroke }
        strokeWidth={ strokeWidth }
        d="M2 19h20M2 5h20M2 12h20"
      ></path>
    </svg>
  );
}
// Menubar: close 
export function MenuCloseIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2"
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={ stroke }
        strokeWidth={ strokeWidth }
        d="M3 3l18 18M3 21L21 3"
      ></path>
    </svg>
  );
}
// github
export function GithubIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2",
  fill="none"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ width } 
      height={ height }
      fill={ fill }
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      className="feather feather-github"
      viewBox="0 0 24 24"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
    </svg>
  );
}
// information icon
export function InformationIcon({ 
  width, 
  height, 
  stroke="currentColor",
  fill="none"
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      fill={ fill }
      stroke={ stroke }
      viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 3.538a8.462 8.462 0 100 16.924 8.462 8.462 0 000-16.923zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M12 16.359a.77.77 0 00.77-.77v-4.102a.77.77 0 10-1.54 0v4.103c0 .425.345.769.77.769z"
        clipRule="evenodd"
      ></path>
      <path d="M13.026 8.41a1.026 1.026 0 10-2.051 0 1.026 1.026 0 002.051 0z"></path>
    </svg>
  );
}