import styled from "@emotion/styled";

export const StyledCards = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color: var(--text-color);
  }
  p {
    color: var(--text-color-dark);
  }

  article.article {
    margin: 0 0 2%;
    overflow: hidden;
    max-width: 400px;

    img {
      transition: all var(--animation-duration)
        var(--transition-timing-function);
      object-fit: contain;
    }
    &:hover img {
      transform: scale(1.1);
    }
    @media all and (min-width: 560px) {
      margin-right: 0.5em;
      flex: 0 1 48%;

      &:last-child {
        margin-right: 0;
      }
    }

    @media all and (min-width: 1024px) {
      flex: 0 1 32.5%;
      img {
        /* height: 180px; */
      }
    }
  }
  .external-link {
    display: block;
    &:hover {
      color: --text-color-white;
    }
  }
  .article-body {
    &:hover h2 {
      color: #fff;
    }
    &:hover p {
      color: var(--text-color-bright);
    }
  }

  @media all and (min-width: 560px) {
    justify-content: space-between;
    flex-direction: row;
  }

  time {
    color: #808080;
    font-size: 0.9em;
  }

  a.article-link {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &:hover h2 {
      text-decoration: underline;
      color: #fff;
    }
  }

  h2 {
    font-size: 1.17em;
    margin-bottom: 0.3em;
  }

  img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 0.4em;
    transform: scale(1);
    transition: 5s all;
  }

  @media all and (min-width: 560px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;
