/* eslint-disable react/prop-types */
import Container from "../container";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
