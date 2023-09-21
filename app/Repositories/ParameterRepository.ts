import Parameter from "App/Models/Parameter";
import { IParameter } from "App/Interfaces/ParameterInterface";

export interface IParameterRepository {
  getParameterByApplication(appId: number): Promise<IParameter[]>;
  getParameterByCode(code: string): Promise<IParameter[]>;
  getParameterByCodes(codes: string[]): Promise<IParameter[]>;
}

export default class ParameterRepository implements IParameterRepository {
  constructor() {}

  async getParameterByCode(code: string): Promise<IParameter[]> {
    const res = await Parameter.query().where("id", code);
    return res.map((i) => i.serialize() as IParameter);
  }

  async getParameterByApplication(appId: number): Promise<IParameter[]> {
    const res = Parameter.query().where("aplicationId", appId);
    return (await res).map((i) => i.serialize() as IParameter);
  }

  async getParameterByCodes(codes: string[]): Promise<IParameter[]> {
    const results: IParameter[] = [];
    await Promise.all(
      codes.map(async (code) => {
        const lists = await Parameter.query().where("id", code);
        results.push(...lists.map((item) => item.serialize() as IParameter));
      })
    );
    return results;
  }
}
