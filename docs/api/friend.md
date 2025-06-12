# 好友相关API

## 发送好友赞

- `send_like`

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "times": 10
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                         |
| --------- | -------- | ------ | ---------------------------- |
| `user_id` | number   | -      | 对方 QQ 号                   |
| `times`   | number   | 1      | 赞的次数，每人每天最多 10 次 |

> [!note] 补充说明
> Bot 非 VIP 时，每人每天最多 10 次  
> Bot 为 SVIP 时，每人每天最多 20 次  
> Bot 与 被点赞目标非好友时，可点赞 50 次`(概率性成功 实测风控率极高)`

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 处理加好友请求

- `set_friend_add_request`

::: details 点击查看请求示例数据

```json
{
  "flag": "请求标识",
  "approve": true,
  "remark": "好友的备注"
}

// lagrange
{
  "flag": "string",
  "approve": true,
  "reason": "string" // [!code error] 可选 拒绝原因
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                                         |
| --------- | -------- | ------ | -------------------------------------------- |
| `flag`    | string   | -      | 加好友请求的标识（需从上报的事件数据中获取） |
| `approve` | boolean  | true   | 是否同意请求                                 |
| `remark`  | string   | 空     | 添加后的好友备注（仅在同意时有效）           |

- `Lagrange`

| 字段名    | 数据类型 | 默认值 | 说明                                         |
| --------- | -------- | ------ | -------------------------------------------- |
| `flag`    | string   | -      | 加好友请求的标识（需从上报的事件数据中获取） |
| `approve` | boolean  | true   | 是否同意请求                                 |
| `reason`  | string   | 空     | 拒绝原因                                     |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取陌生人信息

- `get_stranger_info`

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "no_cache": false // [!code error] napcat 无效 无此参数
}
```

:::

::: details 点击查看响应示例数据

```json
// 特别声明一下 这个结果返回的参数非常多 请以实际为准
{
  "user_id": 123456789,
  "nickname": "某人",
  "sex": "male",
  "age": 20
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `user_id`  | number   | -       | QQ 号                                                |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

- `NapCat`

| 字段名    | 数据类型 | 默认值 | 说明  |
| --------- | -------- | ------ | ----- |
| `user_id` | number   | -      | QQ 号 |

### 响应数据

| 字段名     | 数据类型       | 说明  |
| ---------- | -------------- | ----- |
| `user_id`  | number (int64) | QQ 号 |
| `nickname` | string         | 昵称  |
| `sex`      | string         | 性别  |
| `age`      | number (int32) | 年龄  |

> [!note] 特别声明一下 这个结果返回的参数非常多并且不同 请以实际为准

## 获取好友列表

- `get_friend_list`

::: details 点击查看请求示例数据

```json
{
  "no_cache": true // [!code warning] 仅napcat有效
}
```

:::

::: details 点击查看响应示例数据

```json
[
  {
    "user_id": 123456789,
    "nickname": "某人",
    "remark": "备注"
  }
]
```

:::

::: details 点击查看Lagrange响应示例数据

```json
[
  {
    "birthday_year": 0,
    "birthday_month": 0,
    "birthday_day": 0,
    "user_id": 0,
    "age": 0,
    "phone_num": "string",
    "email": "string",
    "category_id": 0,
    "nickname": "string",
    "remark": "string",
    "sex": "string",
    "level": 0
  }
]
```

:::

::: details 点击查看Lagrange响应示例数据

```json
[
  {
    "user_id": 0,
    "q_id": "string",
    "nickname": "string",
    "remark": "string",
    "group": {
      "group_id": 0,
      "group_name": "string"
    }
  }
]
```

:::

### 参数

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名     | 数据类型       | 说明   |
| ---------- | -------------- | ------ |
| `user_id`  | number (int64) | QQ 号  |
| `nickname` | string         | 昵称   |
| `remark`   | string         | 备注名 |

- `NapCat`

| 字段名           | 数据类型       | 说明     |
| ---------------- | -------------- | -------- |
| `user_id`        | number (int64) | QQ 号    |
| `nickname`       | string         | 昵称     |
| `remark`         | string         | 备注名   |
| `birthday_year`  | number (int32) | 生日年份 |
| `birthday_month` | number (int32) | 生日月份 |
| `birthday_day`   | number (int32) | 生日日期 |
| `age`            | number (int32) | 年龄     |
| `phone_num`      | string         | 手机号   |
| `email`          | string         | 邮箱     |
| `category_id`    | number (int32) | 分组ID   |
| `sex`            | string         | 性别     |
| `level`          | number (int32) | 等级     |

- `Lagrange`

| 字段名             | 数据类型       | 说明     |
| ------------------ | -------------- | -------- |
| `user_id`          | number (int64) | QQ 号    |
| `nickname`         | string         | 昵称     |
| `remark`           | string         | 备注名   |
| `q_id`             | string         | QID      |
| `group`            | object         | 分组信息 |
| `group.group_id`   | number (int64) | 分组ID   |
| `group.group_name` | string         | 分组名称 |

## 获取单向好友列表

- `get_unidirectional_friend_list` (gocq拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "uin": 0,
    "uid": "string",
    "nick_name": "string",
    "age": 0,
    "source": "string"
  }
]
```

