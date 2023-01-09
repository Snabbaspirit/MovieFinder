module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transform: {
		"^.+\\.svg$": "svg-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
		"^.+\\.scss$": 'jest-scss-transform',
	},
};
