# 群聊相关API

## 群组踢人

- `set_group_kick`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "reject_add_request": false
}
```

:::

### 参数

| 字段名               | 数据类型 | 默认值  | 说明                                               |
| -------------------- | -------- | ------- | -------------------------------------------------- |
| `group_id`           | number   | -       | 群号                                               |
| `user_id`            | number   | -       | 要踢的 QQ 号                                       |
| `reject_add_request` | boolean  | `false` | 拒绝此人的加群请求                                 |

### 响应数据

无

## 群组单人禁言

- `set_group_ban`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "duration": 600
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                      |
| ---------- | -------- | ------- | ----------------------------------------- |
| `group_id` | number   | -       | 群号                                      |
| `user_id`  | number   | -       | 要禁言的 QQ 号                            |
| `duration` | number   | `30 * 60` | 禁言时长，单位秒，0 表示取消禁言          |

### 响应数据

无

## 群组匿名用户禁言

- `set_group_anonymous_ban`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "anonymous": {
    "id": 123456,
    "name": "匿名昵称",
    "flag": "匿名标识"
  },
  "flag": "匿名标识",
  "duration": 600
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值  | 说明                                                                 |
| ------------ | -------- | ------- | -------------------------------------------------------------------- |
| `group_id`   | number   | -       | 群号                                                                 |
| `anonymous`  | object   | -       | 可选，要禁言的匿名用户对象（群消息上报的 `anonymous` 字段）           |
| `flag`       | string   | -       | 可选，要禁言的匿名用户的 flag（需从群消息上报的数据中获得）           |
| `duration`   | number   | `30 * 60` | 禁言时长，单位秒，无法取消匿名用户禁言                               |

### 响应数据

无

## 群组全员禁言

- `set_group_whole_ban`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "enable": true
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明     |
| ---------- | -------- | ------ | -------- |
| `group_id` | number   | -      | 群号     |
| `enable`   | boolean  | `true` | 是否禁言 |

### 响应数据

无

## 群组设置管理员

- `set_group_admin`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "enable": true
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                      |
| ---------- | -------- | ------ | ------------------------- |
| `group_id` | number   | -      | 群号                      |
| `user_id`  | number   | -      | 要设置管理员的 QQ 号      |
| `enable`   | boolean  | `true` | true 为设置，false 为取消 |

### 响应数据

无

## 群组匿名

- `set_group_anonymous`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "enable": true
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明             |
| ---------- | -------- | ------ | ---------------- |
| `group_id` | number   | -      | 群号             |
| `enable`   | boolean  | `true` | 是否允许匿名聊天 |

### 响应数据

无

## 设置群名片（群备注）

- `set_group_card`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "card": "新名片"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                     |
| ---------- | -------- | ------ | ---------------------------------------- |
| `group_id` | number   | -      | 群号                                     |
| `user_id`  | number   | -      | 要设置的 QQ 号                           |
| `card`     | string   | 空     | 群名片内容，不填或空字符串表示删除群名片 |

### 响应数据

无

## 设置群名

- `set_group_name`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "group_name": "新群名"
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明   |
| ------------ | -------- | ------ | ------ |
| `group_id`   | number   | -      | 群号   |
| `group_name` | string   | -      | 新群名 |

### 响应数据

无

## 退出群组

- `set_group_leave`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "is_dismiss": false
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值  | 说明                                                     |
| ------------ | -------- | ------- | -------------------------------------------------------- |
| `group_id`   | number   | -       | 群号                                                     |
| `is_dismiss` | boolean  | `false` | 是否解散群（如果登录号是群主，则仅在此项为 true 时能够解散） |

### 响应数据

无

## 设置群组专属头衔

- `set_group_special_title`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "special_title": "头衔",
  "duration": -1
}
```

:::

### 参数

| 字段名          | 数据类型 | 默认值  | 说明                                                     |
| --------------- | -------- | ------- | -------------------------------------------------------- |
| `group_id`      | number   | -       | 群号                                                     |
| `user_id`       | number   | -       | 要设置的 QQ 号                                           |
| `special_title` | string   | 空      | 专属头衔，不填或空字符串表示删除专属头衔                 |
| `duration`      | number   | `-1`    | 专属头衔有效期，单位秒，-1 表示永久，不过此项似乎没有效果 |

### 响应数据

无

## 处理加群请求／邀请

- `set_group_add_request`

::: details 点击查看请求示例数据

