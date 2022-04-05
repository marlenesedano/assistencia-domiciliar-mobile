import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
`;

export const Title = styled.Text`
  font-size: 22px;
  padding-bottom: 30px;
  font-family: Archivo_600SemiBold;
`;
