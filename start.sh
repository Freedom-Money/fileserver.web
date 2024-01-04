#!/bin/sh

# 设置默认值
FREEDOM_FILE_SERVER_URL_DEFAULT='http://localhost:8800'
FILEBROWSER_URL_DEFAULT='http://localhost:9999'

# 检查是否设置了环境变量，如果设置了则使用环境变量的值，否则使用默认值
FREEDOM_FILE_SERVER_URL=${FREEDOM_FILE_SERVER_URL:-$FREEDOM_FILE_SERVER_URL_DEFAULT}
FILEBROWSER_URL=${FILEBROWSER_URL:-$FILEBROWSER_URL_DEFAULT}

# 生成配置文件内容
CONFIG_CONTENT="const frontConfig = {
    freedomFileServerUrl: '$FREEDOM_FILE_SERVER_URL',
    filebrowserUrl: '$FILEBROWSER_URL',
};"

# 将生成的配置写入 config.js 文件
echo "$CONFIG_CONTENT" > config.js

# 打印结果
echo "config.js 文件已更新："
cat config.js

# 启动 http-server
http-server -p 8888
