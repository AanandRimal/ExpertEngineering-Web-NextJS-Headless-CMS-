# Strapi CMS Setup Guide

## 1. Install and Start Strapi

```bash
# Navigate to your Strapi directory
cd strapi-cms

# Install dependencies
npm install

# Start Strapi
npm run develop
```

## 2. Create Admin Account

1. Go to `http://localhost:1337/admin`
2. Create your first admin account
3. Log in to the admin panel

## 3. Create Content Types

### Home Page Content Type

1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it: `Home Page`
4. Add these fields:

#### Hero Section (Component)

- `heroTitle` (Text) - "Engineering Excellence for Every Project"
- `heroSubtitle` (Text) - "Comprehensive engineering consulting services..."
- `heroBackgroundImage` (Media) - Upload your hero image
- `primaryButtonText` (Text) - "Our Services"
- `secondaryButtonText` (Text) - "View Portfolio"

#### Services Overview (Component)

- `sectionTitle` (Text) - "Our Expertise"
- `sectionHeading` (Text) - "Comprehensive Engineering Solutions"
- `sectionDescription` (Text) - "From initial feasibility studies..."

#### Mission Vision (Component)

- `missionTitle` (Text) - "Our Mission"
- `missionDescription` (Text) - "To provide innovative and sustainable..."
- `visionTitle` (Text) - "Our Vision"
- `visionDescription` (Text) - "To be the leading engineering consulting..."

#### Stats (Component)

- `projectsCompleted` (Number) - 200
- `yearsExperience` (Number) - 5
- `expertEngineers` (Number) - 10
- `clientSatisfaction` (Number) - 95

### Services Content Type

1. Create another collection type: `Services`
2. Add these fields:

- `title` (Text) - "Property Valuation"
- `description` (Text) - "Professional property assessment..."
- `icon` (Text) - "Calculator" (use icon names: Calculator, Building, Compass, Target, Eye)
- `image` (Media) - Service image (optional)

## 4. Add Sample Data

### Home Page

1. Go to **Content Manager**
2. Click **Home Page**
3. Click **Create new entry**
4. Fill in all the fields with your current content
5. Save and publish

### Services

1. Go to **Content Manager**
2. Click **Services**
3. Create entries for:
   - Property Valuation (icon: Calculator)
   - Structural Design (icon: Building)
   - Environmental Assessment (icon: Compass)

## 5. Configure Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click **Public**
3. Enable **find** and **findOne** for:
   - Home Page
   - Services
4. Save

## 6. Test Your Setup

1. Start your Next.js app: `pnpm dev`
2. Visit your homepage
3. The content should now be loaded from Strapi

## 7. Environment Variables

Create a `.env.local` file in your Next.js project root:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 8. Deployment

When deploying to your VPS:

1. **Strapi**: Deploy to `cms.yourdomain.com`
2. **Next.js**: Deploy to `yourdomain.com`
3. Update `NEXT_PUBLIC_STRAPI_URL` to your Strapi domain

## Troubleshooting

- If you see fallback content, check that Strapi is running and accessible
- Check browser console for API errors
- Verify permissions are set correctly in Strapi
- Ensure content is published (not draft) in Strapi
