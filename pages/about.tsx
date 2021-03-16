import React from "react";

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
          <div>
            <div className="avatar">
              <img
                src="/images/avatar.jpeg"
                width={200}
                height={200}
                alt="Lawynn Jana"
              />
            </div>
            <p>
              Hello! I'm{" "}
              <a
                href="https://twitter.com/lawynnj"
                target="_blank"
                rel="noopenner noreferrer"
              >
                @Lawynn
              </a>
              , a full-stack software engineer with over two years of experience
              based in Toronto, ON.
            </p>
            <p>
              I enjoy building things for the web, whether that be on the
              front-end or back-end. My current toolset includes NodeJs &
              Express Framework, Python & Flask Framework, React, Redux,
              TypeScript, and other various software and technologies related to
              them.
            </p>

            <p>
              I have experience with many areas in the lifecycle development of
              a project:
              <ul className="skills-list">
                <li>managing client relations</li>
                <li>estimating Tasks</li>
                <li>setting up CI/CD</li>
                <li>leading/co-developing the front-end and back-end</li>
                <li>building RESTful services and microservices</li>
                <li>auditing good UI/UX designs</li>
              </ul>
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
