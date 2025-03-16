import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "../tailwind";
import { useNavigation } from "@react-navigation/native";
import { ProjectListScreenNavigationProp } from "./const/types";

const projects = [
  { id: "001", name: "Project A2", status: "Ongoing" },
  { id: "002", name: "Block B4", status: "Planned" },
  { id: "003", name: "Site X1", status: "Complete" },
];

export default function ProjectListScreen() {
  const navigation = useNavigation<ProjectListScreenNavigationProp>();

  return (
    <View style={tw`bg-white h-full p-6`}>
      <Text style={tw`text-3xl font-bold text-green-600 mb-4`}>My Projects</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-gray-100 p-4 mb-3 rounded-lg`}
            onPress={() => navigation.navigate("ProjectDetails", { projectId: item.id })}
          >
            <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
