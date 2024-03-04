import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";

/**
 * Reference: https://axios-http.com/docs/req_config
 * Api format: http://localhost:4000/api-profile/update
 * Using interceptor: https://www.youtube.com/watch?v=ZcdJcZgf_94&ab_channel=EasyFrontend
 */

export interface AppResponse<T = unknown> {
  headers: Record<string, any>;
  statusCode: number;
  hasError: boolean;
  data?: T;
}

export class HttpClient {
  protected axiosInstance: AxiosInstance;

  constructor(injectedAxios?: AxiosStatic) {
    const serviceUrl = String(process.env.SERVICE_URL);

    this.axiosInstance = (injectedAxios || axios).create({
      baseURL: serviceUrl,
      timeout: 10000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      validateStatus: (status: number) => {
        return status >= 200 && status < 300;
      },
    });
  }

  public async get<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AppResponse<T>> {
    try {
      const result = await this.axiosInstance.get<T>(path, config);
      return HttpClient.transformAxiosData(result);
    } catch (error) {
      throw HttpClient.transformAxiosError<T>(error);
    }
  }

  public async post<T>(
    path: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<AppResponse<T>> {
    try {
      const result = await this.axiosInstance.post<T>(path, payload, config);
      return HttpClient.transformAxiosData(result);
    } catch (error) {
      throw HttpClient.transformAxiosError<T>(error);
    }
  }

  public async put<T>(
    path: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<AppResponse<T>> {
    try {
      const result = await this.axiosInstance.put<T>(path, payload, config);
      return HttpClient.transformAxiosData(result);
    } catch (error) {
      throw HttpClient.transformAxiosError<T>(error);
    }
  }

  public async delete<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AppResponse<T>> {
    try {
      const result = await this.axiosInstance.delete<T>(path, config);
      return HttpClient.transformAxiosData(result);
    } catch (error) {
      throw HttpClient.transformAxiosError<T>(error);
    }
  }

  private static transformAxiosData<T>(
    response: AxiosResponse<T>
  ): AppResponse<T> {
    return {
      headers: response.headers,
      statusCode: response.status,
      hasError: false,
      data: response.data,
    };
  }

  private static transformAxiosError<T>({
    response,
  }: AxiosError): AppResponse<T> {
    return {
      headers: response.headers,
      statusCode: response.status,
      hasError: true,
      data: response.data as T,
    };
  }
}
