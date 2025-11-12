import axios from "axios";

const OPENROUTER_API_KEY = "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";

export async function getIARecommendations(pergunta: string, area: string, nome: string) {
  const prompt = `
Você é a MentIA — uma mentora digital inteligente e empática, criada para orientar pessoas no desenvolvimento profissional.
Seu papel é oferecer conselhos claros, acolhedores e personalizados, ajudando o usuário a evoluir na carreira com propósito e aprendizado contínuo.

O usuário se chama ${nome}, e tem interesse na área de ${area}.
Ele te perguntou: "${pergunta}"

Com base nisso, gere uma resposta em português, com:
1. Uma saudação breve e motivadora.
2. Recomendações práticas de trilhas de aprendizado (ex: cursos, certificações, habilidades técnicas e comportamentais).
3. Sugestões de microcursos acessíveis (ex: plataformas abertas, temas curtos).
4. Dicas de mentoria e próximos passos para crescimento profissional.
5. Use um tom humano, inspirador e direto — como uma mentora experiente falando com empatia.

Responda de forma organizada, com subtítulos e marcadores.
`;


  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error: any) {
    console.error("Erro ao consultar IA:", error.response?.data || error.message);
    return "Erro ao gerar resposta da IA. Verifique sua conexão ou tente novamente mais tarde.";
  }
}