podman build -f Dockerfile-techdocs . -t c4rth/backstage-techdocs:20250415.1

# DOCKER_DEFAULT_PLATFORM="linux/amd64" docker build -f Dockerfile-base . -t c4rth/backstage-base:20240911.2 -t c4rth/backtage-base:latest