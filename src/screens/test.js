import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const Test = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // وظيفة تسجيل المستخدم
  const handleSignup = async () => {
    if (!username || !password || !email) {
      Alert.alert("يرجى ملء جميع الحقول");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        password,
        email,
      });
      if (response.data.success) {
        Alert.alert("تم تسجيل الحساب بنجاح");
      } else {
        Alert.alert("فشل التسجيل");
      }
    } catch (error) {
      Alert.alert("خطأ في الاتصال بالخادم");
    }
  };

  // وظيفة تسجيل الدخول
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("يرجى ملء جميع الحقول");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        password,
      });
      if (response.data.success) {
        Alert.alert("تم تسجيل الدخول بنجاح");
      } else {
        Alert.alert("فشل تسجيل الدخول");
      }
    } catch (error) {
      Alert.alert("خطأ في الاتصال بالخادم");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول أو التسجيل</Text>

      {/* Signup Form */}
      <TextInput
        style={styles.input}
        placeholder="اسم المستخدم"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="تسجيل حساب جديد" onPress={handleSignup} />

      {/* Login Form */}
      <TextInput
        style={styles.input}
        placeholder="اسم المستخدم"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="تسجيل الدخول" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default Test;
