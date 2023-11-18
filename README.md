# [Backstage](https://backstage.io)

## Docker images

### c4rth/backstage-raw
- multi-stage build : https://backstage.io/docs/deployment/docker/#multi-stage-build

### c4rth/backstage-base
- based on node:18-bookworm-slim
- apt-get
    - python3
    - g++
    - build-essential
    - mkdocs
    - cookiecutter
- :bulb: move better-sqlite3 to "devDependencies" in `packages/backend/package.json`.

### c4rth/backstage-base-sqlite3
- `c4rth/backstage-base` with:
    - libsqlite3-dev