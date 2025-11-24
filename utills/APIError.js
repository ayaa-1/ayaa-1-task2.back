class APIError extends Error{
    constructor(){
        super();
    }

    apierror(statuscode, isSucess,message){
        this.statuscode= statuscode;
        this.isSucess= isSucess;
        this.message= message;
        return this;
    }
}

export default new APIError();