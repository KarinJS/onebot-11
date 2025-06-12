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

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名     | 数据类型       | 说明    |
| ---------- | -------------- | ------- |
| `user_id`  | number (int64) | QQ 号   |
| `nickname` | string         | QQ 昵称 |

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

::: details 点击查看 NapCat 响应示例数据

```json
{
  "cookies": "uin=o0123456789; skey=abcdefg",
  "bkn": "123456789" // [!code ++] 仅 napcat 存在此参数
}
```

:::

### 参数

| 字段名   | 数据类型 | 默认值 | 说明                    |
| -------- | -------- | ------ | ----------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名 |

### 响应数据

| 字段名    | 数据类型 | 说明           |
| --------- | -------- | -------------- |
| `cookies` | string   | Cookies 字符串 |

- `NapCat`

| 字段名    | 数据类型 | 说明           |
| --------- | -------- | -------------- |
| `cookies` | string   | Cookies 字符串 |
| `bkn`     | string   | BKN 字符串     |

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

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名  | 数据类型       | 说明       |
| ------- | -------------- | ---------- |
| `token` | number (int32) | CSRF Token |

- `Lagrange`: 返回值同样是 `number` 类型，`apifox` 上描述错误

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

| 字段名   | 数据类型 | 默认值 | 说明                    |
| -------- | -------- | ------ | ----------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名 |

### 响应数据

| 字段名       | 数据类型       | 说明           |
| ------------ | -------------- | -------------- |
| `cookies`    | string         | Cookies 字符串 |
| `csrf_token` | number (int32) | CSRF Token     |

- `Lagrange`: `csrf_token` 同样是 `number` 类型，`apifox` 上描述错误

## 获取语音

> **提示**：要使用此接口，通常需要安装 ffmpeg，请参考 OneBot 实现的相关说明。

- `get_record`

::: details 点击查看请求示例数据

```json
{
  "file": "recorder0.silk",
  "out_format": "mp3"
}
```

:::

::: details 点击查看 NapCat 请求示例数据

```json
{
  "file": "D:/CQP/data/record/123456789.mp3",
  "file_id": "123456789",
  "out_format": "mp3"
}
```

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/record/123456789.mp3"
}
```

:::

::: details 点击查看 NapCat 响应示例数据

```json
{
  "file": "string",
  "url": "string",
  "file_size": "string",
  "file_name": "string",
  "base64": "string"
}
```

### 参数

| 字段名       | 数据类型 | 默认值 | 说明                                                                             |
| ------------ | -------- | ------ | -------------------------------------------------------------------------------- |
| `file`       | string   | -      | 收到的语音文件名（消息段的 `file` 参数）                                         |
| `out_format` | string   | -      | 要转换到的格式，目前支持 `mp3`、`amr`、`wma`、`m4a`、`spx`、`ogg`、`wav`、`flac` |

- `NapCat`

| 字段名       | 数据类型 | 默认值 | 说明                                                                             |
| ------------ | -------- | ------ | -------------------------------------------------------------------------------- |
| `file`       | string   | -      | 与 `file_id` 二选一                                                              |
| `file_id`    | string   | -      | 与 `file` 二选一                                                                 |
| `out_format` | string   | -      | 要转换到的格式，目前支持 `mp3`、`amr`、`wma`、`m4a`、`spx`、`ogg`、`wav`、`flac` |

### 响应数据

| 字段名 | 数据类型 | 说明                                                                                              |
| ------ | -------- | ------------------------------------------------------------------------------------------------- |
| `file` | string   | 转换后的语音文件路径，如 `/home/somebody/cqhttp/data/record/0B38145AA44505000B38145AA4450500.mp3` |

- `NapCat`

| 字段名      | 数据类型 | 说明                 |
| ----------- | -------- | -------------------- |
| `file`      | string   | 转换后的语音文件路径 |
| `url`       | string   | 语音文件 URL         |
| `file_size` | string   | 语音文件大小         |
| `file_name` | string   | 语音文件名           |
| `base64`    | string   | 语音文件 base64 编码 |

## 获取图片

- `get_image`

::: details 点击查看请求示例数据

```json
{
  "file": "2b35ff38e1bdb10d86102330e924c31c.image"
}
```

:::

::: details 点击查看 NapCat 请求示例数据

```json
{
  "file": "D:/CQP/data/image/2b35ff38e1bdb10d86102330e924c31c.image",
  "file_id": "2b35ff38e1bdb10d86102330e924c31c"
}
```

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/image/2b35ff38e1bdb10d86102330e924c31c.image"
}
```

