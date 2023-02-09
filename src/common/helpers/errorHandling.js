export function errorHandlingToProvideResults(
    response,
    message
){
    if(!response || (typeof(response.data) !== 'object')){
        return{
            ok: false,
            error: Error('Invalid response!'),
            result: null
        }
    }
    const ok = response.data && response.status === 200;
    
}