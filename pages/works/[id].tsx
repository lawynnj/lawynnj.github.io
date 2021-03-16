import React from "react";
import { useRouter } from "next/router";

import { Layout, Container } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";
import { StyledContent } from "../../components/styles/content.styles";

/**
 *  Renders work markdown posts
 */

const Article = ({ worksData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = worksData;

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{worksData.date}</time>
          {worksData.previewImage && (
            <img
              src={require(`./${worksData.previewImage}`)}
              height={550}
              width={1200}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
    </Layout>
  );
};

export interface IContentData {
  id: string;
  contentHtml: string;
  date: Date;
  title: string;
  previewImage?: string;
  description?: string;
  tags?: string[];
  category?: string;
}

export const getStaticPaths = async () => {
  const paths = getAllContentIds("work");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const worksData: IContentData = await getContentData(params.id, "work");
  return {
    props: {
      worksData,
    },
  };
};

export default Article;
