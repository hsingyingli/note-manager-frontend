import { axiosPrivate } from "@/requests/axios";

export const getUser = () => axiosPrivate.get('/api/v1/user')
