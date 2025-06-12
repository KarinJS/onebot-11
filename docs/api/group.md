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

## 设置群Bot发言状态

- `set_group_bot_status` (Lagrange拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 0,
  "bot_id": 0,
  "enable": 0
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明   |
| ---------- | -------- | ------ | ------ |
| `group_id` | number   | -      | 群号   |
| `bot_id`   | number   | -      | Bot ID |
| `enable`   | number   | -      | 状态   |

### 响应数据

- `Lagrange`: 返回值为 `机器人ID`，`number`类型

## 群组踢多人

- `set_group_kick_members` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_ids": [123456789, 987654321],
  "reject_add_request": false
}
```

:::

### 参数

| 字段名               | 数据类型 | 默认值  | 说明                 |
| -------------------- | -------- | ------- | -------------------- |
| `group_id`           | number   | -       | 群号                 |
| `user_ids`           | number[] | -       | 要踢的群成员QQ号数组 |
| `reject_add_request` | boolean  | `false` | 拒绝此人的加群请求   |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置机器人进群选项

- `set_group_robot_add_option` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "robot_member_switch": 0,
  "robot_member_examine": 0
}
```

:::

### 参数

| 字段名                 | 数据类型 | 默认值 | 说明                   |
| ---------------------- | -------- | ------ | ---------------------- |
| `group_id`             | number   | -      | 群号                   |
| `robot_member_switch`  | number   | -      | 可选，机器人入群选项   |
| `robot_member_examine` | number   | -      | 可选，器人入群审核选项 |

- `robot_member_switch` 与 `robot_member_examine` 需要组合使用
  - 无需管理员审核
    - `robot_member_switch`: 0
    - `robot_member_examine`: 0
  - 需要管理员审核
    - `robot_member_switch`: 0
    - `robot_member_examine`: 2
  - `禁止Bot入群`
    - `robot_member_switch`: 1
    - `robot_member_examine`: 2
  - 如 `禁止Bot入群` 未生效，请尝试不传递 `robot_member_examine` 字段

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置群添加选项

- `set_group_add_option` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "add_type": 1,
  "group_question": "验证问题",
  "group_answer": "验证答案"
}
```

:::

### 参数

| 字段名           | 数据类型 | 默认值 | 说明                                         |
| ---------------- | -------- | ------ | -------------------------------------------- |
| `group_id`       | number   | -      | 群号                                         |
| `add_type`       | number   | -      | 加群选项，请参考下方 `add_type` 说明         |
| `group_question` | string   | -      | 可选，当`add_type`为 `4` 或 `5` 时的验证问题 |
| `group_answer`   | string   | -      | 可选，当`add_type`为 `4` 时的正确答案        |

- `add_type`:
  - 1: 允许任何人加群
  - 2: 需要管理员审核
  - 3: 禁止任何人加群
  - 4: 问题答案正确可直接加群
  - 5: 问题需管理员审核

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置群搜索

- `set_group_search` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "no_code_finger_open": 1,
  "no_code_finger_close": 1
}
```

:::

### 参数

| 字段名                 | 数据类型 | 默认值 | 说明                         |
| ---------------------- | -------- | ------ | ---------------------------- |
| `group_id`             | number   | -      | 群号                         |
| `no_code_finger_open`  | number   | 0      | 可选，是否开启扫码加群 `0/1` |
| `no_code_finger_close` | number   | 0      | 可选，是否关闭扫码加群 `0/1` |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 设置群备注

- `set_group_remark` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "remark": "新的群备注"
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明   |
| ---------- | -------- | ------ | ------ |
| `group_id` | number   | -      | 群号   |
| `remark`   | string   | -      | 群备注 |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 群内戳一戳

- `group_poke` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "user_id": 123456789,
  "target_id": 123456789
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                 |
| ----------- | -------- | ------ | ------------------------------------ |
| `group_id`  | number   | -      | 群号                                 |
| `user_id`   | number   | -      | 被戳的成员QQ号 与 `target_id` 二选一 |
| `target_id` | number   | -      | 戳的成员QQ号 与 `user_id` 二选一     |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取群信息扩展

