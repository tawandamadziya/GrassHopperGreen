import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../tailwind";

export default function AttendanceScreen() {
  const [status, setStatus] = useState("Not Checked In");

  return (
    <View style={tw`bg-white h-full flex justify-center items-center`}>
      <Text style={tw`text-3xl font-bold text-green-600 mb-6`}>Staff Attendance</Text>

      <Text style={tw`text-xl text-gray-700 mb-4`}>Status: {status}</Text>

      <TouchableOpacity
        style={tw`bg-blue-500 p-3 rounded-lg`}
        onPress={() => setStatus("Checked In")}
      >
        <Text style={tw`text-white text-center font-bold`}>Check In</Text>
      </TouchableOpacity>
    </View>
  );
}
