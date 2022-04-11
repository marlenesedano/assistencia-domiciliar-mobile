import * as S from "./styles";

export function Button({ type = "primary", onPress, margin, icon, children }) {
  return (
    <S.Button type={type} onPress={onPress} margin={margin} icon={icon}>
      {icon && <S.Icon name={icon} size={24} color="#6930c3" />}
      <S.Label type={type}>{children}</S.Label>
    </S.Button>
  );
}
