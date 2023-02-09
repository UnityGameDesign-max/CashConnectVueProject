export const Environments = {
	Local: {
		name: 'Local',
		uiHost: 'http://localhost:5173',
        uiBase: '/',
		apiHost: 'http://13.245.13.10:5555',
		assetBase: 'http://localhost:5173/assets/',
		showDebugInformation: true,
	},
	Dev: {
		name: 'Development',
		uiHost: 'https://cashconnectvueapp.web.app/',
		uiBase: '/',
		apiHost: 'http://13.245.13.10:5555',
        assetBase: 'https://cashconnectvueapp.web.app/assets/',
        showDebugInformation: true
	},
    Prod: {
        name: 'Production',
        uiHost: 'https://cashconnectvueapp.web.app/',
        uiBase: '/',
        apiHost: 'http://13.245.13.10:5555',
        assetBase: 'https://cashconnectvueapp.web.app/assets/',
        showDebugInformation: false
    }
};

const currentHost = 
!!window
&& !!window.location
&& typeof window.location.hostname === 'string'
&& window.location.hostname.toLocaleLowerCase();

let currentEnvironment;

switch (currentHost){
    case Environments.Local.uiHost:
        currentEnvironment = Environments.Local;
        break;
    case Environments.Dev.uiHost:
        currentEnvironment = Environments.Dev;
        break;
    case Environments.Prod.uiHost:
        currentEnvironment = Environments.Prod;
        break;
    default:
        currentEnvironment = Environments.Prod;
        break;
}

export const Environment = currentEnvironment;
