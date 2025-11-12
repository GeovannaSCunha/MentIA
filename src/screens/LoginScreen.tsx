import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useAuth } from "../context/AuthContext";
import { globalStyles } from "../styles/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await login(email.trim(), senha);
    } catch (e: any) {
      Alert.alert("Erro ao entrar", e.message);
    }
  };

  return (
    <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Image
        source={require("../../assets/mentIA2.png")}
        style={{ width: 220, height: 80, marginBottom: 24 }}
        resizeMode="contain"
      />
      <Text style={globalStyles.title}>Bem-vindo ao MentIA</Text>

      <TextInput
        style={[globalStyles.input, { width: "100%" }]}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[globalStyles.input, { width: "100%" }]}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Button title="Entrar" color="#201f7d" onPress={handleLogin} />
      </View>

      <Text onPress={() => navigation.navigate("Register")} style={{ color: "#201f7d", marginTop: 8 }}>
        Não tem conta? Cadastre-se
      </Text>
    </View>
  );
}
