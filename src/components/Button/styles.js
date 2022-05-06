import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
  font-family: MuktaVaani_400Regular;
  font-size: 16px;
`;

export const Icon = styled(FontAwesome5)`
  padding: 5px 10px 5px 15px;
`;

export const Button = styled.TouchableOpacity`
  margin: ${(props) => props.margin || "0px"};
  border-radius: 50px;
  width: 100%;
  padding: ${({ icon }) => (icon ? "6px 15px" : "10px 15px")};
  align-items: center;
  border: 1px;
  border-color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.white : theme.colors.primary};
  background-color: ${({ type, theme }) =>
    type === "primary" ? theme.colors.primary : theme.colors.white};
  flex-direction: row;
  justify-content: center;
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.white,
}))``;
