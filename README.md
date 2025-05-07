# 3AM Movies

Developed by Tam Nguyen, Bram Nutt, and Camden Scholl 

## Overview

3AM Movies is based on e-commerce sites like Amazon and movie or streaming service websites like Netflix. Our goal is to create a site where users can shop for movies based on recommendations and their selected preferences. 

## Development Timeline
Developed from January 2025 to May 2025. 

## Tech Stack
We are using NextJS with TypeScript and Tailwind. NextJS is a fullstack framework that uses ReactJS as a frontend framework and includes server componenets. For more advanced UI, we are using ShadCN UI, a UI component library. Our database is Supabase, which is a Postgres database. Lastly, we are using Python for our recommendation system, which is connected to the main website by an API.

## How to Run

First, clone the repository from https://github.com/bram-n/internet-computing-project. We use pnpm instead of npm, since pnpm works better with NextJS.
To install pnpm, run

```bash
npm install -g pnpm
```
Note: the -g flag will install pnpm globally on your machine.

Once pnpm is installed, run the following to create your package.json and other necessary files.

```bash
pnpm install
```

Before running the code, you will need to create an .env file with your own Supabase instance, auth secret, and optionally, a TMDP API key. These will not be provided in the source code. 

To get your own Supabase (or other NextJS related database), use Chapter 6 of the tutorial at this link: https://nextjs.org/learn/dashboard-app/setting-up-your-database
To get an auth secret and set up the rest of the authentication, use Chapter 15 of the tutorial at this link: https://nextjs.org/learn/dashboard-app/adding-authentication
Lastly, to get an TMDB API key, follow the instructions the TMDB page at https://developer.themoviedb.org/docs/getting-started

After getting all of these set up, your .env file should look like this:

POSTGRES_URL=
POSTGRES_PRISMA_URL=
SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
POSTGRES_URL_NON_POOLING=
SUPABASE_JWT_SECRET=
POSTGRES_USER=NEXT_PUBLIC_SUPABASE_ANON_KEY=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ANON_KEY=

AUTH_SECRET=
TMDB_API_KEY=

Once everything is setup, run
```bash
pnpm dev
```