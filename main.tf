terraform {
  required_version = ">= 0.14"

  required_providers {
    # Cloud Run support was added on 3.3.0
    google = ">= 3.3"
  }
}

locals {
  project_id = "markdown-terraform"
  region = "europe-west1"
}

provider "google" {
  project = local.project_id
  region = local.region
  zone = "europe-west1b"
}

resource "google_project_service" "gcp_resource_manager_api" {
  service = "cloudresourcemanager.googleapis.com"
}

# Enables the Cloud Run API
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
  disable_on_destroy = true
}

resource "google_cloud_run_service" "cloud_run_service" {
  name = "markdown-tf"
  project = local.project_id
  location = local.region

  template {
    spec {
      containers {
        image = "gcr.io/google-samples/hello-app:1.0"
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

# Allow unauthenticated users to invoke the service
//resource "google_cloud_run_service_iam_member" "run_all_users" {
//  service  = google_cloud_run_service.cloud_run_service.name
//  location = google_cloud_run_service.cloud_run_service.location
//  role     = "roles/run.invoker"
//  member   = "allUsers"
//}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.cloud_run_service.location
  project     = google_cloud_run_service.cloud_run_service.project
  service     = google_cloud_run_service.cloud_run_service.name

  policy_data = data.google_iam_policy.noauth.policy_data
}