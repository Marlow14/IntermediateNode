'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));
var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Posts);
  }
});

var Posts = bookshelf.Model.extend({
  tableName: 'messages',
  tags: function() {
    return this.belongsToMany(Tag);
  }
});

var Tag = bookshelf.Model.extend({
  tableName: 'tags'
})

User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
  console.log(user.related('posts').toJSON());
}).catch(function(err) {
  console.error(err);
});