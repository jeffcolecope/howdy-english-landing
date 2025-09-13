# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All commands run from the project root:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## Project Structure

This is an Astro-based landing page for Howdy English with a minimal structure:

- **src/pages/** - Astro page components (index.astro, terms.astro, privacy.astro, disclaimer.astro)
- **public/** - Static assets (favicon.svg)
- **dist/** - Production build output (git-ignored)

## Architecture

- **Framework**: Astro 5.13.7 with TypeScript strict configuration
- **Styling**: Scoped CSS within .astro files
- **Routing**: File-based routing in src/pages/
- **Pages**: Static landing page with legal pages (terms, privacy, disclaimer)

The site is a simple "coming soon" page for an English learning platform launching October 2025. Each page is self-contained with inline styles and follows Astro's component structure.