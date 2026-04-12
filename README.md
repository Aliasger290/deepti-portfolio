# Film & Video Portfolio Website

A modern, YouTube-integrated portfolio website built with Astro and Tailwind CSS.

## ✨ Features

- 🎬 **Auto-fetches videos** from YouTube channel
- 📺 **Embedded video player** with modal
- 📱 **Fully responsive** design
- ⚡ **Lightning fast** (Astro static site)
- 🎨 **Beautiful UI** with Tailwind CSS
- 📧 **Contact form** (Netlify Forms)
- 🆓 **Free hosting** on Netlify

---

## 🚀 Quick Setup

### 1. Get YouTube API Credentials

**A. Get YouTube API Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable **YouTube Data API v3**:
   - Click "Enable APIs and Services"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "Credentials" in left menu
   - Click "Create Credentials" → "API Key"
   - Copy the API key

**B. Get YouTube Channel ID:**
1. Go to your YouTube channel
2. Click on your profile picture → "Your channel"
3. Look at the URL: `youtube.com/channel/CHANNEL_ID_HERE`
4. Copy the channel ID (starts with UC...)

**Alternative:** Use [this tool](https://commentpicker.com/youtube-channel-id.php) to find channel ID

---

### 2. Install Files

**Copy all the files I created into your project:**

```
cinematographer-portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Copy from Layout.astro
│   ├── components/
│   │   ├── Header.astro          ← Copy from Header.astro
│   │   └── VideoGrid.astro       ← Copy from VideoGrid.astro
│   ├── pages/
│   │   ├── index.astro           ← Copy from index.astro
│   │   ├── about.astro           ← Copy from about.astro
│   │   └── contact.astro         ← Copy from contact.astro
│   └── lib/
│       └── youtube.js            ← Copy from youtube.js
└── .env                          ← Create new file
```

---

### 3. Configure Environment Variables

Create `.env` file in the project root:

```env
PUBLIC_YOUTUBE_API_KEY=your_api_key_here
PUBLIC_YOUTUBE_CHANNEL_ID=your_channel_id_here
```

⚠️ **Important:** Replace with your actual credentials!

---

### 4. Customize Content

**Update the following in the files:**

**Header.astro:**
- Line 8: Change "Deepti Valunjkar" to actual name
- Line 32: Update YouTube channel URL
- Line 41: Update Instagram handle URL

**index.astro:**
- Line 13: Update name
- Line 16-19: Update hero description

**about.astro:**
- Replace placeholder text with actual bio
- Update experience section
- Update skills
- Update contact email/phone

**contact.astro:**
- Update email address
- Update phone number
- Update social media links

---

### 5. Run Development Server

```bash
npm run dev
```

Open: http://localhost:4321

You should see:
- Homepage with YouTube videos loading
- About page with bio
- Contact page with form

---

### 6. Deploy to Netlify

**A. Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**B. Deploy on Netlify:**

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repo
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Add environment variables:**
   - Click "Show advanced" → "New variable"
   - Add `PUBLIC_YOUTUBE_API_KEY`
   - Add `PUBLIC_YOUTUBE_CHANNEL_ID`
7. Click "Deploy site"

**C. Enable Contact Form:**

After deployment:
1. Go to Site settings → Forms
2. Forms should automatically be enabled
3. Test by submitting the contact form
4. View submissions in Netlify dashboard → Forms

---

## 📝 How It Works

### Video Fetching
- Videos are fetched at **build time** (static)
- To update videos, redeploy the site (automatic with Netlify)
- Or set up **auto-deploy** on schedule (Netlify Build Hooks)

### Auto-Update Videos (Optional)

**Set up scheduled builds:**

1. In Netlify: Build & deploy → Build hooks
2. Create a build hook (copy URL)
3. Use a service like [cron-job.org](https://cron-job.org)
4. Schedule daily rebuild (triggers new video fetch)

---

## 🎨 Customization

### Colors
Edit Tailwind classes in components:
- Change `bg-black` to other colors
- Update text colors (e.g., `text-gray-400`)

### Fonts
Update in `Layout.astro`:
- Line 13: Change Google Fonts import
- Line 28: Update font-family

### Layout
- Adjust grid columns in `VideoGrid.astro`
- Modify spacing/padding in page files

---

## 🐛 Troubleshooting

### Videos Not Loading

**Check:**
1. `.env` file exists with correct API key and channel ID
2. YouTube Data API v3 is enabled
3. API key has no restrictions (or allows your domain)
4. Channel ID is correct (starts with UC...)

**Test API manually:**
```
https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=YOUR_CHANNEL_ID&key=YOUR_API_KEY
```

### Build Errors

**"Cannot find module" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind not working:**
```bash
npx astro add tailwind --yes
```

---

## 📦 What's Included

- ✅ Responsive video grid
- ✅ YouTube API integration
- ✅ Modal video player
- ✅ About page
- ✅ Contact form (Netlify)
- ✅ Mobile navigation
- ✅ Social media links
- ✅ SEO-friendly structure

---

## 🔄 Updating Content

### Add New Videos
Just upload to YouTube - videos appear after next build/deploy

### Update Bio
Edit `src/pages/about.astro`

### Change Contact Info
Edit `src/pages/contact.astro`

---

## 💡 Tips

1. **Optimize images:** Use WebP format for profile photos
2. **Add analytics:** Use Netlify Analytics or Google Analytics
3. **Custom domain:** Add in Netlify → Domain settings
4. **SSL:** Automatic with Netlify
5. **Performance:** Site is already optimized (Astro static)

---

## 📚 Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [YouTube API Docs](https://developers.google.com/youtube/v3)
- [Netlify Docs](https://docs.netlify.com)

---

## 🆘 Need Help?

If something doesn't work:
1. Check the console for errors (F12 in browser)
2. Verify environment variables are set
3. Check YouTube API quotas
4. Rebuild the site on Netlify

---

**Built with ❤️ using Astro + Tailwind CSS**
