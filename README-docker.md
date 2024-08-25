# [Backstage](https://backstage.io)

## Docker images

docker build -f Dockerfile-base . -t c4rth/backstage-base:latest -t c4rth/backstage-base:20240516.1

### c4rth/backstage-raw
- multi-stage build : https://backstage.io/docs/deployment/docker/#multi-stage-build

### c4rth/backstage-base-sqlite3
- based on node:20-bookworm-slim
- apt-get
    - ca-certificates
    - python3
    - python3-pip
    - python3-venv
    - g++
    - build-essential
    - gcc
    - musl-dev
    - openjdk-17-jdk
    - curl
    - graphviz
    - fonts-dejavu
    - fontconfig
- pip
    - mkdocs-techdocs-core
    - mkdocs-kroki-plugin
    - cookiecutter
- misc
    - plantuml jar file
- :bulb: move better-sqlite3 to "devDependencies" in `packages/backend/package.json`.

- `c4rth/backstage-base` with:
    - libsqlite3-dev