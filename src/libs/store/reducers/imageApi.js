import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = JSON.parse(localStorage.getItem("token"));
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    sendImage: build.mutation({
      query: ({ formData, id }) => ({
        url: `https://z3itvhddnsclivhd5vcqhizgpq0gfyfl.lambda-url.eu-north-1.on.aws/img?car_id=${id}`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSendImageMutation } = imagesApi;
