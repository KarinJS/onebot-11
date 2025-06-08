# Bot自身相关API

## 获取登录号信息

- `get_login_info`

::: details 点击查看响应示例数据

```json
{
  "user_id": 123456789,
  "nickname": "机器人昵称"
}
```

:::

### 参数

无

### 响应数据

| 字段名     | 数据类型       | 说明      |
| ---------- | -------------- | --------- |
| `user_id`  | number (int64) | QQ 号     |
| `nickname` | string         | QQ 昵称   |

## 获取 Cookies

- `get_cookies`

::: details 点击查看请求示例数据

```json
{
  "domain": "qq.com"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "cookies": "uin=o0123456789; skey=abcdefg"
}
```

:::

### 参数

| 字段名   | 数据类型 | 默认值 | 说明                                                              |
| -------- | -------- | ------ | ----------------------------------------------------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名                                            |

### 响应数据

| 字段名    | 数据类型 | 说明        |
| --------- | -------- | ----------- |
| `cookies` | string   | Cookies 字符串 |

## 获取 CSRF Token

- `get_csrf_token`

::: details 点击查看响应示例数据

```json
{
  "token": 123456789
}
```

:::

### 参数

无

### 响应数据

| 字段名  | 数据类型       | 说明         |
| ------- | -------------- | ------------ |
| `token` | number (int32) | CSRF Token   |

## 获取 QQ 相关接口凭证

- `get_credentials`

::: details 点击查看请求示例数据

```json
{
  "domain": "qq.com"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "cookies": "uin=o0123456789; skey=abcdefg",
  "csrf_token": 123456789
}
```

:::

### 参数

| 字段名   | 数据类型 | 默认值 | 说明                               |
| -------- | -------- | ------ | ---------------------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名           |

### 响应数据

| 字段名       | 数据类型       | 说明            |
| ------------ | -------------- | --------------- |
| `cookies`    | string         | Cookies 字符串   |
| `csrf_token` | number (int32) | CSRF Token      |

## 获取语音

- `get_record`

::: details 点击查看请求示例数据

