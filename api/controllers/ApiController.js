/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	sendmail: function(req, res) {
		var options = {
			to: '7jagjag@gmail.com',
			from: 'george@node-server',
			body: "hi man",
			subject: "sendin mail from node"
		}
	}
};

