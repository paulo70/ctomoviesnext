import styled from "styled-components";

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 3em;

  text-transform: uppercase;
  font-weight: bold;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 45%;
  position: relative;
  z-index: 1;

  margin-right: 0.1em;

  font-size: ${props => (props.active ? "15px" : "1em")};
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "#e9ebe1")};
  height: ${props => (props.active ? "3em" : "3.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-transform: uppercase;
  line-height: 1.9;

  padding-bottom: 20px;
  padding-top: 10px;

  :hover {
    background-color: white;
  }

  @media(max-width: 768px){
    font-size: ${props => (props.active ? "11px" : "10px")};
    width: 49%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${props => (props.active ? "" : "display:none")}
`
