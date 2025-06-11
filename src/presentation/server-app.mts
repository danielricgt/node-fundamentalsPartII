interface RunServerApp {
    base: number;
    limit: number;
    showTable: boolean;

}

export class ServerApp {
    static run (options:RunServerApp) {
        console.log('server run');
        console.log(options);
    }
}