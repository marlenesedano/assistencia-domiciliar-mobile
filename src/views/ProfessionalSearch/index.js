import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useProfile } from "../../context/ProfileContext";
import { findProfessionals } from "../../services/professional";
import { ProfessionalCard } from "./ProfessionalCard";
import { PresencialService } from "./PresencialService";
import { ServiceModality } from "./ServiceModality";
import { RemoteService } from "./RemoteService";
import { ScrollBox } from "../../components/ScrollBox";

import * as S from "./styles";

export function ProfessionalSearch({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState("ProfessionalSearch");
  const [searchFilters, setSearchFilters] = useState({});
  const [professionals, setProfessionals] = useState([]);
  const { profile } = useProfile();

  async function loadProfessionals() {
    const data = await findProfessionals(searchFilters);
    setProfessionals(data);
  }

  useEffect(() => {
    loadProfessionals();
  }, [searchFilters]);

  return (
    <ScrollBox>
      {currentScreen === "ServiceModality" && (
        <ServiceModality
          setCurrentScreen={setCurrentScreen}
          setSearchFilters={setSearchFilters}
        />
      )}
      {currentScreen === "PresencialService" && (
        <PresencialService
          setCurrentScreen={setCurrentScreen}
          setSearchFilters={setSearchFilters}
        />
      )}
      {currentScreen === "RemoteService" && (
        <RemoteService
          setCurrentScreen={setCurrentScreen}
          setSearchFilters={setSearchFilters}
        />
      )}
      {currentScreen === "ProfessionalSearch" && (
        <S.Container>
          <Title center={false}>Olá, {profile.data.name}</Title>
          <Button
            icon="search"
            type="secondary"
            onPress={() => setCurrentScreen("ServiceModality")}
          >
            Busque por um profissional
          </Button>
          <S.ListProfessionals>
            {professionals.map((professional) => (
              <ProfessionalCard
                key={professional.email}
                professional={professional}
                navigation={navigation}
                stars={professional.avg}
              />
            ))}
          </S.ListProfessionals>
        </S.Container>
      )}
    </ScrollBox>
  );
}
