import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 125px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-bottom: 1rem;

  .header-title {
    font-size: 52px;
    font-weight: 900;
    color: #e75e8d;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HeaderStyled;
