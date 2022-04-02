import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
  font-family: MuktaVaani_400Regular;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  margin: ${(props) => props.margin || "0px"};
  border-radius: 50px;
  width: 100%;
  padding: 10px 15px;
  align-items: center;
  border: 1px;
  border-color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
  background-color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.primary : theme.colors.white};
`;
