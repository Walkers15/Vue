/* eslint-disable no-undef */
module.exports = {
	"env": {
		"browser": true,
		// "es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:vue/vue3-strongly-recommended"
	],
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/max-attributes-per-line": ["error", {
			"singleline": {
				"max": 10,
				"allowFirstLine": true
			},      
			"multiline": {
				"max": 10,
				"allowFirstLine": true
			}
		}],
		"vue/prop-name-casing": ["error", "camelCase"],
		"vue/attribute-hyphenation": "off"
	}
};
