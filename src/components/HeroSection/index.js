import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroChildContainer,
  HeroInnerContainer,
  TextLoop,
  Span,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import GitHubIcon from '@mui/icons-material/GitHub';
import DiscordLogo from "../../images/discord.png";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroInnerContainer>
          <HeroChildContainer id="Left">
            <div className="section__text">
              <p className="section__text__p1">Hello, I'm</p>
              <h1 className="title"> Engr Adil Amin</h1>
              <TextLoop>
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <div id="socials-container">
                <a
                  href="https://www.linkedin.com/in/adil-amin-bhatti520/"
                  target="new"
                >
                 <span>
                <LinkedInIcon  />
                 </span>
                </a>
                <a href="https://github.com/adil-techcode" target="new">
                <span>
                < GitHubIcon />
                 </span>
                </a>

                <a href="https://discordapp.com/users/adil520" target="new">
                  <img
                    src={DiscordLogo}
                    alt="My Discord profile"
                    className="icon"
                  />
                </a>
              </div>
            </div>
          </HeroChildContainer>
        </HeroInnerContainer>
      </HeroContainer>
      <div className="line"></div>
    </div>
  );
};

export default HeroSection;