- `get_group_info_ex` (NapCat拓展)

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
  "groupCode": "967068507", // 群号
  "resultCode": 0, // 结果码
  "extInfo": { // 扩展信息
    "groupInfoExtSeq": 162, // 群信息扩展序号
    "reserve": 0, // 保留字段
    "luckyWordId": "1", // 幸运词ID
    "lightCharNum": 1, // 幸运词数量
    "luckyWord": "128√e980", // 幸运词
    "starId": 0, // 群星级
    "essentialMsgSwitch": 0, // 群内消息免打扰
    "todoSeq": 0, // 待办事项序号
    "blacklistExpireTime": 0, // 黑名单过期时间
    "isLimitGroupRtc": 0, // 是否限制群聊
    "companyId": 0, // 公司ID
    "hasGroupCustomPortrait": 1, // 是否设置群聊头像
    "bindGuildId": "0", // 绑定群聊ID
    "groupOwnerId": { // 群主信息
      "memberUin": "xxx", // 群主QQ号
      "memberUid": "u_xxxx", // 群主UID
      "memberQid": "" // 群主QID
    },
    "essentialMsgPrivilege": 0, // 群内消息免打扰权限
    "msgEventSeq": "0", // 消息事件序号
    "inviteRobotSwitch": 0, // 机器人邀请开关
    "gangUpId": "0", // 群聊ID
    "qqMusicMedalSwitch": 0, // 群聊勋章开关
    "showPlayTogetherSwitch": 0, // 群聊一起听开关
    "groupFlagPro1": "0", // 群聊标识
    "groupBindGuildIds": { // 绑定频道ID列表
      "guildIds": [] // 频道ID列表
    },
    "viewedMsgDisappearTime": "0", // 已读消息消失时间
    "groupExtFlameData": { // 群聊火焰数据
      "switchState": 0, // 开关状态
      "state": 0, // 状态
      "dayNums": [], // 天数列表
      "version": 0, // 版本
      "updateTime": "0", // 更新时间
      "isDisplayDayNum": false // 是否显示天数
    },
    "groupBindGuildSwitch": 2, // 绑定频道开关
    "groupAioBindGuildId": "0", // 群聊ID
    "groupExcludeGuildIds": { // 排除频道ID列表
      "guildIds": [] // 频道ID列表
    },
    "fullGroupExpansionSwitch": 0, // 群聊扩展开关
    "fullGroupExpansionSeq": "0", // 群聊扩展序号
    "inviteRobotMemberSwitch": 1, // 机器人邀请开关
    "inviteRobotMemberExamine": 0, // 机器人邀请审核
    "groupSquareSwitch": 0 // 群聊广场开关
  }
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

