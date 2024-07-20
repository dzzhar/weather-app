/* eslint-disable react/prop-types */
import StyledContainer from "./Container.styled";

const Container = (props) => {
  const { children } = props;

  return (
    <StyledContainer>
      <div>{children}</div>
    </StyledContainer>
  );
};

export default Container;
