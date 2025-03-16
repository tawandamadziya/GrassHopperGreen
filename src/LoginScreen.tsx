import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from "react-native";
import tw from "../tailwind";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInLeft, FadeInUp, FadeOut } from "react-native-reanimated";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={tw`bg-white h-full w-full`}>
      <StatusBar style="light" />

      {/* Background Image */}
      <Image 
        source={require("../assets/images/background.png")}
        style={tw`h-full w-full absolute`}
      />

      {/* Floating Images */}
      <View style={tw`absolute top-10  w-full`}>
        <Animated.Image entering={FadeInDown.delay(600).duration(4000).springify()} style={tw`h-60 w-105 `} resizeMode="contain" source={require("../assets/images/ggt-logo copy.png")} />
        {/* <Animated.Image entering={FadeOut.delay(200).duration(2000).springify()} style={tw`h-60 w-105 `} resizeMode="contain" source={require("../assets/images/grasshopper-logo.png")} /> */}
        {/* <Animated.Image entering={FadeInUp.delay(400).duration(2000).springify()} style={tw`h-[30] `} resizeMode="contain" source={require("../assets/images/light.png")} /> */}
      </View>


      {/* Move the Login Form Lower */}
      <Animated.View entering={FadeInDown.duration(2000).springify()} style={tw`flex-1 justify-end items-center px-6 pb-29`}>
      <Animated.Text entering={FadeInUp.duration(2000).springify()} style={tw`text-4xl text-orange-400 font-bold text-center mb-16`}>Login</Animated.Text>
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

        <TouchableOpacity onPress={() => navigation.navigate("ProjectList")} style={tw`bg-orange-400 w-full py-3 rounded-lg mt-2`}>
          <Text style={tw`text-white text-center font-bold text-lg`}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={tw`text-gray-600 mt-4`}>
            Don't have an account? <Text style={tw`text-orange-400 font-bold`}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
