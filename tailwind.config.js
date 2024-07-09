/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-200', 'bg-blue-500', 'text-blue-400',
    'bg-green-200', 'bg-green-500', 'text-green-400',
    'bg-indigo-200', 'bg-indigo-500', 'text-indigo-400',
    'bg-purple-200', 'bg-purple-500', 'text-purple-400',
    'bg-red-200', 'bg-red-500', 'text-red-400',
    'bg-gray-200', 'bg-gray-500', 'text-gray-400',
    'text-3xl', 'lg:text-4xl',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans']
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}