
# 🥋 kudo

**`kudo`** is a zero-config CLI tool to kickstart your Next.js apps — but with a twist of discipline. It comes pre-configured with Husky, Commitlint, Prettier, and [VsCode](https://code.visualstudio.com/) recommended settings to help you build scalable and clean applications with a strong development workflow — right from the first commit.

---

## ✨ Features

* ⚡️ Create a fully set-up **Next.js** app in seconds
* 🧼 Enforced **Prettier** formatting
* 🥊 **Husky** hooks for pre-commit checks
* 🔍 **Commitlint** to ensure conventional commit messages
* 📁 Clean folder structure, ready for development

---

## 🚀 Getting Started

### 📦 Installation

You can use `npx` (recommended):

```bash
npx create-kudo-app my-next-app
```

Or install globally:

```bash
npm install -g create-kudo-app
create-kudo-app my-next-app
```

---

### 🧪 What’s Included?

* `Next.js` (latest)
* `Prettier` with sensible defaults
* `Husky` for Git hooks

  * `pre-commit`: Lint and format staged files
  * `commit-msg`: Validate commit message using `commitlint`
* `Commitlint` with `@commitlint/config-conventional`
* `.vscode` folder with recommended extensions:

  * Prettier
  * ESLint (if added later)
  * Conventional Commits
* Git initialized & first commit made

---

## 🧰 Usage

```bash
npx create-kudo-app my-app
cd my-app
npm run dev
```

Want to customize? Tweak the `.prettierrc`, `.husky/`, or `.vscode/settings.json` files as needed.

---

## 🔧 Custom / Local Usage

If you want to develop or customize `kudo` locally:

### 1. Clone the repository

```bash
git clone https://github.com/msi404/kudo.git
cd kudo
```

### 2. Install dependencies and build the CLI

```bash
npm install
npm run build
```

### 3. Link it globally for local use

```bash
npm link
```

### 4. Use it just like the published version

```bash
kudo my-next-app
```

This will generate a new project in the `my-next-app` folder with all tooling preconfigured.

---

## 🧠 Philosophy

**Kudo 🥋** encourages code cleanliness and consistency as part of the project’s foundation — not an afterthought. It brings discipline to your dev dojo so you can ship with confidence and pride.

---

## 🧑‍💻 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

---

## 📜 License

MIT © Ismail Salah

---

> Built with honor and code discipline. 💻✨