| 字段名       | 数据类型            | 说明     |
| ------------ | ------------------- | -------- |
| `groupCode`  | string              | 群号     |
| `resultCode` | number              | 结果码   |
| `extInfo`    | [extInfo](#extInfo) | 扩展信息 |

#### extInfo

| 字段名                     | 数据类型                                      | 说明               |
| -------------------------- | --------------------------------------------- | ------------------ |
| `groupInfoExtSeq`          | number                                        | 群信息扩展序号     |
| `reserve`                  | number                                        | 保留字段           |
| `luckyWordId`              | string                                        | 幸运词ID           |
| `lightCharNum`             | number                                        | 幸运词数量         |
| `luckyWord`                | string                                        | 幸运词             |
| `starId`                   | number                                        | 群星级             |
| `essentialMsgSwitch`       | number                                        | 群内消息免打扰     |
| `todoSeq`                  | number                                        | 待办事项序号       |
| `blacklistExpireTime`      | number                                        | 黑名单过期时间     |
| `isLimitGroupRtc`          | number                                        | 是否限制群聊       |
| `companyId`                | number                                        | 公司ID             |
| `hasGroupCustomPortrait`   | number                                        | 是否设置群聊头像   |
| `bindGuildId`              | string                                        | 绑定群聊ID         |
| `essentialMsgPrivilege`    | number                                        | 群内消息免打扰权限 |
| `msgEventSeq`              | string                                        | 消息事件序号       |
| `inviteRobotSwitch`        | number                                        | 机器人邀请开关     |
| `gangUpId`                 | string                                        | 群聊ID             |
| `qqMusicMedalSwitch`       | number                                        | 群聊勋章开关       |
| `showPlayTogetherSwitch`   | number                                        | 群聊一起听开关     |
| `groupFlagPro1`            | string                                        | 群聊标识           |
| `viewedMsgDisappearTime`   | string                                        | 已读消息消失时间   |
| `groupBindGuildSwitch`     | number                                        | 绑定频道开关       |
| `groupAioBindGuildId`      | string                                        | 群聊ID             |
| `fullGroupExpansionSwitch` | number                                        | 群聊扩展开关       |
| `fullGroupExpansionSeq`    | string                                        | 群聊扩展序号       |
| `inviteRobotMemberSwitch`  | number                                        | 机器人邀请开关     |
| `inviteRobotMemberExamine` | number                                        | 机器人邀请审核     |
| `groupSquareSwitch`        | number                                        | 群聊广场开关       |
| `groupOwnerId`             | [groupOwnerId](#groupOwnerId)                 | 群主信息           |
| `groupBindGuildIds`        | [groupBindGuildIds](#groupBindGuildIds)       | 绑定频道ID列表     |
| `groupExtFlameData`        | [groupExtFlameData](#groupExtFlameData)       | 群聊火焰数据       |
| `groupExcludeGuildIds`     | [groupExcludeGuildIds](#groupExcludeGuildIds) | 排除频道ID列表     |

#### groupOwnerId

| 字段名      | 数据类型 | 说明     |
| ----------- | -------- | -------- |
| `memberUin` | string   | 群主QQ号 |
| `memberUid` | string   | 群主UID  |
| `memberQid` | string   | 群主QID  |

#### groupBindGuildIds

| 字段名   | 数据类型 | 说明       |
| -------- | -------- | ---------- |
| `guilds` | array    | 频道ID列表 |

#### groupExtFlameData

| 字段名        | 数据类型 | 说明     |
| ------------- | -------- | -------- |
| `switchState` | number   | 开关状态 |
| `state`       | number   | 状态     |

#### groupExcludeGuildIds

| 字段名   | 数据类型 | 说明       |
| -------- | -------- | ---------- |
| `guilds` | array    | 频道ID列表 |

## 获取群详细信息

- `get_group_detail_info` (NapCat拓展)

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
  "groupCode": "xxx", // 群号
  "groupUin": "xxx", // 群聊ID
  "ownerUid": "u_xxx", // 群主UID
  "ownerUin": "xxx", // 群主QQ号
  "groupFlag": 123456789, // 群聊标识
  "groupFlagExt": 123456789, // 群聊标识扩展
  "maxMemberNum": 500, // 最大成员数
  "memberNum": 196, // 成员数
  "groupOption": 5, // 群聊选项
  "classExt": 34, // 群聊分类
  "groupName": "string", // 群名称
  "fingerMemo": "string", // 群备注
  "groupQuestion": "string", // 群验证问题
  "certType": 0, // 群认证类型
  "richFingerMemo": "string", // 群备注
  "tagRecord": [], // 群标签
  "shutUpAllTimestamp": 0, // 全员禁言时间
  "shutUpMeTimestamp": 1744588992, // 禁言时间
  "groupTypeFlag": 0, // 群类型
  "privilegeFlag": 269058240, // 权限
  "groupSecLevel": 0, // 群等级
  "groupFlagExt3": 128, // 群聊标识扩展
  "isConfGroup": 0, // 是否为频道
  "isModifyConfGroupFace": 1, // 是否可以修改频道头像
  "isModifyConfGroupName": 1, // 是否可以修改频道名称
  "groupFlagExt4": 131080, // 群聊标识扩展
  "groupMemo": "string", // 群备注
  "cmdUinMsgSeq": 305695, // 消息序号
  "cmdUinJoinTime": 1743251232, // 加入时间
  "cmdUinUinFlag": 0, // 群聊标识
  "cmdUinMsgMask": 4, // 消息掩码
  "groupSecLevelInfo": 0, // 群等级
  "cmdUinPrivilege": 2, // 权限
  "cmdUinFlagEx2": 0, // 群聊标识扩展
  "appealDeadline": 0, // 申诉截止时间
  "remarkName": "string", // 群备注
  "isTop": false, // 是否置顶
  "groupFace": 0, // 群头像
  "groupGeoInfo": { // 地理位置 实际这个字段啥也拿不到 全是空值
    "ownerUid": "string", // 群主UID 
    "SetTime": 0, // 设置时间
    "CityId": 0, // 城市ID
    "Longitude": "0", // 经度
    "Latitude": "0", // 纬度
    "GeoContent": "string", // 地理位置
    "poiId": "0" // 位置ID
  },
  "certificationText": "", // 认证文本
  "cmdUinRingtoneId": 0, // 铃声ID
  "longGroupName": "", // 群名称
  "autoAgreeJoinGroupUserNumForConfGroup": 50, // 自动同意加入群聊人数
  "autoAgreeJoinGroupUserNumForNormalGroup": 50, // 自动同意加入群聊人数
  "cmdUinFlagExt3Grocery": 0, // 群聊标识扩展
  "groupCardPrefix": { // 群名片前缀
    "introduction": "string", // 群介绍
    "rptPrefix": [] // 群名片前缀
  },
  "groupExt": { // 群聊扩展
    "groupInfoExtSeq": 162, // 群信息扩展序号
    "reserve": 0, // 保留字段
    "luckyWordId": "1", // 幸运词ID
    "lightCharNum": 1, // 幸运词数量
    "luckyWord": "128√e980", // 幸运词
    "starId": 0, // 群星级
    "essentialMsgSwitch": 0, // 群内消息免打扰
    "todoSeq": 0, // 待办事项序号
    "blacklistExpireTime": 0, // 黑名单过期时间
    "isLimitGroupRtc": 0, // 是否限制群聊
    "companyId": 0, // 公司ID
    "hasGroupCustomPortrait": 1, // 是否设置群聊头像
    "bindGuildId": "0", // 绑定群聊ID
    "groupOwnerId": { // 群主信息
      "memberUin": "xxx", // 群主QQ号
      "memberUid": "u_xxx", // 群主UID
      "memberQid": "xxx" // 群主QID
    },
    "essentialMsgPrivilege": 0, // 群内消息免打扰权限
    "msgEventSeq": "0", // 消息事件序号
    "inviteRobotSwitch": 0, // 机器人邀请开关
    "gangUpId": "0", // 群聊ID
    "qqMusicMedalSwitch": 0, // 群聊勋章开关
    "showPlayTogetherSwitch": 0, // 群聊一起听开关
    "groupFlagPro1": "0", // 群聊标识
    "groupBindGuildIds": { // 绑定频道ID列表
      "guildIds": [] // 频道ID列表
    },
    "viewedMsgDisappearTime": "0", // 已读消息消失时间
    "groupExtFlameData": { // 群聊火焰数据
      "switchState": 0, // 开关状态
      "state": 0, // 状态
      "dayNums": [], // 天数列表
      "version": 0, // 版本
      "updateTime": "0", // 更新时间
      "isDisplayDayNum": false // 是否显示天数
    },
    "groupBindGuildSwitch": 2, // 绑定频道开关
    "groupAioBindGuildId": "0", // 群聊ID
    "groupExcludeGuildIds": { // 排除频道ID列表
      "guildIds": [] // 频道ID列表
    },
    "fullGroupExpansionSwitch": 0, // 群聊扩展开关
    "fullGroupExpansionSeq": "0", // 群聊扩展序号
    "inviteRobotMemberSwitch": 1, // 机器人邀请开关
    "inviteRobotMemberExamine": 0, // 机器人邀请审核
    "groupSquareSwitch": 0 // 群聊广场开关
  },
  "msgLimitFrequency": 0, // 消息限制频率
  "hlGuildAppid": 0, // 频道ID
  "hlGuildSubType": 0, // 频道子类型
  "isAllowRecallMsg": 0, // 是否允许撤回消息
  "confUin": "0", // 频道ID
  "confMaxMsgSeq": 0, // 频道最大消息序号
  "confToGroupTime": 0, // 频道加入时间
  "groupSchoolInfo": { // 群聊学校信息
    "location": "", // 位置
    "grade": 0, // 年级
    "school": "" // 学校
  },
  "activeMemberNum": 101, // 活跃成员数
  "groupGrade": 3, // 群等级
  "groupCreateTime": 1718463457, // 群创建时间
  "subscriptionUin": "0", // 订阅ID
  "subscriptionUid": "u_invalid_______________", // 订阅UID
  "noFingerOpenFlag": 1, // 指纹开锁
  "noCodeFingerOpenFlag": 0, // 指纹开锁
  "isGroupFreeze": 0, // 群聊冻结
  "allianceId": "0", // 联盟ID
  "groupExtOnly": { // 群聊扩展
    "tribeId": 0, // 部落ID
    "moneyForAddGroup": 0 // 加群费用
  },
  "isAllowConfGroupMemberModifyGroupName": 0, // 是否允许频道成员修改群名称
  "isAllowConfGroupMemberNick": 0, // 是否允许频道成员修改群昵称
  "isAllowConfGroupMemberAtAll": 0, // 是否允许频道成员@全体
  "groupClassText": "", // 群聊分类文本
  "groupFreezeReason": 0, // 群聊冻结原因
  "headPortraitSeq": 1, // 头像序号
  "groupHeadPortrait": { // 群聊头像
    "portraitCnt": 0, // 头像数量
    "portraitInfo": [], // 头像信息
    "defaultId": 0, // 默认头像ID
    "verifyingPortraitCnt": 0, // 验证头像数量
    "verifyingPortraitInfo": [] // 验证头像信息
  },
  "cmdUinJoinMsgSeq": 305721, // 加入消息序号
  "cmdUinJoinRealMsgSeq": 0, // 加入消息序号
  "groupAnswer": "", // 群聊验证问题
  "groupAdminMaxNum": 15, // 群管理员最大数量
  "inviteNoAuthNumLimit": "0", // 邀请无权限数量限制
  "hlGuildOrgId": 0, // 频道组织ID
  "isAllowHlGuildBinary": 0, // 是否允许频道绑定
  "localExitGroupReason": 0, // 本地退出群聊原因
  "group_all_shut": 0, // 群聊全员禁言
  "group_remark": "", // 群聊备注
  "group_id": 967068507, // 群号
  "group_name": "string", // 群名称
  "member_count": 196, // 成员数
  "max_member_count": 500 // 最大成员数
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

> [!note] 参数较为复杂 推荐直接查看响应示例

| 字段名                                    | 数据类型                                | 说明                         |
| ----------------------------------------- | --------------------------------------- | ---------------------------- |
| `groupCode`                               | string                                  | 群号                         |
| `groupUin`                                | string                                  | 群聊ID                       |
| `ownerUid`                                | string                                  | 群主UID                      |
| `ownerUin`                                | string                                  | 群主QQ号                     |
| `groupFlag`                               | number                                  | 群聊标识                     |
| `groupFlagExt`                            | number                                  | 群聊标识扩展                 |
| `maxMemberNum`                            | number                                  | 最大成员数                   |
| `memberNum`                               | number                                  | 成员数                       |
| `groupOption`                             | number                                  | 群聊选项                     |
| `classExt`                                | number                                  | 群聊分类                     |
| `groupName`                               | string                                  | 群名称                       |
| `fingerMemo`                              | string                                  | 群备注                       |
| `groupQuestion`                           | string                                  | 群验证问题                   |
| `certType`                                | number                                  | 群认证类型                   |
| `richFingerMemo`                          | string                                  | 群备注                       |
| `tagRecord`                               | array                                   | 群标签                       |
| `shutUpAllTimestamp`                      | number                                  | 全员禁言时间                 |
| `shutUpMeTimestamp`                       | number                                  | 禁言时间                     |
| `groupTypeFlag`                           | number                                  | 群类型                       |
| `privilegeFlag`                           | number                                  | 权限                         |
| `groupSecLevel`                           | number                                  | 群等级                       |
| `groupFlagExt3`                           | number                                  | 群聊标识扩展                 |
| `isConfGroup`                             | number                                  | 是否为频道                   |
| `isModifyConfGroupFace`                   | number                                  | 是否可以修改频道头像         |
| `isModifyConfGroupName`                   | number                                  | 是否可以修改频道名称         |
| `groupFlagExt4`                           | number                                  | 群聊标识扩展                 |
| `groupMemo`                               | string                                  | 群备注                       |
| `cmdUinMsgSeq`                            | number                                  | 消息序号                     |
| `cmdUinJoinTime`                          | number                                  | 加入时间                     |
| `cmdUinUinFlag`                           | number                                  | 群聊标识                     |
| `cmdUinMsgMask`                           | number                                  | 消息掩码                     |
| `groupSecLevelInfo`                       | number                                  | 群等级                       |
| `cmdUinPrivilege`                         | number                                  | 权限                         |
| `cmdUinFlagEx2`                           | number                                  | 群聊标识扩展                 |
| `appealDeadline`                          | number                                  | 申诉截止时间                 |
| `remarkName`                              | string                                  | 群备注                       |
| `isTop`                                   | boolean                                 | 是否置顶                     |
| `groupFace`                               | number                                  | 群头像                       |
| `groupGeoInfo`                            | [groupGeoInfo](#groupGeoInfo)           | 地理位置信息                 |
| `certificationText`                       | string                                  | 认证文本                     |
| `cmdUinRingtoneId`                        | number                                  | 铃声ID                       |
| `longGroupName`                           | string                                  | 群名称                       |
| `autoAgreeJoinGroupUserNumForConfGroup`   | number                                  | 自动同意加入群聊人数(频道)   |
| `autoAgreeJoinGroupUserNumForNormalGroup` | number                                  | 自动同意加入群聊人数(普通群) |
| `cmdUinFlagExt3Grocery`                   | number                                  | 群聊标识扩展                 |
| `groupCardPrefix`                         | [groupCardPrefix](#groupCardPrefix)     | 群名片前缀                   |
| `groupExt`                                | [groupExt](#groupExt)                   | 群聊扩展信息                 |
| `msgLimitFrequency`                       | number                                  | 消息限制频率                 |
| `hlGuildAppid`                            | number                                  | 频道ID                       |
| `hlGuildSubType`                          | number                                  | 频道子类型                   |
| `isAllowRecallMsg`                        | number                                  | 是否允许撤回消息             |
| `confUin`                                 | string                                  | 频道ID                       |
| `confMaxMsgSeq`                           | number                                  | 频道最大消息序号             |
| `confToGroupTime`                         | number                                  | 频道加入时间                 |
| `groupSchoolInfo`                         | [groupSchoolInfo](#groupSchoolInfo)     | 群聊学校信息                 |
| `activeMemberNum`                         | number                                  | 活跃成员数                   |
| `groupGrade`                              | number                                  | 群等级                       |
| `groupCreateTime`                         | number                                  | 群创建时间                   |
| `subscriptionUin`                         | string                                  | 订阅ID                       |
| `subscriptionUid`                         | string                                  | 订阅UID                      |
| `noFingerOpenFlag`                        | number                                  | 指纹开锁标志                 |
| `noCodeFingerOpenFlag`                    | number                                  | 指纹开锁标志                 |
| `isGroupFreeze`                           | number                                  | 群聊冻结状态                 |
| `allianceId`                              | string                                  | 联盟ID                       |
| `groupExtOnly`                            | [groupExtOnly](#groupExtOnly)           | 群聊扩展                     |
| `isAllowConfGroupMemberModifyGroupName`   | number                                  | 是否允许频道成员修改群名称   |
| `isAllowConfGroupMemberNick`              | number                                  | 是否允许频道成员修改群昵称   |
| `isAllowConfGroupMemberAtAll`             | number                                  | 是否允许频道成员@全体        |
| `groupClassText`                          | string                                  | 群聊分类文本                 |
| `groupFreezeReason`                       | number                                  | 群聊冻结原因                 |
| `headPortraitSeq`                         | number                                  | 头像序号                     |
| `groupHeadPortrait`                       | [groupHeadPortrait](#groupHeadPortrait) | 群聊头像                     |
| `cmdUinJoinMsgSeq`                        | number                                  | 加入消息序号                 |
| `cmdUinJoinRealMsgSeq`                    | number                                  | 加入消息序号                 |
| `groupAnswer`                             | string                                  | 群聊验证问题                 |
| `groupAdminMaxNum`                        | number                                  | 群管理员最大数量             |
| `inviteNoAuthNumLimit`                    | string                                  | 邀请无权限数量限制           |
| `hlGuildOrgId`                            | number                                  | 频道组织ID                   |
| `isAllowHlGuildBinary`                    | number                                  | 是否允许频道绑定             |
| `localExitGroupReason`                    | number                                  | 本地退出群聊原因             |
| `group_all_shut`                          | number                                  | 群聊全员禁言                 |
| `group_remark`                            | string                                  | 群聊备注                     |
| `group_id`                                | number                                  | 群号                         |
| `group_name`                              | string                                  | 群名称                       |
| `member_count`                            | number                                  | 成员数                       |
| `max_member_count`                        | number                                  | 最大成员数                   |

#### groupGeoInfo

| 字段名       | 数据类型 | 说明     |
| ------------ | -------- | -------- |
| `ownerUid`   | string   | 群主UID  |
| `SetTime`    | number   | 设置时间 |
| `CityId`     | number   | 城市ID   |
| `Longitude`  | string   | 经度     |
| `Latitude`   | string   | 纬度     |
| `GeoContent` | string   | 地理位置 |
| `poiId`      | string   | 位置ID   |

#### groupCardPrefix

| 字段名         | 数据类型 | 说明       |
| -------------- | -------- | ---------- |
| `introduction` | string   | 群介绍     |
| `rptPrefix`    | array    | 群名片前缀 |

#### groupExt

| 字段名                     | 数据类型                                       | 说明               |
| -------------------------- | ---------------------------------------------- | ------------------ |
| `groupInfoExtSeq`          | number                                         | 群信息扩展序号     |
| `reserve`                  | number                                         | 保留字段           |
| `luckyWordId`              | string                                         | 幸运词ID           |
| `lightCharNum`             | number                                         | 幸运词数量         |
| `luckyWord`                | string                                         | 幸运词             |
| `starId`                   | number                                         | 群星级             |
| `essentialMsgSwitch`       | number                                         | 群内消息免打扰     |
| `todoSeq`                  | number                                         | 待办事项序号       |
| `blacklistExpireTime`      | number                                         | 黑名单过期时间     |
| `isLimitGroupRtc`          | number                                         | 是否限制群聊       |
| `companyId`                | number                                         | 公司ID             |
| `hasGroupCustomPortrait`   | number                                         | 是否设置群聊头像   |
| `bindGuildId`              | string                                         | 绑定群聊ID         |
| `groupOwnerId`             | [groupOwnerId](#groupOwnerId2)                 | 群主信息           |
| `essentialMsgPrivilege`    | number                                         | 群内消息免打扰权限 |
| `msgEventSeq`              | string                                         | 消息事件序号       |
| `inviteRobotSwitch`        | number                                         | 机器人邀请开关     |
| `gangUpId`                 | string                                         | 群聊ID             |
| `qqMusicMedalSwitch`       | number                                         | 群聊勋章开关       |
| `showPlayTogetherSwitch`   | number                                         | 群聊一起听开关     |
| `groupFlagPro1`            | string                                         | 群聊标识           |
| `groupBindGuildIds`        | [groupBindGuildIds](#groupBindGuildIds2)       | 绑定频道ID列表     |
| `viewedMsgDisappearTime`   | string                                         | 已读消息消失时间   |
| `groupExtFlameData`        | [groupExtFlameData](#groupExtFlameData2)       | 群聊火焰数据       |
| `groupBindGuildSwitch`     | number                                         | 绑定频道开关       |
| `groupAioBindGuildId`      | string                                         | 群聊ID             |
| `groupExcludeGuildIds`     | [groupExcludeGuildIds](#groupExcludeGuildIds2) | 排除频道ID列表     |
| `fullGroupExpansionSwitch` | number                                         | 群聊扩展开关       |
| `fullGroupExpansionSeq`    | string                                         | 群聊扩展序号       |
| `inviteRobotMemberSwitch`  | number                                         | 机器人邀请开关     |
| `inviteRobotMemberExamine` | number                                         | 机器人邀请审核     |
| `groupSquareSwitch`        | number                                         | 群聊广场开关       |

#### groupOwnerId2

| 字段名      | 数据类型 | 说明     |
| ----------- | -------- | -------- |
| `memberUin` | string   | 群主QQ号 |
| `memberUid` | string   | 群主UID  |
| `memberQid` | string   | 群主QID  |

#### groupBindGuildIds2

| 字段名     | 数据类型 | 说明       |
| ---------- | -------- | ---------- |
| `guildIds` | array    | 频道ID列表 |

#### groupExtFlameData2

| 字段名            | 数据类型 | 说明         |
| ----------------- | -------- | ------------ |
| `switchState`     | number   | 开关状态     |
| `state`           | number   | 状态         |
| `dayNums`         | array    | 天数列表     |
| `version`         | number   | 版本         |
| `updateTime`      | string   | 更新时间     |
| `isDisplayDayNum` | boolean  | 是否显示天数 |

#### groupExcludeGuildIds2

| 字段名     | 数据类型 | 说明       |
| ---------- | -------- | ---------- |
| `guildIds` | array    | 频道ID列表 |

#### groupSchoolInfo

| 字段名     | 数据类型 | 说明 |
| ---------- | -------- | ---- |
| `location` | string   | 位置 |
| `grade`    | number   | 年级 |
| `school`   | string   | 学校 |

#### groupExtOnly

| 字段名             | 数据类型 | 说明     |
| ------------------ | -------- | -------- |
| `tribeId`          | number   | 部落ID   |
| `moneyForAddGroup` | number   | 加群费用 |

#### groupHeadPortrait

| 字段名                  | 数据类型 | 说明         |
| ----------------------- | -------- | ------------ |
| `portraitCnt`           | number   | 头像数量     |
| `portraitInfo`          | array    | 头像信息     |
| `defaultId`             | number   | 默认头像ID   |
| `verifyingPortraitCnt`  | number   | 验证头像数量 |
| `verifyingPortraitInfo` | array    | 验证头像信息 |

## 获取被过滤的加群请求

- `get_group_ignore_add_request` (NapCat拓展)

::: details 点击查看响应示例数据

```json
[
  {
    "request_id": 123456789,
    "invitor_uin": 123456789,
    "invitor_nick": "string",
    "group_id": 123456789,
    "group_name": "string",
    "message": "string",
    "checked": true,
    "actor": 123456789,
    "requester_nick": "string"
  }
]
```

:::

### 参数

::: tip 提示
该 API 没有请求参数
:::

### 响应数据

响应数据为数组 每个元素为一个对象 对象的属性如下

| 字段名           | 数据类型 | 说明       |
| ---------------- | -------- | ---------- |
| `request_id`     | number   | 请求ID     |
| `invitor_uin`    | number   | 邀请者QQ号 |
| `invitor_nick`   | string   | 邀请者昵称 |
| `group_id`       | number   | 群号       |
| `group_name`     | string   | 群名称     |
| `message`        | string   | 验证消息   |
| `checked`        | boolean  | 是否已处理 |
| `actor`          | number   | 操作人QQ号 |
| `requester_nick` | string   | 请求者昵称 |

## 获取群禁言列表

- `get_group_shut_list` (NapCat拓展)

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
    "uid": "u_xxx", // 用户UID
    "qid": "", // 用户QID
    "uin": "QQ号", // 用户QQ号
    "nick": "昵称", // 用户昵称
    "remark": "", // 备注
    "cardType": 0, // 群名片类型
    "cardName": "群名片", // 群名片
    "role": 3, // 角色
    "avatarPath": "", // 头像路径
    "shutUpTime": 1749730698, // 禁言时间
    "isDelete": false, // 是否删除
    "isSpecialConcerned": false, // 是否特别关注
    "isSpecialShield": false, // 是否特别屏蔽
    "isRobot": false, // 是否机器人
    "groupHonor": { // 群荣誉
      "0": 8,
      "1": 3,
      "2": 8,
      "3": 1,
      "4": 16,
      "5": 32
    },
    "memberRealLevel": 32, // 成员真实等级
    "memberLevel": 1, // 成员等级
    "globalGroupLevel": 0, // 全局群等级
    "globalGroupPoint": 0, // 全局群积分
    "memberTitleId": 10315, // 成员头衔ID
    "memberSpecialTitle": "昵称", // 成员特殊头衔
    "specialTitleExpireTime": "4294967295", // 特殊头衔过期时间
    "userShowFlag": 1, // 用户展示标志
    "userShowFlagNew": 0, // 用户展示标志新
    "richFlag": 0, // 富文本标志
    "mssVipType": 0, // 会员类型
    "bigClubLevel": 0, // 大群等级
    "bigClubFlag": 0, // 大群标志
    "autoRemark": "", // 自动备注
    "creditLevel": 0, // 信用等级
    "joinTime": 1720265206, // 加入时间
    "lastSpeakTime": 1749730094, // 最后发言时间
    "memberFlag": 1, // 成员标志
    "memberFlagExt": 1, // 成员标志扩展
    "memberMobileFlag": 1, // 成员手机标志
    "memberFlagExt2": 0, // 成员标志扩展2
    "isSpecialShielded": false, // 是否特别屏蔽
    "cardNameId": 0 // 群名片ID
  }
]
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

响应数据为数组 每个元素为一个对象 对象的属性如下

| 字段名                   | 数据类型 | 说明             |
| ------------------------ | -------- | ---------------- |
| `uid`                    | string   | 用户UID          |
| `qid`                    | string   | 用户QID          |
| `uin`                    | number   | 用户QQ号         |
| `nick`                   | string   | 用户昵称         |
| `remark`                 | string   | 备注             |
| `cardType`               | number   | 群名片类型       |
| `cardName`               | string   | 群名片           |
| `role`                   | number   | 角色             |
| `avatarPath`             | string   | 头像路径         |
| `shutUpTime`             | number   | 禁言时间         |
| `isDelete`               | boolean  | 是否删除         |
| `isSpecialConcerned`     | boolean  | 是否特别关注     |
| `isSpecialShield`        | boolean  | 是否特别屏蔽     |
| `isRobot`                | boolean  | 是否机器人       |
| `groupHonor`             | object   | 群荣誉           |
| `memberRealLevel`        | number   | 成员真实等级     |
| `memberLevel`            | number   | 成员等级         |
| `globalGroupLevel`       | number   | 全局群等级       |
| `globalGroupPoint`       | number   | 全局群积分       |
| `memberTitleId`          | number   | 成员头衔ID       |
| `memberSpecialTitle`     | string   | 成员特殊头衔     |
| `specialTitleExpireTime` | string   | 特殊头衔过期时间 |
| `userShowFlag`           | number   | 用户展示标志     |
| `userShowFlagNew`        | number   | 用户展示标志新   |
| `richFlag`               | number   | 富文本标志       |
| `mssVipType`             | number   | 会员类型         |
| `bigClubLevel`           | number   | 大群等级         |
| `bigClubFlag`            | number   | 大群标志         |
| `autoRemark`             | string   | 自动备注         |
| `creditLevel`            | number   | 信用等级         |
| `joinTime`               | number   | 加入时间         |
| `lastSpeakTime`          | number   | 最后发言时间     |
| `memberFlag`             | number   | 成员标志         |
| `memberFlagExt`          | number   | 成员标志扩展     |
| `memberMobileFlag`       | number   | 成员手机标志     |
| `memberFlagExt2`         | number   | 成员标志扩展2    |
| `isSpecialShielded`      | boolean  | 是否特别屏蔽     |
| `cardNameId`             | number   | 群名片ID         |

## 获取群过滤系统消息

- `get_group_ignored_notifies` (NapCat拓展)

::: details 点击查看响应示例数据

```json
{
  // 在4.7.79版本中新增了 invited_requests 与 InvitedRequest 一致
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

| 字段名     | 数据类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ---- |
| `group_id` | number   | -      | 群号 |

### 响应数据

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