export const Environments = {
	Local: {
		name: 'Local',
		uiHost: 'localhost',
        uiBase: '/',
		apiHost: '',
		assetBase: 'http://localhost:5173/assets/',
		navigatorType: 'browser',
		showDebugInformation: true,
	},
	Dev: {
		name: 'Development',
		uiHost: 'dev',
		uiBase: '/',
		apiHost: 'http://13.245.13.10:5555',
        assetBase: '',
        navigatorType: 'browser',
        showDebugInformation: true
	},
    PreProd: {
        name: 'PreProd',
        uiHost: '',
        uiBase: '/',
        apiHost: '',
        assetBase: '',
        navigatorType: 'browser',
        showDebugInformation: true
    },
    Prod: {
        name: 'Production',
        uiHost: '',
        uiBase: '/',
        apiHost: 'http://13.245.13.10:5555',
        assetBase: '',
        showDebugInformation: false
    }
};
