import styled from "styled-components/native";

export const Container = styled.View`
  /* padding: 60px 30px 0px 30px; */
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 30,
  },
})``;
