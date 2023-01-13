## Back-end for Front-end (BFF) Design Pattern with Next.js

[PepaDom](mailto:dev@youpan.com)

This is a simple demo [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### [Click here to see the Live Demo](https://react-bff.vercel.app/)

## Screenshots

![form](assets/bff.png)

## Libraries / Tools Used

- Next.js with TypeScript
- Tailwindcss
- React-icons
- Axios

### Setup

To install the dependencies run:

```bash
npm run dev or yarn dev
```

### Add static data per service

e.g. user.json

### Multiple Back-end services in the BFF layer:

- Call only 1 API
- More efficient, more optimissed
- Front-end can render what's needed, not the whole API data
- BFF layer is tightly coupled to the Front-end, i.e. BFF creates a new Back-end only for the service that the Front-end needs

### Create Servces for User Profile

- Messages - one endpoint
- Norifification - one endpoint
- Friend request
- User

### API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/bff](http://localhost:3000/api/bff). This endpoint can be edited in `pages/api/bff.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
