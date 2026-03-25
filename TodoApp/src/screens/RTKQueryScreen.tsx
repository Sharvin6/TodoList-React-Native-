import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Button, FlatList, Alert } from "react-native";
import FormField from "../components/molecules/FormField/FormField";
import { useAddPostMutation, useGetPostsQuery } from "../services/postApi";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParams";
import { useFocusEffect } from "@react-navigation/native";

type RTKProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RTKQuery'>;
};

export default function RTKQueryScreen({ navigation }: RTKProps) {

  const [title, setTitle] = useState("")
  // const { data: PostData, error, isLoading: loading } = useGetPostsQuery(undefined, {
  //   pollingInterval: 5000,
  // });
  const { data: PostData, error, isLoading: loading } = useGetPostsQuery();
  const [addPost, { data, isLoading, isSuccess, reset }] = useAddPostMutation();

  const timeRef = useRef<number | null>(null);


  const handleAdd = async () => {

    if (!title.trim()) {
      Alert.alert("Validation", "Title cannot be empty!");
      return;
    }
    const result = await addPost({ title });
    if (result.data) {
      navigation.navigate("TempResult", { tempData: result.data });
    }
  }

  useFocusEffect(
    useCallback(() => {

      if (isSuccess) {
        //screen focused
        timeRef.current = setTimeout(() => {
          reset();
        }, 3000)

        return () => {
          //screen lost focus - clear  timer
          if (timeRef.current) {
            clearTimeout(timeRef.current);
          };
        };

      };
    }, [isSuccess])
  );

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error</Text>
  // useEffect(() => {
  //   if (isSuccess) {
  //     Alert.alert("Success");
  //     //reset();
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   if (isSuccess) {

  //     const timer = setTimeout(() => {
  //       reset();
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isSuccess]);



  return (
    <View style={{ padding: 10, flex: 1 }}>
      {/* <Button title="Check un" onPress={() => navigation.navigate("PostScreen")} /> */}

      <FormField label="Enter" value={title} onChangeText={setTitle}></FormField>
      <Button title="Submit" onPress={handleAdd} disabled={isLoading} />


      {isSuccess && data && (
        <Text style={{ borderWidth: 20 }}>Temporary: {data.title}</Text>
      )}
      <FlatList
        data={PostData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>id:{item.id}</Text>
            <Text>title:{item.title}</Text>

          </View>
        )}
      />
    </View >
  );
};

