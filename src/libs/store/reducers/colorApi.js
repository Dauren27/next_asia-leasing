import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/libs/api";

export const colorApi = createApi({
  reducerPath: "colorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = JSON.parse(localStorage.getItem("token"));
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["Color"],
  endpoints: (build) => ({
    createColor: build.mutation({
      query: (data) => ({
        url: `/api/v1/utils/color`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Color"],
    }),
    getColors: build.query({
      query: () => ({
        url: "/api/v1/utils/color/all",
      }),
      providesTags: (result) => ["Color"],
    }),

    updateColor: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/utils/color/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Color"],
    }),
    deleteColor: build.mutation({
      query: (id) => ({
        url: `/api/v1/utils/color`,
        method: "DELETE",
      }),
      invalidatesTags: ["Color"],
    }),
   
  }),
});

export const {
    useCreateColorMutation,
    useDeleteColorMutation,
    useGetColorsQuery,
    useUpdateColorMutation
} = colorApi;
