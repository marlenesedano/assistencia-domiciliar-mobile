import * as S from "./styles";

export function Button({ margin, children }) {
  return (
    <S.Button margin={margin}>
      <S.Label>{children}</S.Label>
    </S.Button>
  );
}
