import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/libs/api";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = JSON.parse(localStorage.getItem("token"));
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["Cars"],
  endpoints: (build) => ({
    createCar: build.mutation({
      query: (data) => ({
        url: `/api/v1/cars/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cars"],
    }),
    getCars: build.query({
      query: () => ({
        url: "/api/v1/cars/all",
      }),
      providesTags: (result) => ["Cars"],
    }),

    // sendImageProducts: build.mutation({
    //   query: (formData) => ({
    //     url: `/api/v1/media/car`,
    //     method: "POST",
    //     body: formData,
    //   }),
    // }),
    updateCar: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/cars/obj/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Cars"],
    }),
    deleteCar: build.mutation({
      query: ({ id }) => ({
        url: `/api/v1/cars/obj`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Cars"],
    }),
    getCarById: build.query({
      query: ({ id }) => ({
        url: `/api/v1/cars/obj/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetCarByIdQuery,
  useGetCarsQuery,
  useUpdateCarMutation,
  useDeleteCarMutation
} = carsApi;
