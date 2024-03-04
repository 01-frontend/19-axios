export interface AppResponse<T = unknown> {
  headers: Record<string, any>;
  statusCode: number;
  hasError: boolean;
  data?: T;
}
