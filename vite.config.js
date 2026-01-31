import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ensure this line is here

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    base: '/My_Portfolio1/',
  resolve: {
    dedupe: ['react', 'react-dom'], // This fixes the useContext error from earlier
  },
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/My_Portfolio1/',
// })
