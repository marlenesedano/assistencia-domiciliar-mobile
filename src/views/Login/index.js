import { useState } from "react";
import { Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { schema } from "./schema";
import { auth } from "../../services/firebase";
import { getProfile } from "../../services/user";

import * as S from "./styles";
import { useProfile } from "../../context/ProfileContext";

export function Login({ navigation }) {
  const { setProfile } = useProfile();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const validationErrors = schema.validate({ email, password });

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      const profile = await getProfile(email);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (profile?.type === "professional") {
            clearForm();
            setProfile(profile);
            navigation.navigate("ProfessionalTabs");
          } else if (profile?.type === "patient") {
            clearForm();
            setProfile(profile);
            navigation.navigate("PatientTabs");
          } else {
            Alert.alert("Ops", "Usuário não encontrado");
          }
        })
        .catch(() => {
          Alert.alert("Ops", "Usuário ou senha inválido.");
        })
        .finally(() => setLoading(false));
    }

    setErrors(validationErrors);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <S.Container>
      <Title>Faça seu login</Title>
      <TextField
        placeholder="E-mail"
        label="E-mail"
        error={errors.email}
        defaultValue={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextField
        type="password"
        placeholder="Senha"
        label="Senha"
        defaultValue={password}
        error={errors.password}
        onChangeText={(value) => setPassword(value)}
      />
      <Line />
      <Button margin="10px 0px" onPress={handleSubmit} isLoading={loading}>
        Entrar
      </Button>
      <Button type="secondary" onPress={() => navigation.navigate("Register")}>
        Cadastre-se
      </Button>
    </S.Container>
  );
}