:::

::: details 点击查看 NapCat 响应示例数据

```json
{
  "file": "string",
  "url": "string",
  "file_size": "string",
  "file_name": "string",
  "base64": "string"
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明                                     |
| ------ | -------- | ------ | ---------------------------------------- |
| `file` | string   | -      | 收到的图片文件名（消息段的 `file` 参数） |

- `NapCat`

| 字段名    | 数据类型 | 默认值 | 说明                |
| --------- | -------- | ------ | ------------------- |
| `file`    | string   | -      | 与 `file_id` 二选一 |
| `file_id` | string   | -      | 与 `file` 二选一    |

### 响应数据

| 字段名 | 数据类型 | 说明                 |
| ------ | -------- | -------------------- |
| `file` | string   | 下载后的图片文件路径 |

- `NapCat`

| 字段名      | 数据类型 | 说明                 |
| ----------- | -------- | -------------------- |
| `file`      | string   | 下载后的图片文件路径 |
| `url`       | string   | 图片文件 URL         |
| `file_size` | string   | 图片文件大小         |
| `file_name` | string   | 图片文件名           |
| `base64`    | string   | 图片文件 base64 编码 |

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

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名 | 数据类型 | 说明             |
| ------ | -------- | ---------------- |
| `yes`  | boolean  | 是否可以发送图片 |

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

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名 | 数据类型 | 说明             |
| ------ | -------- | ---------------- |
| `yes`  | boolean  | 是否可以发送语音 |

## 获取运行状态

- `get_status`

::: details 点击查看响应示例数据

```json
{
  "online": true,
  "good": true,
  "stat": {}
}
```

:::

::: details 点击查看 Lagrange 响应示例数据

```json
{
  "app_initialized": true,
  "app_enabled": true,
  "plugins_good": true,
  "app_good": true,
  "online": true,
  "good": true,
  "memory": 0
}
```

:::

### 参数

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名   | 数据类型 | 说明                  |
| -------- | -------- | --------------------- |
| `online` | boolean  | 当前 QQ 在线状态      |
| `good`   | boolean  | 存在风控/功能限制状态 |
| `stat`   | object   | 运行统计              |

- `Lagrange`

| 字段名            | 数据类型 | 说明                  |
| ----------------- | -------- | --------------------- |
| `online`          | boolean  | 当前 QQ 在线状态      |
| `good`            | boolean  | 存在风控/功能限制状态 |
| `app_initialized` | boolean  | 应用是否已初始化      |
| `app_enabled`     | boolean  | 应用是否已启用        |
| `plugins_good`    | boolean  | 插件是否正常          |
| `app_good`        | boolean  | 应用是否正常          |
| `memory`          | number   | 内存使用情况          |

## 获取版本信息

- `get_version_info`

::: details 点击查看响应示例数据

```json
{
  "app_name": "go-cqhttp",
  "app_version": "1.0.0",
  "protocol_version": "v11"
}
```

:::

### 参数

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名             | 数据类型 | 说明                          |
| ------------------ | -------- | ----------------------------- |
| `app_name`         | string   | 应用标识，如 `mirai-native`   |
| `app_version`      | string   | 应用版本，如 `1.2.3`          |
| `protocol_version` | string   | OneBot 标准版本，如 `v11`     |
| ……                 | -        | OneBot 实现自行添加的其它内容 |

- `Lagrange`: 多一个 `nt_protocol` 字段，表示当前登录使用的协议类型

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

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名    | 数据类型 | 说明           |
| --------- | -------- | -------------- |
| `clients` | Device[] | 在线客户端列表 |

**Device**

| 字段名        | 数据类型       | 说明     |
| ------------- | -------------- | -------- |
| `app_id`      | number (int64) | 客户端ID |
| `device_name` | string         | 设备名称 |
| `device_kind` | string         | 设备类型 |

- `NapCat`: 仅做兼容性实现，返回的是空数组

## 获取企点账号信息

::: tip 注意
该API只有企点协议可用
:::

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

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名        | 数据类型 | 说明     |
| ------------- | -------- | -------- |
| `master_id`   | number   | 父账号ID |
| `ext_name`    | string   | 企点名称 |
| `create_time` | number   | 创建时间 |

## 获取在线机型

::: tip 提示
有关例子可从[这个链接](https://github.com/Mrs4s/go-cqhttp/pull/872#issuecomment-831180149)找到
:::

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

| 字段名     | 数据类型 | 说明 |
| ---------- | -------- | ---- |
| `variants` | array    | -    |

响应内容为 JSON 数组，每个元素如下：

| 字段名       | 数据类型 | 说明 |
| ------------ | -------- | ---- |
| `model_show` | string   | -    |
| `need_pay`   | boolean  | -    |

## 设置在线机型

::: tip 提示
有关例子可从[这个链接](https://github.com/Mrs4s/go-cqhttp/pull/872#issuecomment-831180149)找到
:::

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

| 字段名       | 数据类型 | 默认值 | 说明         |
| ------------ | -------- | ------ | ------------ |
| `model`      | string   | -      | 机型名称     |
| `model_show` | string   | -      | 机型展示名称 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

::: details 点击查看 NapCat 请求示例数据

```json
{
  "nickname": "新昵称",
  "personal_note": "个人说明",
  "sex": 0
}
```

:::

::: details 点击查看 NapCat 响应示例数据

```json
{
  "result": 0,
  "errMsg": ""
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

- `NapCat`

| 字段名          | 数据类型 | 默认值 | 说明                                       |
| --------------- | -------- | ------ | ------------------------------------------ |
| `nickname`      | string   | -      | 昵称                                       |
| `personal_note` | string   | -      | 个人说明                                   |
| `sex`           | number   | -      | 性别 `0` `1` `2` 分别代表 `未知` `男` `女` |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取已收藏的QQ表情列表

- `fetch_custom_face` (社区拓展)

::: details 点击查看NapCat请求示例数据

```json
{
  "count": 48
}
```

::: details 点击查看响应示例数据

```json
[
  "https://p.qpic.cn/qq_expression/xxxxx/xxxxx/0"
]
```

:::

### 参数

- `NapCat`

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `count` | number   | `48`   | 获取数量 |

- `Lagrange`

::: tip 提示
该 API 没有参数
:::

### 响应数据

返回的是一个数组，每个元素是一个表情URL

## 获取商城表情 key

- `get_mface_key` (Lagrange拓展)

::: details 点击查看请求示例数据

```json
{
  "emoji_ids": [
      "string"
  ]
}
```

:::

::: details 点击查看响应示例数据

```json
[
  "string"
]
```

### 参数

| 字段名      | 数据类型 | 默认值 | 说明       |
| ----------- | -------- | ------ | ---------- |
| `emoji_ids` | array    | -      | 表情ID列表 |

### 响应数据

- `Lagrange`: 返回的是一个数组，每个元素商城表情key

## 设置QQ头像

- `set_qq_avatar` (社区拓展)

::: details 点击查看请求示例数据

```json
{
  "file": "file 链接, 支持 http/https/file/base64"
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明                                   |
| ------ | -------- | ------ | -------------------------------------- |
| `file` | string   | -      | file 链接, 支持 http/https/file/base64 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取rkey

- `get_rkey` (社区拓展)

::: details 点击查看响应示例数据

```json
{
  "rkeys": [
    {
      "type": "private",
      "rkey": "&rkey=CAMSKMa3OFokB_TlZtfChVGCXKG8j3esIm1ChIbPy6_33HgaR5q8J-sjMNA",
      "created_at": 1737354674,
      "ttl": 3420
    },
    {
      "type": "group",
      "rkey": "&rkey=CAMSKMa3OFokB_TlZtfChVGCXKG8j3esIm1ChIbPy6_33Hgatyz4WskcHic",
      "created_at": 1737354674,
      "ttl": 3420
    }
  ]
}
```

:::

### 参数

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名  | 数据类型        | 说明 |
| ------- | --------------- | ---- |
| `rkeys` | [rkeys](#rkeys) | rkey |

### rkeys

| 字段名       | 数据类型          | 说明     |
| ------------ | ----------------- | -------- |
| `type`       | `private` `group` | 类型     |
| `rkey`       | string            | rkey     |
| `created_at` | number            | 创建时间 |
| `ttl`        | number            | 过期时间 |

## 获取rkey服务器

- `get_rkey_server` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{}
```

:::

::: details 点击查看响应示例数据

```json
{
  "private_rkey": "rkey字符串",
  "group_rkey": "rkey字符串",
  "expired_time": 1600000000,
  "name": "NapCat 4"
}
```

:::

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

| 字段名         | 数据类型 | 说明           |
| -------------- | -------- | -------------- |
| `private_rkey` | string   | 私聊rkey字符串 |
| `group_rkey`   | string   | 群聊rkey字符串 |
| `expired_time` | number   | 过期时间戳     |
| `name`         | string   | 服务器名称     |

## 获取NC版rkey

- `nc_get_rkey` (NapCat拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "rkey": "&rkey=xxxx",
    "ttl": "3420",
    "time": 1749739597,
    "type": 10
  },
  {
    "rkey": "&rkey=xxxx",
    "ttl": "3420",
    "time": 1749739597,
    "type": 20
  }
]
```

:::

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

返回一个数组，两个元素

| 字段名 | 数据类型 | 说明       |
| ------ | -------- | ---------- |
| `rkey` | string   | rkey字符串 |
| `ttl`  | string   | 过期时间   |
| `time` | number   | 创建时间   |
| `type` | number   | 类型       |

## 设置自定义在线状态

- `set_diy_online_status` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "face_id": 1,
  "face_type": "1",
  "wording": "自定义状态文本"
}
```

