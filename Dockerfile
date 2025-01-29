FROM node:22-alpine
COPY code.cjs /
ENTRYPOINT ["node", "/code.cjs"]
