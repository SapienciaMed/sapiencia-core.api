import { IGenericList } from "App/Interfaces/GenericListInterfaces";
import { IGenericListRepository } from "App/Repositories/GenericListRepository";
import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "../Constants/ResponseCodesEnum";

export interface IGenericListService {
  getGenericListByGrouper(
    grouper: string
  ): Promise<ApiResponse<IGenericList[]>>;
  getGenericListByAdditionalField(
    grouper: string,
    fieldValue: string,
    fieldName: string
  ): Promise<ApiResponse<IGenericList[]>>;
  getGenericListByGroupers(
    groupers: string[]
  ): Promise<ApiResponse<IGenericList[]>>;
}

export default class GenericListService implements IGenericListService {
  constructor(private genericListRepository: IGenericListRepository) {}

  async getGenericListByGrouper(
    grouper: string
  ): Promise<ApiResponse<IGenericList[]>> {
    const res = await this.genericListRepository.getGenericListByGrouper(
      grouper
    );

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getGenericListByGroupers(
    groupers: string[]
  ): Promise<ApiResponse<IGenericList[]>> {
    const res = await this.genericListRepository.getGenericListByGroupers(
      groupers
    );

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }

  async getGenericListByAdditionalField(
    grouper: string,
    fieldValue: string,
    fieldName: string
  ): Promise<ApiResponse<IGenericList[]>> {
    const res =
      await this.genericListRepository.getGenericListByAdditionalField(
        grouper,
        fieldValue,
        fieldName
      );

    if (!res) {
      return new ApiResponse([], EResponseCodes.FAIL, "Registro no encontrado");
    }

    return new ApiResponse(res, EResponseCodes.OK);
  }
}
