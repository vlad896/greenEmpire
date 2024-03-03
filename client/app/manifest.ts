import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest{
	return {
		  "theme_color": "#2d2d32",
  "background_color": "#2d2d32",
  "display": "standalone",
  "scope": "http://antresol.org/",
  "start_url": "/",
  "orientation": "portrait-primary",
  "id": "/?homescreen=1",
  "name": "Antresol.org",
  "description": "Cпециализируемся на монтаже и демонтаж антресолей, шкафов купе и лестниц, превращая обыденное в удивительное",
  "short_name": "Antresol",
  "dir": "ltr",
  "lang": "ru",
  "display_override": ["window-controls-overlay", "standalone", "browser"],
  "icons": [
    {
      "src": "assets/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "assets/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],

  "shortcuts": [
    {
      "name": "Antresol.bel",
      "url": "/shortcut",
      "description": "Cпециализируемся на монтаже и демонтаж антресолей, шкафов купе и лестниц, превращая обыденное в удивительное",
      "icons": [{ "src": "assets/icon-96x96.png", "type": "image/png", "sizes": "96x96" }]
    }
  ],

  "protocol_handlers": [
    {
      "protocol": "web+antr",
	  "title": "Antresol",
      "url": "http://antresol.org/web+antr/%s"
    }
  ],

  "file_handlers": [
    {
      "action": "http://antresol.org`/",
		"accept": [
		{ "text/*": [".txt"] }
		]
    }
  ],

  "related_applications": [{ "platform": "windows", "url": "https://antresolka.by/" }]

	}
}



