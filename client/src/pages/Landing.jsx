import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            I'm baby iPhone copper mug tousled pug semiotics photo booth street
            art banh mi shabby chic. Bodega boys single-origin coffee cardigan
            post-ironic mustache messenger bag brunch bicycle rights organic
            meggings pitchfork neutra wayfarers knausgaard. Paleo ascot tonx
            artisan put a bird on it, lyft roof party cupping PBR&B fixie
            sustainable craft beer godard.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
