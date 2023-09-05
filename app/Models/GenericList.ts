import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class GenericList extends BaseModel {
  public static table = "LGE_LISTADOS_GENERICOS";

  @column({ isPrimary: true, columnName: "LGE_CODIGO", serializeAs: "id" })
  public id: number;

  @column({ columnName: "LGE_AGRUPADOR", serializeAs: "grouper" })
  public grouper: string;

  @column({ columnName: "LGE_ELEMENTO_CODIGO", serializeAs: "itemCode" })
  public itemCode: string;

  @column({
    columnName: "LGE_ELEMENTO_DESCRIPCION",
    serializeAs: "itemDescription",
  })
  public itemDescription: string;

  @column({
    columnName: "LGE_CAMPOS_ADICIONALES",
    serializeAs: "additionalFields",
  })
  public additionalFields: object;
}
