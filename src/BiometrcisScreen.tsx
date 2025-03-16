import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../tailwind";
import { FontAwesome } from "@expo/vector-icons";

export default function BiometricSignInScreen() {
  return (
    <View style={tw`bg-white h-full flex justify-center items-center`}>
      <Text style={tw`text-3xl font-bold text-green-600 mb-6`}>Biometric Sign-In</Text>

      <TouchableOpacity style={tw`bg-gray-200 p-6 rounded-full`}>
        <FontAwesome name="fingerprint" size={80} color="green" />
      </TouchableOpacity>

      <Text style={tw`text-gray-600 mt-4`}>Tap to authenticate</Text>
    </View>
  );
}
