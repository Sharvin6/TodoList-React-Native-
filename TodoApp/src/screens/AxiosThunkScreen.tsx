import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store/store";
import { createPost, fetchPosts } from "../redux/thunk/apiThunk";
import FormField from "../components/molecules/FormField/FormField";

const PostScreen = () => {
  const [title, newTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { posts, loading } = useSelector(
    (state: RootState) => state.post
  );

  const handleFetch = () => {
    dispatch(fetchPosts());
  };

  const handlePost = () => {
    const newPost = {
      id: Math.random(),
      title: title
    };
    dispatch(createPost(newPost));
  };

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <FormField label="Enter" value={title} onChangeText={newTitle}></FormField>
      <Button title="Submit" onPress={handlePost} />

      <Button title="Fetch Posts" onPress={handleFetch} />

      {loading && <Text>Loading...</Text>}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />

    </View >
  );
};

export default PostScreen;