module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/test/aaa',
	router: {
		index: [
			'/test/aaa',
			'/test/bbb',
		],
	},
	redirect: {
		notFound: 'index',
		accessDenied: 'index',
	},
	generate: {
		autoBuildNpm: false,
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	projectConfig: {
		appid: 'wx14c7c4cd189644a1',
		projectname: 'kbone-demo15',
	},
	packageConfig: {
		author: 'jeffycai',
	},
}