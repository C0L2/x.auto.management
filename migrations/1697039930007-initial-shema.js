const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialShema1697039930007 {
    name = 'initialShema1697039930007'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "client" ("client_id" SERIAL NOT NULL, "nume_client" character varying NOT NULL, "email" character varying NOT NULL, "numar_telefon" character varying NOT NULL, CONSTRAINT "PK_7510ce0a84bde51dbff978b4b49" PRIMARY KEY ("client_id"))`);
        await queryRunner.query(`CREATE TABLE "car_parts" ("car_part_id" SERIAL NOT NULL, "car_part_name" character varying NOT NULL, CONSTRAINT "PK_4d00be42c0803fbe454ea05783c" PRIMARY KEY ("car_part_id"))`);
        await queryRunner.query(`CREATE TABLE "masini" ("car_id" SERIAL NOT NULL, "client_id" integer NOT NULL DEFAULT '0', "model" character varying NOT NULL, "registration_number" character varying NOT NULL, "vin_code" character varying NOT NULL, "culoare" character varying NOT NULL, "km" integer NOT NULL, CONSTRAINT "PK_0be5138be728c8878f54c84d2d1" PRIMARY KEY ("car_id"))`);
        await queryRunner.query(`CREATE TABLE "programari" ("programare_id" SERIAL NOT NULL, "programare_name" character varying NOT NULL, "registr_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_5c3ae2542973b386ca5ba20c8ff" PRIMARY KEY ("programare_id"))`);
        await queryRunner.query(`CREATE TABLE "worker" ("worker_id" SERIAL NOT NULL, "worker_name" character varying NOT NULL, "worker_surname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_ad2a529948e7e73bd6ad7b36a80" PRIMARY KEY ("worker_id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("role_id" SERIAL NOT NULL, "role_name" character varying NOT NULL, CONSTRAINT "PK_df46160e6aa79943b83c81e496e" PRIMARY KEY ("role_id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("service_id" SERIAL NOT NULL, "service_name" character varying NOT NULL, CONSTRAINT "PK_ef0531b9789b488593690ab8d5d" PRIMARY KEY ("service_id"))`);
        await queryRunner.query(`CREATE TABLE "worker_report" ("report_id" SERIAL NOT NULL, "worker_id" integer NOT NULL, "car_id" integer NOT NULL, "service_id" integer NOT NULL, CONSTRAINT "PK_5a568f6f9fc90b98b8ada27105e" PRIMARY KEY ("report_id"))`);
        await queryRunner.query(`ALTER TABLE "worker" ADD CONSTRAINT "FK_d178fab6fbdfdfd8e24dee0588b" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "worker" DROP CONSTRAINT "FK_d178fab6fbdfdfd8e24dee0588b"`);
        await queryRunner.query(`DROP TABLE "worker_report"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "worker"`);
        await queryRunner.query(`DROP TABLE "programari"`);
        await queryRunner.query(`DROP TABLE "masini"`);
        await queryRunner.query(`DROP TABLE "car_parts"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }
}
