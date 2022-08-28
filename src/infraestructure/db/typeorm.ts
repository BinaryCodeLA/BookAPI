import { DataSource } from "typeorm";
import { Books } from "../model/book/book.typeorm.schema";
import { Reviews } from '../model/review/review.typeorm.schema';

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PS_HOST || "localhost",
    port: Number(process.env.PS_PORT) || 5432,
    username: process.env.PS_USER || "admin",
    password: process.env.PS_PW || "secret",
    database: process.env.PS_DB || "booksdb",
    synchronize: process.env.Environment != "TEST" ? true : false,
    migrationsRun:false,
    logging: true,
    entities: [Books, Reviews],
    // subscribers: [],
     migrations: [__dirname + "/migrations/*{.ts,.js}"],
})

export default AppDataSource