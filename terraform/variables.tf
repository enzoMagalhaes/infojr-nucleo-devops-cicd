
variable "project" {
  type        = string
  description = "The Google Cloud Project Id"
}

variable "region" {
  type        = string
  description = "this variable contains the region"
}

variable "zone" {
  type        = string
  description = "this variable contains the zone"
}

variable "repository_name" {
  type        = string
  description = "this variable contains the repository name"
}

variable "bucket_name" {
  type        = string
  description = "this variable contains the tfstate gcs bucket id"
}

variable "bucket_location" {
  type        = string
  description = "this variable contains the location of the tfstate gcs bucket"
}
