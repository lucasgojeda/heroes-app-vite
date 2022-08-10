module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js'],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "/.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$/": "jest-transform-stub"
    },
    moduleNameMapper: {
        "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    transformIgnorePatterns: []
}