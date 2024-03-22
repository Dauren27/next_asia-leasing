import { API_URL } from "@/libs/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = JSON.parse(localStorage.getItem("token"));
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/api/v1/users/login",
        method: "POST",
        body,
      }),
    }),
    registration: build.mutation({
      query: (body) => ({
        url: "/api/v1/users/register",
        method: "POST",
        body,
      }),
    }),
    logout: build.mutation({
      query: (body) => ({
        url: "/logout",
        method: "POST",
        body,
      }),
    }),
    getUserInfo: build.query({
      query: () => "/api/v1/users/me",
    }),
    getAllUsers: build.query({
      query: () => "/api/v1/users/all",
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useGetUserInfoQuery,
  useGetAllUsersQuery
} = authApi;
