
exports.up = function(knex) {
    return knex.schema.table("cohorts", table => {
        table.string("imageUrl"); // Add Column 'imageUrl' VARCHAR(255)
      });
};

exports.down = function(knex) {
    return knex.schema.table("cohorts", table => {
        // Alter Table "posts"
        table.dropColumn("imageUrl"); // Drop Column "imageUrl"
      });
};
