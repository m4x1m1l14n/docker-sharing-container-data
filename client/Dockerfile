FROM busybox:1.35-glibc

# Copy client static files from your folder into resulting docker image tmp folder
COPY . /tmp

# When container is started, delete all files from /data folder, to prevent
# collecting junk between container updates. This will ensure, every time container is
# started, mounted volume to /data folder is erased and then populated with new (updated)
# files
# Note recursive (-r) flag when copying files from /tmp folder
CMD rm -rf /data/* && \
	cp -r /tmp/* /data

# What is important, that after data was copied successfully to mounted volume, there is no need
# to container stay running, so do not be afraid your container is stopped imediatelly after
# starting your stack
