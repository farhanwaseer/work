import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ImageBackground,
  useColorScheme,
} from "react-native";
import { Navbar } from "./MenuItems3";

export const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, setLogin] = useState(false);
  const [light, setLight] = useState("light");
  const colorScheme = useColorScheme();
  
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Navbar />
      <ScrollView
        style={[
          styles.container,
          colorScheme === light
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#333333" },
        ]}
        keyboardDismissMode="on-drag"
      >
        <View style={styles.headerWrapper}>
          <ImageBackground
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Little Lemon Logo"}
            style={styles.logoImg}
            source={require("../img/Little_Lemon_logo.png")}
          />
          <Text  style={[
            styles.headerText,
            colorScheme === light
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>Little Lemon</Text>
        </View>
        {!login && (
          <Text
            style={[
              styles.infoSection,
              colorScheme === light
                ? { color: "#333333" }
                : { color: "#EDEFEE" },
            ]}
          >
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. View
            our menu to explore our cuisine with daily specials!
          </Text>
        )}
        {login && (
          <View>
            <TextInput
              style={styles.textInput}
              value={email}
              onChange={onChangeEmail}
              keyboardType="email-address"
              placeholder="Email "
              clearButtonMode="always"
            />
            <TextInput
              style={styles.textInput}
              value={password}
              onChange={onChangePassword}
              placeholder="Password "
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
        )}
        <Pressable
          onPress={() => {
            setLogin(!login);
          }}
        >
          <Text style={styles.loginBtn}>{login ? "Login" : "LogOut"}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setLight(light === "light" ? "dark" : "light");
          }}
        >
          <Text style={styles.loginBtn}>{light ? "Dark" : "Light"}</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  loginBtn: {
    color: "#fad417ff",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: "#85848262",
    borderRadius: 30,
  },
  textInput: {
    height: 50,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 12,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    fontWeight: "bold",
    borderColor: "EDEFEE",
    backgroundColor: "white",
  },
  infoSection: {
    fontSize: 20,
    padding: 10,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  logoImg: {
    margin: 10,
    padding: 10,
    height: 70,
    width: 80,
  },
});
