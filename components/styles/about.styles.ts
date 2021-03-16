import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  .avatar {
    margin-right: 0.8em;
    float: left;
    img {
      border-radius: 100%;
      height: 150px;
      width: 150px;
    }
  }

  .skills-list {
    margin-left: 40px;
  }

  @media (min-width: 759px) {
    .avatar {
      margin-right: 1em;
      img {
        height: 200px;
        width: 200px;
      }
    }
  }

  @media (min-width: 1400px) {
    .avatar {
      img {
        width: 210px;
      }
    }
  }
`;
