
class Api{

    constructor(){
        this.email
        this.parse_email
        this.isValid
    }

    Test(email) {
        this.email = email
        this.parse_email = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/
        this.isValid =  this.parse_email.test(this.email)

        return this.isValid
    }
    
}