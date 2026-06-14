# 🚀 Push KaneIntel Website to GitHub

## Prerequisites

1. **GitHub Account** - [github.com](https://github.com)
2. **Git Installed** - [git-scm.com](https://git-scm.com)
3. **GitHub Desktop** (optional, easier for beginners) - [desktop.github.com](https://desktop.github.com)

---

## Option 1: Command Line (PowerShell) - RECOMMENDED

### Step 1: Create Repository on GitHub

1. Go to **github.com** and log in
2. Click **+** (top right) → **New repository**
3. Name it: `kaneintel.com` or `kaneintel-website`
4. Description: `KaneIntel Business Automation Website`
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README/license
7. Click **Create repository**

### Step 2: Extract Your Files

1. Extract `kaneintel-website-deployment.zip`
2. Rename folder to `kaneintel-website` (or your repo name)
3. Move to your preferred location (e.g., `C:\Users\YourName\Projects\`)

### Step 3: Open PowerShell in Your Folder

1. Open folder: `C:\Users\YourName\Projects\kaneintel-website`
2. Right-click in empty space → **Open PowerShell here**
   (or: `Shift + Right-click` → **Open PowerShell window here**)

### Step 4: Initialize Git & Push

**Copy and paste these commands one at a time:**

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: KaneIntel website"

# Add remote origin (REPLACE USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/kaneintel-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example (with actual values):**
```powershell
git init
git add .
git commit -m "Initial commit: KaneIntel website"
git remote add origin https://github.com/jsmith/kaneintel-website.git
git branch -M main
git push -u origin main
```

### Step 5: Enter Your GitHub Credentials

When prompted:
- **Username:** Your GitHub username
- **Password:** Your GitHub personal access token (NOT your password)

**Get Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Click **Generate new token**
3. Name: `git-push`
4. Select: `repo` (all checkboxes under it)
5. Click **Generate token**
6. Copy token (you won't see it again!)
7. Paste as password in PowerShell

---

## Option 2: GitHub Desktop (Easier)

### Step 1: Install GitHub Desktop
- Download from [desktop.github.com](https://desktop.github.com)
- Install and sign in with your GitHub account

### Step 2: Create Repository

1. File → New Repository
2. Name: `kaneintel-website`
3. Local Path: Choose where to save
4. Click **Create Repository**

### Step 3: Add Your Files

1. Extract `kaneintel-website-deployment.zip`
2. Copy all files from the zip into your new repository folder
3. GitHub Desktop automatically detects changes

### Step 4: Commit & Push

1. Click **Commit to main** (bottom left)
2. Summary: `Initial commit: KaneIntel website`
3. Click **Publish repository** (right side)
4. Select **Public** or **Private**
5. Click **Publish Repository**

**Done!** ✅

---

## Option 3: Web Upload (No Git Required)

### Step 1: Create Repository
1. GitHub.com → **+** → **New repository**
2. Name: `kaneintel-website`
3. **DO NOT** initialize with files
4. Click **Create**

### Step 2: Upload Files
1. Click **uploading an existing file** link
2. Extract your zip file
3. Drag all files/folders into the upload area
4. Or click to browse and select files
5. Add commit message: `Initial commit: KaneIntel website`
6. Click **Commit changes**

**Note:** Slower for many files, but simple!

---

## Verification: Check GitHub

After pushing:

1. Go to `github.com/YOUR_USERNAME/kaneintel-website`
2. You should see:
   ```
   ✅ index.html
   ✅ solutions.html
   ✅ booking.html
   ✅ privacy.html
   ✅ terms.html
   ✅ robots.txt
   ✅ sitemap.xml
   ✅ assets/
       ├── style.css
       └── site.js
   ✅ DEPLOYMENT-GUIDE.md
   ```

---

## Optional: Enable GitHub Pages

To host directly from GitHub:

1. Go to your repository
2. Settings → Pages
3. Branch: `main`
4. Folder: `/ (root)`
5. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/kaneintel-website`

To use custom domain `kaneintel.com`:
1. Settings → Pages → Custom domain
2. Enter: `kaneintel.com`
3. Follow DNS setup instructions

---

## Troubleshooting

### "fatal: not a git repository"
**Solution:** Make sure you're in the right folder when running `git init`

```powershell
# Check you're in right folder
pwd

# Should show: C:\Users\YourName\Projects\kaneintel-website
```

### "remote origin already exists"
**Solution:** Remove it first
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/kaneintel-website.git
```

### "Permission denied (publickey)"
**Solution:** Use HTTPS instead of SSH
```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/kaneintel-website.git
```

### "401 Unauthorized"
**Solution:** Personal access token issue
1. Generate new token (see Step 5 above)
2. Use token as password (not your GitHub password)

---

## After Pushing - Next Steps

### 1. **Add README.md** (Recommended)

Create `README.md` in your repo:

```markdown
# KaneIntel Business Automation Website

Professional business automation and operational intelligence website for Orange County businesses.

## Features
- Multi-page responsive design
- Professional assessment form
- SEO optimized
- Mobile-friendly
- Accessibility compliant

## Technologies
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Fraunces, Inter)

## Live Site
[kaneintel.com](https://kaneintel.com)

## Contact
info@kaneintel.com

© 2026 KaneIntel LLC
```

### 2. **Add .gitignore** (Optional)

Create `.gitignore`:
```
.DS_Store
Thumbs.db
*.swp
.vscode/
```

### 3. **Enable GitHub Pages**

Settings → Pages → Enable

---

## PowerShell Command Reference

```powershell
# View current status
git status

# View commit history
git log

# View remote
git remote -v

# Make changes and push
git add .
git commit -m "Your message"
git push

# Create new branch
git checkout -b new-feature

# Switch branch
git checkout main

# Delete branch
git branch -d branch-name
```

---

## Need Help?

**GitHub Docs:** [docs.github.com](https://docs.github.com)
**Git Docs:** [git-scm.com/doc](https://git-scm.com/doc)

---

**Your code is ready to push!** 🚀

Choose Option 1 (Command Line) or Option 2 (GitHub Desktop) and follow the steps above.

Good luck! 💪
