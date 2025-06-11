# 文件相关API

## 获取群文件资源链接

- `get_group_file_url` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file_id": "abcdefg",
  "busid": 102 // [!code --] napcat和lagrange废弃了这个字段
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

| 字段名     | 数据类型 | 默认值 | 说明                                                                    |
| ---------- | -------- | ------ | ----------------------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                                    |
| `file_id`  | string   | -      | 文件 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取  |
| `busid`    | number   | -      | 文件类型，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |

> [!note] 温馨提示
> `busid` 在 `NapCat` 和 `Lagrange` 中被废弃

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

::: details 点击查看NapCat请求示例数据

```json
{
  "file_id": "abcdefg"
}
```

:::

::: details 点击查看Lagrange请求示例数据

```json
{
  "user_id": 123456789,
  "file_id": "abcdefg",
  "file_hash": "abcdefg" // [!code ++] 可选: 文件 Hash
}
```

::: details 点击查看响应示例数据

```json
{
  "url": "http://example.com/file"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明       |
| --------- | -------- | ------ | ---------- |
| `user_id` | number   | -      | 好友 QQ 号 |
| `file_id` | string   | -      | 文件 ID    |
| `busid`   | number   | -      | 文件类型   |

- `NapCat`:

| 字段名    | 数据类型 | 默认值 | 说明    |
| --------- | -------- | ------ | ------- |
| `file_id` | string   | -      | 文件 ID |

- `Lagrange`:

| 字段名      | 数据类型 | 默认值 | 说明           |
| ----------- | -------- | ------ | -------------- |
| `user_id`   | number   | -      | 好友 QQ 号     |
| `file_id`   | string   | -      | 文件 ID        |
| `file_hash` | string   | -      | 可选 文件 Hash |

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

| 字段名     | 数据类型 | 默认值 | 说明         |
| ---------- | -------- | ------ | ------------ |
| `group_id` | number   | -      | 群号         |
| `file`     | string   | -      | 本地文件路径 |
| `name`     | string   | -      | 储存名称     |
| `folder`   | string   | -      | 父目录ID     |

::: warning 注意
在不提供 `folder` 参数的情况下默认上传到根目录

只能上传本地文件, 需要上传 `http` 文件的话请先调用 `download_file` API 下载
:::

- `Lagrange`:
  - `file` 仅支持 `文件路径` 一种方式，不支持前缀 `file://` 这种路径

- `NapCat`:

| 字段名      | 数据类型 | 默认值 | 说明                                              |
| ----------- | -------- | ------ | ------------------------------------------------- |
| `group_id`  | number   | -      | 群号                                              |
| `file`      | string   | -      | 支持 `file://` `base64` `url` `文件路径` 四种方式 |
| `name`      | string   | -      | 储存名称                                          |
| `folder`    | string   | -      | 可选 父目录ID 与 `folder_id` 必须二选一           |
| `folder_id` | string   | -      | 可选 父目录ID 与 `folder` 必须二选一              |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

| 字段名        | 数据类型 | 说明       |
| ------------- | -------- | ---------- |
| `file_count`  | number   | 文件总数   |
| `limit_count` | number   | 文件上限   |
| `used_space`  | number   | 已使用空间 |
| `total_space` | number   | 空间上限   |

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
      "group_id": 123456789,
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
      "group_id": 123456789,
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

