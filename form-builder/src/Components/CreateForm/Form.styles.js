import styled from "styled-components";

export const TableBox = styled.div`
  width: 100%;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 24px 24px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .form{
    width : 100%;
    background-color : whitesmoke;
    padding : 25px;
    margin-top : 10px;
    display : flex;
    flex-direction : column;
    font-size : 17px;
  }
  .fs-30 {
      font-size : 30px;
  }
  .action-buttons {
      width : 100%;
    background-color : whitesmoke;
    margin-top : 10px;
      display : flex;
  }
  .options.span {
      margin : 10px;
  }

  .ant-checkbox {
      margin-right : 10px;
  }
  .ant-radio-input {
      margin-right : 10px;
  }

  .questions-box {
      display : flex;
      flex-direction : column;
      padding : 25px;
      line-height: 2;
      word-spacing: 3px;
      color: #3a363687
  }

`;