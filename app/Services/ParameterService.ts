import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "../Constants/ResponseCodesEnum";
import { IParameterRepository } from "App/Repositories/ParameterRepository";
import { IParameter } from "App/Interfaces/ParameterInterface";

export interface IParameterService {
  getParameterByCode(code: string): Promise<ApiResponse<IParameter[]>>;
  getParameterByCodes(codes: string[]): Promise<ApiResponse<IParameter[]>>;
  getParameterByApplication(appId: number): Promise<ApiResponse<IParameter[]>>;
}

export default class ParameterService implements IParameterService {
  constructor(private parameterRepository: IParameterRepository) {}

  async getParameterByCode(code: string): Promise<ApiResponse<IParameter[]>> {
    const res = await this.parameterRepository.getParameterByCode(code);

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getParameterByCodes(
    codes: string[]
  ): Promise<ApiResponse<IParameter[]>> {
    const res = await this.parameterRepository.getParameterByCodes(codes);

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getParameterByApplication(
    appId: number
  ): Promise<ApiResponse<IParameter[]>> {
    const res = await this.parameterRepository.getParameterByApplication(appId);

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }
}
