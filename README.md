# Music Streaming App

A beautiful, Spotify-inspired music streaming PWA built with React, TypeScript, and Tailwind CSS.

## Features

- 🎵 **Full Music Player** - Play, pause, skip, shuffle, and repeat
- 🔍 **Smart Search** - Find tracks, albums, artists, and playlists instantly
- 📚 **Library Management** - Save your favorite tracks, albums, and artists
- 📱 **PWA Support** - Install on your device and use offline
- 🎨 **Beautiful UI** - Dark theme with smooth animations
- ⌨️ **Keyboard Shortcuts** - Control playback with your keyboard
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Routing:** React Router v6
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── layout/          # Sidebar, mobile nav
│   ├── music/           # Track rows, cards
│   ├── player/          # Player components
│   └── ui/              # Reusable UI primitives
├── lib/
│   ├── api/             # API client & mock data
│   ├── store/           # Zustand stores
│   ├── types.ts         # TypeScript types
│   └── utils/           # Utility functions
├── pages/               # Route pages
└── App.tsx              # Main app component
```

## Mock API

Currently uses a mock API with sample data. To connect to a real backend:

1. Set `VITE_API_BASE_URL` environment variable
2. Update API client in `src/lib/api/client.ts`
3. Implement the same interfaces defined in `src/lib/types.ts`

### API Endpoints Expected

- `GET /shelves` - Home page content
- `GET /search?q={query}` - Search results
- `GET /playlist/{id}` - Playlist details
- `GET /album/{id}` - Album details
- `GET /artist/{id}` - Artist details
- `GET /lyrics/{trackId}` - Track lyrics

## Features

### Player

- Full playback controls
- Queue management
- Shuffle and repeat modes
- Volume control
- Progress bar with seek
- Media Session API integration (for lock screen controls)

### Library

- Like tracks, albums
- Follow artists
- Save playlists
- Persistent storage using Zustand persist middleware

### PWA

The app is a Progressive Web App and can be:
- Installed on mobile devices
- Used offline (with cached assets)
- Added to home screen

## Keyboard Shortcuts

- `Space` - Play/Pause
- `→` - Seek forward
- `←` - Seek backward
- `Cmd/Ctrl + F` - Focus search

## Performance

- Lazy loaded routes
- Optimized images
- Debounced search
- Minimal re-renders with Zustand selectors

## Accessibility

- WCAG 2.1 AA compliant
- Full keyboard navigation
- ARIA labels on all interactive elements
- Focus management
- High contrast support

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Social features (sharing, collaborative playlists)
- [ ] Lyrics display with karaoke mode
- [ ] Audio visualization
- [ ] Podcast support
- [ ] Audiobook support
- [ ] Offline playback
- [ ] Cross-device sync

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
