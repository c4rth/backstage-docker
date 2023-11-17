# [Backstage](https://backstage.io)

## Docker images

### c4rth/backstage
- multi-stage build : https://backstage.io/docs/deployment/docker/#multi-stage-build

### c4rth/backstage-build-sqlite3
- based on node:18-bookworm-slim
- apt-get
    - python3
    - g++
    - build-essential
    - libsqlite3-dev

### c4rth/backstage-build
- based on node:18-bookworm-slim
- apt-get
    - python3
    - g++
    - build-essential
- :bulb: move better-sqlite3 to "devDependencies" in `packages/backend/package.json`.