import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

  .pagination__button {
    width: 165px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    color: white;
    background: #e75e8d;
    border-radius: 24px;
    font-family: "poppins";
    border: 0px;
  }

  .pagination__button:disabled {
    background-color: #a38a92;
  }
`;

export default PaginationStyled;
