import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  return (
    <Wrapper>
      <Title>MY TITLE</Title>
    </Wrapper>
  );
};

export default StyledComponent;
