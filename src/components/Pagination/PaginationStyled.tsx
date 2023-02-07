import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

  .previous__page {
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

  .first {
    background-color: #a38a92;
  }

  .next__page {
    width: 165px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    color: white;
    border-radius: 25px;
    font-family: "poppins";
    border: 0px;
    background-color: #e75e8d;
  }
`;

export default PaginationStyled;
