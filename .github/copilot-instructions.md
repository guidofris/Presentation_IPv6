# Copilot Instructions for AI Workshop Slides

## Project Overview

This is a React-based interactive slideshow for an **AI Native Developer Workshop**. Topics range from AI fundamentals to hands-on tool demos, covering all aspects of AI Native Software Engineering.

## Architecture

- **Single-component app**: All slides managed in React with TypeScript
- **Framework**: React with `useState` for navigation
- **Styling**: Tailwind CSS utility classes only (no external CSS)
- **Icons**: `lucide-react` for UI elements

## Repository Structure

- `.github/agents/` - Custom agents (e.g., Slide Content Creator)
- `src/sections/` - Slide section components
- `slides.tsx` - Legacy single-component slideshow (deprecated)

## Navigation Behavior

- Previous disabled on first slide, Next disabled on last
- Dot indicators: active = `bg-blue-600 w-8`, inactive = `bg-gray-300`
- Click any dot to jump directly

## Coding Standards

- Use TypeScript strict mode
- Follow React functional component patterns
- Use Tailwind CSS utility classes only
- Ensure responsive design principles
- Maintain accessibility standards (ARIA labels, semantic HTML)

## Slide Layout & Viewport Fit

Every slide's content **must fit within the visible viewport without scrolling**. The content area is constrained by the title/subtitle header and bottom navigation bar, leaving roughly 60–70% of screen height for content.

Guidelines to keep slides within bounds:
- **Outer spacing**: Use `space-y-2` or `space-y-3` between sections — never `space-y-5` or `space-y-6` on content-heavy slides.
- **Card padding**: Use `p-2` or `p-3` for info cards — avoid `p-4` or more when a slide has several stacked sections.
- **Text size**: Use `text-sm` or `text-xs` for body/list text inside cards; reserve `text-base`+ for emphasis only.
- **Headings inside cards**: Use `text-sm font-bold` — not `text-xl` or larger.
- **List spacing**: Use `space-y-0.5` or `space-y-1` inside card lists.
- **Split when crowded**: If content overflows, move some items to a new slide rather than shrinking everything to illegibility.

Before finishing, mentally count the stacked sections and estimate their height. If in doubt, prefer a second slide over a single overflowing one.

## Validation

After making any code changes, always run `get_errors` to check for compile errors, lint issues, or other problems. Do not consider a task complete until errors are resolved.
