const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define model
const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

// On Save Hook, encrypt password
// before saving model, run function
userSchema.pre('save', function(next) {
	// get user model
	const user = this;

	// generate a salt then run callback
	bcrypt.genSalt(10, function(err, salt) {
		if (err) throw err;

		// hash (encrypt) our password using the salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) throw err;

			// overwrite password with protected password
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(canditatePassword, callback) {
	bcrypt.compare(canditatePassword, this.password, function(err, isMatch) {
		if (err) return callback(err);

		callback(null, isMatch);
	});
};

// Create the model className
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;