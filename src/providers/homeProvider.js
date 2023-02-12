export async function getAccounts(remoteHost){
    try {
        const response = await fetch(remoteHost);
        const data = await response.json();
    }
    catch(error){
        
    }
}