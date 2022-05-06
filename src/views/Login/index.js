import { useState } from "react";
import { Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { schema } from "./schema";
import { auth } from "../../services/firebase";

import * as S from "./styles";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const validationErrors = schema.validate({ email, password });

    if (Object.keys(validationErrors).length === 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate("PatientTabs");
        })
        .catch(() => {
          Alert.alert("Ops", "Usuário ou senha inválido.");
        });
    }

    setErrors(validationErrors);
  };

  return (
    <S.Container>
      <Title>Faça seu login</Title>
      <TextField
        placeholder="E-mail"
        label="E-mail"
        error={errors.email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextField
        type="password"
        placeholder="Senha"
        label="Senha"
        error={errors.password}
        onChangeText={(value) => setPassword(value)}
      />
      <Line />
      <Button margin="10px 0px" onPress={handleSubmit}>
        Entrar
      </Button>
      <Button type="secondary" onPress={() => navigation.navigate("Register")}>
        Cadastre-se
      </Button>
    </S.Container>
  );
}
