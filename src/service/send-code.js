
let transporter = require('./config-mail');

class MailSenderCode {

    async sendCode(raw) {
        let mainOptions = {
            from: process.env.DB_EMAIL,
            to: raw.email,
            subject: 'Intern registration',
            text: raw.email,
            html: '<p>Intern : ' + raw.intern.code + ' registration '+ raw.internship.company.name+' at '+ raw.course.name +'</p>'
        };
        transporter.sendMail(mainOptions, function(){
            return true;
        });

    }
}

module.exports = MailSenderCode;