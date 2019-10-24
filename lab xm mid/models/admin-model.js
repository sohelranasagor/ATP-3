var db = require('./db');

module.exports = {

    insertCategory: function(user, callback){

		var sql ="insert into productcategory values('', ?)";
		db.execute(sql, [user.category], function(status){
			callback(status);
		});
    }
}