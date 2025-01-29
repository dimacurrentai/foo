#!/bin/bash
time docker build .
time CONTAINER=$(docker build -q .)
time docker run --network=host $CONTAINER
