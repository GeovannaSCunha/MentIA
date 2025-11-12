import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList } from "../../App";
import { useAuth } from "../context/AuthContext";
import { globalStyles } from "../styles/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const { register } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !area) {
      return Alert.alert("Atenção", "Preencha todos os campos.");
    }
    await register({ nome, email, area });
    Alert.alert("Sucesso", "Cadastro realizado!");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Criar Conta</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Picker
        selectedValue={area}
        onValueChange={setArea}
        style={globalStyles.input}
      >
        <Picker.Item label="Selecione uma área de interesse" value="" />
        <Picker.Item label="Inteligência Artificial" value="IA" />
        <Picker.Item label="Sustentabilidade" value="Sustentabilidade" />
        <Picker.Item label="Gestão" value="Gestão" />
        <Picker.Item label="Soft Skills" value="Soft Skills" />
      </Picker>
      <Button title="Cadastrar" color="#201f7d" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate("Login")} style={{ color: "#201f7d", marginTop: 12 }}>
        Já tem conta? Fazer login
      </Text>
    </View>
  );
}
