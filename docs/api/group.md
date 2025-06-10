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

| 字段名               | 数据类型 | 默认值  | 说明               |
| -------------------- | -------- | ------- | ------------------ |
| `group_id`           | number   | -       | 群号               |
| `user_id`            | number   | -       | 要踢的 QQ 号       |
| `reject_add_request` | boolean  | `false` | 拒绝此人的加群请求 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

| 字段名     | 数据类型 | 默认值    | 说明                             |
| ---------- | -------- | --------- | -------------------------------- |
| `group_id` | number   | -         | 群号                             |
| `user_id`  | number   | -         | 要禁言的 QQ 号                   |
| `duration` | number   | `30 * 60` | 禁言时长，单位秒，0 表示取消禁言 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

| 字段名      | 数据类型 | 默认值    | 说明                                                        |
| ----------- | -------- | --------- | ----------------------------------------------------------- |
| `group_id`  | number   | -         | 群号                                                        |
| `anonymous` | object   | -         | 可选，要禁言的匿名用户对象（群消息上报的 `anonymous` 字段） |
| `flag`      | string   | -         | 可选，要禁言的匿名用户的 flag（需从群消息上报的数据中获得） |
| `duration`  | number   | `30 * 60` | 禁言时长，单位秒，无法取消匿名用户禁言                      |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

::: tip 提示
该 API 没有响应数据
:::

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

::: tip 提示
该 API 没有响应数据
:::

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

::: tip 提示
该 API 没有响应数据
:::

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

::: tip 提示
该 API 没有响应数据
:::

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

::: tip 提示
该 API 没有响应数据
:::

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

| 字段名       | 数据类型 | 默认值  | 说明                                                         |
| ------------ | -------- | ------- | ------------------------------------------------------------ |
| `group_id`   | number   | -       | 群号                                                         |
| `is_dismiss` | boolean  | `false` | 是否解散群（如果登录号是群主，则仅在此项为 true 时能够解散） |

- `Lagrange` 的 `is_dismiss` 参数无效

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

| 字段名          | 数据类型 | 默认值 | 说明                                                      |
| --------------- | -------- | ------ | --------------------------------------------------------- |
| `group_id`      | number   | -      | 群号                                                      |
| `user_id`       | number   | -      | 要设置的 QQ 号                                            |
| `special_title` | string   | 空     | 专属头衔，不填或空字符串表示删除专属头衔                  |
| ~~`duration`~~  | number   | `-1`   | 专属头衔有效期，单位秒，-1 表示永久，不过此项似乎没有效果 |

- `Lagrange`: `special_title` 参数为 `必选`

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

::: details 点击查看NapCat响应示例数据

