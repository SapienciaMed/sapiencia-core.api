declare module "@ioc:core.ParameterProvider" {
  import { IParameterService } from "App/Services/ParameterService";

  const ParameterProvider: IParameterService;
  export default ParameterProvider;
}
