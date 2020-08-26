import styled from "styled-components/native";

export const Top = styled.View`
  width: auto;
  margin-top: -38px;
  height: 30px;
  padding: 0 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
`;
export const Circle = styled.View`
  background-color: #0d36c5;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  align-items: center;
  justify-content: center;
`;
export const TextTransactions = styled.Text`
  display: flex;
  flex-direction: column;
  margin: 30px;
  margin-left: 60px;
`;
export const Tran = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
`;
export const AllTran = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.65);
`;
