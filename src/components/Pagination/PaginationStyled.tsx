import styled from "styled-components";

const PaginationStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 40px;
  justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;

  .pagination__button {
    font-size: 15px;
    font-weight: 990;
    margin-top: 20px;
    width: 165px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    color: white;
    background: #be4871;
    border-radius: 24px;
    font-family: "poppins";
    border: 0px;
  }

  .pagination__button:disabled {
    background-color: #a38a92;
  }

  @media (max-width: 700px) {
    .pagination__button {
      font-size: 22px;
      width: 235px;
      margin-top: 25px;
      border-radius: 30px;
    }
  }
`;

export default PaginationStyled;
