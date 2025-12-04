# PSSC Website - Profile Update System Setup

## 🎉 What's New

- **Member Profile Updates**: Members can update their photos and info via private links
- **Firebase Integration**: Firestore database for member data
- **GitHub Photo Storage**: Photos stored in Git for version control
- **CSS Visual Refresh**: Modern animations, shadows, and hover effects

---

## 📋 Setup Instructions

### Step 1: Compile SASS

```bash
npm install
npm run sass
```

Keep this running to watch for CSS changes.

### Step 2: Connect to Firebase

```bash
cd website
firebase login
firebase use --add
```

Select your Firebase project: `pssc-website-3b5d5`

### Step 3: Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

### Step 4: Import Members to Firestore

1. Open `update-profile.html` in a browser (or create a temp HTML file)
2. Add this script tag before closing `</body>`:
   ```html
   <script src="js/migrate-members.js"></script>
   ```
3. Open browser console (F12)
4. Run:
   ```javascript
   migrateMembers()
   ```
5. You should see: ✅ Successfully migrated X members to Firestore!

### Step 5: Generate Member Tokens

In the same browser console, run:
```javascript
generateMemberTokens()
```

This will output private links for each member. Copy the token mapping and update `js/member-tokens.js`.

### Step 6: Set Up GitHub Token (for photo uploads)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "PSSC Website Photo Uploads"
4. Select scopes:
   - ✅ **repo** (all)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Update `js/member-tokens.js`:
   ```javascript
   const GITHUB_CONFIG = {
     owner: "Purdue-Science-Student-Council",
     repo: "website",
     branch: "main",
     token: "ghp_YOUR_TOKEN_HERE" // Paste your token here
   };
   ```

**⚠️ Security Note**: Don't commit the GitHub token to a public repo! Add `member-tokens.js` to `.gitignore` or use environment variables.

### Step 7: Deploy to Firebase

```bash
firebase deploy
```

Your site will be live at: `https://pssc-website-3b5d5.web.app`

---

## 📧 Sending Member Links

After generating tokens, email each member their private link:

### Email Template:

```
Subject: Update Your PSSC Profile

Hi [Name],

You can now update your PSSC profile photo and information using your private link:

https://pssc-website-3b5d5.web.app/update-profile.html?token=[THEIR_TOKEN]

🔒 Keep this link private - it's unique to you!

What you can update:
• Profile photo
• Bio
• Major/Year (if changed)

If you have any questions, reply to this email.

Best,
PSSC Web Team
```

---

## 🎨 CSS Enhancements

The visual refresh includes:

- **Smoother animations**: Fade-in, slide-in, scale effects
- **Better shadows**: Depth and elevation
- **Hover effects**: Cards lift on hover
- **Enhanced dropdown**: Animated with smooth transitions
- **Gradient text**: For special headings
- **Loading states**: Spinners and pulse animations
- **Accessibility**: Better focus states and reduced motion support

---

## 📁 File Structure

```
website/
├── update-profile.html          # Member portal page
├── js/
│   ├── firebase-config.js       # Firebase initialization
│   ├── member-tokens.js         # Private token mapping
│   ├── update-profile.js        # Profile update logic
│   └── migrate-members.js       # One-time migration script
├── styles/
│   └── sass/
│       ├── _enhancements.scss   # New CSS features
│       └── _navbar.scss         # Enhanced navbar
└── firestore.rules              # Database security
```

---

## 🔧 Development Workflow

### Making CSS Changes

1. Edit SASS files in `styles/sass/`
2. SASS compiler auto-generates `styles/css/main.css`
3. Refresh browser to see changes

### Testing Profile Updates Locally

1. Run Firebase emulators:
   ```bash
   firebase emulators:start
   ```
2. Open: `http://localhost:5000/update-profile.html?token=demo-token-christine`
3. Test photo upload and form submission

### Deploying Changes

```bash
# Deploy everything
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only Firestore rules
firebase deploy --only firestore:rules
```

---

## 🐛 Troubleshooting

### "Firebase not initialized" error
- Make sure `firebase-config.js` is loaded before other scripts
- Check browser console for errors

### Photo upload fails
- Verify GitHub token has correct permissions
- Check `GITHUB_CONFIG` in `member-tokens.js`
- Ensure token is not expired

### Member can't access update page
- Verify token exists in `memberTokens` object
- Check URL has correct `?token=...` parameter
- Token is case-sensitive!

### CSS changes not appearing
- Make sure SASS is running: `npm run sass`
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

---

## 🚀 Next Steps

### Optional Enhancements:

1. **Add email notifications**: Get notified when members update profiles
2. **Admin approval workflow**: Review changes before going live
3. **Photo compression**: Automatically resize/compress uploaded photos
4. **Analytics**: Track how many members update their profiles
5. **Bulk token generation**: Script to generate tokens for new members

---

## 📞 Support

For questions or issues:
- **Email**: purduesciencecouncil@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/Purdue-Science-Student-Council/website/issues)

---

## 🎓 Credits

- **Original Website**: Vritant Bhardwaj (2018)
- **Webmasters**: Jeonghu Park, Tom Appenzeller, Kaitlynn Tran, Pramey Kabra, Anushka Shome
- **Profile Update Feature**: [Your Name] (2025)
