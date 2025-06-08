# 其他API

## 重启 OneBot 实现

- `set_restart`

::: details 点击查看请求示例数据

```json
{
  "delay": 0
}
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明                 |
| ------- | -------- | ------ | -------------------- |
| `delay` | number   | `0`    | 要延迟的毫秒数，如果默认情况下无法重启，可以尝试设置延迟为 2000 左右 |

### 响应数据

无

## 清理缓存

- `clean_cache`

### 参数

无

### 响应数据

无

## 图片 OCR

- `ocr_image` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "image": "image.jpg"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "texts": [
    {
      "text": "识别出的文本",
      "confidence": 100,
      "coordinates": [
        [123, 456],
        [123, 456],
        [123, 456],
        [123, 456]
      ]
    }
  ],
  "language": "zh_CN"
}
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明                         |
| ------- | -------- | ------ | ---------------------------- |
| `image` | string   | -      | 图片ID，格式同图片消息段的 `file` 参数 |

### 响应数据

| 字段名     | 数据类型 | 说明         |
| ---------- | -------- | ------------ |
| `texts`    | array    | OCR结果列表   |
| `language` | string   | 语言         |

## 下载文件到缓存目录

- `download_file` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "url": "http://example.com/file.jpg",
  "thread_count": 1,
  "headers": [
    "User-Agent: Mozilla/5.0"
  ]
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/download/file.jpg"
}
```

:::

### 参数

| 字段名         | 数据类型 | 默认值 | 说明         |
| -------------- | -------- | ------ | ------------ |
| `url`          | string   | -      | 下载链接     |
| `thread_count` | number   | `1`    | 下载线程数   |
| `headers`      | array    | `[]`   | 自定义请求头 |

### 响应数据

| 字段名 | 数据类型 | 说明             |
| ------ | -------- | ---------------- |
| `file` | string   | 下载后的文件路径 |

## 检查链接安全性

- `check_url_safely` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "url": "http://example.com"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "level": 1
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| `url`  | string   | -      | 需要检查的链接 |

### 响应数据

| 字段名  | 数据类型 | 说明                                      |
| ------- | -------- | ----------------------------------------- |
| `level` | number   | 安全等级，1:安全 2:未知 3:危险            |

## 对事件执行快速操作

- `.handle_quick_operation`

::: details 点击查看请求示例数据

```json
{
  "context": {
    "message_id": 123456789,
    "user_id": 987654321,
    "message": "Hello World",
    "raw_message": "Hello World"
  },
  "operation": {
    "reply": "你好",
    "auto_escape": false
  }
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                        |
| ----------- | -------- | ------ | --------------------------- |
| `context`   | object   | -      | 事件数据对象，可做精简，如去掉原始消息只保留消息id |
| `operation` | object   | -      | 快速操作对象，例如 `{"reply": "回复内容"}` |

### 响应数据

无

## 获取中文分词

- `.get_word_slices` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "content": "中文分词测试"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "slices": [
    "中文",
    "分词",
    "测试"
  ]
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明     |
| --------- | -------- | ------ | -------- |
| `content` | string   | -      | 内容     |

### 响应数据

| 字段名    | 数据类型   | 说明     |
| --------- | ---------- | -------- |
| `slices`  | string[]   | 分词结果 |