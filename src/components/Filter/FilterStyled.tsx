import styled from "styled-components";

const FilterStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 14.9367px 0px 15px;
  gap: 26px;

  width: 348px;
  height: 45px;

  background: #27292a;
  border: 1px solid #ffffff;
  border-radius: 23px;

  .filter__button {
    display: flex;
    border: none;
    color: #cccccc;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background: #27292a;
    width: 315px;
    height: 42px;
    flex: none;
    order: 1;
    flex-grow: 0;
    padding-left: 10px;
  }
`;
export default FilterStyled;
