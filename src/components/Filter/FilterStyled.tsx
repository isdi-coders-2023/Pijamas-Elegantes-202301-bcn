import styled from "styled-components";

const FilterStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 14.9367px 0px 15px;
  gap: 26px;

  width: 400px;
  height: 65px;

  background: #27292a;
  border: 1px solid #ffffff;
  border-radius: 23px;

  select::-webkit-scrollbar {
    width: 50px;
    height: 10px;
  }

  select::-webkit-scrollbar-thumb {
    background: #e75e8d;
  }

  .filter__button {
    font-size: 25px;
    display: flex;
    border: none;
    outline: none;
    color: #cccccc;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background: #27292a;
    width: 360px;
    height: 42px;
    flex: none;
    order: 1;
    flex-grow: 0;
    padding-left: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 300px;
    .filter__button {
      width: 250px;
    }
  }
`;
export default FilterStyled;
