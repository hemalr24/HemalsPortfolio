# Hemal Rajput — Portfolio

A static portfolio with five top-level pages: Overview, Experience, Projects, Résumé, and Contact. Plain HTML, CSS, and a little JavaScript; no build step or dependencies. All navigation works with JavaScript disabled.

## Preview locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Update the résumé

1. Export your latest résumé as a PDF.
2. Replace `assets/Hemal_Rajput_Resume.pdf`, keeping that exact filename and capitalization.
3. Commit and push the PDF to the branch used by GitHub Pages.

```sh
git add assets/Hemal_Rajput_Resume.pdf
git commit -m "Update resume PDF"
git push
```

The embedded viewer, Open PDF link, and Download PDF button all use this one file. No HTML changes are needed to update the résumé. The supplied PDF was rendered from the latest résumé edited in this conversation, including the Space Apps mentoring/judging bullet. Confirm it is your desired public version before publishing. Browsers without PDF embedding can use the always-visible open/download links. If a previous PDF remains cached after deployment, refresh the page or reopen it.

## Content

- `index.html`: concise introduction and three examples of technical work.
- `experience.html`: CSA case study, employment, Space Apps, education, and tools.
- `projects.html`: Waypoint, space-data tutorials, NLP experiments, and the capstone; additional projects are expandable.
- `resume.html`: PDF viewer and direct download.
- `contact.html`: email, copy button where supported, Gmail, GitHub, and LinkedIn.
- `styles.css`: shared responsive styling.
- `script.js`: footer year and copy-email action.

Navigation and footers are plain HTML in each page. If their labels change, update all five pages. Space Apps 2026 is marked as a return selection; update once the event is completed. PronouncedFish remains marked as design phase. Waypoint describes implemented controls and estimation work, without claiming ROS 2 or Gazebo support.

## Publish

Copy these files into the repository root, preserving the `assets` folder, then commit and push to the branch configured for GitHub Pages. The old `resume.css` and `resume.js` are no longer used and may be removed. Existing GitHub Pages settings do not need to change.
