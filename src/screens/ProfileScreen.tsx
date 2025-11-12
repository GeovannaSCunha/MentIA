import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAuth } from "../context/AuthContext";
import { globalStyles } from "../styles/globalStyles";

export default function ProfileScreen() {
  const { user, updateProfile, logout } = useAuth();
  const [nome, setNome] = useState(user?.nome || "");
  const [area, setArea] = useState(user?.area || "");

  const handleSave = async () => {
    if (!user) return;
    if (!nome || !area) return Alert.alert("Atenção", "Preencha todos os campos.");
    await updateProfile({ nome, email: user.email, area });
    Alert.alert("Sucesso", "Perfil atualizado!");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Meu Perfil</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
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
      <View style={{ marginBottom: 12 }}>
        <Button title="Salvar" color="#201f7d" onPress={handleSave} />
      </View>
      <Button title="Sair" color="#000000" onPress={logout} />
    </View>
  );
}
