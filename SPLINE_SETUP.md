# 🎨 Spline 3D Model Setup Instructions

## 📍 Current Setup

Footer mein abhi local file path use ho raha hai: `/scene (1).splinecode`

Ye file `public/` folder mein honi chahiye.

---

## Option 1: Use Local File (Recommended)

### Step 1: Get Spline Scene File
1. Go to [spline.design](https://spline.design)
2. Create/export your 3D model
3. Download the `.splinecode` file

### Step 2: Add to Project
1. File ko `public/` folder mein copy karein
2. Name it `scene (1).splinecode` (ya jo bhi name ho)
3. Footer component mein path update karein:

```tsx
scene="/scene (1).splinecode"  // Your file name
```

---

## Option 2: Use Spline URL

### Step 1: Get Spline Scene URL
1. Go to [spline.design](https://spline.design)
2. Create/export your 3D model
3. Copy the **Scene URL** (looks like: `https://prod.spline.design/xxxxx.splinecode`)

### Step 2: Update Footer Component
Open `app/components/footer.tsx` and replace:

```tsx
scene="/scene (1).splinecode"
```

With:

```tsx
scene="https://prod.spline.design/YOUR_ACTUAL_SCENE_URL.splinecode"
```

---

## Step 3: Update Object Name (if needed)

Agar aapke Spline object ka naam different hai, to `footer.tsx` mein line 161 par update karein:

```tsx
const object = spline.find("Cube") || spline.find("Mesh") || spline.find("Group");
```

Replace `"Cube"`, `"Mesh"`, `"Group"` with your actual object name from Spline.

---

## Step 4: Test

1. Run `npm run dev`
2. Scroll to the footer
3. Move your mouse - the 3D model should rotate based on mouse position!

---

## 🎯 Quick Start (If you don't have a Spline scene yet)

1. Go to [spline.design](https://spline.design)
2. Sign up/Login
3. Create a new project
4. Add a 3D object (cube, sphere, or import a model)
5. Export → Export for Web
6. Copy the URL ya download the file
7. Update footer component with the URL/file path

---

**Note:** The 3D model will only be visible on desktop (lg screens and above) for performance.

