# How to Use This Context in Claude Code

## Step 1: Open Claude Code in Your Terminal

Navigate to your project folder:
```bash
cd D:\Work\deepti_portfolio\cinematographer-portfolio
```

Then start Claude Code:
```bash
claude
```

## Step 2: Share This Context

In the Claude Code chat, paste this message:

---

**Message to send to Claude Code:**

```
I need help building a YouTube-integrated portfolio website for my friend (film & video editor). I've already initialized an Astro project with Tailwind CSS at this location.

Here's the complete context from my previous conversation (I'll paste the JSON file next).

Key things I need you to do:
1. Create all the necessary files in the correct locations
2. The files are: Layout.astro, Header.astro, VideoGrid.astro, index.astro, about.astro, contact.astro, youtube.js
3. Create a .env.example template (I'll fill in the actual API keys myself)
4. Verify everything is set up correctly

I've already handled:
- Astro project creation
- Tailwind CSS integration  
- Node.js v22+ installation

What I'll handle separately:
- Getting YouTube API credentials from Google Cloud Console
- Adding API keys to .env file
- Customizing content (names, URLs, bio)

Please read the context file and create all the files. Let me know when you're done and what I should do next.
```

---

## Step 3: Attach the Context File

After sending the above message, upload the `claude-code-context.json` file to Claude Code.

**Or** just paste the entire JSON content directly into the chat.

## Step 4: Let Claude Code Work

Claude Code will:
- ✅ Create all 8 files in the correct locations
- ✅ Set up proper folder structure
- ✅ Create .env.example template
- ✅ Verify everything is ready

## Step 5: Your Tasks (After Claude Code Finishes)

1. **Get YouTube API credentials:**
   - Go to https://console.cloud.google.com/
   - Create project & enable YouTube Data API v3
   - Create API key
   - Get your channel ID

2. **Create .env file:**
   ```bash
   copy .env.example .env
   ```
   Then add your actual credentials

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Customize content** (Claude Code can help with this too!)

5. **Deploy to Netlify**

## Why Claude Code Instead of Cowork?

**Claude Code** is better for this because:
- ✅ It's a development project (code files)
- ✅ Terminal-based, perfect for dev workflows
- ✅ Better for text files and programming
- ✅ Integrates with git, npm, etc.

**Cowork** is better for:
- ❌ Non-developers
- ❌ General file/folder management
- ❌ Document workflows

For this portfolio project = **Use Claude Code** ✓

## Troubleshooting

**If Claude Code doesn't see the files:**
- Make sure you're in the correct directory
- Run `pwd` (Mac/Linux) or `cd` (Windows) to verify

**If you get permission errors:**
- Run terminal as administrator (Windows)
- Check folder permissions

**If imports fail:**
- Make sure npm install was run
- Check package.json exists

---

## What Happens Next

After Claude Code creates the files:
1. You handle YouTube API setup (15-20 minutes)
2. Test locally (5 minutes)
3. Customize content (30 minutes)
4. Deploy to Netlify (10 minutes)

Total time: ~1 hour to a fully working website!

---

**Ready? Open Claude Code and let's build this! 🚀**
