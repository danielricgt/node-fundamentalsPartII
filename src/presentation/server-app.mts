import { CreateTable } from "../domain/use-cases/create-table.use-case.mjs";
import { SaveFile } from "../domain/use-cases/save-file.use-case.mjs";

interface RunServerApp {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run({ base, limit, showTable }: RunServerApp) {
    console.log("server run");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({fileContent: table, destination: `outputs/table-${base}`});
    if (showTable) {
      console.log(table);
    }
    (wasCreated)?console.log('file created!'):console.log('file not created!')

  }
}
