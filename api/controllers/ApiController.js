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
			to: 'George <7jagjag@gmail.com>',
			from: 'Yoosync Team <no-reply@yoosync.fr>',
			html: '<div class="mail" style="margin: 0;top: 0px;font-family: sans-serif;background: #eee;width: 100%;height: 100%;position: fixed;"><div class="container" style="box-sizing: border-box;padding: 20px;margin: 0 auto;width: 90%;left: -10px;position: relative;height: 90%;background-color: white;"><div class="center" style="text-align: center;"><h1 style="font-weight: 300;">Welcome to drive</h1></div><p style="text-transform: capitalize;">you have created an account!, please click the link below</p><center><img src="http://designmodo.github.io/Flat-UI/img/icons/svg/mail.svg" alt=""><a href="#" class="btn btn-primary" style="display: block;margin: 20px;padding: 10px 19px;font-size: 17px;line-height: 1.471;border-radius: 6px;color: #fff;background-color: #3498db;text-decoration: none;">Activate</a></center></div></div>',
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

