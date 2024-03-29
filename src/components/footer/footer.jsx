import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import PageBtnColorChange, {
  check,
} from "../../functions/pageBtnColorChange.js";
function Footer() {
  // console.log("Footer", check);
  return (
    <footer className="footer">
      <Link
        id="homebtn"
        className="page-icon-btn"
        to="/"
        onClick={() => PageBtnColorChange("homebtn")}
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="33"
          viewBox="0 0 18 23"
          fill="none"
        >
          <path
            className="stroke"
            d="M1 2.05C1 1.77152 1.10412 1.50445 1.28945 1.30754C1.47478 1.11062 1.72614 1 1.98824 1H11.8706L16.8118 6.25V20.95C16.8118 21.2285 16.7076 21.4955 16.5223 21.6925C16.337 21.8894 16.0856 22 15.8235 22H1.98824C1.72614 22 1.47478 21.8894 1.28945 21.6925C1.10412 21.4955 1 21.2285 1 20.95V2.05Z"
            stroke={
              check["homebtn"] ? "var(--icon-fill-active)" : "var(--black-col)"
            }
            strokeWidth="1.48235"
            strokeLinejoin="round"
          />
          <path
            className="stroke"
            d="M4.95288 9.40002H12.8588"
            stroke={
              check["homebtn"] ? "var(--icon-fill-active)" : "var(--black-col)"
            }
            strokeWidth="1.48235"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="stroke"
            d="M4.95288 13.6H12.8588"
            stroke={
              check["homebtn"] ? "var(--icon-fill-active)" : "var(--black-col)"
            }
            strokeWidth="1.48235"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Link
        id="create"
        className="page-icon-btn"
        to="/create_notes"
        onClick={() => PageBtnColorChange("create")}
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g opacity="0.7">
            <path
              d="M22.8 9.43914V21.3991C22.8 21.7406 22.7327 22.0786 22.602 22.3941C22.4714 22.7095 22.2799 22.9962 22.0384 23.2376C21.797 23.479 21.5104 23.6705 21.1949 23.8012C20.8795 23.9319 20.5414 23.9991 20.2 23.9991H4.59999C3.91043 23.9991 3.24911 23.7252 2.76152 23.2376C2.27393 22.75 2 22.0887 2 21.3991V5.79915C2 5.10959 2.27393 4.44827 2.76152 3.96068C3.24911 3.47308 3.91043 3.19916 4.59999 3.19916H15.4862"
              stroke={
                check["create"] ? "var(--icon-fill-active)" : "var(--black-col)"
              }
              strokeWidth="1.48235"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.3762 0.341268C25.2812 0.236905 25.166 0.152883 25.0377 0.0942788C24.9093 0.0356747 24.7704 0.00370574 24.6293 0.000303475C24.4882 -0.00309879 24.3479 0.0221363 24.2169 0.0744841C24.0858 0.126832 23.9668 0.205205 23.8669 0.304868L23.0628 1.10502C22.9654 1.20253 22.9106 1.33474 22.9106 1.47259C22.9106 1.61044 22.9654 1.74266 23.0628 1.84016L23.7999 2.57596C23.8482 2.62451 23.9057 2.66303 23.9689 2.68931C24.0322 2.71559 24.1 2.72912 24.1685 2.72912C24.237 2.72912 24.3048 2.71559 24.368 2.68931C24.4313 2.66303 24.4887 2.62451 24.537 2.57596L25.3209 1.79596C25.7174 1.40012 25.7545 0.755317 25.3762 0.341268Z"
              fill={
                check["create"] ? "var(--icon-fill-active)" : "var(--black-col)"
              }
            />
            <path
              d="M21.4372 2.73003L9.70338 14.443C9.63224 14.5139 9.58053 14.6018 9.55323 14.6984L9.01048 16.315C8.99748 16.3589 8.99656 16.4054 9.00781 16.4498C9.01907 16.4941 9.04209 16.5346 9.07444 16.5669C9.10679 16.5993 9.14727 16.6223 9.19161 16.6336C9.23596 16.6448 9.28252 16.6439 9.32638 16.6309L10.9416 16.0881C11.0382 16.0608 11.1262 16.0091 11.1971 15.938L22.91 4.20292C23.0184 4.0934 23.0792 3.94555 23.0792 3.79147C23.0792 3.6374 23.0184 3.48955 22.91 3.38002L22.2633 2.73003C22.1536 2.62067 22.0051 2.55927 21.8502 2.55927C21.6954 2.55927 21.5468 2.62067 21.4372 2.73003Z"
              fill={
                check["create"] ? "var(--icon-fill-active)" : "var(--black-col)"
              }
            />
          </g>
        </svg>
      </Link>
    </footer>
  );
}

export default React.memo(Footer);
