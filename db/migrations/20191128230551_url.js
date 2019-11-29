exports.up = function(knex) {
return knex.schema.createTable('url', (url) => {
    url.increments();
    url.text("link",200).notNullable().unique()
})  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('url')
};
