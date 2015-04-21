/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var nodemailer = require('nodemailer');

module.exports = {
	
	sendmail: function(req, res) {

		var transporter = nodemailer.createTransport();
		var options = {
			to: '7jagjag@gmail.com',
			from: 'no-reply@yoosync.fr',
			html: "<b>hi man</b>",
			subject: "sendin mail from node"
		}

		transporter.sendMail(options, function(err, info){
			if(err){
				sails.log.error(err);
				res.send({code:1, error:err});
			}
			else if(info){
				sails.log.info(info);
				res.json({code:0, info:info});
			}
			else
				res.send("ok")
		})
	}
};

