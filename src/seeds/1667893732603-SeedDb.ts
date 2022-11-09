import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1667893732603 implements MigrationInterface {
  name = 'SeedDb1667893732603';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$UFUfPioh1MW7Ex3euuU9VutyllDh5KWHVj3vl2l6M0QtoM3/fu3aq')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc','first article body', 'coffee, dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc','second article body', 'coffee, dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
