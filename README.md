# 🚀 Portfolio Nada Mousteau - ENSAE Paris

Portfolio interactif avec effet bureau macOS pour présenter projets, compétences et expériences en finance quantitative.

## 📦 Installation

### Étape 1 : Télécharger tous les fichiers

Crée cette structure de dossiers :

```
portfolio/
├── public/
│   └── Resume_Nada_Mousteau.pdf    ← Mets ton CV ici
├── src/
│   ├── App.jsx
│   ├── Portfolio.jsx               ← TON CODE COMPLET ICI
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Étape 2 : Copier Portfolio.jsx

1. Copie **TON CODE COMPLET** de Portfolio.jsx dans `src/Portfolio.jsx`
2. **IMPORTANT** : Change cette ligne (vers ligne 230) :

```jsx
// AVANT :
href="https://github.com/nadamousteau/portfolio/raw/main/Resume_Nada_Mousteau.pdf"

// APRÈS :
href="/portfolio/Resume_Nada_Mousteau.pdf"
```

### Étape 3 : Installer les dépendances

```bash
cd portfolio
npm install
```

### Étape 4 : Tester en local

```bash
npm run dev
```

Ouvre http://localhost:5173 dans ton navigateur.

✅ **Si ça marche → continue**  
❌ **Si erreur → vérifie que tous les fichiers sont bien créés**

## 🌐 Déploiement sur GitHub Pages

### Étape 1 : Créer un repo sur GitHub

1. Va sur https://github.com/new
2. Nom du repo : **portfolio**
3. Public
4. **NE COCHE PAS** "Add a README"
5. Clique "Create repository"

### Étape 2 : Push sur GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/nadamousteau/portfolio.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer

```bash
npm run deploy
```

### Étape 4 : Activer GitHub Pages

1. Va sur https://github.com/nadamousteau/portfolio
2. **Settings** → **Pages**
3. Source : Branch **`gh-pages`** + folder **`/ (root)`**
4. **Save**
5. Attends 2 minutes

### Étape 5 : Tester

Ton portfolio est en ligne sur :
```
https://nadamousteau.github.io/portfolio/
```

## 🔄 Mettre à jour ton portfolio

Après chaque modification :

```bash
git add .
git commit -m "Update: description du changement"
git push origin main
npm run deploy
```

Attends 1-2 minutes et rafraîchis ton site.

## ✏️ Personnalisation facile

### Ajouter un projet

Dans `src/Portfolio.jsx`, trouve `const projects = [` (ligne ~60) et ajoute :

```jsx
{
  id: 'mon-projet',
  name: 'Nom du projet',
  type: 'Python',
  icon: TrendingUp,
  description: 'Description courte',
  tech: ['Python', 'NumPy', 'Pandas'],
  date: 'Dec 2025',
  color: 'from-blue-500 to-cyan-500',
  github: 'https://github.com/nadamousteau/mon-projet',
  report: null
}
```

### Modifier une compétence

Trouve la section "PAGE SKILLS" (ligne ~850) :

```jsx
{ name: 'Python', level: 'Expert' },
{ name: 'Nouvelle compétence', level: 'Avancé' },
```

### Ajouter une expérience

Trouve `const experiences = [` (ligne ~110) :

```jsx
{
  title: 'Entreprise - Poste',
  period: 'Date',
  description: 'Description',
  icon: TrendingUp,
  color: 'from-blue-500 to-cyan-500'
}
```

## 🐛 Résolution de problèmes

### Erreur "Cannot find module 'lucide-react'"
```bash
npm install lucide-react
```

### Le site affiche une page blanche
- Vérifie que `vite.config.js` a `base: '/portfolio/'`
- Vérifie que le lien du CV est `/portfolio/Resume_Nada_Mousteau.pdf`

### Erreur lors du git push
Utilise un Personal Access Token :
1. https://github.com/settings/tokens
2. Generate new token (classic)
3. Coche "repo"
4. Utilise ce token comme password

## 📧 Contact

- Email : nada.mousteau@ensae.fr
- GitHub : https://github.com/nadamousteau
- LinkedIn : https://linkedin.com/in/nadamousteau

## 📄 Licence

MIT License - Libre d'utilisation et modification

---

**Portfolio créé avec React + Vite + Lucide Icons**