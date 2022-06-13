import { useEffect, useState } from "react";
import * as S from "./styles";

export function TextField({
  label,
  mask,
  type,
  error,
  keyboardType,
  onChangeText,
  icon,
  multiline,
  defaultValue,
  ...rest
}) {
  const [text, setText] = useState(defaultValue);

  useEffect(() => {
    setText(defaultValue);
  }, [defaultValue]);

  const handleOnChangeText = (newText) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <S.Container>
      {label && <S.Label error={error}>{label}</S.Label>}
      <S.InputContainer error={error} multiline={multiline}>
        {!!icon && <S.Icon name={icon} size={28} color="#494949" />}
        {mask && (
          <S.MaskInput
            mask={mask}
            keyboardType={keyboardType}
            onChangeText={handleOnChangeText}
            icon={icon}
            value={text}
            {...rest}
          />
        )}
        {!mask && (
          <S.TextInput
            secureTextEntry={type === "password"}
            error={error}
            icon={icon}
            value={text}
            onChangeText={handleOnChangeText}
            multiline={multiline}
            {...rest}
          />
        )}
      </S.InputContainer>
      {!!error && error.trim() !== "" && <S.Label error={error}>{error}</S.Label>}
    </S.Container>
  );
}
