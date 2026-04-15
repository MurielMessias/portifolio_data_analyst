# Copilot Workspace Instructions

## Build & Run
- **Development:** `npm run dev` (Vite dev server)
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint`
- **Typecheck:** `npm run typecheck`
- **Tests:** _No test framework configured. Add Jest or Vitest if needed._

## Project Structure & Conventions
- **Source code:** All code is in `src/`.
  - **Components:** Place React components in `src/components/` and import them in `App.tsx`.
  - **Entry point:** `main.tsx` renders `App`.
  - **Styling:** Use Tailwind CSS utility classes in JSX. Configured via `tailwind.config.js` and `postcss.config.js`.
- **TypeScript:** Strict mode enabled. All code must be typed. No unused locals/params.
- **Linting:** ESLint is strict (see `eslint.config.js`). Fix all lint errors before commit.
- **Vite:** Configured in `vite.config.ts`. `lucide-react` is excluded from optimization intentionally.
- **No backend/server code:** This is a pure frontend project.

## Environment & Pitfalls
- **Node.js:** Use Node 18+ for best compatibility.
- **Dependencies:** Ensure all dependencies are installed (`npm install`).
- **Tailwind/PostCSS:** If styles do not load, check Tailwind/PostCSS setup and dependencies.
- **Strict typing/linting:** Type or lint errors will fail builds. Fix before pushing.

## Anti-patterns
- Do NOT add untyped JS/TS code.
- Do NOT place components outside `src/components/`.
- Do NOT ignore lint/type errors.

## Links
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [ESLint Docs](https://eslint.org/)
- [TypeScript Docs](https://www.typescriptlang.org/)

---

## Example Prompts
- "How do I add a new section to the homepage?"
- "How do I fix a Tailwind CSS build error?"
- "How do I add a new dependency?"
- "How do I set up automated tests?"

---

## Next Steps
- Consider adding a test framework (Jest or Vitest) and related instructions.
- For larger projects, split instructions by area (e.g., frontend, tests) using `applyTo` patterns.
