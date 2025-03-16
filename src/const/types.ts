import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ProjectList: undefined;
  ProjectDetails: { projectId: string };
};

export type ProjectListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProjectList"
>;