:::

### 参数

| 字段名      | 数据类型      | 默认值 | 说明                               |
| ----------- | ------------- | ------ | ---------------------------------- |
| `face_id`   | number/string | -      | 表情ID，参考face_config.json的QSid |
| `face_type` | number/string | "1"    | 表情类型                           |
| `wording`   | string        | " "    | 自定义状态文本                     |

### 响应数据

成功为设置成功信息

## 设置在线状态

- `set_online_status` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "status": 1,
  "ext_status": 0,
  "battery_status": 0
}
```

:::

### 参数

- 参考 [apifox](https://napcat.apifox.cn/226658977e0)

| 字段名           | 数据类型 | 默认值 | 说明               |
| ---------------- | -------- | ------ | ------------------ |
| `status`         | number   | -      | 状态值，见状态列表 |
| `ext_status`     | number   | -      |                    |
| `battery_status` | number   | -      |                    |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置输入状态

- `set_input_status` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "event_type": 1
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "result": 0,
  "errMsg": "string"
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明                                    |
| ------------ | -------- | ------ | --------------------------------------- |
| `event_type` | number   |        | `0=对方正在说话...` `1=对方正在输入...` |

### 响应数据

| 字段名   | 数据类型 | 说明 |
| -------- | -------- | ---- |
| `result` | number   | 结果 |
| `errMsg` | string   | 错误 |

## 获取个人资料点赞

- `get_profile_like` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "start": 0,
  "count": 10
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "uid": "string",
  "time": "string",
  "favoriteInfo": {
    "userInfos": [
      {
        "age": 0,
        "bAvailableCnt": 0,
        "bTodayVotedCnt": 0,
        "count": 0,
        "customId": 0,
        "gender": 0,
        "giftCount": 0,
        "isFriend": false,
        "isSvip": false,
        "isvip": false,
        "lastCharged": 0,
        "latestTime": 0,
        "nick": "string",
        "src": 0,
        "uid": "string",
        "uin": 0
      }
    ],
    "total_count": 0,
    "last_time": 0,
    "today_count": 0
  },
  "voteInfo": {
    "total_count": 0,
    "new_count": 0,
    "new_nearby_count": 0,
    "last_visit_time": 0,
    "userInfos": [
      {
        "age": 0,
        "bAvailableCnt": 0,
        "bTodayVotedCnt": 0,
        "count": 0,
        "customId": 0,
        "gender": 0,
        "giftCount": 0,
        "isFriend": false,
        "isSvip": false,
        "isvip": false,
        "lastCharged": 0,
        "latestTime": 0,
        "nick": "string",
        "src": 0,
        "uid": "string",
        "uin": 0
      }
    ]
  }
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                           |
| --------- | -------- | ------ | ------------------------------ |
| `user_id` | number   | -      | 目标用户QQ号 `不填为获取所有?` |
| `start`   | number   | 0      | 起始位置                       |
| `count`   | number   | 10     | 获取数量                       |

### 响应数据

| 字段名         | 数据类型                      | 说明     |
| -------------- | ----------------------------- | -------- |
| `uid`          | string                        | 用户ID   |
| `time`         | string                        | 时间     |
| `favoriteInfo` | [favoriteInfo](#favoriteInfo) | 点赞信息 |
| `voteInfo`     | [voteInfo](#voteInfo)         | 投票信息 |

#### favoriteInfo

| 字段名        | 数据类型                  | 说明         |
| ------------- | ------------------------- | ------------ |
| `userInfos`   | [userInfos[]](#userInfos) | 用户信息     |
| `total_count` | number                    | 总点赞次数   |
| `last_time`   | number                    | 最后点赞时间 |
| `today_count` | number                    | 今日点赞次数 |

#### voteInfo

| 字段名             | 数据类型                  | 说明           |
| ------------------ | ------------------------- | -------------- |
| `userInfos`        | [userInfos[]](#userInfos) | 用户信息       |
| `total_count`      | number                    | 总点赞次数     |
| `new_count`        | number                    | 新点赞次数     |
| `new_nearby_count` | number                    | 附近新点赞次数 |
| `last_visit_time`  | number                    | 最后访问时间   |

#### userInfos

| 字段名           | 数据类型 | 说明         |
| ---------------- | -------- | ------------ |
| `age`            | number   | 年龄         |
| `bAvailableCnt`  | number   | 可用次数     |
| `bTodayVotedCnt` | number   | 今日投票次数 |
| `count`          | number   | 点赞次数     |
| `customId`       | number   | 自定义ID     |
| `gender`         | number   | 性别         |
| `giftCount`      | number   | 礼物次数     |
| `isFriend`       | boolean  | 是否好友     |
| `isSvip`         | boolean  | 是否SVIP     |
| `isvip`          | boolean  | 是否VIP      |
| `lastCharged`    | number   | 最后充电时间 |
| `latestTime`     | number   | 最后点赞时间 |
| `nick`           | string   | 昵称         |
| `src`            | number   | 来源         |
| `uid`            | string   | 用户ID       |
| `uin`            | number   | 用户QQ号     |

## 获取官方机器人账号范围

- `get_robot_uin_range` (NapCat拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "minUin": "3328144510",
    "maxUin": "3328144510"
  },
  {
    "minUin": "2854196301",
    "maxUin": "2854216399"
  },
  {
    "minUin": "66600000",
    "maxUin": "66600000"
  },
  {
    "minUin": "3889000000",
    "maxUin": "3889999999"
  },
  {
    "minUin": "4010000000",
    "maxUin": "4019999999"
  }
]
```

