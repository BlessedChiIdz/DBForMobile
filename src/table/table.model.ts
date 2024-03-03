import {Column, DataType, Model, Table} from "sequelize-typescript";
import {stat} from "fs";

interface TMI{
    name:string,
    weight:number,
    height:number,
    age:number,
}

@Table({
    tableName:'Table'
})
export class Tableqwe extends Model<Tableqwe,TMI>{

    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number
    @Column({type:DataType.STRING,unique:false})
    name:string

    @Column({type:DataType.INTEGER,unique:false})
    weight:number

    @Column({type:DataType.INTEGER,unique:false})
    height:number

    @Column({type:DataType.INTEGER,unique:false})
    age:number


}
