terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "<= 4.28.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
  default_tags {
    tags = {
      Deployment = var.deployment_id
    }
  }
}

data "aws_canonical_user_id" "current" {}
