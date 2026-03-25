import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Button from '../components/atoms/Button/Button';

// const AxiosGetPost = () => {

//   const getPost = async () => {

//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts");
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

const AxiosCreatePost = () => {

  const createPost = async () => {

    try {
      const newPost = {
        title: "Hello",
        body: "This is my first Post",
        userId: 1
      };

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );

      console.log(response.data);

    } catch (error) {
      console.log("Error: ", error);
    }
  };


  return (

    <View>
      {/* <Button title="Get Posts" onPress={getPost}></Button> */}
      <Button title="Create Posts" onPress={createPost}></Button>

    </View>
  );
};
// };
//export default AxiosGetPost;
export default AxiosCreatePost;
