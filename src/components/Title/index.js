import * as S from "./styles";

export function Title({ children, center = true }) {
  return (
    <S.Container center={center}>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
}
