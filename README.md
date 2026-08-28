# Personal Academic Website

Source code for the personal and academic website of **Carlos Henrique Kayser**, hosted at [carloshkayser.github.io](https://carloshkayser.github.io). Built using [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

---

## Requirements and Prerequisites

Depending on how you choose to run and build the project:

### Option A: Docker (Recommended)
- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/) (Docker Desktop on Windows/macOS, or Docker Engine + Compose on Linux/WSL2).

### Option B: Native Environment (No Docker)
- **Ruby**: Version `3.3+` (recommended via [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/))
- **Bundler**: `gem install bundler`
- **Node.js**: For JavaScript execution and asset minification
- **Python & pip**: For Jupyter notebook conversion (`pip install jupyter nbconvert`)
- **ImageMagick**: For automatic responsive image rendering

---

## How to Compile and Run Locally

### 1. Using Docker (Recommended)

Docker provides an isolated environment with all dependencies (Ruby, Python, Node, ImageMagick) pre-configured.

#### Start the Development Server
```bash
docker compose up
```
*(Or use `docker compose up -d` to run in the background).*

- The server will be accessible at: **[http://localhost:8080](http://localhost:8080)**
- Live reloading is enabled: editing Markdown, HTML, SCSS, or config files automatically triggers a recompile.

#### Compile / Build Static Files
To compile the site and generate the static HTML/CSS/JS files into the `_site/` directory without running the server:
```bash
docker compose run --rm jekyll bundle exec jekyll build
```

#### Rebuild Docker Image
If dependencies in `Gemfile`, `Gemfile.lock`, or the `Dockerfile` are changed:
```bash
docker compose up --build
```

#### Stop the Server
```bash
docker compose down
```

---

### 2. Native Installation (No Docker)

#### Install Dependencies
```bash
bundle install
pip install jupyter nbconvert
```

#### Compile / Build Static Site
```bash
bundle exec jekyll build
```
This generates the compiled static website in the `_site/` directory.

#### Start Development Server
```bash
bundle exec jekyll serve --livereload --port 4000
```
- The server will be accessible at: **[http://localhost:4000](http://localhost:4000)**

---

### Deployment

For automatic deployment via GitHub Actions (deploying to the `gh-pages` branch) or manual hosting configurations, please refer to [INSTALL.md](INSTALL.md).

## Acknowledgements

This website is built using the [al-folio](https://github.com/alshedivat/al-folio) template for Jekyll. For comprehensive documentation, feature guides, and the original theme codebase, visit the [official al-folio repository](https://github.com/alshedivat/al-folio).

---

## License

This project is open source and available under the [MIT License](LICENSE).
