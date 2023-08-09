provider "google" {
  project = var.project
  region  = var.region
  zone    = var.zone
}

resource "google_artifact_registry_repository" "example_app_repo" {
  location      = "us-east1"
  repository_id = var.repository_name
  description   = "test cloud run container registry"
  format        = "DOCKER"
}
