export function getRemoteHost(dbObject){
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