| 字段名    | 数据类型            | 说明       |
| --------- | ------------------- | ---------- |
| `files`   | [File](#file)[]     | 文件列表   |
| `folders` | [Folder](#folder)[] | 文件夹列表 |

## 获取群子目录文件列表

- `get_group_files_by_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 0,
  "folder_id": "string", 
  "folder": "string",
  "file_count": 50 // [!code ++] 可选: 一次性获取的文件数量
}
```

:::

::: details 点击查看NapCat请求示例数据

```json
{
  "group_id": 123456789,
  "folder_id": "abcdefg"
}
```

::: details 点击查看响应示例数据

```json
{
  "files": [
    {
      "group_id": 123456789,
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
      "group_id": 123456789,
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

| 字段名      | 数据类型 | 默认值 | 说明                                      |
| ----------- | -------- | ------ | ----------------------------------------- |
| `group_id`  | number   | -      | 群号                                      |
| `folder_id` | string   | -      | 文件夹 ID，从 `get_group_root_files` 获取 |

- `NapCat`:

| 字段名       | 数据类型 | 默认值 | 说明                       |
| ------------ | -------- | ------ | -------------------------- |
| `group_id`   | number   | -      | 群号                       |
| `folder_id`  | string   | -      | 和 `folder` 二选一         |
| `folder`     | string   | -      | 和 `folder_id` 二选一      |
| `file_count` | number   | 50     | 可选: 一次性获取的文件数量 |

### 响应数据

| 字段名    | 数据类型            | 说明       |
| --------- | ------------------- | ---------- |
| `files`   | [File](#file)[]     | 文件列表   |
| `folders` | [Folder](#folder)[] | 文件夹列表 |

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

::: details 点击查看NapCat响应示例数据

```json
{
  "result": 0, // 0: 成功, 1: 失败
  "errMsg": "string", // 错误信息
  "transGroupFileResult": { // 群文件删除结果
    "result": { // 删除结果
      "retCode": 0, // 0: 成功, 1: 失败
      "retMsg": "string", // 错误信息
      "clientWording": "string" // 客户端提示
    },
    "successFileIdList": [
      "string" // 成功删除的文件ID列表
    ],
    "failFileIdList": [
      "string" // 删除失败的文件ID列表
    ]
  }
}
```

:::

::: details 点击查看Lagrange响应示例数据

```json
{
  "msg": "string", // 操作结果
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                                                    |
| ---------- | -------- | ------ | ----------------------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                                    |
| `file_id`  | string   | -      | 文件 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取  |
| `busid`    | number   | -      | 文件类型，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |

> [!note] 温馨提示
> `busid` 在 `NapCat` 和 `Lagrange` 中被废弃

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`: 请参考上方 `NapCat` 的响应数据
- `Lagrange`: 请参考上方 `Lagrange` 的响应数据

## 创建群文件文件夹

- `create_group_file_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "name": "文件夹", // 注意napcat是 folder_name
  "parent_id": "/" // [!code --] tx不允许在非根目录创建文件夹了，该接口只能在根目录下创建文件夹
}
```

:::

::: details 点击查看NapCat响应示例数据

```json
{
  "result": { // 创建结果
    "retCode": 0, // 0: 成功, 1: 失败
    "retMsg": "string", // 错误信息
    "clientWording": "string" // 客户端提示
  },
  "groupItem": { // 群文件夹信息
    "peerId": "string", // 群号
    "type": 0, // 0: 文件夹, 1: 文件
    "folderInfo": { // 文件夹信息
      "folderId": "string", // 文件夹ID
      "parentFolderId": "string", // 父文件夹ID
      "folderName": "string", // 文件夹名称
      "createTime": 0, // 创建时间
      "modifyTime": 0, // 修改时间
      "createUin": "string", // 创建者ID
      "creatorName": "string", // 创建者昵称
      "totalFileCount": 0, // 文件总数
      "modifyUin": "string", // 修改者ID
      "modifyName": "string", // 修改者昵称
      "usedSpace": "string" // 已使用空间
    },
    "fileInfo": "string" // 文件信息
  }
}
```

:::

::: details 点击查看Lagrange响应示例数据

```json
{
  "msg": "string", // 操作结果
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                      |
| ----------- | -------- | ------ | ------------------------- |
| `group_id`  | number   | -      | 群号                      |
| `name`      | string   | -      | 文件夹名称                |
| `parent_id` | string   | `/`    | 父目录 ID，`/` 表示根目录 |

- `NapCat`:

| 字段名        | 数据类型 | 默认值 | 说明       |
| ------------- | -------- | ------ | ---------- |
| `group_id`    | number   | -      | 群号       |
| `folder_name` | string   | -      | 文件夹名称 |

- `Lagrange`:

| 字段名     | 数据类型 | 默认值 | 说明       |
| ---------- | -------- | ------ | ---------- |
| `group_id` | number   | -      | 群号       |
| `name`     | string   | -      | 文件夹名称 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`: 请参考上方 `NapCat` 的响应数据
- `Lagrange`: 请参考上方 `Lagrange` 的响应数据

## 删除群文件文件夹

> [!warning] 注意
> 该 API 在 `Lagrange` 中为 `delete_group_file_folder`

- `delete_group_folder` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "folder_id": "abcdefg"
}
```

:::

::: details 点击查看NapCat响应示例数据

```json
{
  "retCode": 0, // 0: 成功, 1: 失败
  "retMsg": "string", // 错误信息
  "clientWording": "string" // 客户端提示
}
```

::: details 点击查看Lagrange响应示例数据

```json
{
  "msg": "string", // 操作结果
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                      |
| ----------- | -------- | ------ | ----------------------------------------- |
| `group_id`  | number   | -      | 群号                                      |
| `folder_id` | string   | -      | 文件夹 ID，从 `get_group_root_files` 获取 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`: 请参考上方 `NapCat` 的响应示例数据
- `Lagrange`: 请参考上方 `Lagrange` 的响应示例数据

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

| 字段名    | 数据类型 | 默认值 | 说明                                       |
| --------- | -------- | ------ | ------------------------------------------ |
| `user_id` | number   | -      | 好友 QQ 号                                 |
| `file`    | string   | -      | 本地文件路径                               |
| `name`    | string   | -      | 上传后的文件名，若不指定则为上传前的文件名 |

::: warning 注意
只能上传本地文件, 需要上传 `http` 文件的话请先调用 `download_file` API 下载
:::

- `Lagrange`:
  - `file` 仅支持 `文件路径` 一种方式，不支持前缀 `file://` 这种路径

- `NapCat`:

| 字段名    | 数据类型 | 默认值 | 说明                                              |
| --------- | -------- | ------ | ------------------------------------------------- |
| `user_id` | number   | -      | 好友 QQ 号                                        |
| `file`    | string   | -      | 支持 `file://` `base64` `url` `文件路径` 四种方式 |
| `name`    | string   | -      | 上传后的文件名，若不指定则为上传前的文件名        |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 文件对象类型

### File

| 字段名           | 数据类型       | 说明                  |
| ---------------- | -------------- | --------------------- |
| `group_id`       | number (int32) | 群号                  |
| `file_id`        | string         | 文件ID                |
| `file_name`      | string         | 文件名                |
| `busid`          | number (int32) | 文件类型              |
| `file_size`      | number (int64) | 文件大小              |
| `upload_time`    | number (int64) | 上传时间              |
| `dead_time`      | number (int64) | 过期时间，永久文件为0 |
| `modify_time`    | number (int64) | 最后修改时间          |
| `download_times` | number (int32) | 下载次数              |
| `uploader`       | number (int64) | 上传者ID              |
| `uploader_name`  | string         | 上传者名字            |

### Folder

| 字段名             | 数据类型       | 说明       |
| ------------------ | -------------- | ---------- |
| `group_id`         | number (int32) | 群号       |
| `folder_id`        | string         | 文件夹ID   |
| `folder_name`      | string         | 文件名     |
| `create_time`      | number (int64) | 创建时间   |
| `creator`          | number (int64) | 创建者     |
| `creator_name`     | string         | 创建者名字 |
| `total_file_count` | number (int32) | 子文件数量 |

## 上传图片

- `upload_image` (Lagrange拓展)

::: details 点击查看请求示例数据

```json
{
  "file": "D:/image.jpg"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file": "图片文件名",
  "url": "图片URL"
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明         |
| ------ | -------- | ------ | ------------ |
| `file` | string   | -      | 本地文件路径 |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `file` | string   | 图片文件名   |
| `url`  | string   | 图片URL      |

## 移动群文件

- `move_group_file` (社区拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file_id": "abcdefg",
  "folder_id": "/"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "success": true
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                                                   |
| ----------- | -------- | ------ | ---------------------------------------------------------------------- |
| `group_id`  | number   | -      | 群号                                                                   |
| `file_id`   | string   | -      | 文件 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |
| `folder_id` | string   | -      | 目标文件夹 ID，根目录为 `/`                                            |

### 响应数据

| 字段名    | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| `success` | boolean  | 是否移动成功 |

## 重命名群文件文件夹

- `rename_group_file_folder` (Lagrange拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "folder_id": "abcdefg",
  "new_name": "新文件夹名称"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "success": true
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                                                   |
| ----------- | -------- | ------ | ---------------------------------------------------------------------- |
| `group_id`  | number   | -      | 群号                                                                   |
| `folder_id` | string   | -      | 文件夹 ID，从 `get_group_root_files` 或 `get_group_files_by_folder` 获取 |
| `new_name`  | string   | -      | 新文件夹名称                                                           |

### 响应数据

| 字段名    | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| `success` | boolean  | 是否重命名成功 |

## 上传图片

- `upload_image` (Lagrange拓展)

::: details 点击查看请求示例数据

```json
{
  "file": "D:/image.jpg"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file": "图片文件名",
  "url": "图片URL"
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明         |
| ------ | -------- | ------ | ------------ |
| `file` | string   | -      | 本地文件路径 |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `file` | string   | 图片文件名   |
| `url`  | string   | 图片URL      |


