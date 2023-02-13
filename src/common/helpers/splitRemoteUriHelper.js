export function splitRemoteUri(dbObject){
    if(
        !dbObject || 
        typeof(dbObject) !== "object"
    ){
        return;
    }
    const remoteHostUri = 
    `http://${dbObject.host}:${dbObject.port}/`;

    return remoteHostUri;
}