:::

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

返回一个数组，每个元素是一个对象

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `minUin` | number   | 最小QQ号 |
| `maxUin` | number   | 最大QQ号 |

## 设置自己的个性签名

- `set_self_longnick` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "longNick": "新的个性签名内容"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "result": 0,
  "errMsg": "string"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明       |
| ---------- | -------- | ------ | ---------- |
| `longNick` | string   | -      | 新个性签名 |

### 响应数据

| 字段名   | 数据类型 | 说明 |
| -------- | -------- | ---- |
| `result` | number   | 结果 |
| `errMsg` | string   | 错误 |

## 获取最近联系人

- `get_recent_contact` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "count": 20
}
```

:::

::: details 点击查看响应示例数据

```json
[
  // 返回值1
  {
    "peerUin": 0,
    "remark": "string",
    "msgTime": 0,
    "chatType": 0,
    "msgId": 0,
    "sendNickName": "string",
    "sendMemberName": "string",
    "peerName": "string"
  },
  // 返回值2
  {
    "lastestMsg": {
      "self_id": 0,
      "user_id": 0,
      "time": 0,
      "real_seq": "string",
      "message_type": "string",
      "sender": {
        "user_id": 0,
        "nickname": "string",
        "sex": "male",
        "age": 0,
        "card": "string",
        "role": "owner"
      },
      "raw_message": "string",
      "font": 0,
      "sub_type": "string",
      "message": [
        {
          "type": "text",
          "data": {
            "text": "string"
          }
        }
      ],
      "message_format": "string",
      "post_type": "string",
      "group_id": 0
    },
    "peerUin": 0,
    "remark": "string",
    "msgTime": 0,
    "chatType": 0,
    "msgId": 0,
    "sendNickName": "string",
    "sendMemberName": "string",
    "peerName": "string"
  }
]
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `count` | number   | 10     | 获取数量 |

