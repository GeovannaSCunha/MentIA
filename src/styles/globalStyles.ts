import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#201f7d",
    marginBottom: 16
  },
  text: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f5f5f5"
  },
  card: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#f5f5ff",
    marginBottom: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#201f7d",
    marginBottom: 4
  }
});
