# Golang Lambda Skeleton

The Golang Lambda Skeleton is a web application which calculates the optimal equipment for a given player.

## Install

Dependencies:
- golang compiler
- node
- npm
- docker

Install code dependencies
```
go mod download
cd frontend
npm ci
```

## Build

Compile the backend into the `bin` directory
```
make
```

Compile the frontend into the `frontend/build` directory
```
cd frontend
npm run build
```

## Run

Usage:
```
./bin/server --help
Usage of ./bin/server:
  -gendocs
    	Generate API Docs
  -hostdocs
    	Host API Docs
  -http
    	Run an HTTP server instead of in AWS Lambda
  -loglevel string
    	Log level (default "info")
```

Run backend http server
```
./bin/server -http
```

Run frontend development server
```
cd frontend
npm start
```

## Deploy

Deploys the frontend and backend to AWS cloudfront and lambda
```
cd terraform
terraform init
terraform apply
```

Github pipelines will deploy when the master and production branches are updated

## Test

```
make test # without coverage
make cov  # with coverage
```

## Lint

Run the backend linter\
Runs the golangci-lint docker image with the following tools:
- gofmt
- stylecheck
- gosec
```
make lint
```

Run the frontend linter
```
cd frontend
npm run lint
npm run fix # auto fixes problems
```
