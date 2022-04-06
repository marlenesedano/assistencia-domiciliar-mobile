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
  ...rest
}) {
  return (
    <S.Container>
      {label && <S.Label error={error}>{label}</S.Label>}
      <S.InputContainer error={error} multiline={multiline}>
        {!!icon && <S.Icon name={icon} size={28} color="#494949" />}
        {mask && (
          <S.MaskInput
            mask={mask}
            keyboardType={keyboardType}
            onChangeText={onChangeText || (() => {})}
            icon={icon}
            {...rest}
          />
        )}
        {!mask && (
          <S.TextInput
            secureTextEntry={type === "password"}
            error={error}
            icon={icon}
            multiline={multiline}
            {...rest}
          />
        )}
      </S.InputContainer>
      {!!error && <S.Label error={error}>{error}</S.Label>}
    </S.Container>
  );
}
