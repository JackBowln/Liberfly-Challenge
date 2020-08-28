import styled from "styled-components/native";

export const Top = styled.View`
  margin-top: 40px;
  height: 30px;
  padding: 0 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Circle = styled.View`
  background-color: #eee;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  align-items: center;
  justify-content: center;
`;
export const BalanceContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 2%;
  margin-right: 23%;
  margin-left: 17%;
`;
export const BalanceTitle = styled.Text`
  font-style: bold;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  padding: 30px -5px;
  /* margin-bottom: 26px; */
  /* font-weight: 500; */

  color: #666;
`;
export const Balance = styled.Text`
  font-size: 68px;
  padding: 0 18px;

`;
export const BalanceCurrecy = styled.Text`
  font-size: 18px;
    margin-top: 44px;
    margin-left: -14px;

    
`;
export const BalanceCoin = styled.Text`
  font-size: 42px;
  margin-top: -4px;
  margin-right: -14px;
  font-weight: 300;
`;
export const Money = styled.View`
  display: flex;
  flex-direction: row;
  font-weight: 300;
`;
