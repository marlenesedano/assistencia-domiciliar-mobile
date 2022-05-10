import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";

export function Star({ stars, size }) {
  return (
    <S.Container>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((value, index) => {
        return index < stars ? (
          <AntDesign key={value} name="star" size={size} color="#6930c3" />
        ) : (
          <AntDesign key={value} name="staro" size={size} color="#6930c3" />
        );
      })}
    </S.Container>
  );
}
