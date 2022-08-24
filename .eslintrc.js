{
    env: {
        browser: true,
            es2021: true,
                jest: true,
                    node: true
    },
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended"
    ],
        globals: {
        Atomics: "readonly",
            SharedArrayBuffer: "readonly"
    },
    parser: "@babel/eslint-parser",
        parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
            sourceType: "module"
    },
    plugins: [
        "react",
        "prettier",
        "react-hooks"
    ],
        settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        react / react -in -jsx - scope: "off",
    import /no-anonymous-default-export: [
        "warn",
        {
            allowArray: true,
            allowArrowFunction: true,
            allowAnonymousClass: true,
            allowAnonymousFunction: true,
            allowCallExpression: true,
            allowLiteral: true,
            allowObject: true
        }
    ],
        @next/next/no - img - element: "off"
    }
}
{ env: { navegador: verdadeiro, es2021: verdade, brincadeira: verdade, nó: verdadeiro }, estende: ["next/core-web-vitals", "eslint:recomendado", "plugin: reagir/recomendado", "plugin:react-hooks/recomendado", "plugin:mais bonito/recomendado", "plugin:livro de histórias/recomendado"], globais: { Atômica: "somente leitura", SharedArrayBuffer: "somente leitura" }, analisador: "@babel/eslint-parser", parserOptions: { ecmaCaracterísticas: { jsx: verdadeiro }, ecmaVersion: "mais recente", sourceType: "módulo" }, plug - ins: ["reagir", "mais bonito", "ganchos de reação"], definições: { reagir: { versão: "detectar" } }, as regras: { react / react -in -jsx - scope: "off", importação / exportação padrão não anônima: ["avisar", { allowArray: true, allowArrowFunction: true, allowAnonymousClass: true, allowAnonymousFunction: true, allowCallExpression: true, allowLiteral: verdadeiro, allowObject: true }], @next/next/no - img - element: "desligado" } }
    Translated from: English(Google)