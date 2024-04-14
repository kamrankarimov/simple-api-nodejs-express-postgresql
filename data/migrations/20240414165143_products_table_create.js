/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("products", (table) => {
        table.increments();
        table.string("title").notNullable();
        table.text("descriptions");
        table.decimal("price", 10, 2);
        table.integer("category_id").unsigned();
        table.integer("brand_id").unsigned();
        table.foreign("category_id").references("categories.id").onUpdate('CASCADE').onDelete('CASCADE');
        table.foreign("brand_id").references("brands.id").onUpdate('CASCADE').onDelete('CASCADE');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
