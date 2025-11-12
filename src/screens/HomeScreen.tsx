import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen() {
  const trilhas = [
    { titulo: "Trilha de IA para Iniciantes", descricao: "Fundamentos de inteligência artificial e machine learning." },
    { titulo: "Trilha de Sustentabilidade", descricao: "Conceitos de ESG e inovação sustentável." },
    { titulo: "Trilha de Soft Skills", descricao: "Comunicação, liderança e colaboração." }
  ];

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Suas Trilhas MentIA</Text>
      {trilhas.map((t, idx) => (
        <TouchableOpacity key={idx} style={globalStyles.card}>
          <Text style={globalStyles.cardTitle}>{t.titulo}</Text>
          <Text style={globalStyles.text}>{t.descricao}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
