import styled from "styled-components/native";

export const MainCard = styled.View`
  position: absolute;
  background-color: #FFF;
  width: 100%;
  max-height: 750px;
  height: 80%;
  margin-top: 170px;
  margin-bottom: -10px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-bottom: 20px;
`;
export const CardTop = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 15%;
  margin-top: 0%;
`;
export const Add = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15%;
  margin-top: -12px;
  /* margin-top: 10px; */


  /* box-shadow: 0px 10px 40px gray; */
`;
export const AddBg = styled.View`
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-top: -12px;
  border-radius: 100%;
  background-color: #4B75F2;
  box-shadow: 0px 15px 40px gray;
`;
export const CardFeed = styled.View`
  margin: 50px;
  margin-right: 10vw;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
`;
export const MiniCard = styled.Text`
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 0;
  width: 100%;
  `;
export const Circle = styled.View`
  display: flex; 
  flex-direction: column;
  padding: 12px;
  justify-content: center;
  height: 42px;
  width: 42px;
  margin-right: 12px;
  margin-left: -24px;
  border-radius: 100%;
`;
export const ContainerTran = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  width: 50vw;

`;
export const Tran = styled.Text `
  display: flex;
  flex-direction: row;
  justify-content: space-around;


`;
export const InfoTran = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  padding-left: 0;
  margin-top: -5px;
  
`;
export const DescTran = styled.Text`
  color: #939393;
  font-size: 10px;
`;
export const SubTran = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`;
export const PriceContainer = styled.Text`
display:flex;
flex-direction: row-reverse;
justify-content: space-between;
`;
export const Price = styled.Text`
  display: flex;
  flex-direction: row;
 justify-content: flex-end;
  color: #0d36c5;
  font-weight: 500;
  font-size: 17px;
  margin-top: 7px;
  
`;
export const Currency = styled.Text`
  display: flex;
  flex-direction: row;

`;
export const Border = styled.View`
  height: 1px;
  width: 100%;
  background: #e5e5e5;
  margin-bottom: 15px;
  margin-top: -10px;
  margin-left: 15%;
`;
export const Seemore = styled.Text`
width: 70%;
height: 60px;
position: absolute;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
z-index:3;
background: #FFF;
border: 1.5px solid #969696;
box-sizing: border-box;
border-radius: 21px;
margin-top: 680px;
left: 13%;
`;
export const Seemoretext = styled.Text`

font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
padding: 40px 0;
color: #717171;
`

