import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { css } from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled.View``;

export const Icon = styled(Ionicons)`
  padding: 5px 0px 5px 15px;
`;

export const InputContainer = styled.View`
  ${({ error }) => css`
    border: 1px;
    border-radius: 50px;
    border-color: ${error ? "#ff7788" : "#494949"};
    margin-bottom: ${error ? "8px" : "15px"};
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Label = styled.Text`
  ${({ error }) => css`
    margin-bottom: 8px;
    font-family: MuktaVaani_400Regular;
    font-size: 16px;

    color: ${error ? "#ff7788" : "#494949"};
  `}
`;

const inputStyles = ({ icon }) => css`
  padding: 5px 15px;
  font-family: MuktaVaani_400Regular;
  font-size: 16px;
  width: ${icon ? "85%" : "100%"};
`;

export const MaskInput = styled(MaskedTextInput)`
  ${inputStyles}
`;

export const TextInput = styled.TextInput`
  ${inputStyles}
`;
