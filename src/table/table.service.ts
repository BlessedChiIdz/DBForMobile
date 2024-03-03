import { Injectable } from '@nestjs/common';
import {TableDto} from "./dto/tableDto";
import {InjectModel} from "@nestjs/sequelize";
import {Tableqwe} from "./table.model";

@Injectable()
export class TableService {

    constructor(@InjectModel(Tableqwe) private tableM:typeof Tableqwe) {
    }

    async createData(dto:TableDto){
        const data = await this.tableM.create(dto);
        return data;
    }

    async getAllWeight(){
        const data = await this.tableM.findAll({
            order:[["weight","ASC"]],
        });
        return data;
    }

    async getAllHeight(){
        const data = await this.tableM.findAll({
            order:[["height","ASC"]],
        });
        return data;
    }
    async getAllAge(){
        const data = await this.tableM.findAll({
            order:[["age","ASC"]],
        });
        return data;
    }
}
