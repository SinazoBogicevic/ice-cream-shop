import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 500px;
`;

export const Img = styled.img`
  width: ${({ thumb }) => (thumb ? "200px" : "100%")};
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;

  &:active {
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`;
