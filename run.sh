#!/bin/bash
time docker build .
time CONTAINER=$(docker build -q .)
time docker run --network=bridge -p 8888:8888 $CONTAINER
