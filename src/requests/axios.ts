import axiosBase, { AxiosRequestConfig} from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const axios = axiosBase.create({
  baseURL: BASE_URL,
})

const axiosPrivate = axiosBase.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];

let isRefreshing = false;

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: AxiosRequestConfig = error.config;
    
    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await axiosPrivate.post("/api/v1/auth/renew_access")
          
          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            axiosPrivate 
              .request(config)
              .then((response) => resolve(response))
              .catch((err) => reject(err));
          });

          refreshAndRetryQueue.length = 0;

          return axiosPrivate(originalRequest);
        } catch (refreshError) {
          throw refreshError;
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }

    return Promise.reject(error);
  }
);

export default axios
export {
  axiosPrivate
}
