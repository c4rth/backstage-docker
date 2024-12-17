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
docker pull c4rth/backstage-base:latest
docker build . -f Dockerfile-build -t backstage-build:latest
```

## Namespace & PostgreSQL
```
kubectl apply -f ./k8s/01-deploy-psql.yaml
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
kubectl apply -f ./k8s/02-deploy-configmap.yaml
kubectl apply -f ./k8s/03-deploy-backstage.yaml
```

### Connect to backstage
```
kubectl port-forward service/backstage --namespace=backstage 8080:80
```
http://localhost:8080

### Add catalog
```
https://github.com/c4rth/backstage-demo-config/blob/main/catalog/all-in-one.yaml
```