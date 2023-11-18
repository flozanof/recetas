/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/receta',
                destination: '/',
            }
        ]
    }
}

module.exports = nextConfig
