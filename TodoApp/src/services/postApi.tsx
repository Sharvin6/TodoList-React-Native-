import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  id: number;
  title: string;
}

export const postApi = createApi({

  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: ["Posts"],
  endpoints: (builder) => ({

    getPosts: builder.query<Post[], void>({
      // query: (userId) => `/posts?id=${userId}`,
      query: () => "/posts",
      providesTags: ["Posts"],
      keepUnusedDataFor: 5,
      transformResponse: (response: Post[]) => {
        return response
          // .filter((post) => post.id === 1)
          .slice(0, 5)
          .map(({ id, title }) => ({ id, title }));
      },

    }),

    addPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      // onQueryStarted: async (newPost, { dispatch, queryFulfilled }) => {
      //   // update cache immediately before server responds
      //   const patchResult = dispatch(
      //     postApi.util.updateQueryData("getPosts", undefined, (draft) => {
      //       draft.push({ id: Date.now(), title: newPost.title ?? "" });
      //     })
      //   );
      //   try {
      //     const { data } = await queryFulfilled;
      //     console.log("Server returned id:", data.id); // always returns 101
      //     // jsonplaceholder always returns id: 101 no matter what
      //   } catch {
      //     patchResult.undo();
      //   }
      // },
      //invalidatesTags: ["Posts"],
    }),

  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postApi;