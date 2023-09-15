import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "PRM_PARAMETROS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment("Tabla que almacena los parametros de la aplicacion");

      table
        .string("PRM_CODIGO", 50)
        .comment("LLave de referencia para ubicar el parametro");
      table
        .string("PRM_NOMBRE", 50)
        .notNullable()
        .comment("Nombre del parametro");
      table
        .string("PRM_DESCRIPCION", 200)
        .nullable()
        .comment("Descripcion detallada de la funcion del parametro");
      table
        .string("PRM_VALOR", 50)
        .notNullable()
        .comment("Valor del parametro");
      table
        .integer("PRM_CODIGO_APLICATIVO")
        .notNullable()
        .comment("Codigo del aplicativo (db Autenticacion)");

      table.primary(["PRM_CODIGO"]);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
