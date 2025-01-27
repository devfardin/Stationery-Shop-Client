/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";
export type TError = {
    data: {
        errorSources: any;
        message: string,
        success: boolean,
        stack: string,
    };
    status: number,
}

export type TMeta = {
    limit: number,
    page: number,
    total: number,
    totalPage: number,
}

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success?: boolean;
    message?: string;
}
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi


export type TQueryParam = {
    name: string,
    value: boolean | React.Key,
}
export type TMenuItemType = {
    title: string;
    link: string;
  };

  export type TCategoryOption = {
    value: string; // Corresponds to item._id
    label: string; // Corresponds to item.name
    disabled: boolean; // Indicates if the option is disabled
  };
  export type TOptionType = {
    _id: string; // The ID of the category
    name: string; // The name of the category
  };