import React, { useState } from "react";

import * as S from "./styles";

export function PickerSelect({ items, onValueChange, label, error }) {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <S.Container>
      {label && <S.Label error={error}>{label}</S.Label>}
      <S.PickerContainer>
        <S.PickerSelect
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            if (onValueChange) {
              onValueChange(itemValue, itemIndex);
            }
          }}
        >
          {items.map((item) => (
            <S.PickerItem key={item.value} label={item.label} value={item.value} />
          ))}
        </S.PickerSelect>
      </S.PickerContainer>
      {!!error && <S.Error error={error}>{error}</S.Error>}
    </S.Container>
  );
}
