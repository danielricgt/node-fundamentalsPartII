import { CreateTable } from "../domain/use-cases/create-table.use-case.mjs";
import { SaveFile } from "../domain/use-cases/save-file.use-case.mjs";

interface RunServerApp {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class ServerApp {
  static run({ base, limit, showTable, fileName, fileDestination }: RunServerApp) {
    console.log("server run");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination :fileDestination,
      fileName,
    });
    if (showTable) {
      console.log(table);
    }
    wasCreated
      ? console.log("file created!")
      : console.log("file not created!" );
  }
}
