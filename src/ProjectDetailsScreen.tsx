import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "../tailwind";
import { useNavigation } from "@react-navigation/native";
import { ProjectListScreenNavigationProp } from "./const/types";

export default function ProjectDetailsScreen({ route }) {
    const navigation = useNavigation<ProjectListScreenNavigationProp>();
  const { projectId } = route.params;

  return (
    <View style={tw`bg-white h-full p-6`}>
      <Text style={tw`text-3xl font-bold text-green-600 mb-4`}>Project {projectId}</Text>

      <Image
        source={require("../assets/images/map-placeholder.png")}
        style={tw`w-full h-40 rounded-lg mb-4`}
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Status: Ongoing</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={tw`bg-blue-500 p-3 rounded-lg mt-4`}>
        <Text style={tw`text-white text-center font-bold`}>Mark as Completed</Text>
      </TouchableOpacity>
    </View>
  );
}
