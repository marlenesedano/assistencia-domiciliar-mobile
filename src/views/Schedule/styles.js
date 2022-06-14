import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 80px 30px 0px 30px;
  width: 100%;
`;

export const Information = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Content = styled.View`
  margin-left: 32px;
`;

export const Whapper = styled.View`
  display: flex;
  border: 1px;
  border-radius: 14px;
  padding: 14px;
  margin: 0px 0px 10px 0px;
`;

export const PersonName = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
`;

export const ScheduleDate = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
  color: #696969;
`;

export const PersonPhone = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
  margin-left: 10px;
  color: #696969;
`;

export const Contact = styled.View`
  ${({ marginTop }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${marginTop || "20px"} 0px 0px 10px;
  `}
`;

export const Label = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
  margin: 10px 0px 10px 0px;
  color: #494949;
`;

export const LabelAddress = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
  color: #696969;
`;

export const Status = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 22px;
  color: #6930c3;
`;

export const EvaluationContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EvaluationMessage = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0px 0px 0px;
  color: #22333b;
`;
