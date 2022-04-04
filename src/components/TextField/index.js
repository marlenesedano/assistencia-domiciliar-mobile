import * as S from "./styles";

export function TextField({
  label,
  mask,
  type,
  error,
  keyboardType,
  onChangeText,
  ...rest
}) {
  return (
    <S.Container error={error}>
      {label && <S.Label>{label}</S.Label>}
      {mask && (
        <S.MaskInput
          mask={mask}
          keyboardType={keyboardType}
          onChangeText={onChangeText || (() => {})}
          {...rest}
        />
      )}
      {!mask && <S.TextInput secureTextEntry={type === "password"} {...rest} />}
    </S.Container>
  );
}
