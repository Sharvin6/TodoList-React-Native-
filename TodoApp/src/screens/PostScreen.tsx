// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { View, Text, Button, FlatList, Alert } from "react-native";
// import FormField from "../components/molecules/FormField/FormField";
// import { useAddPostMutation, useGetPostsQuery } from "../services/postApi";
// import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/RootStackParams";
// import { useFocusEffect } from "@react-navigation/native";


// type Props = NativeStackScreenProps<RootStackParamList, 'PostScreen'>;

// export default function PostScreen({ navigation }: Props) {

//   const { data: posts, isLoading, isFetching } = useGetPostsQuery(1);

//   console.log("isLoading:", isLoading);   // true only on FIRST load
//   console.log("isFetching:", isFetching); // true every time it refetches

//   return (
//     <View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ padding: 10, borderBottomWidth: 1 }}>
//             <Text style={{ fontWeight: "bold" }}>ID: {item.id}</Text>
//             <Text>Title: {item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }