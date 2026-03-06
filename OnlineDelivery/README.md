Simple Food Delivery demo

Overview
- Lightweight React demo (React + ReactDOM via CDN + Babel) so you can open `index.html` without installing anything.
- Pages: Home, Menu, Cart, About. Cart state is persisted to localStorage.

How to run
1) Open the `index.html` file in your browser. You can double-click it.

Or, serve locally from a simple static server (recommended to avoid some browser restrictions):

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes
- This is a demo for learning and iteration. For production, scaffold with a bundler (Vite/Create React App) and remove Babel in-browser.
- I can convert this to a proper npm + Vite project if you want a production-like dev workflow.
