import React from "react";
import Link from "next/link";

import { StyledCards } from "../styles/cards.styles";

interface ICard {
  basePath: string;
  data: {
    title: string;
    id: string;
    slug: string;
    date: Date;
    previewImage: string;
    description: string;
    websiteLink: string;
    githubLink: string;
  }[];
}

/**
 * Renders a grid of cards
 * @param {Array} data Data to display in grid
 */

const Cards = ({ data, basePath }: ICard) => {
  return (
    <StyledCards>
      {data.map((singleCard) => (
        <article className="article" key={singleCard.id}>
          <div className="article-body">
            <Link
              href={`/${basePath}/[id]`}
              as={`/${basePath}/${singleCard.slug}`}
            >
              <a className="article-link">
                <img
                  src={singleCard.previewImage}
                  alt={singleCard.title}
                  width={450}
                  height={220}
                />
                <time>{singleCard.date}</time>
                <h2>{singleCard.title}</h2>

                {singleCard.description && <p>{singleCard.description}</p>}
              </a>
            </Link>
          </div>
          {singleCard.websiteLink && (
            <a
              className="external-link"
              target="_blank"
              rel="noreferrer noopener"
              href={singleCard.websiteLink}
            >
              Visit website
            </a>
          )}
          {singleCard.githubLink && (
            <a
              className="external-link"
              href={singleCard.githubLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="github"
            >
              Github
            </a>
          )}
        </article>
      ))}
    </StyledCards>
  );
};

export { Cards };
