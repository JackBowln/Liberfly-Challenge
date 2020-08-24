import styled from "styled-components/native";

export const Top = styled.View`
  margin-top: 50px;
  height: 30px;
  padding: 0 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Circle = styled.View`
  background-color: #ccc;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  align-items: center;
  justify-content: center;
`;
export const BalanceContainer = styled.View`
  position: absolute;
  width: 286px;
  height: 106px;
  top: 120px;
  left: 40px;
`;
export const BalanceTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  margin-bottom: 20px;
  /* identical to box height */

  color: #000000;
`;
export const Balance = styled.Text`
  font-size: 68px;
  padding: 0 20px;

`;
export const BalanceCurrecy = styled.Text`
  font-size: 18px;
    margin-top: 60px;
`;
export const BalanceCoin = styled.Text`
  font-size: 28px;
  margin-top: 15px;
`;
export const Money = styled.View`
  display: flex;
  flex-direction: row;
`;
