import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "LGE_LISTADOS_GENERICOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment(
        "Tabla que contiene grupos de listados genericos, disponibles para toda la aplicacion"
      );
      table
        .increments("LGE_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.string("LGE_AGRUPADOR", 50).notNullable().comment(" ");
      table
        .string("LGE_ELEMENTO_CODIGO", 50)
        .notNullable()
        .comment("Codigo del elemento del listado");
      table
        .string("LGE_ELEMENTO_DESCRIPCION", 200)
        .notNullable()
        .comment("Descripcion del elemento del listado");
      table
        .jsonb("LGE_CAMPOS_ADICIONALES")
        .comment(
          "Elemento JSON que contiene un objeto que define campos adicionales"
        );
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
