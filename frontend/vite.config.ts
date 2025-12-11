import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'))
console.log(`Building version: ${pkg.version}`)
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },
});
