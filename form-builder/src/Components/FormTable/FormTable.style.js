import styled from "styled-components";

export const TableBox = styled.div`
  width: 100%;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 24px 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom : 10px;
`;
export const SearchBar = styled.div`
  margin-right: 15px;
`;
export const ButtonText = styled.div`
  font-size: 14px;
  display: flex !important;
  align-items: center;
  font-weight: 500;
`;
export const TableStyles = styled.div`
  text-align: center;
  background-color: white;
  padding-top : 25px;
  
  .reactTable {
    border: none;
    box-shadow: none;
    background-color: whitesmoke;
    font-size : 14px;
  }
  .react-table-header-class {
    padding: 14px 0;
    font-weight: 500;
    font-size: 14px;
  }

  .word-wrap {
    word-break: break-word;
    white-space: pre-wrap !important;
  }
  .custom-react-table-theme-class {
    border: 2px solid #0000020;
    padding: 5px;
    margin: 25px 0px 10px 0px;
  }
  .table-header {
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
    color: #1876d2;
  }

  .table-row-style {
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
