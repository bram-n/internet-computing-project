# 3AM Movies

Developed by Tam Nguyen, Bram Nutt, and Camden Scholl 

## Overview

3AM Movies is based on e-commerce sites like Amazon and movie or streaming service websites like Netflix. Our goal is to create a site where users can shop for movies based on recommendations and their selected preferences. 

### Pages
There are three main pages: the home page, which shows featured movies sorted by preference and additional categories, the search page, which allows users to search by category and name, and the checkout page, which is where the user can buy their movies. There are also some subpages within each of the main pages, but these are mostly extra details that make the website feel more natural, and aren't required for basic functionality.

### Movie, User, and Image Information
We store our movie and user information in our Supabase instance and keep most of our queries on the server side in a file called data.ts. When the queries are run on the server side, NextJS is able to process them much faster. In most cases, the images, which we get from TMDB's API, are also queried on the server side. However, in some cases, like in the cart, we query them on the client side because we need some other client side specific functionality in that component. For these cases, we set up both a client side access point to our Supabase instance and a client side access point to the TMDP API.

### Recommender System
Our recommender system is written in Python and is separate from the main website and we update the machine learning algorithm through API calls. This way, we can manange the recommender system separately and even detach it if there are issues that require fixing. To update the system, we send over the titles of the movies that the user has clicked on, and the recommender system updates to recommend similar movies.

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