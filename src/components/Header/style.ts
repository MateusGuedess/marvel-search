import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 24px;
  display: flex;
  justify-content: center;

  .header__content {
    width: 1088px;
    display: flex;
    align-items: center;

    .header__links {
      margin: 0 150px 0 68px;
      display: flex;
      align-items: center;
      gap: 64px;

      a {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
        flex: none;
        order: 0;
        flex-grow: 0;
        text-decoration: none;
      }
    }
  }
`;
