import styled from "styled-components/native";

export const MainCard = styled.View`
  position: absolute;
  background-color: #f5f5f5;
  width: 100%;
  height: 75vh;
  margin-top: 25vh;
  margin-bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
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
  left: 74%;
  bottom: 25px;
  margin-top: 10px;

  /* box-shadow: 0px 10px 40px gray; */
`;
export const AddBg = styled.View`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
`;
export const CardFeed = styled.View`
  margin: 50px;
`;
export const MiniCard = styled.Text`
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
export const Circle = styled.View`
  display: flex; 
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  height: 42px;
  width: 42px;
  border-radius: 100%;
`;
export const InfoTran = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  margin-left: 20px;
`;
export const DescTran = styled.Text`
  color: #939393;
  font-size: 14px;
`;
export const SubTran = styled.Text`
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 4px;
`;
export const Price = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0d36c5;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  margin-left: 40%;
`;
export const Seemore = styled.Text`
width: 247px;
height: 65px;
margin-left: 20%;
display: flex;
flex-direction: column;
justify-content: center;
z-index:3;
background: #F5F5F5;
border: 1.5px solid #969696;
box-sizing: border-box;
border-radius: 21px;
margin-top: 66vh;
`;
export const Seemoretext = styled.Text`

font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #717171;
`