### 响应数据

返回一个数组，每个元素是都可能是以下两种对象

- 对象1

| 字段名           | 数据类型 | 说明         |
| ---------------- | -------- | ------------ |
| `peerUin`        | number   | 对方QQ号     |
| `remark`         | string   | 备注         |
| `msgTime`        | number   | 消息时间     |
| `chatType`       | number   | 聊天类型     |
| `msgId`          | number   | 消息ID       |
| `sendNickName`   | string   | 发送者昵称   |
| `sendMemberName` | string   | 发送者群名片 |
| `peerName`       | string   | 对方昵称     |

- 对象2

| 字段名           | 数据类型                       | 说明         |
| ---------------- | ------------------------------ | ------------ |
| `lastestMsg`     | [message](../event/message.md) | 最后一条消息 |
| `peerUin`        | number                         | 对方QQ号     |
| `remark`         | string                         | 备注         |
| `msgTime`        | number                         | 消息时间     |
| `chatType`       | number                         | 聊天类型     |
| `msgId`          | number                         | 消息ID       |
| `sendNickName`   | string                         | 发送者昵称   |
| `sendMemberName` | string                         | 发送者群名片 |
| `peerName`       | string                         | 对方昵称     |

## 获取用户状态

- `get_user_status` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "status": 0,
  "ext_status": 0
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明         |
| --------- | -------- | ------ | ------------ |
| `user_id` | number   | -      | 目标用户QQ号 |

### 响应数据

| 字段名       | 数据类型 | 说明     |
| ------------ | -------- | -------- |
| `status`     | number   | 状态     |
| `ext_status` | number   | 扩展状态 |

## 获取clientkey

- `get_clientkey` (NapCat拓展)

::: details 点击查看响应示例数据

```json
{
  "clientkey": "string"
}
```

:::

### 参数

::: tip 提示
该 API 没有参数
:::

### 响应数据

| 字段名      | 数据类型 | 说明      |
| ----------- | -------- | --------- |
| `clientkey` | string   | 客户端key |
