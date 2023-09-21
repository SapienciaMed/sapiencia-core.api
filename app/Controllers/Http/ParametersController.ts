import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ParameterProvider from "@ioc:core.ParameterProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class ParametersController {
  public async getParameterByCode({ request, response }: HttpContextContract) {
    try {
      const { code } = request.params();
      return response.send(await ParameterProvider.getParameterByCode(code));
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getParameterByCodes({ request, response }: HttpContextContract) {
    try {
      const { codes } = request.qs();
      return response.send(await ParameterProvider.getParameterByCodes(codes));
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
  public async getParameterByApplication({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { app } = request.params();

      return response.send(
        await ParameterProvider.getParameterByApplication(app)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
