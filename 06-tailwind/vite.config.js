/**
 * @Author: Deep Shah
 * @Email: shahdeep966@gmail.com
 * @website: http://deepshah.linkpc.net
 * @Organization: Engineering Services International
 * @Date:   2025-10-31 16:00:07
 * @Last Modified by:   Deep Shah
 * @Last Modified time: 2025-10-31 16:08:24
 */

 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
