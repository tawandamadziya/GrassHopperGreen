import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ImageBackground 
} from "react-native";
import tw from "../tailwind";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function SignupScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={tw`bg-white h-full w-full`}>
      <StatusBar style="light" />
      <Image 
        source={require("../assets/images/background.png")}
        style={tw`h-full w-full absolute`}
      />

      {/* Floating Images */}
      <View style={tw`flex-row justify-around w-full absolute mt-10`}>
      <Animated.Image entering={FadeInDown.delay(600).duration(4000).springify()} style={tw`h-60 w-105 `} resizeMode="contain" source={require("../assets/images/ggt-logo copy.png")} />
      </View>

      {/* Signup Form */}
      <View style={tw`flex-1 justify-end items-center px-6 pb-20`}>
      <Text style={tw`text-4xl text-orange-400 font-bold text-center mb-10`}>Signup</Text>

        <TextInput
          style={tw`w-full h-12 bg-gray-200 text-black px-4 rounded-md mb-4`}
          placeholder="Email"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={tw`w-full h-12 bg-gray-200 text-black px-4 rounded-md mb-4`}
          placeholder="Password"
          placeholderTextColor="#555"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={tw`w-full h-12 bg-gray-200 text-black px-4 rounded-md mb-4`}
          placeholder="Confirm Password"
          placeholderTextColor="#555"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={tw`bg-orange-400 w-full py-3 rounded-lg mt-2`}>
          <Text style={tw`text-white text-center font-bold text-lg`}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={tw`text-gray-600 mt-4`}>Already have an account? <Text style={tw`text-orange-400 font-bold`}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
