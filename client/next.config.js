/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self';
    child-src example.com;
    style-src 'self' example.com;
    font-src 'self'; 
`;

const securityHeaders = [
	{
		key: "X-Frame-Options",
		value: "deny"
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff"
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin"
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload"
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(self); battery=(); geolocation=(); microphone=()"
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
	}
];
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching
})

const nextConfig = {
	productionBrowserSourceMaps: true,
	webpack: (config, { dev, isServer }) => {

		// Включение генерации source map для продакшена
		if (!dev && !isServer) {
			config.devtool = 'source-map';
		}
		return config;
	},
	async headers() {
		return [
			...securityHeaders
		]
	}
}

module.exports = nextConfig

module.exports = withPWA({
	reactStrictMode: false,
	swcMinify: true
}) 