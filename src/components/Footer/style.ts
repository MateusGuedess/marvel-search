import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: center;
  position: absolute;
  bottom: 40px;

  .footer__content {
    width: 1088px;

    .footer__options {
      display: flex;
      align-items: center;
      gap: 36px;

      .footer__spiders {
        display: flex;
        align-items: center;
        gap: 65px;

        img {
          transition: 0.5s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .footer__button {
        transition: 1s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
