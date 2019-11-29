exports.up = function(knex) {
return knex.schema.createTable("tbl", (tbl) => {
    tbl.increments();
    tbl.text("api-url",2000)
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tbl')
};