```json
{
  "file": "recorder0.silk",
  "out_format": "mp3"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/record/123456789.mp3"
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明                                              |
| ------------ | -------- | ------ | ------------------------------------------------- |
| `file`       | string   | -      | 收到的语音文件名（消息段的 `file` 参数）           |
| `out_format` | string   | -      | 要转换到的格式，目前支持 `mp3`、`amr`、`wma`、`m4a`、`spx`、`ogg`、`wav`、`flac` |

### 响应数据

| 字段名 | 数据类型 | 说明                 |
| ------ | -------- | -------------------- |
| `file` | string   | 转换后的语音文件路径 |

## 获取图片

- `get_image`

::: details 点击查看请求示例数据

```json
{
  "file": "2b35ff38e1bdb10d86102330e924c31c.image"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/image/2b35ff38e1bdb10d86102330e924c31c.image"
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明                                   |
| ------ | -------- | ------ | -------------------------------------- |
| `file` | string   | -      | 收到的图片文件名（消息段的 `file` 参数） |

### 响应数据

| 字段名 | 数据类型 | 说明                 |
| ------ | -------- | -------------------- |
| `file` | string   | 下载后的图片文件路径 |

## 检查是否可以发送图片

- `can_send_image`

::: details 点击查看响应示例数据

```json
{
  "yes": true
}
```

:::

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 说明                                     |
| ------ | -------- | ---------------------------------------- |
| `yes`  | boolean  | 是否可以发送图片                         |

## 检查是否可以发送语音

- `can_send_record`

::: details 点击查看响应示例数据

```json
{
  "yes": true
}
```

:::

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 说明                                     |
| ------ | -------- | ---------------------------------------- |
| `yes`  | boolean  | 是否可以发送语音                         |

## 获取运行状态

- `get_status`

::: details 点击查看响应示例数据

```json
{
  "online": true,
  "good": true,
  "stat": {
    "packet_received": 1234,
    "packet_sent": 1234,
    "packet_lost": 0,
    "message_received": 123,
    "message_sent": 123,
    "disconnect_times": 0,
    "lost_times": 0,
    "last_message_time": 1595294844
  }
}
```

:::

### 参数

无

### 响应数据

| 字段名   | 数据类型 | 说明                   |
| -------- | -------- | ---------------------- |
| `online` | boolean  | 当前 QQ 在线状态       |
| `good`   | boolean  | 存在风控/功能限制状态  |
| `stat`   | object   | 运行统计               |

## 获取版本信息

- `get_version_info`

::: details 点击查看响应示例数据

```json
{
  "app_name": "go-cqhttp",
  "app_version": "1.0.0",
  "protocol_version": "v11",
  "coolq_directory": "/home/user/go-cqhttp",
  "coolq_edition": "pro",
  "go-cqhttp": true,
  "plugin_version": "4.15.0",
  "plugin_build_number": 99,
  "plugin_build_configuration": "release",
  "runtime_version": "go1.16.2",
  "runtime_os": "linux",
  "version": "1.0.0",
  "protocol": 1
}
```

:::

### 参数

无

### 响应数据

| 字段名                    | 数据类型 | 说明                     |
| ------------------------- | -------- | ------------------------ |
| `app_name`                | string   | 应用名称                 |
| `app_version`             | string   | 应用版本                 |
| `protocol_version`        | string   | OneBot 标准版本         |
| `coolq_directory`         | string   | 应用运行目录             |
| `coolq_edition`           | string   | 固定值，为 `pro`          |
| `go-cqhttp`               | boolean  | 是否为 go-cqhttp 客户端   |
| `plugin_version`          | string   | 固定值，为 `4.15.0`       |
| `plugin_build_number`     | number   | 固定值，为 `99`          |
| `plugin_build_configuration` | string | 固定值，为 `release`     |
| `runtime_version`         | string   | 运行环境版本             |
| `runtime_os`              | string   | 运行环境系统类型         |
| `version`                 | string   | 应用版本                 |
| `protocol`                | number   | 当前登陆使用协议类型     |

## 获取当前账号在线客户端列表

- `get_online_clients` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "no_cache": false
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "clients": [
    {
      "app_id": 123,
      "device_name": "设备名称",
      "device_kind": "设备类型"
    }
  ]
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                             |
| ---------- | -------- | ------- | -------------------------------- |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名    | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| `clients` | array    | 在线客户端列表 |

## 获取企点账号信息

- `qidian_get_account_info` (gocq拓展)

::: details 点击查看响应示例数据

```json
{
  "master_id": 123456789,
  "ext_name": "企点名称",
  "create_time": 1595294844
}
```

:::

### 参数

无

### 响应数据

| 字段名        | 数据类型 | 说明         |
| ------------- | -------- | ------------ |
| `master_id`   | number   | 父账号ID     |
| `ext_name`    | string   | 企点名称     |
| `create_time` | number   | 创建时间     |

## 获取在线机型

- `_get_model_show` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "model": "iPhone 14 Pro Max"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "variants": [
    {
      "model_show": "iPhone 14 Pro Max",
      "need_pay": false
    }
  ]
}
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `model` | string   | -      | 机型名称 |

### 响应数据

| 字段名     | 数据类型 | 说明       |
| ---------- | -------- | ---------- |
| `variants` | array    | 可用机型列表 |

## 设置在线机型

- `_set_model_show` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "model": "iPhone 14 Pro Max",
  "model_show": "iPhone 14 Pro Max"
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明                      |
| ------------ | -------- | ------ | ------------------------- |
| `model`      | string   | -      | 机型名称                  |
| `model_show` | string   | -      | 机型展示名称              |

### 响应数据

无

## 设置登录号资料

- `set_qq_profile` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "nickname": "新昵称",
  "company": "公司",
  "email": "email@example.com",
  "college": "大学",
  "personal_note": "个人说明"
}
```

:::

### 参数

| 字段名          | 数据类型 | 默认值 | 说明     |
| --------------- | -------- | ------ | -------- |
| `nickname`      | string   | -      | 昵称     |
| `company`       | string   | -      | 公司     |
| `email`         | string   | -      | 邮箱     |
| `college`       | string   | -      | 学校     |
| `personal_note` | string   | -      | 个人说明 |

### 响应数据

无 