import React from "react";
import {
  StyledFooterSection,
  GitHubIcon,
  CodepenIcon,
  TwitterIcon,
} from "./styles/footer.styles";
import { Container } from "./container";

const Footer = () => (
  <StyledFooterSection>
    <Container className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://github.com/lawynnj"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="github"
          >
            <GitHubIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://twitter.com/lawynnj"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="twitter"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>

    <Container>
      <p className="about-site">
        Built by{" "}
        <a
          href="https://twitter.com/lawynnj"
          target="_blank"
          rel="noreferrer noopener"
        >
          Lawynn Jana
        </a>{" "}
        with NextJS.
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
