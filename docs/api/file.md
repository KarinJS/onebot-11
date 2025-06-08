# 文件相关API

## 获取群文件资源链接

- `get_group_file_url` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file_id": "abcdefg",
  "busid": 102
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "url": "http://example.com/file"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                           |
| ---------- | -------- | ------ | ------------------------------ |
| `group_id` | number   | -      | 群号                           |
| `file_id`  | string   | -      | 文件 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |
| `busid`    | number   | -      | 文件类型，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `url`  | string   | 文件下载链接 |

## 获取私聊文件资源链接

- `get_private_file_url` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "file_id": "abcdefg",
  "busid": 102
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "url": "http://example.com/file"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                           |
| --------- | -------- | ------ | ------------------------------ |
| `user_id` | number   | -      | 好友 QQ 号                     |
| `file_id` | string   | -      | 文件 ID                        |
| `busid`   | number   | -      | 文件类型                       |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `url`  | string   | 文件下载链接 |

## 上传群文件

- `upload_group_file` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file": "D:/file.txt",
  "name": "file.txt",
  "folder": "/"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                               |
| ---------- | -------- | ------ | ---------------------------------- |
| `group_id` | number   | -      | 群号                               |
| `file`     | string   | -      | 本地文件路径                       |
| `name`     | string   | -      | 上传后的文件名，若不指定则为上传前的文件名 |
| `folder`   | string   | `/`    | 上传目标目录，`/` 表示根目录       |

### 响应数据

无

## 获取群文件系统信息

- `get_group_file_system_info` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file_count": 10,
  "limit_count": 100,
  "used_space": 1024,
  "total_space": 10240
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

| 字段名          | 数据类型 | 说明       |
| --------------- | -------- | ---------- |
| `file_count`    | number   | 文件总数   |
| `limit_count`   | number   | 文件上限   |
| `used_space`    | number   | 已使用空间 |
| `total_space`   | number   | 空间上限   |

## 获取群根目录文件列表

- `get_group_root_files` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "files": [
    {
      "file_id": "abcdefg",
      "file_name": "file.txt",
      "busid": 102,
      "file_size": 1024,
      "upload_time": 1595294844,
      "dead_time": 0,
      "modify_time": 1595294844,
      "download_times": 0,
      "uploader": 123456789,
      "uploader_name": "上传者昵称"
    }
  ],
  "folders": [
    {
      "folder_id": "abcdefg",
      "folder_name": "文件夹",
      "create_time": 1595294844,
      "creator": 123456789,
      "creator_name": "创建者昵称",
      "total_file_count": 10
    }
  ]
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

| 字段名    | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| `files`   | array    | 文件列表     |
| `folders` | array    | 文件夹列表   |

## 获取群子目录文件列表

- `get_group_files_by_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "folder_id": "abcdefg"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "files": [
    {
      "file_id": "abcdefg",
      "file_name": "file.txt",
      "busid": 102,
      "file_size": 1024,
      "upload_time": 1595294844,
      "dead_time": 0,
      "modify_time": 1595294844,
      "download_times": 0,
      "uploader": 123456789,
      "uploader_name": "上传者昵称"
    }
  ],
  "folders": [
    {
      "folder_id": "abcdefg",
      "folder_name": "文件夹",
      "create_time": 1595294844,
      "creator": 123456789,
      "creator_name": "创建者昵称",
      "total_file_count": 10
    }
  ]
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                   |
| ----------- | -------- | ------ | -------------------------------------- |
| `group_id`  | number   | -      | 群号                                   |
| `folder_id` | string   | -      | 文件夹 ID，从 `get_group_root_files` 获取 |

### 响应数据

| 字段名    | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| `files`   | array    | 文件列表     |
| `folders` | array    | 文件夹列表   |

## 删除群文件

- `delete_group_file` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file_id": "abcdefg",
  "busid": 102
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                           |
| ---------- | -------- | ------ | ------------------------------ |
| `group_id` | number   | -      | 群号                           |
| `file_id`  | string   | -      | 文件 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |
| `busid`    | number   | -      | 文件类型，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |

### 响应数据

无

## 创建群文件文件夹

- `create_group_file_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "name": "文件夹",
  "parent_id": "/"
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                         |
| ----------- | -------- | ------ | ---------------------------- |
| `group_id`  | number   | -      | 群号                         |
| `name`      | string   | -      | 文件夹名称                   |
| `parent_id` | string   | `/`    | 父目录 ID，`/` 表示根目录    |

### 响应数据

无

## 删除群文件文件夹

- `delete_group_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "folder_id": "abcdefg"
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                   |
| ----------- | -------- | ------ | -------------------------------------- |
| `group_id`  | number   | -      | 群号                                   |
| `folder_id` | string   | -      | 文件夹 ID，从 `get_group_root_files` 获取 |

### 响应数据

无

## 上传私聊文件

- `upload_private_file` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "file": "D:/file.txt",
  "name": "file.txt"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                               |
| --------- | -------- | ------ | ---------------------------------- |
| `user_id` | number   | -      | 好友 QQ 号                         |
| `file`    | string   | -      | 本地文件路径                       |
| `name`    | string   | -      | 上传后的文件名，若不指定则为上传前的文件名 |

### 响应数据

无 