import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index); // Lo recibe del onPress
    setTime(newTime * 60);
  }

  return (
    <View style={styles.view}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index} // Le damos un ID a cada opcion 0, 1 y 2 (por el arreglo)
          onPress={() => handlePress(index)}
          style={[
            // Arreglo de estilos con js en el medio
            styles.item,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
  item: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderColor: "#333333",
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
