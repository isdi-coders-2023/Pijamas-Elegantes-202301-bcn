import styled from "styled-components";

const ErroPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  gap: 52px;

  .error-title {
    font-size: 128px;
    font-weight: 800;
  }

  .error-subtitle {
    font-size: 57px;
    font-weight: 600;
  }

  .error-description {
    font-weight: 500;
    font-size: 32px;
  }

  @media (min-width: 1356px) {
    gap: 82px;

    .error-title {
      font-size: 200px;
    }

    .error-description {
      width: 680px;
    }
  }
`;

export default ErroPageStyled;
