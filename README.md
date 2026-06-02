# Chaxu Patel — Portfolio

Personal portfolio site for **Chaxu Patel**, Jr. Unity Developer. Static HTML, CSS, and JavaScript — no build step required.

**Repository:** [github.com/Chaxupatel/portfolio](https://github.com/Chaxupatel/portfolio)

## Project structure

```
portfolio-main/
├── index.html          # Main page (keep at root for GitHub Pages)
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Small scripts (e.g. footer year)
├── assets/
│   └── images/         # Screenshots, favicon, project art
├── .gitignore
└── README.md
```

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. On the repo: **Settings → Pages**.
3. **Source**: Deploy from branch `main` (or `master`), folder **/ (root)**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Push to GitHub

Remote is configured as `https://github.com/Chaxupatel/portfolio.git`.

```bash
git push -u origin main
```

If the remote repo already has commits (e.g. a README created on GitHub):

```bash
git pull origin main --rebase
git push -u origin main
```

## Contact

- Email: caxu2003@gmail.com
- GitHub: [Chaxupatel](https://github.com/Chaxupatel)
