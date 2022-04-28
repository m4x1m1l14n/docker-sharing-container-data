## Docker - Sharing container data with other containers in stack

Example of sharing static data within one container with other containers

### Build

To build this stack run following command in project folder

```sh
docker-compose build
```

### Start

To start this stack type

```sh
docker-compose up
```

After successfull start, proxy container is listening on port 80. So you can try stack is working by opening browser to `http://{YOUR_SERVER_URL}` and you should see server client application Hello World.
