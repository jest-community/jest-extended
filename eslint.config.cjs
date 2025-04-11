const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const _import = require("eslint-plugin-import");
const jest = require("eslint-plugin-jest");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const globals = require("globals");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([globalIgnores(["**/dist/", "**/website", "eslint.config.cjs"]), {
    extends: compat.extends("eslint:recommended", "plugin:prettier/recommended"),

    plugins: {
        import: fixupPluginRules(_import),
        import: fixupPluginRules(_import),
        jest,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },

        ecmaVersion: 2020,
        sourceType: "module",
    },

    settings: {
        "import/resolver": {
            node: {
                moduleDirectory: ["./", "node_modules"],
            },
        },

        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
    },

    rules: {
        "comma-spacing": [1, {
            before: false,
            after: true,
        }],

        "eol-last": 1,
        "import/extensions": 1,

        "import/order": ["warn", {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        }],

        "import/no-unresolved": ["error", {
            commonjs: true,
            caseSensitive: true,
        }],

        indent: ["warn", 2],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "key-spacing": 1,
        "no-multi-spaces": 1,
        "keyword-spacing": 1,
        "no-unused-vars": 1,
        "no-trailing-spaces": 1,
        "object-curly-spacing": [1, "always"],

        quotes: ["warn", "single", {
            avoidEscape: true,
        }],
    },
}, {
    files: ["src/matchers/*/index.js"],

    rules: {
        "import/no-default-export": "error",
    },
}, {
    files: ["**/*.ts"],
    extends: compat.extends("plugin:@typescript-eslint/recommended"),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "@typescript-eslint/array-type": "error",
    },
}]);