```json
{
  "flag": "请求标识",
  "sub_type": "add",
  "approve": true,
  "reason": "拒绝理由"
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                                                   |
| --------- | -------- | ------ | ------------------------------------------------------ |
| `flag`    | string   | -      | 加群请求的标识（需从上报的事件数据中获取）             |
| `sub_type`| string   | -      | `add` 或 `invite`，请求类型（需要和上报消息中的 `sub_type` 字段相符） |
| `approve` | boolean  | `true` | 是否同意请求／邀请                                     |
| `reason`  | string   | 空     | 拒绝理由（仅在拒绝时有效）                             |

### 响应数据

无

## 设置群头像

- `set_group_portrait` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "file": "https://example.com/image.jpg",
  "cache": 1
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                                     |
| ---------- | -------- | ------ | -------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                     |
| `file`     | string   | -      | 图片文件名，格式同图片消息段，详见 [图片消息段]          |
| `cache`    | number   | `1`    | 表示是否使用已缓存的文件，`1` 表示使用缓存，`0` 表示不使用 |

### 响应数据

无

## 设置精华消息

- `set_essence_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明    |
| ------------ | -------- | ------ | ------- |
| `message_id` | number   | -      | 消息 ID |

### 响应数据

无

## 移出精华消息

- `delete_essence_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明    |
| ------------ | -------- | ------ | ------- |
| `message_id` | number   | -      | 消息 ID |

### 响应数据

无

## 获取精华消息列表

- `get_essence_msg_list` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
[
  {
    "sender_id": 987654321,
    "sender_nick": "昵称",
    "sender_time": 1595294844,
    "operator_id": 987654321,
    "operator_nick": "操作者昵称",
    "operator_time": 1595294846,
    "message_id": 123456789
  }
]
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名          | 数据类型 | 说明             |
| --------------- | -------- | ---------------- |
| `sender_id`     | number   | 发送者 QQ 号     |
| `sender_nick`   | string   | 发送者昵称       |
| `sender_time`   | number   | 发送时间         |
| `operator_id`   | number   | 操作者 QQ 号     |
| `operator_nick` | string   | 操作者昵称       |
| `operator_time` | number   | 操作时间         |
| `message_id`    | number   | 消息 ID          |

## 群打卡

- `send_group_sign` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

无

## 获取群公告

- `get_group_notice` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
[
  {
    "sender_id": 987654321,
    "publish_time": 1595294844,
    "message": {
      "text": "公告内容",
      "images": [
        {
          "height": "123",
          "width": "123",
          "id": "123456789"
        }
      ]
    }
  }
]
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名         | 数据类型 | 说明         |
| -------------- | -------- | ------------ |
| `sender_id`    | number   | 发送者 QQ 号 |
| `publish_time` | number   | 发布时间     |
| `message`      | object   | 公告内容     |

## 发送群公告

- `send_group_notice` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "content": "公告内容",
  "image": "base64://..."
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                 |
| ---------- | -------- | ------ | -------------------- |
| `group_id` | number   | -      | 群号                 |
| `content`  | string   | -      | 公告内容             |
| `image`    | string   | -      | 图片 base64 编码     |

### 响应数据

无

## 获取群系统消息

- `get_group_system_msg` (gocq拓展)

::: details 点击查看响应示例数据

```json
{
  "invited_requests": [
    {
      "request_id": 123456789,
      "invitor_uin": 987654321,
      "invitor_nick": "邀请人昵称",
      "group_id": 123456789,
      "group_name": "群名称",
      "checked": false,
      "actor": 0
    }
  ],
  "join_requests": [
    {
      "request_id": 123456789,
      "requester_uin": 987654321,
      "requester_nick": "申请人昵称",
      "message": "申请消息",
      "group_id": 123456789,
      "group_name": "群名称",
      "checked": false,
      "actor": 0
    }
  ]
}
```

:::

### 参数

无

### 响应数据

| 字段名             | 数据类型  | 说明         |
| ------------------ | --------- | ------------ |
| `invited_requests` | array     | 邀请消息列表 |
| `join_requests`    | array     | 进群消息列表 |

## 获取群 @全体成员 剩余次数

- `get_group_at_all_remain` (gocq拓展)

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
  "can_at_all": true,
  "remain_at_all_count_for_group": 10,
  "remain_at_all_count_for_uin": 10
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

| 字段名                        | 数据类型 | 说明                                        |
| ----------------------------- | -------- | ------------------------------------------- |
| `can_at_all`                  | boolean  | 是否可以 @全体成员                          |
| `remain_at_all_count_for_group` | number   | 群内所有管理当天剩余 @全体成员 次数          |
| `remain_at_all_count_for_uin`   | number   | Bot 当天剩余 @全体成员 次数                  |

## 获取群信息

- `get_group_info`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "no_cache": false
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "group_id": 123456789,
  "group_name": "群名称",
  "member_count": 100,
  "max_member_count": 200
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                             |
| ---------- | -------- | ------- | -------------------------------- |
| `group_id` | number   | -       | 群号                             |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名            | 数据类型       | 说明       |
| ----------------- | -------------- | ---------- |
| `group_id`        | number (int64) | 群号       |
| `group_name`      | string         | 群名称     |
| `member_count`    | number (int32) | 成员数     |
| `max_member_count`| number (int32) | 最大成员数 |

## 获取群列表

- `get_group_list`

::: details 点击查看响应示例数据

```json
[
  {
    "group_id": 123456789,
    "group_name": "群名称",
    "member_count": 100,
    "max_member_count": 200
  }
]
```

:::

### 参数

无

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名            | 数据类型       | 说明       |
| ----------------- | -------------- | ---------- |
| `group_id`        | number (int64) | 群号       |
| `group_name`      | string         | 群名称     |
| `member_count`    | number (int32) | 成员数     |
| `max_member_count`| number (int32) | 最大成员数 |

## 获取群成员信息

- `get_group_member_info`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "no_cache": false
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "group_id": 123456789,
  "user_id": 987654321,
  "nickname": "昵称",
  "card": "群名片",
  "sex": "male",
  "age": 20,
  "area": "地区",
  "join_time": 1595294844,
  "last_sent_time": 1595294844,
  "level": "等级",
  "role": "owner",
  "unfriendly": false,
  "title": "专属头衔",
  "title_expire_time": 1595294844,
  "card_changeable": true
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                             |
| ---------- | -------- | ------- | -------------------------------- |
| `group_id` | number   | -       | 群号                             |
| `user_id`  | number   | -       | QQ 号                            |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名              | 数据类型       | 说明                                           |
| ------------------- | -------------- | ---------------------------------------------- |
| `group_id`          | number (int64) | 群号                                           |
| `user_id`           | number (int64) | QQ 号                                          |
| `nickname`          | string         | 昵称                                           |
| `card`              | string         | 群名片／备注                                   |
| `sex`               | string         | 性别，`male` 或 `female` 或 `unknown`            |
| `age`               | number (int32) | 年龄                                           |
| `area`              | string         | 地区                                           |
| `join_time`         | number (int32) | 加群时间戳                                     |
| `last_sent_time`    | number (int32) | 最后发言时间戳                                 |
| `level`             | string         | 成员等级                                       |
| `role`              | string         | 角色，`owner` 或 `admin` 或 `member`             |
| `unfriendly`        | boolean        | 是否不良记录成员                               |
| `title`             | string         | 专属头衔                                       |
| `title_expire_time` | number (int32) | 专属头衔过期时间戳                             |
| `card_changeable`   | boolean        | 是否允许修改群名片                             |

## 获取群成员列表

- `get_group_member_list`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789
}
```

