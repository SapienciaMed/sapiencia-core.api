import { IGenericList } from "App/Interfaces/GenericListInterfaces";
import { IGenericListRepository } from "App/Repositories/GenericListRepository";

export class GenericListRepositoryFake implements IGenericListRepository {
  getGenericListByGroupers(_grouper: string[]): Promise<IGenericList[]> {
    throw new Error("Method not implemented.");
  }
  getGenericListByGrouper(_grouper: string): Promise<IGenericList[]> {
    return new Promise((res) => {
      res([]);
    });
  }

  getGenericListByParent(
    _grouper: string,
    _parentCode: string
  ): Promise<IGenericList[]> {
    return new Promise((res) => {
      res([]);
    });
  }
}
