
let transporter = require('./config-mail');

class MailSender {

    constructor(app) {
        this.app = app;
    }

    async sendMessage(email, intern, course, internship) {
        let mainOptions = {
            from: process.env.DB_EMAIL,
            to: email,
            subject: 'Intern registration',
            text: email,
            html: '<p>You : ' + intern.code + ' registration '+ internship.company.name+' at '+ course.name +'</p>'
        };
        transporter.sendMail(mainOptions, function(){
            return true;
        });

    }
}

module.exports = MailSender;
