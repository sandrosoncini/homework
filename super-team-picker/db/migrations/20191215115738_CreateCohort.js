
exports.up = function(knex) {
  return knex.schema.createTable("cohorts", table =>{
    table.increments("id");
    table.string("title"); // "title" VARCHAR(255)
    table.text("content"); // "content" TEXT
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cohorts');
};
