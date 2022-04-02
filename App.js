import React from "react";
import { ThemeProvider } from "styled-components";
import { RegisterPatient } from "./src/views/RegisterPatient";
import { theme } from "./src/styles/theme";

import * as S from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <RegisterPatient />
      </S.Container>
    </ThemeProvider>
  );
}
