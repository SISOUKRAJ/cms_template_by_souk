import { configureStore } from "@reduxjs/toolkit";
import {testApi} from "./services/test";


export const store = configureStore({
  reducer: {
    // rounded: roundedReducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      // compare.middleware,
      testApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
