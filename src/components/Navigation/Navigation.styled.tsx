import styled from "styled-components";

const NavigationStyled = styled.nav`
  color: white;
  .navigation-list {
    &__item {
      .fa-house-user {
        font-size: 50px;
        color: #ec6090;
      }

      .item__text {
        display: none;
      }

      @media (min-width: 700px) {
        .fa-house-user {
          display: none;
        }

        .item__text {
          font-size: 32px;
          display: block;
          margin-right: 3px;
        }
      }
    }
  }
`;

export default NavigationStyled;
