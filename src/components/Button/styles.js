import styled from "styled-components/native";

export const Label = styled.Text`
  color: #fff;
`;
export const Button = styled.TouchableOpacity`
  /* border: 1px; */
  margin: ${(props) => props.margin || "0px"};
  border-radius: 50px;
  width: 100%;
  padding: 10px 15px;
  align-items: center;
  background-color: #6930c3;
`;
