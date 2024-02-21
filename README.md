# Experimental
Repo template for publishing a catalogue of community samples/content as a gh-pages site.   The site makes community content discoverable in a central place, while the content itself remains in the contributor's original repo.

### Problem
I want to create a web site for aggregating and publishing a moderated collection community samples, solutions, or other content related to a topic or technology.

Examples:
- I'm the maintainer of an open source tool, and I want to make community-written plugins for my tool more discoverable
- I want to help promote knowledge sharing and learning for an emerging technology

### Design goals
- Build an end-to-end solution using features that are free and available to anyone on GitHub
- Make it re-usable and easy to set up and customize

### High Level Design

The basics:
- A GH Pages site
  - Home Page
  - One or Multiple "Hub" pages, which displays a gallery of summary content items related to a topic or theme
  - A content page for each content item
- A community submission process
  - User submits a content item with the required information (repo url, description, etc)
  - A workflow extracts additional information directly from the source repo
  - The workflow may (optionally) enrich the content by using an external service (eg, AI, keyword extraction, search indexing, etc)
  - The workflow writes the content metadata to the site repo and opens a PR
  - The site owner can approve or reject the PR, or request changes
- Static content generation
  - Merged PR's trigger the site content to be rebuilt
- Content maintenance
  - Timed workflows to help remove stale content

