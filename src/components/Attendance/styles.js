import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 10px;
  border: 1px;
  border-radius: 14px;
  padding: 14px;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperLeft = styled.Text`
  margin-left: 10px;
  justify-content: flex-start;
`;

export const WrapperRight = styled.Text``;

export const PersonName = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
`;
export const ScheduleDate = styled.Text`
  font-family: MuktaVaani_400Regular;
  font-size: 18px;
  color: #696969;
`;
