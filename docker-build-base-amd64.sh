docker buildx build --platform linux/amd64 -f Dockerfile-base . -t c4rth/backstage-base:20241214.1 -t c4rth/backtage-base:latest

# DOCKER_DEFAULT_PLATFORM="linux/amd64" docker build -f Dockerfile-base . -t c4rth/backstage-base:20240911.2 -t c4rth/backtage-base:latest