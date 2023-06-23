import { IGenericList } from "App/Interfaces/GenericListInterfaces";
import GenericList from "../Models/GenericList";

export interface IGenericListRepository {
  getGenericListByGrouper(grouper: string): Promise<IGenericList[]>;
  getGenericListByParent(
    grouper: string,
    parentItemCode: string
  ): Promise<IGenericList[]>;
}

export default class GenericListRepository implements IGenericListRepository {
  constructor() {}

  async getGenericListByGrouper(grouper: string): Promise<IGenericList[]> {
    const res = await GenericList.query().where("grouper", grouper);
    return res.map((i) => i.serialize() as IGenericList);
  }

  async getGenericListByParent(
    grouper: string,
    parentItemCode: string
  ): Promise<IGenericList[]> {
    const res = await GenericList.query()
      .where("grouper", grouper)
      .andWhere("parentItemCode", parentItemCode);

    return res.map((i) => i.serialize() as IGenericList);
  }
}
