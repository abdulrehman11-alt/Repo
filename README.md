# NovaStudio Project

## Files
- `index.html` - your website
- `package.json` - Node/TypeScript dependencies and commands
- `tsconfig.json` - TypeScript configuration
- `api.ts` - Express API and website server

## Run
1. Put `index.html` in this same folder.
2. Open terminal in this folder.
3. Run:
   npm install
4. Start:
   npm run dev
5. Open:
   http://localhost:3000

## API
GET `/api/health`
POST `/api/contact`

POST body example:
{
  "name": "Usman",
  "email": "usman@example.com",
  "message": "I need a website."
}
