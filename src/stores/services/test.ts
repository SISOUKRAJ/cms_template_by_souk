import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import environment from "../../utrails/environment.ts";
// import { GetCookie } from "../../utrails/cokie/set.ts";

export const testApi = createApi({
  reducerPath: "test",
  tagTypes: ["test"],
  baseQuery: fetchBaseQuery({
    baseUrl: environment.VITE_APP_API_LOCAL_PATH,
    // prepareHeaders: (headers) => {
    //     const token = GetCookie(`${environment.VITE_APP_HEADER_NAME as string}`);
    //     if (token)
    //       headers.set(environment.VITE_APP_HEADER as string, `Bearer ${token}`);
    //     return headers;
    // },
  }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => ({
        url: `posts`,
        method: "GET",
        // body: body,
      }),
      providesTags: ["test"],
      keepUnusedDataFor: 0,
    }),

    // addTest: builder.mutation({
    //   query: (body) => {
    //     // console.log("body", body);
    //     const postData = new FormData();
    //     postData.append("no", body.no);
    //     postData.append("name", body.name);
    //     postData.append("amount", body.amount);
    //     postData.append("maximum", body.maximum);
    //     postData.append("image", body.image);
    //     return {
    //       url: `admin/create-winner`,
    //       method: "POST",
    //       body: postData,
    //     };
    //   },
    //   invalidatesTags: ["test"],
    // }),

    // updateTest: builder.mutation({
    //   query: (body) => {
    //     // console.log("body", body);
    //     const postData = new FormData();
    //     postData.append("id", body.id);
    //     postData.append("no", body.no);
    //     postData.append("name", body.name);
    //     postData.append("amount", body.amount);
    //     postData.append("maximum", body.maximum);
    //     postData.append("image", body.image);
    //     return {
    //       url: `admin/update-winner`,
    //       method: "POST",
    //       body: postData,
    //     };
    //   },
    //   invalidatesTags: ["test"],
    // }),

    // deleteTest: builder.mutation({
    //   query: (body) => {
    //     // console.log("body", body);
    //     return {
    //       url: `admin/delete-winner`,
    //       method: "POST",
    //       body: body,
    //     };
    //   },
    //   invalidatesTags: ["test"],
    // }),
  }),
});
export const {
  useGetTestQuery,
  //   useAddTestMutation,
  //   useUpdateTestMutation,
  //   useDeleteTestMutation,
} = testApi;
