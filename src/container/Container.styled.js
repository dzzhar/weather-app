import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 425px) {
    width: 85%;
    padding: 0;
    padding-block: 10%;
    height: 100vh;
  }
`;

export default StyledContainer;
