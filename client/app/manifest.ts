import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#F8F9FF',
    background_color: '#F8F9FF',
    display: 'standalone',
    scope: 'http://wm-empire.by/',
    start_url: 'http://wm-empire.by/',
    orientation: 'portrait-primary',
    id: '/?homescreen=1',
    name: 'WebMarketingEmpire',
    description:
      'Мы предлагаем комплексные решения для бизнеса всех размеров, помогая нашим клиентам достигать новых высот.',
    short_name: 'WM-Empire',
    dir: 'ltr',
    lang: 'ru',
    display_override: ['window-controls-overlay', 'standalone', 'browser'],
    icons: [
      {
        src: 'assets/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: 'assets/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'assets/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    shortcuts: [
      {
        name: 'WebMarketingEmpire',
        url: '/',
        description:
          'Мы предлагаем комплексные решения для бизнеса всех размеров, помогая нашим клиентам достигать новых высот.',
        icons: [
          { src: 'assets/icon-96x96.png', type: 'image/png', sizes: '96x96' },
        ],
      },
    ],

    protocol_handlers: [
      {
        protocol: 'web+antr',
        title: 'WebMarketingEmpire',
        url: 'http://wm-empire.by/web+antr/%s',
      },
    ],

    file_handlers: [
      {
        action: 'http://wm-empire.by/',
        accept: [{ 'text/*': ['.txt'] }],
      },
    ],

    related_applications: [{ platform: 'windows', url: 'https://issoft.by/' }],
  }
}
