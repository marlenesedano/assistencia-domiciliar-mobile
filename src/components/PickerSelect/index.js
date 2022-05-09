import React, { useState } from "react";

import * as S from "./styles";

export function PickerSelect({ items, onValueChange, error }) {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <>
      <S.Container>
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
      </S.Container>
      {!!error && <S.Label error={error}>{error}</S.Label>}
    </>
  );
}
