import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class EventLog extends BaseModel {
  public static table = "BEV_BITACORA_EVENTOS";

  @column({ isPrimary: true, columnName: "BEV_CODIGO", serializeAs: "id" })
  public id: string;

  @column({ columnName: "BEV_CODIGO_APLICATIVO", serializeAs: "aplicationId" })
  public aplicationId: number;

  @column({ columnName: "BEV_USER", serializeAs: "user" })
  public user: string;

  @column({ columnName: "BEV_FECHA", serializeAs: "date" })
  public date: DateTime;

  @column({ columnName: "BEV_ACCION", serializeAs: "action" })
  public action: string;

  @column({ columnName: "BEV_NOMBRE_ENTIDAD", serializeAs: "entityName" })
  public entityName: string;

  @column({ columnName: "BEV_CODIGO_ENTIDAD", serializeAs: "entityId" })
  public entityId: string;

  
  @column({ columnName: "BEV_REGISTRO_ORIGINAL", serializeAs: "originalRecord" })
  public originalRecord: object;

  @column({ columnName: "BEV_REGISTRO_FINAL", serializeAs: "finalRecord" })
  public finalRecord: object;
}