:::

### 参数

::: tip 提示
该 API 没有响应数据
:::

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名     | 数据类型 | 说明           |
| ---------- | -------- | -------------- |
| `user_id`  | number   | 单向好友 QQ 号 |
| `nickname` | string   | 单向好友昵称   |

- `NapCat`

| 字段名      | 数据类型 | 说明           |
| ----------- | -------- | -------------- |
| `uin`       | number   | 单向好友 QQ 号 |
| `uid`       | string   | 单向好友 QQ 号 |
| `nick_name` | string   | 单向好友昵称   |
| `age`       | number   | 单向好友年龄   |
| `source`    | string   | 单向好友来源   |

## 删除好友

- `delete_friend` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789
}
```

:::

::: details 点击查看NapCat请求示例数据

```json
{
  "user_id": 123456789,
  "friend_id": 123456789,
  "temp_block": true,
  "temp_both_del": true
}
```

:::

::: details 点击查看Lagrange请求示例数据

```json
{
  "user_id": 123456789,
  "block": true,
}
```

:::

::: details 点击查看NapCat响应示例数据

```json
{
  "result": 0,
  "errMsg": "string"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明       |
| --------- | -------- | ------ | ---------- |
| `user_id` | number   | -      | 好友 QQ 号 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `result` | number   | 结果     |
| `errMsg` | string   | 错误信息 |

## 删除单向好友

- `delete_unidirectional_friend` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明           |
| --------- | -------- | ------ | -------------- |
| `user_id` | number   | -      | 单向好友 QQ 号 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置好友备注

- `set_friend_remark` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "remark": "新的备注"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明     |
| --------- | -------- | ------ | -------- |
| `user_id` | number   | -      | 好友QQ号 |
| `remark`  | string   | -      | 备注     |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取分类的好友列表

- `get_friends_with_category` (NapCat拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "categoryId": 0,
    "categorySortId": 0,
    "categoryName": "string",
    "categoryMbCount": 0,
    "onlineCount": 0,
    "buddyList": [
      {
        "birthday_year": 0,
        "birthday_month": 0,
        "birthday_day": 0,
        "user_id": 0,
        "age": 0,
        "phone_num": "string",
        "email": "string",
        "category_id": 0,
        "nickname": "string",
        "remark": "string",
        "sex": "string",
        "level": 0
      }
    ]
  }
]
```

:::

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名            | 数据类型                | 说明       |
| ----------------- | ----------------------- | ---------- |
| `categoryId`      | number                  | 分类ID     |
| `categorySortId`  | number                  | 分类排序ID |
| `categoryName`    | string                  | 分类名称   |
| `categoryMbCount` | number                  | 分类人数   |
| `onlineCount`     | number                  | 在线人数   |
| `buddyList`       | [buddyList](#buddyList) | 好友列表   |

#### buddyList

| 字段名           | 数据类型 | 说明     |
| ---------------- | -------- | -------- |
| `birthday_year`  | number   | 生日年份 |
| `birthday_month` | number   | 生日月份 |
| `birthday_day`   | number   | 生日日期 |
| `user_id`        | number   | 好友QQ号 |
| `age`            | number   | 年龄     |
| `phone_num`      | string   | 手机号   |
| `email`          | string   | 邮箱     |
| `category_id`    | number   | 分类ID   |
| `nickname`       | string   | 昵称     |
| `remark`         | string   | 备注     |
| `sex`            | string   | 性别     |
| `level`          | number   | 等级     |

## 获取可疑好友请求

- `get_doubt_friends_add_request` (NapCat拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "flag": "string",
    "uin": "string",
    "nick": "string",
    "source": "string",
    "reason": "string",
    "msg": "string",
    "group_code": "string",
    "time": "string",
    "type": "string"
  }
]
```

:::

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

返回内容为 JSON 数组，每个元素如下：

| 字段名       | 数据类型 | 说明     |
| ------------ | -------- | -------- |
| `flag`       | string   | 请求标识 |
| `uin`        | string   | 好友QQ号 |
| `nick`       | string   | 好友昵称 |
| `source`     | string   | 来源     |
| `reason`     | string   | 原因     |
| `msg`        | string   | 验证消息 |
| `group_code` | string   | 群号     |
| `time`       | string   | 时间     |
| `type`       | string   | 类型     |

## 处理可疑好友请求

- `set_doubt_friends_add_request` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "request_id": "request_id",
  "approve": true // 该参数只允许传递true
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明         |
| ------------ | -------- | ------ | ------------ |
| `request_id` | string   | -      | 请求ID       |
| `approve`    | boolean  | true   | 是否同意请求 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 好友戳一戳

- `friend_poke` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "target_id": 123456789
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                           |
| ----------- | -------- | ------ | ------------------------------ |
| `user_id`   | number   | -      | 好友QQ号 与 `target_id` 二选一 |
| `target_id` | number   | -      | 目标QQ号 与 `user_id` 二选一   |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::
