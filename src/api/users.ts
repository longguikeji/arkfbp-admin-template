import request from "@/utils/request";

export const getUsers = (params: any) =>
  request({
    url: "/users",
    method: "get",
    params
  });

export const getUserInfo = (data: any) =>
  request({
    // url: '/users/info',
    url: "/api/admin/user/",
    method: "post",
    data
  });

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "get"
  });

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: "put",
    data
  });

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "delete"
  });

export const login = (data: any) =>
  request({
    // url: '/users/login',
    url: "/api/admin/login/",
    method: "post",
    data
  });

export const logout = () =>
  request({
    url: "/api/admin/logout/",
    method: "post"
  });

export const register = (data: any) =>
  request({
    url: "/users/register",
    method: "post",
    data
  });
