PROJECT_ID=mdviewer-app
ZONE=europe-west1-b

create-tf-backend-bucket:
	gsutil mb -p $(PROJECT_ID) gs://$(PROJECT_ID)-terraformfiles

LOCAL_TAG=markdown-viewer-app:latest
REMOTE_TAG=gcr.io/$(PROJECT_ID)/$(LOCAL_TAG)

upload-docker-to-gcp:
	gcloud auth configure-docker
	docker build -t $(LOCAL_TAG) .
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)
