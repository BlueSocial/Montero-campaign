# Christen Montero for Riverside City Council Ward 2 2026

Official campaign website for Christen Montero, candidate for Riverside City Council Ward 2 in 2026.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Form Integration**: Contact forms integrated with Google Sheets
- **Donation System**: Secure donation buttons linking to EFundraiser platform
- **Modern UI**: Built with Next.js, React, and Tailwind CSS
- **Accessibility**: WCAG compliant design

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd montero-campaign
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Add your Google Sheets webhook URL to `.env.local`:
```
GOOGLE_SHEETS_WEBHOOK_URL=your_google_sheets_webhook_url_here
```

5. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `GOOGLE_SHEETS_WEBHOOK_URL`: Your Google Sheets webhook URL
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

- `GOOGLE_SHEETS_WEBHOOK_URL`: URL for Google Apps Script webhook to handle form submissions

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions for form handling
│   ├── about/             # About page
│   ├── privacy-policy/    # Privacy policy page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Page-specific components
├── public/               # Static assets
└── styles/              # Global styles
```

## Contributing

This is a campaign website. For questions or issues, please contact the campaign team.

## License

This project is private and proprietary to the Christen Montero for Riverside City Council 2026 campaign. 