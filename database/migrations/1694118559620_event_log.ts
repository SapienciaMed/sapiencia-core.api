import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "BEV_BITACORA_EVENTOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment( "Tabla que almacena la bitacora de los diferentes eventos del sistema");

      table.increments("BEV_CODIGO").primary().comment("LLave primaria");
      table.integer("BEV_CODIGO_APLICATIVO").notNullable().comment("Codigo del aplicativo (db Autenticacion)");
      table.string("BEV_USUARIO", 15).notNullable().comment("Numero del documento del usuario que realizo la accion");
      table.dateTime("BEV_FECHA").notNullable().comment("Fecha y hora del evento");
      table.string("BEV_ACCION", 50).notNullable().comment("Accion realizada");
      table.string("BEV_NOMBRE_ENTIDAD", 50).notNullable().comment("Nombre de la entidad afectada");
      table.integer("BEV_CODIGO_ENTIDAD").nullable().comment("Codigo de la entidad afectada");
      table.jsonb("BEV_REGISTRO_ORIGINAL").nullable().comment("Estado del objeto original antes del evento");
      table.jsonb("BEV_REGISTRO_FINAL").nullable().comment("Estado en que quedo el objeto despues del evento");


    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
