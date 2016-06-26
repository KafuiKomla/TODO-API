/**
 * Created by kafui on 6/25/2016.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined,undefined,undefined,{
    'dialect':'sqlite',
    'storage': __dirname + '/basic-sqlite-db.sqlite'
});

var Todo = sequelize.define('todo',{
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,250]
        }
    },
    complete:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync().then(function(){
    console.log('Everything is synced');

    Todo.create({
        description: 'Feed Spike',
        complete: false
    }).then(function(todo){
        console.log('finished');
        console.log(todo);
    }).catch(function(e){
        console.log(e);
    })
});