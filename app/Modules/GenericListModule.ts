declare module "@ioc:core.GenericListProvider" {
  import { IGenericListService } from "App/Services/GenericListService";

  const GenericListProvider: IGenericListService;
  export default GenericListProvider;
}
