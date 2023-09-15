import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Parameter extends BaseModel {
  public static table = "PRM_PARAMETROS";

  @column({ isPrimary: true, columnName: "PRM_CODIGO", serializeAs: "id" })
  public id: string;

  @column({ columnName: "PRM_NOMBRE", serializeAs: "name" })
  public name: string;

  @column({ columnName: "PRM_DESCRIPCION", serializeAs: "description" })
  public description: string;

  @column({ columnName: "PRM_VALOR", serializeAs: "value" })
  public value: string;

  @column({ columnName: "PRM_CODIGO_APLICATIVO", serializeAs: "aplicationId" })
  public aplicationId: number;
}
