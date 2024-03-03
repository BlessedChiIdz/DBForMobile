import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import {Tableqwe} from "./table.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports:[
      SequelizeModule.forFeature([Tableqwe])
  ]
})
export class TableModule {}
