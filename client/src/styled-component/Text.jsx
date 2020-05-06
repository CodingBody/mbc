import styled from "styled-components";

export const HeadOne = styled.h1`
  font-weight: 400;
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}rem` : "2rem")};
`;

export const HeadTwo = styled.h2`
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}rem` : "1.6rem")};
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}rem` : "1.3rem")};
  margin-bottom: 1rem;
`;

export const Close = styled.p`
  font-size: 1.7rem;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: bold;
`;

export const LinkText = styled.p`
  font-size: 1.3rem;
  margin-top: 4px;
`;
