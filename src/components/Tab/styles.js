import styled from "styled-components/native";

export const Bar = styled.View`
    background-color: #1445D9;
    width: 81%;
    height: 160px;
    margin-left: 20%;
    margin-top: 4vh;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 20px 25px;
`;
export const Icons = styled.View`
    position: absolute;
    top: 14px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Infos = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    font-weight: 300;
`;
export const Income = styled.Text`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 24px;
`;
export const Spending = styled.Text`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    padding: 14px;
    font-size: 24px;
`;
export const Desc = styled.Text`
    margin-top:18px;
    font-size: 12px;
`;
export const Add =styled.View`
    position: relative;
    left: 80%;
    bottom: 5px;
    background-color: #4B75F2;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0px 10px 40px gray;
`;