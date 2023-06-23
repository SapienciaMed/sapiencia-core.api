import test from "japa";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import GenericListService from "App/Services/GenericListService";
import { GenericListRepositoryFake } from "./FakeClass/GenericListRepositoryFake";
import { ApiResponse } from "App/Utils/ApiResponses";

const service = new GenericListService(new GenericListRepositoryFake());

test.group("RolService TEST for getGenericListByGrouper", () => {
  test("class service must have a method getGenericListByGrouper with a return", async (assert) => {
    const result = service.getGenericListByGrouper("filter");
    assert.isNotNull(result);
  });

  test("the method getGenericListByGrouper must be a promise", async (assert) => {
    const result = service.getGenericListByGrouper("filter");
    assert.typeOf(result, "Promise");
  });

  test("the method getGenericListByGrouper must return a ApiResponse", async (assert) => {
    const result = await service.getGenericListByGrouper("filter");
    assert.instanceOf(result, ApiResponse);
  });

  test("the method getGenericListByGrouper must return a OK code ", async (assert) => {
    const result = await service.getGenericListByGrouper("filter");
    assert.isTrue(result.operation.code === EResponseCodes.OK);
  });

  test("the method getGenericListByGrouper must return a array", async (assert) => {
    const result = await service.getGenericListByGrouper("filter");

    assert.isArray(result.data);
  });
});
