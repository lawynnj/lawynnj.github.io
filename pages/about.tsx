import React from "react";
import Image from "next/image";

import { Layout, Container } from "../components";
import { StyledAbout } from "../components/styles/about.styles";

/**
 * About page `/about`
 */
const About = () => {
  return (
    <Layout
      pathname={"/about"}
      pageTitle="About"
      pageDescription="About page of Lawynn Jana, Software Engineer based in Toronto, ON"
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <Image
                src="/images/avatar.jpeg"
                width={200}
                height={200}
                alt="Lawynn Jana"
              />
            </div>
            <p>
              I'm{" "}
              <a
                href="https://twitter.com/lawynnj"
                target="_blank"
                rel="noopenner noreferrer"
              >
                @Lawynn
              </a>
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
