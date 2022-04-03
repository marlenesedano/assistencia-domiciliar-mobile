import * as S from "./styles";

export function Button({ type = "primary", onPress, margin, children }) {
  return (
    <S.Button type={type} onPress={onPress} margin={margin}>
      <S.Label type={type}>{children}</S.Label>
    </S.Button>
  );
}
