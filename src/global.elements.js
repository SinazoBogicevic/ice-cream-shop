import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  border: ${({ fill }) => (fill ? "none" : "1px solid var(--starbucks-green)")};
  outline: none;
  border-radius: 8px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ fill }) => (fill ? "var(--white)" : "var(--starbucks-green)")};
  background: ${({ fill }) =>
    fill ? "var(--starbucks-green)" : "transparent"};
  padding: 1em 2em;
  margin-right: ${({ fill }) => (fill ? "2rem" : "0px")};
  cursor: pointer;
  -webkit-transition: all 0.8s ease-int-out;
  transition: all 0.4s ease-int-out;

  &:hover {
    background: var(--highlight);
    color: var(--white);
  }
`;
