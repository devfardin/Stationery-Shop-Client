import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";
export type TError = {
    data: {
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