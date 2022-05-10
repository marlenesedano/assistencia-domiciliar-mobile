import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";
import { findProfessionals } from "../../services/professional";
import { ProfessionalCard } from "./ProfessionalCard";

import * as S from "./styles";

export function ProfessionalSearch({ navigation }) {
  const [professionals, setProfessionals] = useState([]);
  const { profile } = useProfile();

  useEffect(() => {
    (async function loadProfessionals() {
      const data = await findProfessionals();
      setProfessionals(data);
    })();
  }, []);

  return (
    <S.Container>
      <Title center={false}>Olá, {profile.data.name}</Title>
      <Button
        icon="search"
        type="secondary"
        onPress={() => navigation.navigate("ServiceModality")}
      >
        Busque por um profissional
      </Button>
      <S.ListProfessionals>
        {professionals.map((professional) => (
          <ProfessionalCard
            professional={professional.name}
            specialty={professional.specialty}
            navigation={navigation}
          />
        ))}
      </S.ListProfessionals>
    </S.Container>
  );
}
