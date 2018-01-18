
const scryptForHumans = require("scrypt-for-humans");

exports.up = function(knex, Promise) {
    return knex.schema.table("users", function(table){
        table.string("hash");
    })
    // .update({
    //     'hash': scryptForHumans.hash('hash')
    //   })
    // .catch((err) => {
    //     console.log(err);
    // });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("users", function(table){
        table.dropColumn("hash");
    })
};
