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
    <S.Container>
      {label && <S.Label error={error}>{label}</S.Label>}
      {mask && (
        <S.MaskInput
          mask={mask}
          keyboardType={keyboardType}
          onChangeText={onChangeText || (() => {})}
          {...rest}
        />
      )}
      {!mask && (
        <S.TextInput secureTextEntry={type === "password"} error={error} {...rest} />
      )}
      {!!error && <S.Label error={error}>{error}</S.Label>}
    </S.Container>
  );
}
