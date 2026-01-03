# ISGA2025 Angular Quiz App - AI Coding Guidelines

## Architecture Overview

- **Framework**: Angular 21 with Server-Side Rendering (SSR) and prerendering enabled
- **Components**: Standalone components (e.g., `Quiz1`, `Quiz2`) imported directly in `App` component
- **Styling**: Bootstrap 5 + jQuery included globally via `angular.json`
- **Data**: Quiz data stored as TypeScript objects in `src/app/data/d.ts` with structure: `{id, name, description, questions: [{id, name, options: [{id, name, isAnswer}]}]}`
- **Routing**: Not currently used; components rendered directly in `app.html`

## Key Patterns

- **Control Flow**: Use Angular's new `@for` and `@if` syntax for templating (e.g., in `quiz2.html`)
- **State Management**: Simple component-level state with arrays/objects; no global state library
- **Quiz Logic**: Track user answers in `answers: number[][]` array by question index; multiple choice via checkboxes
- **Progress**: Calculate as `Math.round(((page + 1) / questions.length) * 100)`

## Development Workflow

- **Serve**: `npm start` or `ng serve` (runs on http://localhost:4200)
- **Build**: `npm run build` or `ng build` (outputs to `dist/`)
- **Test**: `npm test` or `ng test` (uses Vitest)
- **SSR Serve**: `npm run serve:ssr:isga2025` for production SSR

## Code Style

- **Prettier**: Configured with `printWidth: 100`, `singleQuote: true`, Angular parser for HTML
- **Component Prefix**: `app-` (standard Angular)
- **Imports**: Use standalone component imports; prefer `CommonModule` for directives

## Examples

- **Quiz Navigation**: Implement `next()` with answer validation: `if (page < length - 1 && answers[page]) { page++ }`
- **Answer Tracking**: Toggle in array: `answers[qi] = answers[qi]?.filter(id => id !== optionId) || []`
- **Template Loops**: `@for (q of data.questions; track q.id; let qi = $index)`

## Dependencies

- Core: Angular 21, RxJS 7.8
- UI: Bootstrap 5.3, jQuery 3.7
- SSR: @angular/ssr 21.0.3

Reference: `src/app/quiz2/` for complete quiz implementation example.
