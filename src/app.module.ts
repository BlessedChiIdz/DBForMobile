import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import { TableModule } from './table/table.module';
import {Tableqwe} from "./table/table.model";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports:[
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'PostgreCalend',
            models: [Tableqwe],
            autoLoadModels: true,
        }),
        TableModule,
    ]

})
export class AppModule{

}
