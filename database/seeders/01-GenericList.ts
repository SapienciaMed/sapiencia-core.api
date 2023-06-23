import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import GenericList from "App/Models/GenericList";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await GenericList.createMany([
      {
        grouper: "TIPOS_DOCUMENTOS",
        itemCode: "CC",
        itemDescription: "Cedula de Ciudadania",
      },
      {
        grouper: "TIPOS_DOCUMENTOS",
        itemCode: "CE",
        itemDescription: "Cedula de Extranjeria",
      },
      {
        grouper: "TIPOS_DOCUMENTOS",
        itemCode: "TI",
        itemDescription: "Tarjeta de Identidad",
      },
    ]);
  }
}