```json
{
  "group_id": 123456789,
  "group_name": "群名称",
  "member_count": 100,
  "max_member_count": 200,
  "group_all_shut_up": 0,
  "group_remark": "群备注",
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `group_id` | number   | -       | 群号                                                 |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

- `NapCat`: `no_cache` 参数无效

### 响应数据

| 字段名             | 数据类型       | 说明       |
| ------------------ | -------------- | ---------- |
| `group_id`         | number (int64) | 群号       |
| `group_name`       | string         | 群名称     |
| `member_count`     | number (int32) | 成员数     |
| `max_member_count` | number (int32) | 最大成员数 |

- `NapCat`

| 字段名              | 数据类型       | 说明                               |
| ------------------- | -------------- | ---------------------------------- |
| `group_id`          | number (int64) | 群号                               |
| `group_name`        | string         | 群名称                             |
| `member_count`      | number (int32) | 成员数                             |
| `max_member_count`  | number (int32) | 最大成员数                         |
| `group_all_shut_up` | number (int32) | 群全体禁言 0 表示不禁言 1 表示禁言 |
| `group_remark`      | string         | 群备注                             |

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

::: details 点击查看NapCat响应示例数据

```json
[
  {
    "group_id": 123456789,
    "group_name": "群名称",
    "member_count": 100,
    "max_member_count": 200,
    "group_all_shut_up": 0,
    "group_remark": "群备注",
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

| 字段名             | 数据类型       | 说明       |
| ------------------ | -------------- | ---------- |
| `group_id`         | number (int64) | 群号       |
| `group_name`       | string         | 群名称     |
| `member_count`     | number (int32) | 成员数     |
| `max_member_count` | number (int32) | 最大成员数 |

- `NapCat`

| 字段名              | 数据类型       | 说明                               |
| ------------------- | -------------- | ---------------------------------- |
| `group_id`          | number (int64) | 群号                               |
| `group_name`        | string         | 群名称                             |
| `member_count`      | number (int32) | 成员数                             |
| `max_member_count`  | number (int32) | 最大成员数                         |
| `group_all_shut_up` | number (int32) | 群全体禁言 0 表示不禁言 1 表示禁言 |
| `group_remark`      | string         | 群备注                             |

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

::: details 点击查看NapCat响应示例数据

```json
{
  "group_id": 0,
  "user_id": 0,
  "nickname": "string",
  "card": "string",
  "sex": "string",
  "age": 0,
  "join_time": 0,
  "last_sent_time": 0,
  "level": 0,
  "role": "string",
  "title": "string",
  "area": "string",
  "unfriendly": true,
  "title_expire_time": 0,
  "card_changeable": true,
  "qq_level": 0, // [!code ++] 新增字段
  "shut_up_timestamp": 0, // [!code ++] 新增字段
  "is_robot": true, // [!code ++] 新增字段
  "qage": "string" // [!code ++] 新增字段
}
```

:::

::: details 点击查看Lagrange响应示例数据

```json
{
  "group_id": 0,
  "user_id": 0,
  "nickname": "string",
  "card": null,
  "sex": "", // [!code error] 按照标准应该返回 unknown
  "age": 0,
  "area": "",
  "join_time": 0,
  "last_sent_time": 0,
  "level": "0",
  "role": "owner",
  "unfriendly": false,
  "title": "string",
  "title_expire_time": 0,
  "card_changeable": false
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `group_id` | number   | -       | 群号                                                 |
| `user_id`  | number   | -       | QQ 号                                                |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名              | 数据类型       | 说明                                  |
| ------------------- | -------------- | ------------------------------------- |
| `group_id`          | number (int64) | 群号                                  |
| `user_id`           | number (int64) | QQ 号                                 |
| `nickname`          | string         | 昵称                                  |
| `card`              | string         | 群名片／备注                          |
| `sex`               | string         | 性别，`male` 或 `female` 或 `unknown` |
| `age`               | number (int32) | 年龄                                  |
| `area`              | string         | 地区                                  |
| `join_time`         | number (int32) | 加群时间戳                            |
| `last_sent_time`    | number (int32) | 最后发言时间戳                        |
| `level`             | string         | 成员等级                              |
| `role`              | string         | 角色，`owner` 或 `admin` 或 `member`  |
| `unfriendly`        | boolean        | 是否不良记录成员                      |
| `title`             | string         | 专属头衔                              |
| `title_expire_time` | number (int32) | 专属头衔过期时间戳                    |
| `card_changeable`   | boolean        | 是否允许修改群名片                    |

- `Lagrange`: 仅 `sex` 字段返回值为空字符串，其他一致
- `NapCat`: 以下是拓展参数

| 字段名              | 数据类型       | 说明         |
| ------------------- | -------------- | ------------ |
| `qq_level`          | number (int32) | QQ 等级      |
| `shut_up_timestamp` | number (int32) | 禁言时间戳   |
| `is_robot`          | boolean        | 是否为机器人 |
| `qage`              | string         | Q龄          |

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

::: details 点击查看NapCat响应示例数据

```json
[
  {
    "group_id": 0,
    "user_id": 0,
    "nickname": "string",
    "card": "string",
    "sex": "string",
    "age": 0,
    "join_time": 0,
    "last_sent_time": 0,
    "level": 0,
    "role": "string",
    "title": "string",
    "area": "string",
    "unfriendly": true,
    "title_expire_time": 0,
    "card_changeable": true,
    "qq_level": 0, // [!code ++] 新增字段
    "shut_up_timestamp": 0, // [!code ++] 新增字段
    "is_robot": true, // [!code ++] 新增字段
    "qage": "string" // [!code ++] 新增字段
  }
]
```

:::

::: details 点击查看Lagrange响应示例数据

```json
[
  {
    "group_id": 0,
    "user_id": 0,
    "nickname": "string",
    "card": null,
    "sex": "", // [!code error] 按照标准应该返回 unknown
    "age": 0,
    "area": "",
    "join_time": 0,
    "last_sent_time": 0,
    "level": "0",
    "role": "owner",
    "unfriendly": false,
    "title": "string",
    "title_expire_time": 0,
    "card_changeable": false
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

::: details 点击查看NapCat响应示例数据

```json
{
  "group_id": "123456789", // [!code warning] 注意这是个string类型
  "current_talkative": {
    "user_id": 987654321,
    "nickname": "昵称",
    "avatar": "头像URL",
    "description": "7天，最长蝉联1天"
  },
  "talkative_list": [
    {
      "user_id": 987654321,
      "nickname": "昵称",
      "avatar": "头像URL",
      "description": "7天，最长蝉联1天"
    }
  ],
  "performer_list": [
    {
      "user_id": 987654321,
      "nickname": "昵称",
      "avatar": "头像URL",
      "description": "连续发消息26天"
    }
  ],
  "legend_list": [
    {
      "user_id": 987654321,
      "nickname": "昵称",
      "avatar": "头像URL",
      "description": "连续发消息149天"
    }
  ],
  "emotion_list": [
    {
      "user_id": 987654321,
      "nickname": "昵称",
      "avatar": "头像URL",
      "description": "已连续发送表情包3天"
    }
  ],
  "strong_newbie_list": [] // [!code error] 这个貌似被tx废弃了
}
```

:::

::: details 点击查看Lagrange响应示例数据

```json
{
  "group_id": 999999999,
  "current_talkative": {
    "day_count": 1,
    "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=xxx&kti=xxx&s=",
    "avatar_size": 640, // [!code ++] 拓展字段
    "user_id": 12345,
    "nickname": "QQ名称"
  },
  "talkative_list": [
    {
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=xxx&kti=xxx&s=640",
      "btnText": "加好友", // [!code ++] 拓展字段
      "text": "", // [!code ++] 拓展字段
      "user_id": 12345,
      "nickname": "QQ名称",
      "description": "7天，最长蝉联1天"
    }
  ],
  "legend_list": [
    {
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=xxx&kti=xxx&s=640",
      "btnText": "加好友", // [!code ++] 拓展字段
      "text": "", // [!code ++] 拓展字段
      "icon": 2, // [!code ++] 拓展字段
      "user_id": 88888,
      "nickname": "QQ名称",
      "description": "连续发消息149天"
    }
  ],
  "strong_newbie_list": [], // [!code error] 这个貌似被tx废弃了
  "emotion_list": [
    {
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=xxx&kti=xxx&s=640",
      "btnText": "加好友", // [!code ++] 拓展字段
      "text": "", // [!code ++] 拓展字段
      "icon": 5, // [!code ++] 拓展字段
      "user_id": 88888,
      "nickname": "QQ名称",
      "description": "已连续发送表情包3天"
    }
  ],
  "performer_list": [] // [!code --] lagrange 没有这个返回值
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                                                                                                                    |
| ---------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                                                                                                    |
| `type`     | string   | -      | 要获取的群荣誉类型，可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单项荣誉数据，或传入 `all` 获取所有数据 |

### 响应数据

| 字段名               | 数据类型 | 说明                                                       |
| -------------------- | -------- | ---------------------------------------------------------- |
| `group_id`           | number   | 群号                                                       |
| `current_talkative`  | object   | 当前龙王，仅 `type` 为 `talkative` 或 `all` 时有数据       |
| `talkative_list`     | array    | 历史龙王，仅 `type` 为 `talkative` 或 `all` 时有数据       |
| `performer_list`     | array    | 群聊之火，仅 `type` 为 `performer` 或 `all` 时有数据       |
| `legend_list`        | array    | 群聊炽焰，仅 `type` 为 `legend` 或 `all` 时有数据          |
| `strong_newbie_list` | array    | 冒尖小春笋，仅 `type` 为 `strong_newbie` 或 `all` 时有数据 |
| `emotion_list`       | array    | 快乐之源，仅 `type` 为 `emotion` 或 `all` 时有数据         |

其中 `current_talkative` 字段的内容如下：

| 字段名      | 数据类型       | 说明     |
| ----------- | -------------- | -------- |
| `user_id`   | number (int64) | QQ 号    |
| `nickname`  | string         | 昵称     |
| `avatar`    | string         | 头像 URL |
| `day_count` | number (int32) | 持续天数 |

其它各 `*_list` 的每个元素是一个 JSON 对象，内容如下：

| 字段名        | 数据类型       | 说明     |
| ------------- | -------------- | -------- |
| `user_id`     | number (int64) | QQ 号    |
| `nickname`    | string         | 昵称     |
| `avatar`      | string         | 头像 URL |
| `description` | string         | 荣誉描述 |

> [!tip]
> 这里比较复杂，请参考上面的返回响应示例数据

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

| 字段名     | 数据类型 | 默认值 | 说明                                                                  |
| ---------- | -------- | ------ | --------------------------------------------------------------------- |
| `flag`     | string   | -      | 加群请求的标识（需从上报的事件数据中获取）                            |
| `sub_type` | string   | -      | `add` 或 `invite`，请求类型（需要和上报消息中的 `sub_type` 字段相符） |
| `approve`  | boolean  | `true` | 是否同意请求／邀请                                                    |
| `reason`   | string   | 空     | 拒绝理由（仅在拒绝时有效）                                            |

- `NapCat`: `sub_type` 参数无效，`approve`为必选
- `Lagrange`: `sub_type` 参数无效

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

::: details 点击查看NapCat响应示例数据

```json
{
  "result": 0,
  "errMsg": "success"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                                       |
| ---------- | -------- | ------ | ---------------------------------------------------------- |
| `group_id` | number   | -      | 群号                                                       |
| `file`     | string   | -      | 图片文件名，格式同图片消息段，详见 [图片消息段]            |
| `cache`    | number   | `1`    | 表示是否使用已缓存的文件，`1` 表示使用缓存，`0` 表示不使用 |

- 参数 `cache` 在 `NapCat` 和 `Lagrange` 中均为无效参数

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置精华消息

- `set_essence_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

::: details 点击查看NapCat响应示例数据

```json
{
  "errCode": 0, // 错误码
  "errMsg": "success", // 错误信息
  "result": {
    "wording": "", // 正常为空，异常有文本提示
    "digestUin": "0", // 精华 QQ
    "digestTime": 0, // 精华时间
    "msg": {
      "groupCode": "0", // 群号
      "msgSeq": 0, // 消息序号
      "msgRandom": 0, // 消息随机数
      "msgContent": [], // 消息内容
      "textSize": "0", // 消息文本长度
      "picSize": "0", // 消息图片大小
      "videoSize": "0", // 消息视频大小
      "senderUin": "0", // 发送者 QQ
      "senderTime": 0, // 发送时间
      "addDigestUin": "0", // 添加精华 QQ
      "addDigestTime": 0, // 添加精华时间
      "startTime": 0, // 精华开始时间
      "latestMsgSeq": 0, // 最新消息序号
      "opType": 0 // 操作类型
    },
    "errorCode": 0 // 错误码
  }
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明    |
| ------------ | -------- | ------ | ------- |
| `message_id` | number   | -      | 消息 ID |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`: 响应结果参考上面的响应示例数据

## 移出精华消息

- `delete_essence_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

::: details 点击查看NapCat响应示例数据

```json
{
  "errCode": 0, // 错误码
  "errMsg": "success", // 错误信息
  "result": {
    "wording": "", // 正常为空，异常有文本提示
    "digestUin": "0", // 精华 QQ
    "digestTime": 0, // 精华时间
    "msg": {
      "groupCode": "0", // 群号
      "msgSeq": 0, // 消息序号
      "msgRandom": 0, // 消息随机数
      "msgContent": [], // 消息内容
      "textSize": "0", // 消息文本长度
      "picSize": "0", // 消息图片大小
      "videoSize": "0", // 消息视频大小
      "senderUin": "0", // 发送者 QQ
      "senderTime": 0, // 发送时间
      "addDigestUin": "0", // 添加精华 QQ
      "addDigestTime": 0, // 添加精华时间
      "startTime": 0, // 精华开始时间
      "latestMsgSeq": 0, // 最新消息序号
      "opType": 0 // 操作类型
    },
    "errorCode": 0 // 错误码
  }
}
```

:::

### 参数

| 字段名       | 数据类型 | 默认值 | 说明    |
| ------------ | -------- | ------ | ------- |
| `message_id` | number   | -      | 消息 ID |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

- `NapCat`: 响应结果参考上面的响应示例数据

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

::: details 点击查看NapCat响应示例数据

```json
[
  {
    "msg_seq": 0, // [!code ++] 拓展字段
    "msg_random": 0, // [!code ++] 拓展字段
    "sender_id": 0,
    "sender_nick": "string",
    "sender_time": 0, // [!code --] napcat 没有这个字段
    "operator_id": 0,
    "operator_nick": "string",
    "operator_time": 0,
    "message_id": 0,
    "content": [
      {
        "type": "text",
        "data": {
          "text": "string"
        }
      }
    ]
  }
]
```

:::

::: details 点击查看Lagrange响应示例数据

```json
[
  {
    "sender_id": 0,
    "sender_nick": "string",
    "sender_time": 0,
    "operator_id": 0,
    "operator_nick": "string",
    "operator_time": 0,
    "message_id": 0,
    "content": [ // [!code ++] 拓展字段 详细参考 https://lagrange-onebot.apifox.cn/236981735e0
      { // [!code ++]
        "type": "at", // [!code ++]
        "data": { // [!code ++]
          "name": "string", // [!code ++]
          "qq": "string" // [!code ++]
        } // [!code ++]
      } // [!code ++]
    ] // [!code ++]
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

| 字段名          | 数据类型 | 说明         |
| --------------- | -------- | ------------ |
| `sender_id`     | number   | 发送者 QQ 号 |
| `sender_nick`   | string   | 发送者昵称   |
| `sender_time`   | number   | 发送时间     |
| `operator_id`   | number   | 操作者 QQ 号 |
| `operator_nick` | string   | 操作者昵称   |
| `operator_time` | number   | 操作时间     |
| `message_id`    | number   | 消息 ID      |

- `NapCat`:
  - 返回值缺少 `sender_time` 字段
  - 返回值新增 `content` `msg_seq` `msg_random` 字段
  - 详细参考上面的响应示例数据

- `Lagrange`:
  - 返回值新增 `content` 字段
  - 详细参考上面的响应示例数据

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

::: tip 提示
该 API 没有响应数据
:::

## 获取群公告

- `_get_group_notice` (gocq拓展)

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

::: details 点击查看NapCat响应示例数据

```json
[
  {
    "notice_id": "63491e2f000000004f4d1e677d2b0200", // [!code ++] 拓展字段
    "sender_id": 123,
    "publish_time": 1730039119,
    "message": {
      "text": "这是一条神奇的群公告",
      "image": [ // [!code error] 注意这里返回的是 `image` 而不是 `images`
        {
          "id": "aJJBbZ6BqyLiaC1kmpvIWGBBkJerEfpRBHX5Brxbaurs",
          "height": "400",
          "width": "400"
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

其中 `message` 字段的内容如下：

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `text`   | string   | 公告内容 |
| `images` | array    | 公告图片 |

其中 `images` 字段每个元素内容如下：

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `height` | string   | 图片高度 |
| `width`  | string   | 图片宽度 |
| `id`     | string   | 图片ID   |

- `NapCat`:
  - 返回值新增 `notice_id` 字段
  - 返回值没有 `images` 字段，而是 `image` 字段
  - 详细参考上面的响应示例数据

- `Lagrange`: 返回值新增 `notice_id` 字段

## 发送群公告

- `_send_group_notice` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "content": "公告内容",
  "image": "base64://..."
}
```

:::

::: details 点击查看NapCat请求示例数据

```json
{
  "group_id": 0,
  "content": "string",
  "image": "string",
  "pinned": 0,
  "type": 0,
  "confirm_required": 0,
  "is_show_edit_card": 0,
  "tip_window_type": 0
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明             |
| ---------- | -------- | ------ | ---------------- |
| `group_id` | number   | -      | 群号             |
| `content`  | string   | -      | 公告内容         |
| `image`    | string   | -      | 图片 base64 编码 |

- `NapCat`:

| 字段名              | 数据类型 | 默认值 | 说明                   |
| ------------------- | -------- | ------ | ---------------------- |
| `group_id`          | number   | -      | 群号                   |
| `content`           | string   | -      | 公告内容               |
| `image`             | string   | -      | 可选 图片 base64 编码  |
| `pinned`            | number   | 0      | 是否置顶 `0/1`         |
| `type`              | number   | 1      | 公告类型 `0/1`         |
| `confirm_required`  | number   | 1      | 是否需要确认 `0/1`     |
| `is_show_edit_card` | number   | 1      | 是否显示编辑卡片 `0/1` |
| `tip_window_type`   | number   | 1      | 提示窗口类型 `0/1`     |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 删除群公告

- `_del_group_notice` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "notice_id": "63491e2f000000004f4d1e677d2b0200"
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明   |
| ----------- | -------- | ------ | ------ |
| `group_id`  | number   | -      | 群号   |
| `notice_id` | string   | -      | 公告ID |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

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

::: details 点击查看NapCat响应示例数据

```json
{
  "InvitedRequest": [ // [!code error] 注意这里返回的是 `InvitedRequest` 而不是 `invited_requests`
    {
      "request_id": 0,
      "invitor_uin": 0,
      "invitor_nick": "string",
      "group_id": 0,
      "message": "string", // [!code ++] 拓展字段
      "group_name": "string",
      "checked": true,
      "actor": 0,
      "requester_nick": "string" // [!code ++] 拓展字段
    }
  ],
  "join_requests": [
    {
      "request_id": 0,
      "requester_uin": 0, // [!code --] napcat 没有这个字段
      "invitor_uin": 0, // [!code ++] 拓展字段
      "invitor_nick": "string", // [!code ++] 拓展字段
      "group_id": 0,
      "message": "string",
      "group_name": "string",
      "checked": true,
      "actor": 0,
      "requester_nick": "string"
    }
  ]
}
```

:::

### 参数

::: tip 提示
该 API 没有请求参数
:::

### 响应数据

| 字段名             | 数据类型         | 说明         |
| ------------------ | ---------------- | ------------ |
| `invited_requests` | InvitedRequest[] | 邀请消息列表 |
| `join_requests`    | JoinRequest[]    | 进群消息列表 |

::: warning 注意
如果列表不存在任何消息, 将返回 `null`
:::

**InvitedRequest**

| 字段名         | 数据类型       | 说明              |
| -------------- | -------------- | ----------------- |
| `request_id`   | number (int64) | 请求ID            |
| `invitor_uin`  | number (int64) | 邀请者            |
| `invitor_nick` | string         | 邀请者昵称        |
| `group_id`     | number (int64) | 群号              |
| `group_name`   | string         | 群名              |
| `checked`      | boolean        | 是否已被处理      |
| `actor`        | number (int64) | 处理者, 未处理为0 |

**JoinRequest**

| 字段名           | 数据类型       | 说明              |
| ---------------- | -------------- | ----------------- |
| `request_id`     | number (int64) | 请求ID            |
| `requester_uin`  | number (int64) | 请求者ID          |
| `requester_nick` | string         | 请求者昵称        |
| `message`        | string         | 验证消息          |
| `group_id`       | number (int64) | 群号              |
| `group_name`     | string         | 群名              |
| `checked`        | boolean        | 是否已被处理      |
| `actor`          | number (int64) | 处理者, 未处理为0 |

- `NapCat`:

| 字段名           | 数据类型           | 说明         |
| ---------------- | ------------------ | ------------ |
| `InvitedRequest` | NCInvitedRequest[] | 邀请消息列表 |
| `join_requests`  | NCJoinRequest[]    | 进群消息列表 |

**NCInvitedRequest**

| 字段名           | 数据类型       | 说明              |
| ---------------- | -------------- | ----------------- |
| `request_id`     | number (int64) | 请求ID            |
| `invitor_uin`    | number (int64) | 邀请者            |
| `invitor_nick`   | string         | 邀请者昵称        |
| `group_id`       | number (int64) | 群号              |
| `group_name`     | string         | 群名              |
| `checked`        | boolean        | 是否已被处理      |
| `actor`          | number (int64) | 处理者, 未处理为0 |
| `message`        | string         | 验证消息          |
| `requester_nick` | string         | 请求者昵称        |

**NCJoinRequest**

| 字段名           | 数据类型       | 说明              |
| ---------------- | -------------- | ----------------- |
| `request_id`     | number (int64) | 请求ID            |
| `requester_nick` | string         | 请求者昵称        |
| `message`        | string         | 验证消息          |
| `group_id`       | number (int64) | 群号              |
| `group_name`     | string         | 群名              |
| `checked`        | boolean        | 是否已被处理      |
| `actor`          | number (int64) | 处理者, 未处理为0 |
| `invitor_uin`    | number (int64) | 邀请者            |
| `invitor_nick`   | string         | 邀请者昵称        |

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

| 字段名                          | 数据类型 | 说明                                |
| ------------------------------- | -------- | ----------------------------------- |
| `can_at_all`                    | boolean  | 是否可以 @全体成员                  |
| `remain_at_all_count_for_group` | number   | 群内所有管理当天剩余 @全体成员 次数 |
| `remain_at_all_count_for_uin`   | number   | Bot 当天剩余 @全体成员 次数         |
