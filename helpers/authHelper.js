const  bcrypt=require('bcrypt')

const authHelper = {
    hashPassword:async (password) =>{
        try {
            const soltRounds=10;
            const hashedPassword=await bcrypt.hash(password,soltRounds)
            return hashedPassword;
        } catch (error) {
            console.log(error)
        }
    },

    comparePassword:async (password,hashPassword) =>{
    return bcrypt.compare(password,hashPassword)
    }
}
module.exports=authHelper;