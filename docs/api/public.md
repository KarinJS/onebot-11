# 公开 API

> [!note] 点击右边导航栏可以快捷跳转至对应API
> 对于实现了`OneBot11`标准的协议框架  
> 目前仅收集`NapCat`、`Lagrange.OneBot`、`gocq`的实现  
> 对于`gocq`，目前仅靠`gocq`文档收集，可能存在遗漏  
> 如有更多框架实现补充，欢迎提交PR

- `send_private_msg`: 标准API
- `send_group_msg`: 标准API
- `send_msg`: 标准API
- `delete_msg`: 标准API
- `get_msg`: 标准API
- `get_forward_msg`: 标准API
- `send_like`: 标准API
- `set_group_kick`: 标准API
- `set_group_ban`: 标准API
- `set_group_anonymous_ban`: 标准API
- `set_group_whole_ban`: 标准API
- `set_group_admin`: 标准API
- `set_group_anonymous`: 标准API
- `set_group_card`: 标准API
- `set_group_name`: 标准API
- `set_group_leave`: 标准API
- `set_group_special_title`: 标准API
- `set_friend_add_request`: 标准API
- `set_group_add_request`: 标准API
- `get_login_info`: 标准API
- `get_stranger_info`: 标准API
- `get_friend_list`: 标准API
- `get_group_info`: 标准API
- `get_group_list`: 标准API
- `get_group_member_info`: 标准API
- `get_group_member_list`: 标准API
- `get_group_honor_info`: 标准API
- `get_cookies`: 标准API
- `get_csrf_token`: 标准API
- `get_credentials`: 标准API
- `get_record`: 标准API
- `get_image`: 标准API
- `can_send_image`: 标准API
- `can_send_record`: 标准API
- `get_status`: 标准API
- `get_version_info`: 标准API
- `set_restart`: 标准API
- `clean_cache`: 标准API

- `get_group_file_url`: gocq拓展API
- `get_private_file_url`: gocq拓展API`(文档没看到)`
- `send_group_forward_msg`: gocq拓展API
- `send_private_forward_msg`: gocq拓展API
- `get_group_msg_history`: gocq拓展API
- `set_essence_msg`: gocq拓展API
- `delete_essence_msg`: gocq拓展API
- `send_group_sign`: gocq拓展API
- `get_group_notice`: gocq拓展API
- `send_group_notice`: gocq拓展API
- `get_group_system_msg`: gocq拓展API
- `upload_group_file`: gocq拓展API
- `get_group_file_system_info`: gocq拓展API
- `get_group_root_files`: gocq拓展API
- `get_group_files_by_folder`: gocq拓展API
- `delete_group_file`: gocq拓展API
- `create_group_file_folder`: gocq拓展API
- `delete_group_folder`: gocq拓展API
- `upload_private_file`: gocq拓展API
- `get_unidirectional_friend_list`: gocq拓展API
- `delete_friend`: gocq拓展API
- `delete_unidirectional_friend`: gocq拓展API
- `set_group_portrait`: gocq拓展API
- `get_essence_msg_list`: gocq拓展API
- `get_group_at_all_remain`: gocq拓展API
- `qidian_get_account_info`: gocq拓展API
- `_get_model_show`: gocq拓展API
- `_set_model_show`: gocq拓展API
- `get_online_clients`: gocq拓展API
- `ocr_image`: gocq拓展API
- `set_qq_profile`: gocq拓展API
- `download_file`: gocq拓展API
- `check_url_safely`: gocq拓展API

## `send_private_msg` 发送私聊消息

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

## `send_group_msg` 发送群消息

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

## `send_msg` 发送消息

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

## `delete_msg` 撤回消息

### 参数

| 字段名       | 数据类型       | 默认值 | 说明    |
| ------------ | -------------- | ------ | ------- |
| `message_id` | number (int32) | -      | 消息 ID |

### 响应数据

无

## `get_msg` 获取消息

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

## `get_forward_msg` 获取合并转发消息

### 参数

| 字段名 | 数据类型 | 说明        |
| ------ | -------- | ----------- |
| `id`   | string   | 合并转发 ID |

### 响应数据

