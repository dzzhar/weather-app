import styled from "styled-components";

export const StyledDescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  .desc__single {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 40px;
    max-height: 60px;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }
`;
