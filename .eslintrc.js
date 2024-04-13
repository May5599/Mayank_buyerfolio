module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
         "react/react-in-jsx-scope": "off",
         "react/prop-types": "off",
         "react/jsx-key": "off",
         "react/no-unknown-property": "off",
         "react/no-unescaped-entities": "off",
         "no-unused-vars": "off",
         "no-dupe-keys": "off",
         "no-mixed-spaces-and-tabs": "off",
    }
}
