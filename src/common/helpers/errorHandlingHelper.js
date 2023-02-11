export function errorHandlingToProvideResults(
    res,
    message
){
    if(res.status === 401){
        throw new Error(
            message.Errors.DetailsError
        );
    }
    if(res.status === 400){
        throw new Error(
            message.Errors.EmptyFieldError
        );
    }
    
}