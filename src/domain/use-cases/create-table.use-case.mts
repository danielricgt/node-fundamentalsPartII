export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string; 
}

export interface CreateTableOptions {
    base: number;
    limit: number;
}
export class CreateTable implements CreateTableUseCase {    
  constructor() /**  DI - Dependency Injrction*/
  {}

  execute({ base, limit = 10 }: CreateTableOptions): string {
    let outPutMessage = "";
    for (let i = 1; i <= limit; i++) {
      outPutMessage += `${base} X ${i} = ${base * i}\n`;
    }
    return outPutMessage; 
    }
  }

