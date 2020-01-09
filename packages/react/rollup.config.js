import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from "rollup-plugin-terser";

function stopDynamicImport() {
    return {
        name: 'stop-dynamic-import',
        resolveDynamicImport(source) {
            return false
        }
    };
}

const plugins = [
    resolve(),
    stopDynamicImport(),

    commonjs({
        include: 'node_modules/**',
        namedExports: {
            'node_modules/react-is/index.js': ['isFragment, isValidElementType', 'isContextConsumer', 'ForwardRef'],
            'node_modules/prop-types/index.js': ['elementType'],
        }
    }),
    babel({
        exclude: "node_modules/**"
    }),
    replace({
        "process.env.NODE_ENV": "'production'",
    },[]),
    terser(),
]

const globals = {
    react: 'React',
    redux: 'Redux',
    'react-dom': 'ReactDOM',
    'react-theme': 'reactTheme',
    'react-store': 'reactStore',
}

const external = ['react', 'redux', 'react-dom', 'react-theme', 'react-store']

export default [
    {
        input: 'src/Module1Wrapper.js',
        output: {
            file: 'public/module1.js',
            format: 'iife',
            globals,
            name: 'Module1'
        },
        external,
        plugins
    },
    {
        input: 'src/Module2Wrapper.js',
        output: {
            file: 'public/module2.js',
            format: 'iife',
            globals,
            name: 'Module2'
        },
        external,
        plugins
    }, {
        input: 'src/store.js',
        output: {
            file: 'public/store.js',
            format: 'iife',
            globals,
            name: 'reactStore'
        },
        external,
        plugins
    },
    {
        input: 'src/theme.js',
        output: {
            file: 'public/theme.js',
            format: 'iife',
            globals,
            name: 'reactTheme'
        },
        external,
        plugins
    }
];
