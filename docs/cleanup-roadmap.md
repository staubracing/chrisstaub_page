## Cleanup Roadmap

1. **Root site overhaul**

   - Modernize `index.html` structure, add responsive layout, and update copy.
   - Replace `<br>` usage with semantic spacing and switch project links to relative paths.

2. **DadJokes polish**

   - Remove duplicate doctype, load fonts explicitly, and render jokes in a dedicated container.
   - Apply small UI touches (loading state, spacing) to improve interaction.

3. **Tutorial refresh (`mysite`)**

   - Resolve missing `about.html` reference and unify typography/colors.
   - Reorganize content into clearer sections with consistent spacing.

4. **Project-3 enhancements**

   - Render search results with accessible list markup and informative empty states.
   - Consider splitting data from UI logic for easier maintenance.

5. **To-Do app cleanup**

   - Fix malformed CSS selectors, remove console noise, and consolidate UUID usage.
   - Evaluate whether to rely on the npm `uuid` package instead of a bundled script.

6. **Tooling & deployment**
   - Remove unused dependencies from `package.json` and adjust `.prettierignore` scope.
   - Refine the S3 sync workflow to avoid uploading unnecessary files.
