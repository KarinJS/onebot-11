# 消息相关Api

## 发送消息

- `send_msg`

::: details 点击查看请求示例数据

```json
{
  "message_type": "private",
  "user_id": 123456789,
  "message": "Hello, world!",
  "auto_escape": false // [!code error] 无收集，请自行测试此字段是否有效
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名         | 数据类型 | 默认值  | 说明                                                                                          |
| -------------- | -------- | ------- | --------------------------------------------------------------------------------------------- |
| `message_type` | string   | -       | 消息类型，支持 `private`、`group`，分别对应私聊、群组，如不传入，则根据传入的 `*_id` 参数判断 |
| `user_id`      | number   | -       | 对方 QQ 号（消息类型为 `private` 时需要）                                                     |
| `group_id`     | number   | -       | 群号（消息类型为 `group` 时需要）                                                             |
| `message`      | message  | -       | 要发送的内容                                                                                  |
| `auto_escape`  | boolean  | `false` | 消息内容是否作为纯文本发送（即不解析 CQ 码），只在 `message` 字段是字符串时有效               |

### 响应数据

| 字段名       | 数据类型       | 说明    |
| ------------ | -------------- | ------- |
| `message_id` | number (int32) | 消息 ID |

## 发送私聊消息

- `send_private_msg`

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "message": "Hello, world!",
  "auto_escape": false // [!code error] 无收集，请自行测试此字段是否有效
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名        | 数据类型 | 默认值  | 说明                                                                            |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------- |
| `user_id`     | number   | -       | 对方 QQ 号                                                                      |
| `message`     | message  | -       | 要发送的内容                                                                    |
| `auto_escape` | boolean  | `false` | 消息内容是否作为纯文本发送（即不解析 CQ 码），只在 `message` 字段是字符串时有效 |

### 响应数据

| 字段名       | 数据类型       | 说明    |
| ------------ | -------------- | ------- |
| `message_id` | number (int32) | 消息 ID |

## 发送群消息

- `send_group_msg`

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "message": "Hello, world!",
  "auto_escape": false // [!code error] 无收集，请自行测试此字段是否有效
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名        | 数据类型 | 默认值  | 说明                                                                            |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------- |
| `group_id`    | number   | -       | 群号                                                                            |
| `message`     | message  | -       | 要发送的内容                                                                    |
| `auto_escape` | boolean  | `false` | 消息内容是否作为纯文本发送（即不解析 CQ 码），只在 `message` 字段是字符串时有效 |

### 响应数据

| 字段名       | 数据类型       | 说明    |
| ------------ | -------------- | ------- |
| `message_id` | number (int32) | 消息 ID |

## 撤回消息

- `delete_msg`

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

### 参数

| 字段名       | 数据类型       | 默认值 | 说明    |
| ------------ | -------------- | ------ | ------- |
| `message_id` | number (int32) | -      | 消息 ID |

### 响应数据

无

## 获取消息

- `get_msg`

::: details 点击查看请求示例数据

```json
{
  "message_id": 123456789
}
```

:::

::: details 点击查看好友消息响应示例数据

```json
{
  "time": 1632847927,
  "self_id": 88888,
  "post_type": "message",
  "message_type": "private",
  "sub_type": "friend",
  "message_id": 123456789,
  "user_id": 123456789,
  "sender": {
    "user_id": 123456789,
    "nickname": "某用户",
    "sex": "unknown",
    "age": 0
  },
  "raw_message": "你好啊",
  "font": 1,
  "message": [
    {
      "type": "text",
      "data": {
        "text": "你好啊"
      }
    }
  ]
}
```

:::

::: details 点击查看群消息响应示例数据

```json
{
  "time": 1632847927,
  "self_id": 88888,
  "post_type": "message",
  "message_type": "group",
  "sub_type": "normal",
  "message_id": 123456789,
  "group_id": 123456789,
  "user_id": 123456789,
  "anonymous": null, // [!code error] 匿名消息已经无了
  "sender": {
    "user_id": 123456789,
    "nickname": "某用户",
    "card": "群名片",
    "sex": "unknown",
    "age": 0,
    "area": "地区",
    "level": "等级", // [!code warning] 注意 这是一个string
    "role": "member",
    "title": "头衔"
  },
  "raw_message": "你好啊",
  "font": 1,
  "message": [
    {
      "type": "text",
      "data": {
        "text": "你好啊"
      }
    }
  ]
}
```

:::

### 参数

| 字段名       | 数据类型       | 说明    |
| ------------ | -------------- | ------- |
| `message_id` | number (int32) | 消息 ID |

### 响应数据

| 字段名         | 数据类型       | 说明                                           |
| -------------- | -------------- | ---------------------------------------------- |
| `time`         | number (int32) | 发送时间                                       |
| `message_type` | string         | 消息类型，同 [消息事件](../event/message.md)   |
| `message_id`   | number (int32) | 消息 ID                                        |
| `real_id`      | number (int32) | 消息真实 ID                                    |
| `sender`       | object         | 发送人信息，同 [消息事件](../event/message.md) |
| `message`      | message        | 消息内容                                       |

## 获取合并转发消息

- `get_forward_msg`

::: details 点击查看请求示例数据

```json
{
  "id": "123456789abcdef"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message": [
    {
      "type": "node",
      "data": {
        "user_id": 123456789,
        "nickname": "某用户",
        "content": "这是一条消息"
      }
    },
    {
      "type": "node",
      "data": {
        "user_id": 987654321,
        "nickname": "某其他用户",
        "content": "这是另一条消息"
      }
    }
  ]
}
```

:::

### 参数

| 字段名 | 数据类型 | 说明        |
| ------ | -------- | ----------- |
| `id`   | string   | 合并转发 ID |

### 响应数据

| 字段名    | 类型    | 说明                                                                                                                                      |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `message` | message | 消息内容，使用 [消息的数组格式](../message/array.md) 表示，数组中的消息段全部为 [`node` 消息段](../message/segment.md#合并转发自定义节点) |

## 发送合并转发

- `send_forward_msg` (gocq拓展 此Api文档未列出 [点击查看源码](https://github.com/Mrs4s/go-cqhttp/blob/a5923f179b360331786a6509eb33481e775a7bd1/coolq/api.go#L719))

::: details 点击查看请求示例数据

```json
{
  "message_type": "group",
  "group_id": 1234567,
  "messages": [
    {
      "type": "node",
      "data": {
        "user_id": "114514",
        "nickname": "tx.sb",
        "content": [
          {
            "type": "node",
            "data": {
              "user_id": "114514",
              "nickname": "tx.sb",
              "content": [
                {
                  "type": "node",
                  "data": {
                    "user_id": "114514",
                    "nickname": "tx.sb",
                    "content": [
                      {
                        "type": "text",
                        "data": {
                          "text": "hahahah"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789,
  "forward_id": "123456789abcdef"
}
```

:::

### 参数

| 字段名         | 数据类型       | 说明                                                                                  |
| -------------- | -------------- | ------------------------------------------------------------------------------------- |
| `message_type` | string         | 消息类型 `group` `private`                                                            |
| `group_id`     | number (int64) | 群号 与 `user_id` 二选一                                                              |
| `user_id`      | number (int64) | 好友QQ号 与 `group_id` 二选一                                                         |
| `messages`     | forward node[] | 自定义转发消息, 具体看 [合并转发自定义节点](../message/segment.md#合并转发自定义节点) |

- 在 `NapCat` 中，`message_type` 无效
- 在 `Lagrange` 中，仅 `messages` 有效，并且此 `Api` 的行为是 `上传群合并转发消息并非直接发送`

### 响应数据

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `forward_id` | string         | 转发消息 ID |

- `NapCat`

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `res_id`     | string         | 转发消息 ID |

- `Lagrange`

```json
// 返回的data就是forward_id
{
  "status": "ok",
  "retcode": 0,
  "data": "string"
}
```

## 发送合并转发(群聊)

- `send_group_forward_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 1234567,
  "messages": [
    {
      "type": "node",
      "data": {
        "user_id": "114514",
        "nickname": "tx.sb",
        "content": [
          {
            "type": "node",
            "data": {
              "user_id": "114514",
              "nickname": "tx.sb",
              "content": [
                {
                  "type": "node",
                  "data": {
                    "user_id": "114514",
                    "nickname": "tx.sb",
                    "content": [
                      {
                        "type": "text",
                        "data": {
                          "text": "hahahah"
                        }
                      }
                    ]
                  }
                }
              ],
              "news": [
                {
                  "text": "第三层: 这是由napcat伪造的转发消息"
                }
              ],
              "prompt": "prompt",
              "summary": "summary",
              "source": "source"
            }
          }
        ],
        "news": [
          {
            "text": "第二层: 这是由napcat伪造的转发消息"
          }
        ],
        "prompt": "prompt",
        "summary": "summary",
        "source": "source"
      }
    }
  ],
  "news": [ // [!code warning] 这四个参数属于NapCat专属
    { // [!code warning]
      "text": "第一层: 这是由napcat伪造的转发消息" // [!code warning]
    } // [!code warning]
  ], // [!code warning]
  "prompt": "prompt", // [!code warning]
  "summary": "summary", // [!code warning]
  "source": "source" // [!code warning]
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789,
  "forward_id": "123456789abcdef"
}

// napcat
{
  "message_id": 123456789,
  "res_id": "123456789abcdef"
}
```

:::

### 参数

| 字段名     | 数据类型       | 说明                                                                                  |
| ---------- | -------------- | ------------------------------------------------------------------------------------- |
| `group_id` | number (int64) | 群号                                                                                  |
| `messages` | forward node[] | 自定义转发消息, 具体看 [合并转发自定义节点](../message/segment.md#合并转发自定义节点) |

### 响应数据

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `forward_id` | string         | 转发消息 ID |

- `NapCat`

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `res_id`     | string         | 转发消息 ID |

## 发送合并转发(好友)

- `send_private_forward_msg` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 1234567,
  "messages": [
    {
      "type": "node",
      "data": {
        "user_id": "114514",
        "nickname": "tx.sb",
        "content": [
          {
            "type": "node",
            "data": {
              "user_id": "114514",
              "nickname": "tx.sb",
              "content": [
                {
                  "type": "node",
                  "data": {
                    "user_id": "114514",
                    "nickname": "tx.sb",
                    "content": [
                      {
                        "type": "text",
                        "data": {
                          "text": "hahahah"
                        }
                      }
                    ]
                  }
                }
              ],
              "news": [
                {
                  "text": "第三层: 这是由napcat伪造的转发消息"
                }
              ],
              "prompt": "prompt",
              "summary": "summary",
              "source": "source"
            }
          }
        ],
        "news": [
          {
            "text": "第二层: 这是由napcat伪造的转发消息"
          }
        ],
        "prompt": "prompt",
        "summary": "summary",
        "source": "source"
      }
    }
  ],
  "news": [ // [!code warning] 这四个参数属于NapCat专属
    { // [!code warning]
      "text": "第一层: 这是由napcat伪造的转发消息" // [!code warning]
    } // [!code warning]
  ], // [!code warning]
  "prompt": "prompt", // [!code warning]
  "summary": "summary", // [!code warning]
  "source": "source" // [!code warning]
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "message_id": 123456789,
  "forward_id": "123456789abcdef"
}

// napcat
{
  "message_id": 123456789,
  "res_id": "123456789abcdef"
}
```

:::

### 参数

| 字段名     | 数据类型       | 说明                                                                                  |
| ---------- | -------------- | ------------------------------------------------------------------------------------- |
| `user_id`  | number (int64) | 好友QQ号                                                                              |
| `messages` | forward node[] | 自定义转发消息, 具体看 [合并转发自定义节点](../message/segment.md#合并转发自定义节点) |

### 响应数据

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `forward_id` | string         | 转发消息 ID |

- `NapCat`

| 字段名       | 数据类型       | 说明        |
| ------------ | -------------- | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `res_id`     | string         | 转发消息 ID |

## 获取消息历史记录(群聊)

- `get_group_msg_history` (gocq拓展)

::: details 点击查看请求示例数据

```json
// napcat
{
  "message_seq": 0,
  "group_id": 123456789,
  "count": 10, // [!code warning] 可选 默认20
  "reverse": false // [!code warning] 可选 默认false
}

// lagrange
{
  "message_id": 0, // 注意 这个是message_id
  "group_id": 123456789,
  "count": 10 // [!code warning] 可选 默认20
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "messages": [
    {
      "time": 1632847927,
      "self_id": 88888,
      "post_type": "message",
      "message_type": "group",
      "sub_type": "normal",
      "message_id": 123456789,
      "group_id": 123456789,
      "user_id": 123456789,
      "anonymous": null, // [!code error] 匿名消息已经无了
      "sender": {
        "user_id": 123456789,
        "nickname": "某用户",
        "card": "群名片",
        "sex": "unknown",
        "age": 0,
        "area": "地区",
        "level": "等级", // [!code warning] 注意 这是一个string
        "role": "member",
        "title": "头衔"
      },
      "raw_message": "你好啊",
      "font": 1,
      "message": [
        {
          "type": "text",
          "data": {
            "text": "你好啊"
          }
        }
      ]
    }
  ]
}
```

:::

### 参数

| 字段名        | 数据类型       | 说明                                |
| ------------- | -------------- | ----------------------------------- |
| `message_seq` | number (int64) | 起始消息序号, 可通过 `get_msg` 获得 |
| `group_id`    | number (int64) | 群号                                |

- 此字段为`NapCat`专属

| 字段名        | 数据类型       | 说明                                |
| ------------- | -------------- | ----------------------------------- |
| `message_seq` | number (int64) | 起始消息序号, 可通过 `get_msg` 获得 |
| `group_id`    | number (int64) | 群号                                |
| `count`       | number (int64) | 获取数量 可选 默认20                |
| `reverse`     | boolean        | 是否倒序 可选 默认false             |

- 此字段为`Lagrange`专属

| 字段名       | 数据类型       | 说明                 |
| ------------ | -------------- | -------------------- |
| `message_id` | number (int64) | 起始消息ID           |
| `group_id`   | number (int64) | 群号                 |
| `count`      | number (int64) | 获取数量 可选 默认20 |

### 响应数据

| 字段名     | 数据类型  | 说明                       |
| ---------- | --------- | -------------------------- |
| `messages` | Message[] | 从起始序号开始的前19条消息 |

::: tip 提示
不提供起始序号将默认获取最新的消息
:::

## 获取消息历史记录(好友)

- `get_friend_msg_history` (社区拓展)

::: details 点击查看请求示例数据

```json
// napcat
{
  "message_seq": 0,
  "user_id": 123456789,
  "count": 10, // [!code warning] 可选 默认20
  "reverse": false // [!code warning] 可选 默认false
}

// lagrange
{
  "message_id": 0, // 注意 这个是message_id
  "user_id": 123456789,
  "count": 10 // [!code warning] 可选 默认20
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "messages": [
    {
      "time": 1632847927,
      "self_id": 88888,
      "post_type": "message",
      "message_type": "private",
      "sub_type": "friend",
      "message_id": 123456789,
      "user_id": 123456789,
      "sender": {
        "user_id": 123456789,
        "nickname": "某用户",
        "sex": "unknown",
        "age": 0,
      },
      "raw_message": "你好啊",
      "font": 1,
      "message": [
        {
          "type": "text",
          "data": {
            "text": "你好啊"
          }
        }
      ]
    }
  ]
}
```

:::

### 参数

- 此字段为`NapCat`专属

| 字段名        | 数据类型       | 说明                                |
| ------------- | -------------- | ----------------------------------- |
| `message_seq` | number (int64) | 起始消息序号, 可通过 `get_msg` 获得 |
| `user_id`     | number (int64) | 好友QQ号                            |
| `count`       | number (int64) | 获取数量 可选 默认20                |
| `reverse`     | boolean        | 是否倒序 可选 默认false             |

- 此字段为`Lagrange`专属

| 字段名       | 数据类型       | 说明                 |
| ------------ | -------------- | -------------------- |
| `message_id` | number (int64) | 起始消息ID           |
| `user_id`    | number (int64) | 好友QQ号             |
| `count`      | number (int64) | 获取数量 可选 默认20 |


### 响应数据

| 字段名     | 数据类型  | 说明                       |
| ---------- | --------- | -------------------------- |
| `messages` | Message[] | 从起始序号开始的前19条消息 |

::: tip 提示
不提供起始序号将默认获取最新的消息
:::
