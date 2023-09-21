import { IParameter } from "App/Interfaces/ParameterInterface";
import { IParameterRepository } from "App/Repositories/ParameterRepository";

export class ParameterRepositoryFake implements IParameterRepository {
  getParameterByApplication(_appId: number): Promise<IParameter[]> {
    throw new Error("Method not implemented.");
  }
  getParameterByCode(_code: string): Promise<IParameter[]> {
    throw new Error("Method not implemented.");
  }
  getParameterByCodes(_codes: string[]): Promise<IParameter[]> {
    throw new Error("Method not implemented.");
  }
}
