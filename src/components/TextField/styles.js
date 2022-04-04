import styled, { css } from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ error }) => css`
    margin-bottom: 8px;
    font-family: MuktaVaani_400Regular;
    font-size: 16px;

    color: ${error ? "#ff7788" : "#494949"};
  `}
`;

export const MaskInput = styled(MaskedTextInput)`
  border: 1px;
  border-radius: 50px;
  padding: 5px 15px;
  margin-bottom: 15px;
  font-family: MuktaVaani_400Regular;
  font-size: 16px;
`;

export const TextInput = styled.TextInput`
  ${({ error }) => css`
    border: 1px;
    border-radius: 50px;
    border-color: ${error ? "#ff7788" : "#494949"};
    padding: 5px 15px;
    margin-bottom: ${error ? "4px" : "15px"};
    font-family: MuktaVaani_400Regular;
    font-size: 16px;
  `}
`;
