import styled, { css } from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View``;

export const PickerContainer = styled.View`
  ${({ error }) => css`
    border: 1px;
    border-radius: 50px;
    margin-bottom: ${error ? "8px" : "15px"};
    margin-top: 8px;
  `}
`;

export const PickerSelect = styled(Picker)`
  border: 1px;
  border-color: #ff7788;
  width: 100%;
  height: 40px;
  margin-left: 10px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const PickerItem = styled(Picker.Item)`
  border: 1px;
  border-color: #ff7788;
  padding: 0px 10px;
`;

export const Label = styled.Text`
  ${({ error }) => css`
    font-family: MuktaVaani_400Regular;
    font-size: 16px;

    color: ${error ? "#ff7788" : "#494949"};
  `}
`;

export const Error = styled.Text`
  ${({ error }) => css`
    margin-top: -8px;
    margin-bottom: 8px;
    font-family: MuktaVaani_400Regular;
    font-size: 16px;

    color: ${error ? "#ff7788" : "#494949"};
  `}
`;
