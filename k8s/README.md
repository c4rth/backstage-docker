# Kubernetes

## Minikube
### Start
```
minikube start
```

### docker
```
eval $(minikube docker-env)
```

### Build
```
docker pull ghcr.io/c4rth/backstage-base:latest
docker build . -f Dockerfile-build-psql -t backstage-build-psql:latest
```

## Namespace & PostgreSQL
```
kubectl apply -f 01-deploy-psql.yaml
```

### Verify installation
```
kubectl get pods --namespace=backstage
kubectl exec -it --namespace=backstage postgres-<id> -- /bin/bash
psql -U $POSTGRES_USER
```
```
exit psql : \q
exit bash: exit
```

## Backstage
```
kubectl apply -f 02-deploy-configmap.yaml
kubectl apply -f 03-deploy-backstage.yaml
```

### Connect to backstage
```
kubectl port-forward service/backstage --namespace=backstage 7000:3000
```
http://localhost:7000

### Add catalog
```
https://github.com/c4rth/backstage-demo-config/blob/main/catalog/all-in-one.yaml
```