/**
Create a new istanace of Client to interact with the database and then estabish communication with it via the connect(); method.
We Then set run a SQL query via the query() method.
Communication is closed via the end() method.
**/


var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', '../', 'config'));

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });