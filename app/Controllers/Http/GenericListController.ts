import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import GenericListProvider from "@ioc:core.GenericListProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class GenericListController {
  public async getGenericListByGrouper({ request, response }: HttpContextContract) {
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

  public async getGenericListByParent({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { grouper, parentItemCode } = request.qs();

      return response.send(
        await GenericListProvider.getGenericListByParent(
          grouper,
          parentItemCode
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
      const {groupers} = request.qs();

      return response.send(
        await GenericListProvider.getGenericListByGroupers(
          groupers
        )
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
