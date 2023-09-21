import type { ApplicationContract } from "@ioc:Adonis/Core/Application";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    // Register your own bindings

    /**************************************************************************/
    /******************************** SERVICES ********************************/
    /**************************************************************************/
    const GenericListService = await import("App/Services/GenericListService");
    const ParameterService = await import("App/Services/ParameterService");

    /**************************************************************************/
    /************************ EXTERNAL SERVICES ********************************/
    /**************************************************************************/

    /**************************************************************************/
    /******************************** REPOSITORIES ****************************/
    /**************************************************************************/
    const GenericListRepository = await import(
      "App/Repositories/GenericListRepository"
    );
    const ParameterRepository = await import(
      "App/Repositories/ParameterRepository"
    );

    /**************************************************************************/
    /******************************** CORE  ***********************************/
    /**************************************************************************/

    this.app.container.singleton(
      "core.GenericListProvider",
      () => new GenericListService.default(new GenericListRepository.default())
    );

    this.app.container.singleton(
      "core.ParameterProvider",
      () => new ParameterService.default(new ParameterRepository.default())
    );
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
