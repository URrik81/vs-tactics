import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getExample: builder.query<any, any>({
      query: () => ``,
    }),
    updateExample: builder.mutation<any, any>({
      query: () => ``,
    }),
  }),
});

export const { useGetExampleQuery, useUpdateExampleMutation } = exampleApi;
