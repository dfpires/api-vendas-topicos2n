import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1634991064287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //vamos criar a tabela products
        // uma função assíncrona
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                },
                {
                    name: 'quantity',
                    type: 'int'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
