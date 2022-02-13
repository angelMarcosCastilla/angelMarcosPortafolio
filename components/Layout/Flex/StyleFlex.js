import styled from "styled-components";

export const StyleFlex = styled.div`
  display: flex;
  gap: ${({ gap }) => `${gap}rem`};
  flex:1;
  & > * {
    flex-grow: 1;
    background-color: red;
    flex-wrap: wrap;
  }
`;
