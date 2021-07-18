
terraform {
  backend "gcs" {
    bucket = "mdviewer-app-terraformfiles"
    prefix = "/state/mdviewer-app"
  }
}

locals {
  project_id = "mdviewer-app"
  region = "europe-west1"
}

provider "google" {
  project = local.project_id
  region = local.region
  zone = "europe-west1-b"
}

# Enables the Cloud Resource Manager
resource "google_project_service" "resource_manager_api" {
  service = "cloudresourcemanager.googleapis.com"
}

# Create the Cloud Storage for the Google Container Registry
resource "google_storage_bucket" "cloud_run_storage_bucket" {
  name = "${local.project_id}-cloud_run_storage_bucket"
  project = local.project_id
  location = local.region
}

# Enable the Container Registry
resource "google_project_service" "container_registry_api" {
  service = "containerregistry.googleapis.com"
  disable_on_destroy = true
}

# Create container to store the docker image
resource "google_container_registry" "docker_container" {
  project = local.project_id
  depends_on = [google_project_service.container_registry_api]
}

# Enables the Cloud Run API
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
  disable_on_destroy = true
}

resource "google_cloud_run_service" "cloud_run_service" {
  name = "mdviewer-app"
  project = local.project_id
  location = local.region

  template {
    spec {
      containers {
        image = "gcr.io/mdviewer-app/markdown-viewer-app:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  # Waits for the Cloud Run API to be enabled
  depends_on = [google_project_service.run_api]

}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.cloud_run_service.location
  project     = google_cloud_run_service.cloud_run_service.project
  service     = google_cloud_run_service.cloud_run_service.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
