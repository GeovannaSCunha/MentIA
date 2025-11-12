import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, ActivityIndicator, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useAuth } from "../context/AuthContext";
import { getIARecommendations } from "../services/iaService";

export default function RecommendationsScreen() {
  const { user } = useAuth();
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskIA = async () => {
    if (!pergunta.trim()) return Alert.alert("Aviso", "Digite uma pergunta primeiro!");
    if (!user) return Alert.alert("Erro", "Usuário não encontrado!");

    try {
      setLoading(true);
      const respostaIA = await getIARecommendations(pergunta, user.area, user.nome);
      setResposta(respostaIA);
    } catch (e: any) {
      Alert.alert("Erro", e.message || "Falha ao consultar IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>💬 Recomendações da MentIA</Text>
      <Text style={globalStyles.text}>
        Olá {user?.nome.split(" ")[0]}! Faça uma pergunta sobre sua carreira ou área de interesse.
      </Text>
      <TextInput
        style={[globalStyles.input, { height: 100 }]}
        multiline
        placeholder="Ex: Como posso começar na área de IA aplicada à saúde?"
        value={pergunta}
        onChangeText={setPergunta}
      />
      <Button title="Gerar Recomendações" color="#201f7d" onPress={handleAskIA} />
      {loading && <ActivityIndicator size="large" color="#201f7d" style={{ marginTop: 16 }} />}
      {!!resposta && (
        <View style={{ marginTop: 20, backgroundColor: "#f5f5ff", padding: 16, borderRadius: 10 }}>
          <Text style={globalStyles.text}>{resposta}</Text>
        </View>
      )}
    </ScrollView>
  );
}
