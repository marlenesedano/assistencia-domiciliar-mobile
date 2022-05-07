import styled, { css } from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  border: 1px;
  border-radius: 50px;
  margin-bottom: 10px;
  margin-top: 8px;
`;

export const PickerSelect = styled(Picker)`
  border: 1px;
  border-color: #494949;
  width: 100%;
  height: 40px;
  margin-left: 10px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const PickerItem = styled(Picker.Item)`
  border: 1px;
  border-color: #494949;
  padding: 0px 10px;
`;

export const Label = styled.Text`
  ${({ error }) => css`
    margin-bottom: 8px;
    font-family: MuktaVaani_400Regular;
    font-size: 16px;
    color: ${error ? "#ff7788" : "#494949"};
  `}
`;