| 字段名    | 类型    | 说明                                                                                                                                      |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `message` | message | 消息内容，使用 [消息的数组格式](../message/array.md) 表示，数组中的消息段全部为 [`node` 消息段](../message/segment.md#合并转发自定义节点) |

## `send_like` 发送好友赞

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                             |
| --------- | -------- | ------ | -------------------------------- |
| `user_id` | number   | -      | 对方 QQ 号                       |
| `times`   | number   | 1      | 赞的次数，每个好友每天最多 10 次 |

### 响应数据

无

## `set_group_kick` 群组踢人

### 参数

| 字段名               | 数据类型 | 默认值  | 说明               |
| -------------------- | -------- | ------- | ------------------ |
| `group_id`           | number   | -       | 群号               |
| `user_id`            | number   | -       | 要踢的 QQ 号       |
| `reject_add_request` | boolean  | `false` | 拒绝此人的加群请求 |

### 响应数据

无

## `set_group_ban` 群组单人禁言

### 参数

| 字段名     | 数据类型 | 默认值    | 说明                             |
| ---------- | -------- | --------- | -------------------------------- |
| `group_id` | number   | -         | 群号                             |
| `user_id`  | number   | -         | 要禁言的 QQ 号                   |
| `duration` | number   | `30 * 60` | 禁言时长，单位秒，0 表示取消禁言 |

### 响应数据

无

## `set_group_anonymous_ban` 群组匿名用户禁言

### 参数

| 字段名                     | 数据类型 | 默认值    | 说明                                                        |
| -------------------------- | -------- | --------- | ----------------------------------------------------------- |
| `group_id`                 | number   | -         | 群号                                                        |
| `anonymous`                | object   | -         | 可选，要禁言的匿名用户对象（群消息上报的 `anonymous` 字段） |
| `anonymous_flag` 或 `flag` | string   | -         | 可选，要禁言的匿名用户的 flag（需从群消息上报的数据中获得） |
| `duration`                 | number   | `30 * 60` | 禁言时长，单位秒，无法取消匿名用户禁言                      |

上面的 `anonymous` 和 `anonymous_flag` 两者任选其一传入即可，若都传入，则使用 `anonymous`。

### 响应数据

无

## `set_group_whole_ban` 群组全员禁言

### 参数

| 字段名     | 数据类型 | 默认值 | 说明     |
| ---------- | -------- | ------ | -------- |
| `group_id` | number   | -      | 群号     |
| `enable`   | boolean  | `true` | 是否禁言 |

### 响应数据

无

## `set_group_admin` 群组设置管理员

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                      |
| ---------- | -------- | ------ | ------------------------- |
| `group_id` | number   | -      | 群号                      |
| `user_id`  | number   | -      | 要设置管理员的 QQ 号      |
| `enable`   | boolean  | `true` | true 为设置，false 为取消 |

### 响应数据

无

## `set_group_anonymous` 群组匿名

### 参数

| 字段名     | 数据类型 | 默认值 | 说明             |
| ---------- | -------- | ------ | ---------------- |
| `group_id` | number   | -      | 群号             |
| `enable`   | boolean  | `true` | 是否允许匿名聊天 |

### 响应数据

无

## `set_group_card` 设置群名片（群备注）

### 参数

| 字段名     | 数据类型 | 默认值 | 说明                                     |
| ---------- | -------- | ------ | ---------------------------------------- |
| `group_id` | number   | -      | 群号                                     |
| `user_id`  | number   | -      | 要设置的 QQ 号                           |
| `card`     | string   | 空     | 群名片内容，不填或空字符串表示删除群名片 |

### 响应数据

无

## `set_group_name` 设置群名

### 参数

| 字段名       | 数据类型       | 说明   |
| ------------ | -------------- | ------ |
| `group_id`   | number (int64) | 群号   |
| `group_name` | string         | 新群名 |

### 响应数据

无

## `set_group_leave` 退出群组

### 参数

| 字段名       | 数据类型 | 默认值  | 说明                                                     |
| ------------ | -------- | ------- | -------------------------------------------------------- |
| `group_id`   | number   | -       | 群号                                                     |
| `is_dismiss` | boolean  | `false` | 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散 |

### 响应数据

无

## `set_group_special_title` 设置群组专属头衔

### 参数

| 字段名          | 数据类型 | 默认值 | 说明                                                                                                  |
| --------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `group_id`      | number   | -      | 群号                                                                                                  |
| `user_id`       | number   | -      | 要设置的 QQ 号                                                                                        |
| `special_title` | string   | 空     | 专属头衔，不填或空字符串表示删除专属头衔                                                              |
| `duration`      | number   | `-1`   | 专属头衔有效期，单位秒，-1 表示永久，不过此项似乎没有效果，可能是只有某些特殊的时间长度有效，有待测试 |

### 响应数据

无

## `set_friend_add_request` 处理加好友请求

### 参数

| 字段名    | 数据类型 | 默认值 | 说明                                      |
| --------- | -------- | ------ | ----------------------------------------- |
| `flag`    | string   | -      | 加好友请求的 flag（需从上报的数据中获得） |
| `approve` | boolean  | `true` | 是否同意请求                              |
| `remark`  | string   | 空     | 添加后的好友备注（仅在同意时有效）        |

### 响应数据

无

## `set_group_add_request` 处理加群请求／邀请

### 参数

| 字段名               | 数据类型 | 默认值 | 说明                                                                  |
| -------------------- | -------- | ------ | --------------------------------------------------------------------- |
| `flag`               | string   | -      | 加群请求的 flag（需从上报的数据中获得）                               |
| `sub_type` 或 `type` | string   | -      | `add` 或 `invite`，请求类型（需要和上报消息中的 `sub_type` 字段相符） |
| `approve`            | boolean  | `true` | 是否同意请求／邀请                                                    |
| `reason`             | string   | 空     | 拒绝理由（仅在拒绝时有效）                                            |

### 响应数据

无

## `get_login_info` 获取登录号信息

### 参数

无

### 响应数据

| 字段名     | 数据类型       | 说明    |
| ---------- | -------------- | ------- |
| `user_id`  | number (int64) | QQ 号   |
| `nickname` | string         | QQ 昵称 |

## `get_stranger_info` 获取陌生人信息

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `user_id`  | number   | -       | QQ 号                                                |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名     | 数据类型       | 说明                                  |
| ---------- | -------------- | ------------------------------------- |
| `user_id`  | number (int64) | QQ 号                                 |
| `nickname` | string         | 昵称                                  |
| `sex`      | string         | 性别，`male` 或 `female` 或 `unknown` |
| `age`      | number (int32) | 年龄                                  |

## `get_friend_list` 获取好友列表

### 参数

无

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名     | 数据类型       | 说明   |
| ---------- | -------------- | ------ |
| `user_id`  | number (int64) | QQ 号  |
| `nickname` | string         | 昵称   |
| `remark`   | string         | 备注名 |

## `get_group_info` 获取群信息

### 参数

| 字段名     | 数据类型 | 默认值  | 说明                                                 |
| ---------- | -------- | ------- | ---------------------------------------------------- |
| `group_id` | number   | -       | 群号                                                 |
| `no_cache` | boolean  | `false` | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

### 响应数据

| 字段名             | 数据类型       | 说明                 |
| ------------------ | -------------- | -------------------- |
| `group_id`         | number (int64) | 群号                 |
| `group_name`       | string         | 群名称               |
| `member_count`     | number (int32) | 成员数               |
| `max_member_count` | number (int32) | 最大成员数（群容量） |

## `get_group_list` 获取群列表

### 参数

无

### 响应数据

响应内容为 JSON 数组，每个元素和上面的 `get_group_info` 接口相同。

## `get_group_member_info` 获取群成员信息

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

## `get_group_member_list` 获取群成员列表

### 参数

| 字段名     | 数据类型       | 默认值 | 说明 |
| ---------- | -------------- | ------ | ---- |
| `group_id` | number (int64) | -      | 群号 |

### 响应数据

响应内容为 JSON 数组，每个元素的内容和上面的 `get_group_member_info` 接口相同，但对于同一个群组的同一个成员，获取列表时和获取单独的成员信息时，某些字段可能有所不同，例如 `area`、`title` 等字段在获取列表时无法获得，具体应以单独的成员信息为准。

## `get_group_honor_info` 获取群荣誉信息

### 参数

| 字段名     | 数据类型       | 默认值 | 说明                                                                                                                                            |
| ---------- | -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `group_id` | number (int64) | -      | 群号                                                                                                                                            |
| `type`     | string         | -      | 要获取的群荣誉类型，可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据，或传入 `all` 获取所有数据 |

### 响应数据

| 字段名               | 数据类型       | 说明                                                       |
| -------------------- | -------------- | ---------------------------------------------------------- |
| `group_id`           | number (int64) | 群号                                                       |
| `current_talkative`  | object         | 当前龙王，仅 `type` 为 `talkative` 或 `all` 时有数据       |
| `talkative_list`     | array          | 历史龙王，仅 `type` 为 `talkative` 或 `all` 时有数据       |
| `performer_list`     | array          | 群聊之火，仅 `type` 为 `performer` 或 `all` 时有数据       |
| `legend_list`        | array          | 群聊炽焰，仅 `type` 为 `legend` 或 `all` 时有数据          |
| `strong_newbie_list` | array          | 冒尖小春笋，仅 `type` 为 `strong_newbie` 或 `all` 时有数据 |
| `emotion_list`       | array          | 快乐之源，仅 `type` 为 `emotion` 或 `all` 时有数据         |

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

## `get_cookies` 获取 Cookies

### 参数

| 字段名   | 数据类型 | 默认值 | 说明                    |
| -------- | -------- | ------ | ----------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名 |

### 响应数据

| 字段名    | 数据类型 | 说明    |
| --------- | -------- | ------- |
| `cookies` | string   | Cookies |

## `get_csrf_token` 获取 CSRF Token

### 参数

无

### 响应数据

| 字段名  | 数据类型       | 说明       |
| ------- | -------------- | ---------- |
| `token` | number (int32) | CSRF Token |

## `get_credentials` 获取 QQ 相关接口凭证

即上面两个接口的合并。

### 参数

| 字段名   | 数据类型 | 默认值 | 说明                    |
| -------- | -------- | ------ | ----------------------- |
| `domain` | string   | 空     | 需要获取 cookies 的域名 |

### 响应数据

| 字段名       | 数据类型       | 说明       |
| ------------ | -------------- | ---------- |
| `cookies`    | string         | Cookies    |
| `csrf_token` | number (int32) | CSRF Token |

## `get_record` 获取语音

> **提示**：要使用此接口，通常需要安装 ffmpeg，请参考 OneBot 实现的相关说明。

### 参数

| 字段名       | 数据类型 | 默认值 | 说明                                                                                 |
| ------------ | -------- | ------ | ------------------------------------------------------------------------------------ |
| `file`       | string   | -      | 收到的语音文件名（消息段的 `file` 参数），如 `0B38145AA44505000B38145AA4450500.silk` |
| `out_format` | string   | -      | 要转换到的格式，目前支持 `mp3`、`amr`、`wma`、`m4a`、`spx`、`ogg`、`wav`、`flac`     |

### 响应数据

| 字段名 | 数据类型 | 说明                                                                                              |
| ------ | -------- | ------------------------------------------------------------------------------------------------- |
| `file` | string   | 转换后的语音文件路径，如 `/home/somebody/cqhttp/data/record/0B38145AA44505000B38145AA4450500.mp3` |

## `get_image` 获取图片

### 参数

| 字段名 | 数据类型 | 默认值 | 说明                                                                                |
| ------ | -------- | ------ | ----------------------------------------------------------------------------------- |
| `file` | string   | -      | 收到的图片文件名（消息段的 `file` 参数），如 `6B4DE3DFD1BD271E3297859D41C530F5.jpg` |

### 响应数据

| 字段名 | 数据类型 | 说明                                                                                             |
| ------ | -------- | ------------------------------------------------------------------------------------------------ |
| `file` | string   | 下载后的图片文件路径，如 `/home/somebody/cqhttp/data/image/6B4DE3DFD1BD271E3297859D41C530F5.jpg` |

## `can_send_image` 检查是否可以发送图片

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 说明   |
| ------ | -------- | ------ |
| `yes`  | boolean  | 是或否 |

## `can_send_record` 检查是否可以发送语音

### 参数

无

### 响应数据

| 字段名 | 数据类型 | 说明   |
| ------ | -------- | ------ |
| `yes`  | boolean  | 是或否 |

## `get_status` 获取运行状态

### 参数

无

### 响应数据

| 字段名   | 数据类型 | 说明                                                     |
| -------- | -------- | -------------------------------------------------------- |
| `online` | boolean  | 当前 QQ 在线，`null` 表示无法查询到在线状态              |
| `good`   | boolean  | 状态符合预期，意味着各模块正常运行、功能正常，且 QQ 在线 |
| ……       | -        | OneBot 实现自行添加的其它内容                            |

通常情况下建议只使用 `online` 和 `good` 这两个字段来判断运行状态，因为根据 OneBot 实现的不同，其它字段可能完全不同。

## `get_version_info` 获取版本信息

### 参数

无

### 响应数据

| 字段名             | 数据类型 | 说明                          |
| ------------------ | -------- | ----------------------------- |
| `app_name`         | string   | 应用标识，如 `mirai-native`   |
| `app_version`      | string   | 应用版本，如 `1.2.3`          |
| `protocol_version` | string   | OneBot 标准版本，如 `v11`     |
| ……                 | -        | OneBot 实现自行添加的其它内容 |

## `set_restart` 重启 OneBot 实现

由于重启 OneBot 实现同时需要重启 API 服务，这意味着当前的 API 请求会被中断，因此需要异步地重启，接口返回的 `status` 是 `async`。

### 参数

| 字段名  | 数据类型 | 默认值 | 说明                                                                 |
| ------- | -------- | ------ | -------------------------------------------------------------------- |
| `delay` | number   | `0`    | 要延迟的毫秒数，如果默认情况下无法重启，可以尝试设置延迟为 2000 左右 |

### 响应数据

无

## `clean_cache` 清理缓存

用于清理积攒了太多的缓存文件。

### 参数

无

### 响应数据

无

## `get_group_file_url` 获取群文件资源链接

> [!note] gocq 拓展字段
> 数据只收集了一次，仅供参考  

### 参数

| 字段名     | 数据类型       | 默认值 | 说明     |
| ---------- | -------------- | ------ | -------- |
| `group_id` | number (int64) | -      | 群号     |
| `file_id`  | string         | -      | 文件 ID  |
| `busid`    | number (int32) | -      | 文件类型 |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `url`  | string   | 文件下载链接 |

> [!tip] 收集结果
> `Napcat`、`Lagrange.OneBot` 都支持以上参数、响应结构  
> 注意: `busid`无需传递

## `get_private_file_url` 获取私聊文件资源链接

> [!note] 拓展字段 gocq文档没看到
> 数据只收集了一次，仅供参考  

::: details Napcat

### 参数

| 字段名    | 数据类型 | 默认值 | 说明    |
| --------- | -------- | ------ | ------- |
| `file_id` | string   | -      | 文件 ID |

### 响应数据

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `url`  | string   | 文件下载链接 |

:::

::: details Lagrange.OneBot

### 参数

| 字段名      | 数据类型 | 默认值 | 说明              |
| ----------- | -------- | ------ | ----------------- |
| `user_id`   | number   | -      | QQ 号             |
| `file_id`   | string   | -      | 文件 ID           |
| `file_hash` | string   | -      | 文件哈希 `(可选)` |

### 响应数据

> 不传`user_id`时，返回`url`为`false`

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| `url`  | string   | 文件下载链接 |

:::

<hr>

| 上一节                | 下一节                |
| --------------------- | --------------------- |
| [API 概述](README.md) | [隐藏 API](hidden.md) |

## `send_group_forward_msg` 发送合并转发(群聊)

### 参数

| 字段名     | 数据类型        | 说明                                                         |
| ---------- | --------------- | ------------------------------------------------------------ |
| `group_id` | number (int64)  | 群号                                                         |
| `messages` | forward node[]  | 自定义转发消息, 具体看 [CQcode](https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9) |

### 响应数据

| 字段名       | 数据类型     | 说明        |
| ------------ | ------------ | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `forward_id` | string       | 转发消息 ID |

## `send_private_forward_msg` 发送合并转发(好友)

### 参数

| 字段名     | 数据类型     | 说明                                                         |
| ---------- | ------------ | ------------------------------------------------------------ |
| `user_id`  | number (int64) | 好友QQ号                                                     |
| `messages` | forward node[] | 自定义转发消息, 具体看 [CQcode](https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9) |

### 响应数据

| 字段名       | 数据类型     | 说明        |
| ------------ | ------------ | ----------- |
| `message_id` | number (int64) | 消息 ID     |
| `forward_id` | string       | 转发消息 ID |

## `get_group_msg_history` 获取群消息历史记录

### 参数

| 字段名       | 数据类型     | 说明                                |
| ------------ | ------------ | ----------------------------------- |
| `message_seq` | number (int64) | 起始消息序号, 可通过 `get_msg` 获得 |
| `group_id`   | number (int64) | 群号                               |

### 响应数据

| 字段名     | 数据类型  | 说明                       |
| ---------- | --------- | -------------------------- |
| `messages` | Message[] | 从起始序号开始的前19条消息 |

::: tip 提示
不提供起始序号将默认获取最新的消息
:::

## `set_essence_msg` 设置精华消息

### 参数

| 字段名      | 数据类型     | 说明   |
| ----------- | ------------ | ------ |
| `message_id` | number (int32) | 消息ID |

::: tip 提示
该 API 没有响应数据
:::

## `delete_essence_msg` 移出精华消息

### 参数

| 字段名      | 数据类型     | 说明   |
| ----------- | ------------ | ------ |
| `message_id` | number (int32) | 消息ID |

::: tip 提示
该 API 没有响应数据
:::

## `send_group_sign` 群打卡

### 参数

| 字段名     | 数据类型     | 说明 |
| ---------- | ------------ | ---- |
| `group_id` | number (int64) | 群号 |

::: tip 提示
该 API 无响应数据
:::

## `get_group_notice` 获取群公告

### 参数

| 字段名     | 数据类型     | 默认值 | 说明 |
| ---------- | ------------ | ------ | ---- |
| `group_id` | number (int64) |        | 群号 |

### 响应数据

响应内容为 json 数组，每个元素内容如下：

| 字段名        | 数据类型     | 说明         |
| ------------- | ------------ | ------------ |
| `sender_id`   | number (int64) | 公告发表者   |
| `publish_time` | number (int64) | 公告发表时间 |
| `message`     | object       | 公告内容     |

其中 `message` 字段的内容如下：

| 字段名  | 数据类型 | 说明     |
| ------- | -------- | -------- |
| `text`  | string   | 公告内容 |
| `images` | array    | 公告图片 |

其中 `images` 字段每个元素内容如下：

| 字段名  | 数据类型 | 说明     |
| ------- | -------- | -------- |
| `height` | string   | 图片高度 |
| `width` | string   | 图片宽度 |
| `id`    | string   | 图片ID   |

## `send_group_notice` 发送群公告

### 参数

| 字段名     | 数据类型     | 默认值 | 说明             |
| ---------- | ------------ | ------ | ---------------- |
| `group_id` | number (int64) |        | 群号             |
| `content`  | string       |        | 公告内容         |
| `image`    | string       |        | 图片路径（可选） |

::: tip 提示
该 API 没有响应数据
:::

## `get_group_system_msg` 获取群系统消息

### 响应数据

| 字段名            | 数据类型         | 说明         |
| ----------------- | ---------------- | ------------ |
| `invited_requests` | InvitedRequest[] | 邀请消息列表 |
| `join_requests`   | JoinRequest[]    | 进群消息列表 |

::: warning 注意
如果列表不存在任何消息, 将返回 `null`
:::

**InvitedRequest**

| 字段名        | 数据类型     | 说明              |
| ------------- | ------------ | ----------------- |
| `request_id`  | number (int64) | 请求ID            |
| `invitor_uin` | number (int64) | 邀请者            |
| `invitor_nick` | string       | 邀请者昵称        |
| `group_id`    | number (int64) | 群号              |
| `group_name`  | string       | 群名              |
| `checked`     | boolean      | 是否已被处理      |
| `actor`       | number (int64) | 处理者, 未处理为0 |

**JoinRequest**

| 字段名          | 数据类型     | 说明              |
| --------------- | ------------ | ----------------- |
| `request_id`    | number (int64) | 请求ID            |
| `requester_uin` | number (int64) | 请求者ID          |
| `requester_nick` | string       | 请求者昵称        |
| `message`       | string       | 验证消息          |
| `group_id`      | number (int64) | 群号              |
| `group_name`    | string       | 群名              |
| `checked`       | boolean      | 是否已被处理      |
| `actor`         | number (int64) | 处理者, 未处理为0 |

## `upload_group_file` 上传群文件

### 参数

| 字段名    | 数据类型     | 说明         |
| --------- | ------------ | ------------ |
| `group_id` | number (int64) | 群号         |
| `file`     | string       | 本地文件路径 |
| `name`     | string       | 储存名称     |
| `folder`   | string       | 父目录ID     |

::: warning 注意
在不提供 `folder` 参数的情况下默认上传到根目录

只能上传本地文件, 需要上传 `http` 文件的话请先调用 `download_file` API 下载
:::

## `get_group_file_system_info` 获取群文件系统信息

### 参数

| 字段名    | 数据类型     | 说明 |
| --------- | ------------ | ---- |
| `group_id` | number (int64) | 群号 |

### 响应数据

| 字段名        | 数据类型     | 说明       |
| ------------- | ------------ | ---------- |
| `file_count`  | number (int32) | 文件总数   |
| `limit_count` | number (int32) | 文件上限   |
| `used_space`  | number (int64) | 已使用空间 |
| `total_space` | number (int64) | 空间上限   |

## `get_group_root_files` 获取群根目录文件列表

### 参数

| 字段名    | 数据类型     | 说明 |
| --------- | ------------ | ---- |
| `group_id` | number (int64) | 群号 |

### 响应数据

| 字段名    | 数据类型 | 说明       |
| --------- | -------- | ---------- |
| `files`   | File[]   | 文件列表   |
| `folders` | Folder[] | 文件夹列表 |

## `get_group_files_by_folder` 获取群子目录文件列表

### 参数

| 字段名     | 数据类型     | 说明                        |
| ---------- | ------------ | --------------------------- |
| `group_id` | number (int64) | 群号                        |
| `folder_id` | string       | 文件夹ID 参考 `Folder` 对象 |

### 响应数据

| 字段名    | 数据类型 | 说明       |
| --------- | -------- | ---------- |
| `files`   | File[]   | 文件列表   |
| `folders` | Folder[] | 文件夹列表 |

## 文件对象类型

**File**

| 字段名           | 数据类型     | 说明                   |
| ---------------- | ------------ | ---------------------- |
| `group_id`       | number (int32) | 群号                   |
| `file_id`        | string       | 文件ID                 |
| `file_name`      | string       | 文件名                 |
| `busid`          | number (int32) | 文件类型               |
| `file_size`      | number (int64) | 文件大小               |
| `upload_time`    | number (int64) | 上传时间               |
| `dead_time`      | number (int64) | 过期时间,永久文件恒为0 |
| `modify_time`    | number (int64) | 最后修改时间           |
| `download_times` | number (int32) | 下载次数               |
| `uploader`       | number (int64) | 上传者ID               |
| `uploader_name`  | string       | 上传者名字             |

**Folder**

| 字段名            | 数据类型     | 说明       |
| ----------------- | ------------ | ---------- |
| `group_id`        | number (int32) | 群号       |
| `folder_id`       | string       | 文件夹ID   |
| `folder_name`     | string       | 文件名     |
| `create_time`     | number (int64) | 创建时间   |
| `creator`         | number (int64) | 创建者     |
| `creator_name`    | string       | 创建者名字 |
| `total_file_count` | number (int32) | 子文件数量 |

## `delete_group_file` 删除群文件

### 参数

| 字段名    | 数据类型     | 说明                      |
| --------- | ------------ | ------------------------- |
| `group_id` | number (int64) | 群号                      |
| `file_id` | string       | 文件ID 参考 `File` 对象   |
| `busid`   | number (int32) | 文件类型 参考 `File` 对象 |

::: tip 提示
该 API 无响应数据
:::

## `create_group_file_folder` 创建群文件文件夹

::: warning 注意
仅能在根目录创建文件夹
:::

### 参数

| 字段名     | 数据类型     | 说明       |
| ---------- | ------------ | ---------- |
| `group_id` | number (int64) | 群号       |
| `name`     | string       | 文件夹名称 |
| `parent_id` | string       | 仅能为 `/` |

::: tip 提示
该 API 无响应数据
:::

## `delete_group_folder` 删除群文件文件夹

### 参数

| 字段名     | 数据类型     | 说明                        |
| ---------- | ------------ | --------------------------- |
| `group_id` | number (int64) | 群号                        |
| `folder_id` | string       | 文件夹ID 参考 `Folder` 对象 |

::: tip 提示
该 API 无响应数据
:::

## `upload_private_file` 上传私聊文件

### 参数

| 字段名    | 数据类型     | 说明         |
| --------- | ------------ | ------------ |
| `user_id` | number (int64) | 对方 QQ 号   |
| `file`    | string       | 本地文件路径 |
| `name`    | string       | 文件名称     |

::: warning 注意
只能上传本地文件, 需要上传 `http` 文件的话请先调用 `download_file` API 下载
:::

## `get_unidirectional_friend_list` 获取单向好友列表

::: tip 提示
该 API 无需参数
:::

### 响应数据

响应内容为 json 数组, 每个元素如下：

| 字段名    | 数据类型     | 说明  |
| --------- | ------------ | ----- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string       | 昵称  |
| `source`  | string       | 来源  |

## `delete_friend` 删除好友

### 参数

| 字段名    | 数据类型     | 默认值 | 说明       |
| --------- | ------------ | ------ | ---------- |
| `user_id` | number (int64) | -      | 好友 QQ 号 |

::: tip 提示
该 API 无响应数据
:::

## `delete_unidirectional_friend` 删除单向好友

### 参数

| 字段名    | 数据类型     | 说明         |
| --------- | ------------ | ------------ |
| `user_id` | number (int64) | 单向好友QQ号 |

::: tip 提示
该 API 没有响应数据
:::

## `set_group_portrait` 设置群头像

### 参数

| 字段名    | 数据类型     | 说明                     |
| --------- | ------------ | ------------------------ |
| `group_id` | number (int64) | 群号                     |
| `file`    | string       | 图片文件名               |
| `cache`   | number (int32) | 表示是否使用已缓存的文件 |

::: tip 提示
`file` **参数**支持以下几种格式：

- 绝对路径, 例如 `file:///C:\\Users\Richard\Pictures\1.png`, 格式使用 [`file` URI](https://tools.ietf.org/html/rfc8089)
- 网络 URL, 例如 `http://i1.piimg.com/567571/fdd6e7b6d93f1ef0.jpg`
- Base64 编码, 例如 `base64://iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAAKElEQVQ4EWPk5+RmIBcwkasRpG9UM4mhNxpgowFGMARGEwnBIEJVAAAdBgBNAZf+QAAAAABJRU5ErkJggg==`

`cache`**参数**: 通过网络 URL 发送时有效, `1`表示使用缓存, `0`关闭关闭缓存, 默认 为`1`

目前这个API在登录一段时间后因cookie失效而失效, 请考虑后使用
:::

## `get_essence_msg_list` 获取精华消息列表

### 参数

| 字段名    | 数据类型     | 说明 |
| --------- | ------------ | ---- |
| `group_id` | number (int64) | 群号 |

### 响应数据

响应内容为 JSON 数组，每个元素如下：

| 字段名        | 数据类型     | 说明         |
| ------------- | ------------ | ------------ |
| `sender_id`   | number (int64) | 发送者QQ 号  |
| `sender_nick` | string       | 发送者昵称   |
| `sender_time` | number (int64) | 消息发送时间 |
| `operator_id` | number (int64) | 操作者QQ 号  |
| `operator_nick` | string       | 操作者昵称   |
| `operator_time` | number (int64) | 精华设置时间 |
| `message_id` | number (int32) | 消息ID       |

## `get_group_at_all_remain` 获取群 @全体成员 剩余次数

### 参数

| 字段名    | 数据类型     | 说明 |
| --------- | ------------ | ---- |
| `group_id` | number (int64) | 群号 |

### 响应数据

| 字段名                          | 数据类型     | 说明                                |
| ------------------------------- | ------------ | ----------------------------------- |
| `can_at_all`                    | boolean      | 是否可以 @全体成员                  |
| `remain_at_all_count_for_group` | number (int16) | 群内所有管理当天剩余 @全体成员 次数 |
| `remain_at_all_count_for_uin`   | number (int16) | Bot 当天剩余 @全体成员 次数         |

## `qidian_get_account_info` 获取企点账号信息

::: tip 注意
该API只有企点协议可用
:::

### 响应数据

| 字段名        | 数据类型     | 说明         |
| ------------- | ------------ | ------------ |
| `master_id`   | number (int64) | 父账号ID     |
| `ext_name`    | string       | 用户昵称     |
| `create_time` | number (int64) | 账号创建时间 |

## `_get_model_show` 获取在线机型

::: tip 提示
有关例子可从[这个链接](https://github.com/Mrs4s/go-cqhttp/pull/872#issuecomment-831180149)找到
:::

### 参数

| 字段名  | 数据类型 | 说明     |
| ------- | -------- | -------- |
| `model` | string   | 机型名称 |

### 响应数据

| 字段名     | 数据类型 | 说明 |
| ---------- | -------- | ---- |
| `variants` | array    | -    |

响应内容为 JSON 数组，每个元素如下：

| 字段名       | 数据类型 | 说明 |
| ------------ | -------- | ---- |
| `model_show` | string   | -    |
| `need_pay`   | boolean  | -    |

## `_set_model_show` 设置在线机型

::: tip 提示
有关例子可从[这个链接](https://github.com/Mrs4s/go-cqhttp/pull/872#issuecomment-831180149)找到
:::

### 参数

| 字段名       | 数据类型 | 说明     |
| ------------ | -------- | -------- |
| `model`      | string   | 机型名称 |
| `model_show` | string   | -        |

::: tip 提示
该 API 没有响应数据
:::

## `get_online_clients` 获取当前账号在线客户端列表

### 参数

| 字段名     | 数据类型 | 说明         |
| ---------- | -------- | ------------ |
| `no_cache` | boolean  | 是否无视缓存 |

### 响应数据

| 字段名    | 数据类型 | 说明           |
| --------- | -------- | -------------- |
| `clients` | Device[] | 在线客户端列表 |

**Device**

| 字段名        | 数据类型     | 说明     |
| ------------- | ------------ | -------- |
| `app_id`      | number (int64) | 客户端ID |
| `device_name` | string       | 设备名称 |
| `device_kind` | string       | 设备类型 |

## `ocr_image` 图片 OCR

::: warning 注意
目前图片OCR接口仅支持接受的图片
:::

### 参数

| 字段名  | 数据类型 | 说明   |
| ------- | -------- | ------ |
| `image` | string   | 图片ID |

### 响应数据

| 字段名     | 数据类型        | 说明    |
| ---------- | --------------- | ------- |
| `texts`    | TextDetection[] | OCR结果 |
| `language` | string          | 语言    |

**TextDetection**

| 字段名        | 数据类型  | 说明   |
| ------------- | --------- | ------ |
| `text`        | string    | 文本   |
| `confidence`  | number (int32) | 置信度 |
| `coordinates` | vector2[] | 坐标   |

## `set_qq_profile` 设置登录号资料

### 参数

| 字段名          | 数据类型 | 默认值 | 说明     |
| --------------- | -------- | ------ | -------- |
| `nickname`      | string   | -      | 名称     |
| `company`       | string   | -      | 公司     |
| `email`         | string   | -      | 邮箱     |
| `college`       | string   | -      | 学校     |
| `personal_note` | string   | -      | 个人说明 |

::: tip 提示
该 API 没有响应数据
:::

## `download_file` 下载文件到缓存目录

### 参数

| 字段名         | 数据类型         | 说明          |
| -------------- | ---------------- | ------------- |
| `url`          | string           | 链接地址      |
| `thread_count` | number (int32)   | 下载线程数    |
| `headers`      | string 或 array  | 自定义请求头  |

**`headers`格式:**

字符串:

```
User-Agent=YOUR_UA[\r\n]Referer=https://www.baidu.com
```

::: tip 提示
`[\r\n]` 为换行符, 使用http请求时请注意编码
:::

JSON数组:

```json
[
    "User-Agent=YOUR_UA",
    "Referer=https://www.baidu.com"
]
```

### 响应数据

| 字段名   | 数据类型 | 说明                 |
| -------- | -------- | -------------------- |
| `file`   | string   | 下载文件的*绝对路径* |

::: tip 提示
通过这个API下载的文件能直接放入CQ码作为图片或语音发送

调用后会阻塞直到下载完成后才会返回数据，请注意下载大文件时的超时
:::

## `check_url_safely` 检查链接安全性

### 参数

| 字段名  | 数据类型 | 说明             |
| ------- | -------- | ---------------- |
| `url`   | string   | 需要检查的链接   |

### 响应数据

| 字段名   | 数据类型     | 说明                                    |
| -------- | ------------ | --------------------------------------- |
| `level`  | number (int32) | 安全等级, 1: 安全 2: 未知 3: 危险      |
