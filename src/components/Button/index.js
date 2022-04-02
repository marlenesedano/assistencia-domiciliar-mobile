import * as S from "./styles";

export function Button({ type = "primary", margin, children }) {
  return (
    <S.Button type={type} margin={margin}>
      <S.Label type={type}>{children}</S.Label>
    </S.Button>
  );
}
