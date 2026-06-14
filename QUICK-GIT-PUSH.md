# ⚡ QUICK GIT PUSH - Copy & Paste Commands

## 30-Second Setup

### **Step 1: Create Repo on GitHub**
1. Go to github.com → **+** → **New repository**
2. Name: `kaneintel-website`
3. Click **Create** (don't initialize)

---

### **Step 2: Copy Your Repo URL**
After creating, GitHub shows:
```
https://github.com/YOUR_USERNAME/kaneintel-website.git
```
**COPY THIS URL** - you'll need it

---

### **Step 3: Extract Files & Open PowerShell**

1. Extract: `kaneintel-website-deployment.zip`
2. Rename folder: `kaneintel-website`
3. Right-click folder → **Open PowerShell here**

---

### **Step 4: Run These Commands**

**Paste this entire block into PowerShell:**

```powershell
git init
git add .
git commit -m "Initial commit: KaneIntel website"
git remote add origin https://github.com/YOUR_USERNAME/kaneintel-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

Example:
```powershell
git init
git add .
git commit -m "Initial commit: KaneIntel website"
git remote add origin https://github.com/jsmith/kaneintel-website.git
git branch -M main
git push -u origin main
```

---

### **Step 5: Enter Credentials**

When prompted:
- **Username:** Your GitHub username
- **Password:** Your Personal Access Token (NOT your password)

**How to get Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token → Name: `git-push`
3. Select: `repo` checkbox
4. Click Generate
5. Copy token
6. Paste in PowerShell when asked for password

---

## ✅ Done!

Check GitHub: `github.com/YOUR_USERNAME/kaneintel-website`

You should see all your files there! 🎉

---

## 🚨 If You Get An Error

### "git: command not found"
→ Install Git: https://git-scm.com/download/win

### "remote origin already exists"
→ Run: `git remote remove origin` first

### "401 Unauthorized"
→ Check your Personal Access Token (use token, not password)

---

## Optional: Deploy to GitHub Pages

After pushing:

1. Go to repository on GitHub
2. Settings → Pages
3. Branch: `main` → Folder: `/ (root)`
4. Click Save

Your site goes live at: `https://YOUR_USERNAME.github.io/kaneintel-website`

---

**That's it! Your code is on GitHub!** 🚀
