const publicUser=require("../../models/PublicUser");

module.exports = (app) => {
    app.post('/signup', (req,res,next) => {
        const { body } = req;
        const {
            username,
            password
        } = body;
        if(!username) {
            res.send({
                success: false,
                message: 'Error: Username cannot be blank'
            });
        }
        if(!password) {
            res.send({
                success: false,
                message: 'Error: Password cannot be blank'
            });
        }
        email = email.toLowerCase();

        publicUser.find({
            email: email
        },(err,previousUsers) => {
            if(err) {
                res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if(previousUsers.length > 0) {
                res.send({
                    success: false,
                    message: 'Error: Account already exist'
                });
            }
            const newUser = new publicUser();
            newUser.username = username;
            newUser.password = password;
            newUser.save((err,user) => {
                if(err) {
                    res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                res.send({
                    success: true,
                    message: 'Signed Up'
                });
            })
        });
    });
};