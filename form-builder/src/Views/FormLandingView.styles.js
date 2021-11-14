import styled from 'styled-components';

const StyleWrapper = styled.div`
  .table {
    width: 100%;
    border : 2px solid gray;
    border-radius : 4px;
    padding: 12px 24px;
    background-color:white;
  }
  .reactTable {
    border: none;
    box-shadow: none;
    background-color: whitesmoke;
  }
  .react-table-header-class {
    padding: 14px 0;
    font-weight: 600;
  }
  .c-btn {
    position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 0.8rem;
  font-weight: 500;
  outline: none;
  margin : 0px 5px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  border-radius: 6px; }
  .c-btn:focus {
    outline: 0; }
  .heading {
    display : flex;
    align-items:center;
    justify-content : space-between;
    padding : 0px 0px 10px 0px;
  }  
  .searchbar {
    display : flex;
    align-items:center;
  }

  .form{
    background-color : whitesmoke;
    padding : 25px;
    margin-top : 10px;
  }

  .boxheader {
    display:flex;
    align-items : center;
    justify-content : space-between;
  }

  .Backward {
    display:flex;
    align-items:center;
    justify-content:flex-end ; 
   
  }
  .Backward:hover{
    cursor : pointer;   
  }
  .b-text{
    padding:5px;
    color : #4d06ab;
    font-weight: 600;
  }

`

export default StyleWrapper;