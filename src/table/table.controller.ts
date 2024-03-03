import {Body, Controller, Get, Post} from '@nestjs/common';
import {TableService} from "./table.service";
import {TableDto} from "./dto/tableDto";

@Controller('table')
export class TableController {

    constructor(private tableS:TableService) {
    }
    @Post('/create')
    create(@Body() dto:TableDto){
        return this.tableS.createData(dto);
    }
    @Get('/get/weight')
    getAllW(){
        return this.tableS.getAllWeight();
    }

    @Get('/get/height')
    getAllH(){
        return this.tableS.getAllHeight();
    }
    @Get('/get/age')
    getAllA(){
        return this.tableS.getAllAge();
    }
}
