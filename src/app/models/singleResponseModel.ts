import { ResponseModel } from "./responseModel";

export interface SingleRepsonseModel<T> extends ResponseModel{
  data:T
}