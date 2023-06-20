import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(transparent, #300354 60%),
    linear-gradient(#29011a 35%, transparent), url("/bg.svg");

  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom left, top left, center center;
  background-size: 100% 25%, 100% 30%, 100% 80%;
  background-color: transparent;

  @media (max-width: 1088px) {
    height: 100%;
    background-image: linear-gradient(transparent, #300354 60%),
      linear-gradient(#29011a 35%, transparent), url("/bg.svg");

    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom left, top left, center center;
    background-size: 100% 50%, 100% 60%, cover;
    background-color: transparent;
  }

  .content {
    width: 1088px;
  }
`;
