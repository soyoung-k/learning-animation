module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:import/errors', 'plugin:import/warnings'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    env: {
        jest: true,
    },
}
