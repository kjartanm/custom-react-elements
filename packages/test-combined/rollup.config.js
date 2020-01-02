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
            'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer', 'ForwardRef'],
            'node_modules/prop-types/index.js': ['elementType'],
        }
    }),
    babel({
        exclude: "node_modules/**"
    }),
    replace({
        "process.env.NODE_ENV": "'production'",
    }),
    terser(),
]

const globals = {
    react: 'React',
    redux: 'Redux',
    'react-dom': 'ReactDOM',
    'context-proxy': 'ContextProxy',
    'test-theme': 'TestTheme',
    'test-store': 'testStore',
}

const external = ['react', 'redux', 'react-dom', 'context-proxy', 'test-theme', 'test-store']

export default [
    {
        input: 'src/ContextWrapper.js',
        output: {
            file: 'public/test.context.js',
            format: 'iife',
            globals,
            name: 'ContextProxy'
        },
        external,
        plugins
    },
    {
        input: 'src/Module1Wrapper.js',
        output: {
            file: 'public/test.module1.js',
            format: 'iife',
            globals,
            name: 'ContextModule'
        },
        external,
        plugins
    },
    {
        input: 'src/Module2Wrapper.js',
        output: {
            file: 'public/test.module2.js',
            format: 'iife',
            globals,
            name: 'ContextModule'
        },
        external,
        plugins
    }, {
        input: 'src/TestStore.js',
        output: {
            file: 'public/test.store.js',
            format: 'iife',
            globals,
            name: 'testStore'
        },
        external,
        plugins
    },
    {
        input: 'src/Theme.js',
        output: {
            file: 'public/test.theme.js',
            format: 'iife',
            globals,
            name: 'TestTheme'
        },
        external,
        plugins
    }
];
