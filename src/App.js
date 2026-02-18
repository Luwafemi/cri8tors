import React from "react";
import "./App.css";
import logo from "./images/logo_copy.svg";
import logo2 from "./images/menu-icon.svg";
import pic1 from "./images/main-img.svg";
import pic2 from "./images/bottom-line.svg";
import pic3 from "./images/web-dev-img2.png";
import icon1 from "./images/code-icon.svg";
import wizardry from "./images/graphics-img2.png";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import contentWriting from "./images/content-writing-img2.png";
import icon4 from "./images/icon4.svg";
import socialMedia from "./images/social-media-img2.png";
import icon5 from "./images/icon5.svg";
import videoAnimation from "./images/videoAnimation.png";
import icon6 from "./images/icon6.svg";
import pic4 from "./images/talk-to-us.png";
import creative from "./images/creative.png";
import video from "./images/video.png";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-dark fixed-top">
        <a href="#home">
          <img src={logo} alt="Cri8tors" />
        </a>
        <button
          className="navbar-toggler menu"
          type="button"
          // data-toggle="collapse"
          // data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className="menu" src={logo2} alt="menu" />
        </button>
      </nav>
      <div
        className=" navvv collapse navbar-collapse "
        id="navbarSupportedContent"
        style={{ zIndex: 2 }}
      >
        <ul className="navbar-nav float-right ml-auto text-right">
          <li className="nav-item">
            <div style={{ marginTop: "-25px", marginBottom: 10 }}>
              <svg
                className="section"
                // data-toggle="collapse"
                // data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="20px"
                height="20px"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>

            <a className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#webDevelopment">
              Web & App Development
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#graphicWizardry">
              Graphic Wizardry
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contentWriting">
              Content Writing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#socialMedia">
              Social Media Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#videoAnimation">
              Video Animation
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#videoAd">
              Video Ad Creation
            </a>
          </li>
          <button
            className="btn btn-outline-secondary"
            style={{
              borderColor: "white",
              color: "white",
              marginTop: 30,
              marginBottom: 7,
              width: 110,
              marginLeft: 200,
              fontSize: 13,
            }}
          >
            Join us
          </button>
          <button
            className="btn btn-secondary"
            style={{
              backgroundColor: "white",
              color: "rgb(44, 110, 131)",
              width: 110,
              marginLeft: 200,
              fontSize: 13,
            }}
          >
            Talk to us
          </button>
          <small style={{ marginLeft: 200, color: "white", marginTop: 30 }}>
            Follow us via
          </small>
          <div className="social-icons">
            <svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%">
              <path d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z" />
            </svg>

            <svg height="100%" version="1.0" viewBox="0 0 512 512" width="100%">
              <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z" />
            </svg>
            <svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%">
              <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-45.091,392.158c113.283,0 175.224,-93.87 175.224,-175.223c0,-2.682 0,-5.364 -0.128,-7.919c12.005,-8.684 22.478,-19.54 30.779,-31.928c-10.983,4.853 -22.861,8.174 -35.377,9.706c12.772,-7.663 22.478,-19.668 27.076,-34.099c-11.878,7.024 -25.032,12.132 -39.081,14.942c-11.239,-12.005 -27.203,-19.412 -44.955,-19.412c-33.972,0 -61.558,27.586 -61.558,61.558c0,4.853 0.511,9.578 1.66,14.048c-51.213,-2.554 -96.552,-27.075 -126.947,-64.368c-5.237,9.068 -8.302,19.668 -8.302,30.907c0,21.328 10.856,40.23 27.459,51.213c-10.09,-0.255 -19.541,-3.065 -27.842,-7.662l0,0.766c0,29.885 21.2,54.661 49.425,60.409c-5.108,1.404 -10.6,2.171 -16.219,2.171c-3.96,0 -7.791,-0.383 -11.622,-1.15c7.79,24.521 30.523,42.274 57.471,42.784c-21.073,16.476 -47.637,26.31 -76.501,26.31c-4.981,0 -9.834,-0.256 -14.687,-0.894c26.948,17.624 59.387,27.841 94.125,27.841Z" />
            </svg>

            <svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%">
              <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
            </svg>
          </div>
        </ul>
      </div>
      {/* ....................................................................................................................... */}
      <div id="home" className="container-fluid dream mt-5">
        <div className="row ">
          <div className="col-md-4">
            <section className="text-center section">
              <img src={pic1} alt="" style={{ width: "90%", marginTop: 85 }} />
            </section>
          </div>
          <div className="col-md-8">
            <div
              style={{ fontSize: 32, margin: ["20px 40px"], fontWeight: 900 }}
              className="dreamText"
            >
              Let us help make your{" "}
              <div
                style={{
                  color: "#023037",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>dream</span>
                <img style={{ width: 120 }} src={pic2} alt="line" />
              </div>
              become your{" "}
              <div
                style={{
                  color: "#023037",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>reality</span>
                <img style={{ width: 120 }} src={pic2} alt="line" />
              </div>
            </div>
            <p className="m-4 dreamText2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nisi rerum corrupti quis deserunt, eaque architecto maiores
              voluptate odio eius non nihil veritatis aliquid laboriosam ex
              nobis magnam temporibus dignissimos.
            </p>
            <div className="container text-center">
              <button className="btn btn-secondary">Talk to us</button>
            </div>
          </div>
        </div>
      </div>
      {/* ................................................................................................................................. */}
      <div className="container text-center">
        <h6 style={{ marginTop: 30, color: "#8d1111" }} className="ourTalents">
          Our Talents
        </h6>
        <hr className="h-line"></hr>
      </div>
      {/* .................................................................................................................... */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-lg-6">
            <div
              id="webDevelopment"
              className="jumbotron"
              style={{ backgroundColor: "#09242f" }}
            >
              <img src={pic3} alt="" />
            </div>
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="container text-center">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon1} alt="" />
                <h6 className="float-left">
                  Website & Mobile App <br></br> Development
                </h6>
              </div>
              <h6 style={{ fontSize: 14 }}>
                Get that website designed, up and running in
              </h6>
              <div className="price" style={{ backgroundColor: "#09242f" }}>
                7 days from $500
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>

              <div className="text-center">
                <button
                  style={{ backgroundColor: "#09242f" }}
                  className=" ourWork btn btn-secondary"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ............................................................................................................ */}
      <div className="container-fluid">
        <div className="row foo">
          <div className="col-md-4">
            <div
              id="graphicWizardry"
              className="jumbotron"
              style={{ backgroundColor: "#24332b" }}
            >
              <img src={wizardry} alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="container text-center">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon2} alt=""></img>
                <h6 className="text-capitalize">Graphic Wizardry</h6>
              </div>
              <h6 style={{ fontSize: 14 }}>
                Get that perfect logo for your idea or brand in
              </h6>
              <div
                className="text-center price"
                style={{ backgroundColor: "#24332b" }}
              >
                3 days from $200
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#24332b" }}
                  className="btn btn-secondary ourWork"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...................................................................................................................... */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div
              id="contentWriting"
              className="jumbotron"
              style={{ backgroundColor: "#353323" }}
            >
              <img src={contentWriting} alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="container text-center">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon3} alt=""></img>
                <h6 className="text-capitalize">Content Writing </h6>
              </div>
              <h6 style={{ fontSize: 14 }}>
                Hire writers to tell that Story from
              </h6>
              <div
                className="text-center price"
                style={{ backgroundColor: "#353323" }}
              >
                $1000 per month
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#353323" }}
                  className="btn btn-secondary ourWork"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...................................................................................................,,,,,,,,,,,,,,,,,,,,. */}
      <div className="container-fluid">
        <div className="row foo">
          <div className="col-md-4">
            <div
              id="socialMedia"
              className="jumbotron"
              style={{ backgroundColor: "#4b415e" }}
            >
              <img src={socialMedia} alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="container text-center">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon4} alt=""></img>
                <h6>Social Media Management</h6>
              </div>
              <h6 style={{ fontSize: 14 }}>
                Hire a social media management team from
              </h6>
              <div
                className="text-center price"
                style={{ backgroundColor: "#4b415e" }}
              >
                $1200 per month
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#4b415e" }}
                  className="btn btn-secondary ourWork"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ....................................................................................... */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div
              id="videoAnimation"
              className="jumbotron"
              style={{ backgroundColor: "#172f2e" }}
            >
              <img src={videoAnimation} alt="" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="container text-center videoAnimation">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon5} alt=""></img>
                <h6>Video Animation</h6>
              </div>
              <h6 style={{ fontSize: 14 }}>
                Get the perfect animation video for your brand in
              </h6>
              <div
                className="text-center price"
                style={{ backgroundColor: "#172f2e" }}
              >
                4 days from $500
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#172f2e" }}
                  className="btn btn-secondary ourWork"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ..................................................................................... */}
      <div className="container-fluid">
        <div className="row foo">
          <div className="col-md-4">
            <div id="videoAd" style={{ marginBottom: 15 }}>
              {/* <a href="#videoAd"> */}
              <img style={{ width: "100%" }} src={video} alt="video" />
              {/* </a> */}
            </div>
          </div>
          <div className="col-md-8">
            <div className="container text-center">
              <div className="contact" style={{ display: "flex" }}>
                <img className="icons" src={icon6} alt=""></img>
                <h6>Video Ad Creation</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                aspernatur.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nobis debitis beatae quaerat nihil repellendus expedita, vero
                molestias tempore.
              </p>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#3a84f2" }}
                  className="btn btn-secondary ourWork"
                >
                  Our Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ................................................................................. */}
      <div
        className="container jumbotron text-center"
        style={{ backgroundColor: "#023037", marginBottom: 30 }}
      >
        <img src={pic4} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          expedita.
        </p>
        <button
          className="btn btn-outline-secondary"
          style={{
            backgroundColor: "white",
            color: "#023037",
            marginTop: 30,
            marginBottom: 7,
            width: 110,
            fontSize: 16,
          }}
        >
          Talk to us
        </button>
      </div>
      {/* ........................................................................................ */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src={creative} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-8 mt-4 mt-md-0">
            <div className="container text-center">
              <h4 style={{ color: "#b52626" }}> Are you a creative?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                voluptatem neque illum, doloremque vero eveniet nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
                debitis! Eum explicabo, nostrum consectetur quibusdam numquam
                facilis, non tenetur vitae quidem totam possimus, dicta
                blanditiis distinctio. Id ab quam sint!
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#b52626",
                  marginBottom: 60,
                }}
                className="btn btn-secondary"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* .......................................................................... */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mailing-list">
            <br />
            <img style={{ marginBottom: 19 }} src={logo} alt="Cri8tors" />
            <div>Join our mailing list</div>
            <input
              className="form-control"
              type="email"
              placeholder="Your email address"
              style={{
                backgroundColor: "black",
                borderColor: "white",
                marginTop: 10,
              }}
            />
            <br></br>
            <button
              style={{ backgroundColor: "#023037", border: "none" }}
              className="btn btn-success btn-block"
              type="submit"
            >
              Submit
            </button>
            <br></br>
            {/* <div className=" social-icons social-icons2 ">
              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
              >
                <path d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z" />
              </svg>

              <svg
                height="100%"
                version="1.0"
                viewBox="0 0 512 512"
                width="100%"
              >
                <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z" />
              </svg>
              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
              >
                <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-45.091,392.158c113.283,0 175.224,-93.87 175.224,-175.223c0,-2.682 0,-5.364 -0.128,-7.919c12.005,-8.684 22.478,-19.54 30.779,-31.928c-10.983,4.853 -22.861,8.174 -35.377,9.706c12.772,-7.663 22.478,-19.668 27.076,-34.099c-11.878,7.024 -25.032,12.132 -39.081,14.942c-11.239,-12.005 -27.203,-19.412 -44.955,-19.412c-33.972,0 -61.558,27.586 -61.558,61.558c0,4.853 0.511,9.578 1.66,14.048c-51.213,-2.554 -96.552,-27.075 -126.947,-64.368c-5.237,9.068 -8.302,19.668 -8.302,30.907c0,21.328 10.856,40.23 27.459,51.213c-10.09,-0.255 -19.541,-3.065 -27.842,-7.662l0,0.766c0,29.885 21.2,54.661 49.425,60.409c-5.108,1.404 -10.6,2.171 -16.219,2.171c-3.96,0 -7.791,-0.383 -11.622,-1.15c7.79,24.521 30.523,42.274 57.471,42.784c-21.073,16.476 -47.637,26.31 -76.501,26.31c-4.981,0 -9.834,-0.256 -14.687,-0.894c26.948,17.624 59.387,27.841 94.125,27.841Z" />
              </svg>

              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
              >
                <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
              </svg>
            </div> */}
          </div>
          {/* <div className="col-md-6">
            <div className="contact" style={{ display: "flex" }}>
              <img src={address} alt="address" />
              <span>
                1686 Oladele Olashore Street, off Sanusi fafunwa Street,
                Victoria Island, Lagos.
              </span>
            </div>
            <div className="contact" style={{ display: "flex" }}>
              <img src={mail} alt="" mail />
              <span> enquiry@cri8tors.com</span>
            </div>
            <div className="contact" style={{ display: "flex" }}>
              <img src={phone} alt="phone" />
              <span> 01234567890, 09876543210</span>
            </div>
          </div> */}
        </div>
      </div>
      {/* ........................................................................... */}
      <footer className="text-center">
        Copyright &copy; {new Date().getFullYear()} Cri8tors. All rights
        reserved.
      </footer>
    </React.Fragment>
  );
}

export default App;
