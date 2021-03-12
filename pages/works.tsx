import React from "react";
import { Layout, Container, Cards } from "../components";
import { getContentList } from "../lib/content";

/**
 * Work page `/work`
 */
const Work = ({ works }) => {
  return (
    <Layout
      pathname={"/works"}
      pageTitle="Projects"
      pageDescription="Projects spanning software engineering, system design with ReactJS, NodeJs, Amazon Web Services, and Python."
    >
      <Container>
        <p className="page-intro">Selected projects I'm proud of.</p>
        <Cards data={works} basePath="works" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = getContentList("work");
  return {
    props: { works },
  };
};

export default Work;
