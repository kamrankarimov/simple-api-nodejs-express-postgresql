/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 1, title: 'iPhone 11', descriptions: 'An apple mobile which is nothing like apple', price: 1100, category_id: 2, brand_id: 1},
    {id: 2, title: 'LG Ultra HD 8K Television', descriptions: 'New product very excellent', price: 2300, category_id: 1, brand_id: 2},
    {id: 3, title: 'Galaxy Watch6 Smartwatch', descriptions: 'New product Smart Watch', price: 580, category_id: 3, brand_id: 3}
  ]);
};
