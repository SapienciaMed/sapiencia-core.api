import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'PRM_PARAMETROS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.comment("Tabla que almacena los parametros de la aplicacion");
      table.increments("PRM_CODIGO")
      .primary()
      .comment("Llave primaria");
      table
      .string("PRM_DESCRIPCION")
      .notNullable()
      .comment("Localización");
      table
      .string("PRM_VALOR",50)
      .notNullable()
      .comment("Postsecundaria - SAPIENCIA");
      table
      .integer("PRM_ID_APLICATIVO")
      .notNullable()
      .comment("Id del aplicativo Dirección Estratégica");
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
