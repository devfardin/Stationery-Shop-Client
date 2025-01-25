/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', token )
      }
      return headers;
    },
  });
  const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async(args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    if(result.error?.status === 401) {

        // send refresh token
        console.log('Sending Refresh Token');
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',
        });
        const data = await res.json();

        // check refresh token and create new access token
        if(data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setU
            )
        }
        
    }
  }