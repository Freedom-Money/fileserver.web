# 阶段 1：构建应用
FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g vite
RUN npm run build

# 阶段 2：运行时镜像
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/dist .

# 安装 http-server
RUN npm install -g http-server

EXPOSE 8888
CMD ["http-server", "-p", "8888"]
