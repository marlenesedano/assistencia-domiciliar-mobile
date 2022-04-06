import React from "react";

import * as S from "./styles";

export function PickerSelect({ items }) {
  return (
    <S.Container>
      <S.PickerSelect>
        {items.map((item) => (
          <S.PickerItem key={item.value} label={item.label} value={item.value} />
        ))}
      </S.PickerSelect>
    </S.Container>
  );
}
