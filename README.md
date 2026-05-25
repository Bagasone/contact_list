# Contact List

React + Vite starter (vanilla JavaScript) with [Bun](https://bun.sh) and [Tailwind CSS v4](https://tailwindcss.com).

## Stack

- **Runtime / package manager:** Bun
- **Build tool:** Vite 8
- **UI:** React 19
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)

## Scripts

```bash
bun install    # install dependencies
bun dev        # start dev server
bun build      # production build
bun preview    # preview production build
```

## Project structure

```
src/
├── components/
│   ├── contact/    # contact list UI (forms, cards, list)
│   ├── layout/     # page shells (AppLayout)
│   └── ui/         # reusable primitives (buttons, inputs)
├── hooks/          # custom React hooks
├── lib/            # helpers, constants, API clients
├── pages/          # route-level views
├── App.jsx
├── main.jsx
└── index.css       # Tailwind entry (@import "tailwindcss")
```

## Tailwind v4

Configured via the official Vite plugin in `vite.config.js` and `@import "tailwindcss"` in `src/index.css`. No `tailwind.config.js` required for the default setup.
