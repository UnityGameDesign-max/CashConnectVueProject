import { 
    Messages
} from "@/common"

export function errorHandlingToProvideResults(
    res,
    message
){
    if(!res || (typeof(res.data) !== 'object')){
        return{
            ok: false,
            error: Error('Invalid response!'),
            result: null
        }
    }
    if(res.status === 200 && res){
        return{
            ok: res.status === 200,
            message: Messages.Information.LoggedInMessage
        }
    }
    
}