:::

::: details 点击查看响应示例数据

```json
[
  {
    "group_id": 123456789,
    "user_id": 987654321,
    "nickname": "昵称",
    "card": "群名片",
    "sex": "male",
    "age": 20,
    "area": "地区",
    "join_time": 1595294844,
    "last_sent_time": 1595294844,
    "level": "等级",
    "role": "owner",
    "unfriendly": false,
    "title": "专属头衔",
    "title_expire_time": 1595294844,
    "card_changeable": true
  }
]
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

响应内容为 JSON 数组，每个元素的内容和上面的 `get_group_member_info` 接口相同。

## 获取群荣誉信息

- `get_group_honor_info`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "type": "talkative"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "group_id": 123456789,
  "current_talkative": {
    "user_id": 987654321,
    "nickname": "昵称",
    "avatar": "头像URL",
    "day_count": 10
  },
  "talkative_list": [
    {
      "user_id": 987654321,
      "nickname": "昵称",
      "avatar": "头像URL",
      "description": "荣誉描述"
    }
  ],
  "performer_list": [],
  "legend_list": [],
  "strong_newbie_list": [],
  "emotion_list": []
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                                             |
| ---------- | -------- | ------ | ---------------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                             |
| `type`     | string   | -      | 要获取的群荣誉类型，可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单项荣誉数据，或传入 `all` 获取所有数据 |

### 响应数据

| 字段名               | 数据类型 | 说明                                                             |
| -------------------- | -------- | ---------------------------------------------------------------- |
| `group_id`           | number   | 群号                                                             |
| `current_talkative`  | object   | 当前龙王，仅 `type` 为 `talkative` 或 `all` 时有数据             |
| `talkative_list`     | array    | 历史龙王，仅 `type` 为 `talkative` 或 `all` 时有数据             |
| `performer_list`     | array    | 群聊之火，仅 `type` 为 `performer` 或 `all` 时有数据             |
| `legend_list`        | array    | 群聊炽焰，仅 `type` 为 `legend` 或 `all` 时有数据                |
| `strong_newbie_list` | array    | 冒尖小春笋，仅 `type` 为 `strong_newbie` 或 `all` 时有数据       |
| `emotion_list`       | array    | 快乐之源，仅 `type` 为 `emotion` 或 `all` 时有数据               |