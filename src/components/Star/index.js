import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import * as S from "./styles";

export function Star({ stars, size, onStarChanged }) {
  const [starCount, setStarCount] = useState(stars);

  const handleStarChange = (position) => {
    if (onStarChanged) {
      setStarCount(position);
      onStarChanged(position);
    }
  };

  return (
    <S.Container>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((value, index) => {
        return index < starCount ? (
          <AntDesign
            key={value}
            name="star"
            size={size}
            color="#6930c3"
            onPress={() => handleStarChange(index + 1)}
          />
        ) : (
          <AntDesign
            key={value}
            name="staro"
            size={size}
            color="#6930c3"
            onPress={() => handleStarChange(index + 1)}
          />
        );
      })}
    </S.Container>
  );
}
