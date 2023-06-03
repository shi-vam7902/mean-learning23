let users = []
exports.signup=(req,res)=>{
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

   let user = {
        "firstName":firstName,
        "lastName":lastName,
        "email":email,
        "password":password,
   }

   users.push(user)

    res.json({
        message:"Signup Done",
        data:users
    })
}

exports.getAllUsers=(req,res)=>{
    
    
    res.json({
        message:"All Users Retrieved",
        data:users
    })
}

exports.login = (req,res) =>{
    let In_email = req.body.email
    let In_password = req.body.password
    console.log(req);

    users?.map((u)=>{
            console.log(u.email);
            console.log(u.password);
            
        if((u.email ===  In_email) &&  (u.password === In_password)){
            
            res.json({
                "message":"Login Done",
                "status":200,
                data:users
            })
            
            // console.log(res);
            
        }
        else
        {
            // console.log(res);
            
            res.json({
                message:"Login Failed",
                status:400
            })
        }
    })
    
}