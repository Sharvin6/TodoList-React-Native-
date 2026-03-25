import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from 'react-native';
import { RootStackParamList } from "../navigation/RootStackParams";

type Props = NativeStackScreenProps<RootStackParamList, "TempResult">;

export default function TempResultScreen({ route }: Props) {

  const { tempData } = route.params;

  return (

    <View>
      <Text>{tempData.title}</Text>
    </View>
  );
}


