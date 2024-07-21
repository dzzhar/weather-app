import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    height: 100vh;
  }

  @media (min-width: 426px) {
    height: 100vh;
    width: 425px;
  }
`;

export default StyledContainer;
