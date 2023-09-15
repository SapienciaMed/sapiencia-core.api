import { IGenericList } from "App/Interfaces/GenericListInterfaces";
import GenericList from "../Models/GenericList";

export interface IGenericListRepository {
  getGenericListByGrouper(grouper: string): Promise<IGenericList[]>;
  getGenericListByGroupers(grouper: string[]): Promise<IGenericList[]>;
  getGenericListByAdditionalField(
    grouper: string,
    fieldValue: string,
    fieldName: string
  ): Promise<IGenericList[]>;
}

export default class GenericListRepository implements IGenericListRepository {
  constructor() {}

  async getGenericListByGrouper(grouper: string): Promise<IGenericList[]> {
    const res = await GenericList.query().where("grouper", grouper);
    return res.map((i) => i.serialize() as IGenericList);
  }

  async getGenericListByGroupers(groupers: string[]): Promise<IGenericList[]> {
    const results: IGenericList[] = [];
    await Promise.all(
      groupers.map(async (grouper) => {
        const lists = await GenericList.query().where("grouper", grouper);
        results.push(...lists.map((item) => item.serialize() as IGenericList));
      })
    );
    return results;
  }

  async getGenericListByAdditionalField(
    grouper: string,
    fieldValue: string,
    fieldName: string
  ): Promise<IGenericList[]> {
    const res = GenericList.query()
      .where("grouper", grouper)
      .whereJson("additionalFields", { [fieldName]: fieldValue });

    console.log(res.toQuery());

    return (await res).map((i) => i.serialize() as IGenericList);
  }
}
