import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'

export default {
    plugins: [
        commonjs(),
        resolve(),
        buble()
    ],
    output: {
        format: 'cjs',
        sourcemap: 'inline'
    }
}
