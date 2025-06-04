/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        domains: ['raw.githubusercontent.com'], // Por si necesitas cargar imágenes desde GitHub
    },
};

// Configuración de la URL base según el entorno
if (process.env.VERCEL_URL) {
    nextConfig.assetPrefix = `https://${process.env.VERCEL_URL}`;
}

module.exports = nextConfig; 