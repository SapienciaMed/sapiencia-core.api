import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import GenericListProvider from "@ioc:core.GenericListProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class GenericListController {
  public async getGenericListByGrouper({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { grouper } = request.params();
      return response.send(
        await GenericListProvider.getGenericListByGrouper(grouper)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getGenericListByAdditionalField({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { grouper, parentItemCode, fieldName } = request.qs();

      let fieldNameData = fieldName;

      /* Esta switch existe dado habia un definicion logica anterior
      que quedo en obsoleta, por un ajuste. no usar. utilizar el metodo de la forma definida */
      if (!fieldName) {
        switch (grouper) {
          case "DEPARTAMENTOS":
            fieldNameData = "countryId";
            break;
          case "MUNICIPIOS":
            fieldNameData = "departmentId";
            break;
          case "BARRIOS":
            fieldNameData = "municipalityId";
            break;
          default:
            break;
        }
      }
      return response.send(
        await GenericListProvider.getGenericListByAdditionalField(
          grouper,
          parentItemCode,
          fieldNameData
        )
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getGenericListByGroupers({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { groupers } = request.qs();

      return response.send(
        await GenericListProvider.getGenericListByGroupers(groupers)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
