import { CreateTable } from "../domain/use-cases/create-table.use-case.mjs";


interface RunServerApp {
    base: number;
    limit: number;
    showTable: boolean;

}

export class ServerApp {
    static run ({base, limit, showTable}: RunServerApp) {
        console.log('server run');
        const table =  new CreateTable().execute({base, limit});
        console.log(table);
    }
}