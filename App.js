import React from "react";
import { RegisterPatient } from "./src/views/RegisterPatient";
// import { Title } from "./src/components/Title";

import * as S from "./styles";

export default function App() {
  return (
    <S.Container>
      <RegisterPatient />
    </S.Container>
  );
}
