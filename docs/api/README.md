# Api 列表一览

> [!note] 温馨提示
> 图标规则如下：  
> `API` 如果在 `OneBot v11` 或 `go-cqhttp` 中存在，则视其为 `标准API`  
> ✅ 代表协议 `按照已有标准实现`  
> ☑️ 代表协议 `已实现，参数存在轻微差异`  
> ⚠️ 代表协议 `已实现，参数存在严重差异`  
> ✨ 代表协议 `为自身拓展API 无标准实现`  
> ❌ 代表协议 `未实现`  
>
> 社区拓展: 只要有两个及以上的协议实现相同的 `API名称` ，则视为 `社区拓展`
>
> 🍀 轻微差异: 新增参数、未实现不重要的参数等，不影响实际使用  
> 🍀 严重差异: 参数类型、数量、要求等存在差异，影响实际使用，需要根据实际情况调整  
> 🍀 需要注意的是，所有文档都仅供参考，请以实际实现为准  

## 问答

- 问: 为什么只有 `gocq` `NapCat` `Lagrange` 的 API收集？
- 答: `gocq` 是在社区的共识中已经默认成为 `OneBot v11` 的一部分标准
  - 而 `NapCat` 和 `Lagrange` 仅因为我个人正在使用并且接触较多。
  - 后续会逐步收集其他框架的实现，例如 `LLOneBot`

- 问: 这些API的实现是否真实？
- 答: 大部分都是没问题的，在收集的时候是根据`docs` `apifox` `源码` 三者结合来判断的

- 问: 为什么有些API没有收集？
- 答: 时间问题，有些API我还没来得及收集

- 问: 我发现API实现收集有误，怎么办？
- 答: 欢迎提交 [issue](https://github.com/KarinJS/OneBot-11/issues/new) 或者 [pull request](https://github.com/KarinJS/OneBot-11/pulls) 来修正

## 消息相关

| api                         | 名称                     | gocq | NapCat | Lagrange | 备注         |
| --------------------------- | ------------------------ | ---- | ------ | -------- | ------------ |
| [send_msg]                  | 发送消息                 | ✅    | ✅      | ✅        |              |
| [send_private_msg]          | 发送私聊消息             | ✅    | ✅      | ✅        |              |
| [send_group_msg]            | 发送群消息               | ✅    | ✅      | ✅        |              |
| [delete_msg]                | 撤回消息                 | ✅    | ✅      | ✅        |              |
| [get_msg]                   | 获取消息                 | ✅    | ✅      | ✅        |              |
| [get_forward_msg]           | 获取合并转发消息         | ✅    | ✅      | ✅        |              |
| [send_forward_msg]          | 发送合并转发消息         | ✅    | ✅      | ⚠️        | gocq拓展     |
| [send_group_forward_msg]    | 发送合并转发(群聊)       | ✅    | ✅      | ✅        | gocq拓展     |
| [send_private_forward_msg]  | 发送合并转发(好友)       | ✅    | ✅      | ✅        | gocq拓展     |
| [get_group_msg_history]     | 获取群消息历史记录       | ✅    | ☑️      | ⚠️        | gocq拓展     |
| [get_friend_msg_history]    | 获取好友消息历史记录     | ❌    | ✨      | ✨        | 社区拓展     |
| [get_ai_characters]         | 获取 Ai 声色列表         | -    | ✨      | ✨        | 社区拓展     |
| [send_group_ai_record]      | 发送群 Ai 语音           | -    | ✨      | ✨        | 社区拓展     |
| [mark_msg_as_read]          | 标记消息为已读           | -    | -      | ✨        | Lagrange拓展 |
| [set_group_reaction]        | 给消息添加表情回应       | -    | -      | ✨        | Lagrange拓展 |
| [set_msg_emoji_like]        | 给消息添加表情回应       | -    | ✨      | -        | NapCat拓展   |
| [fetch_emoji_like]          | 获取消息的表情已回应列表 | -    | ✨      | -        | NapCat拓展   |
| [.join_group_emoji_chain]   | 加入群聊表情接龙         | -    | -      | ✨        | Lagrange拓展 |
| [.join_friend_emoji_chain]  | 加入好友表情接龙         | -    | -      | ✨        | Lagrange拓展 |
| [send_group_bot_callback]   | 调用群机器人回调         | -    | -      | ✨        | Lagrange拓展 |
| [mark_private_msg_as_read]  | 标记私聊消息为已读       | -    | ✨      | -        | NapCat拓展   |
| [mark_group_msg_as_read]    | 标记群消息为已读         | -    | ✨      | -        | NapCat拓展   |
| [_mark_all_as_read]         | 标记所有消息为已读       | -    | ✨      | -        | NapCat拓展   |
| [forward_friend_single_msg] | 转发好友单条消息         | -    | ✨      | -        | NapCat拓展   |
| [forward_group_single_msg]  | 转发群聊单条消息         | -    | ✨      | -        | NapCat拓展   |

## 好友相关

| api                              | 名称               | gocq | NapCat | Lagrange | 备注       |
| -------------------------------- | ------------------ | ---- | ------ | -------- | ---------- |
| [send_like]                      | 发送好友赞         | ❌    | ✅      | ✅        |            |
| [set_friend_add_request]         | 处理加好友请求     | ✅    | ✅      | ☑️        |            |
| [get_stranger_info]              | 获取陌生人信息     | ✅    | ☑️      | ☑️        |            |
| [get_friend_list]                | 获取好友列表       | ✅    | ☑️      | ☑️        |            |
| [get_unidirectional_friend_list] | 获取单向好友列表   | ✅    | ☑️      | ❌        | gocq拓展   |
| [delete_friend]                  | 删除好友           | ✅    | ⚠️      | ⚠️        | gocq拓展   |
| [delete_unidirectional_friend]   | 删除单向好友       | ✅    | ❌      | ❌        | gocq拓展   |
| [set_friend_remark]              | 设置好友备注       | -    | ✨      | -        | NapCat拓展 |
| [get_friends_with_category]      | 获取分类的好友列表 | -    | ✨      | -        | NapCat拓展 |
| [get_doubt_friends_add_request]  | 获取可疑好友请求   | -    | ✨      | -        | NapCat拓展 |
| [set_doubt_friends_add_request]  | 处理可疑好友请求   | -    | ✨      | -        | NapCat拓展 |
| [friend_poke]                    | 好友戳一戳         | -    | ✨      | -        | NapCat拓展 |

## 群聊相关

| api                            | 名称                      | gocq | NapCat | Lagrange | 备注         |
| ------------------------------ | ------------------------- | ---- | ------ | -------- | ------------ |
| [set_group_kick]               | 群组踢人                  | ✅    | ✅      | ✅        |              |
| [set_group_ban]                | 群组单人禁言              | ✅    | ✅      | ✅        |              |
| [set_group_anonymous_ban]      | 群组匿名用户禁言          | ❌    | ❌      | ❌        | 匿名没了     |
| [set_group_whole_ban]          | 群组全员禁言              | ✅    | ✅      | ✅        |              |
| [set_group_admin]              | 群组设置管理员            | ✅    | ✅      | ✅        |              |
| [set_group_anonymous]          | 群组匿名                  | ❌    | ❌      | ❌        | 匿名没了     |
| [set_group_card]               | 设置群名片（群备注）      | ✅    | ✅      | ✅        |              |
| [set_group_name]               | 设置群名                  | ✅    | ✅      | ✅        |              |
| [set_group_leave]              | 退出群组                  | ✅    | ✅      | ☑️        |              |
| [set_group_special_title]      | 设置群组专属头衔          | ✅    | ✅      | ☑️        |              |
| [get_group_info]               | 获取群信息                | ✅    | ☑️      | ✅        |              |
| [get_group_list]               | 获取群列表                | ✅    | ☑️      | ✅        |              |
| [get_group_member_info]        | 获取群成员信息            | ✅    | ☑️      | ☑️        |              |
| [get_group_member_list]        | 获取群成员列表            | ✅    | ☑️      | ☑️        |              |
| [get_group_honor_info]         | 获取群荣誉信息            | ✅    | ☑️      | ☑️        |              |
| [set_group_add_request]        | 处理加群请求／邀请        | ✅    | ☑️      | ✅        |              |
| [set_group_portrait]           | 设置群头像                | ✅    | ✅      | ✅        | gocq拓展     |
| [set_essence_msg]              | 设置精华消息              | ✅    | ✅      | ✅        | gocq拓展     |
| [delete_essence_msg]           | 移出精华消息              | ✅    | ✅      | ✅        | gocq拓展     |
| [get_essence_msg_list]         | 获取精华消息列表          | ✅    | ☑️      | ☑️        | gocq拓展     |
| [send_group_sign]              | 群打卡                    | ✅    | ✅      | ❌        | gocq拓展     |
| [_get_group_notice]            | 获取群公告                | ✅    | ✅      | ✅        | gocq拓展     |
| [_send_group_notice]           | 发送群公告                | ✅    | ☑️      | ✅        | gocq拓展     |
| [_del_group_notice]            | 删除群公告                | ✅    | ✅      | ✅        | gocq拓展     |
| [get_group_system_msg]         | 获取群系统消息            | ✅    | ⚠️      | ❌        | gocq拓展     |
| [get_group_at_all_remain]      | 获取群 @全体成员 剩余次数 | ✅    | ✅      | ❌        | gocq拓展     |
| [set_group_bot_status]         | 设置群Bot发言状态         | -    | -      | ✨        | Lagrange拓展 |
| [set_group_kick_members]       | 群组踢多人                | -    | ✨      | -        | NapCat拓展   |
| [set_group_robot_add_option]   | 设置机器人进群选项        | -    | ✨      | -        | NapCat拓展   |
| [set_group_add_option]         | 设置群添加选项            | -    | ✨      | -        | NapCat拓展   |
| [set_group_search]             | 设置群搜索                | -    | ✨      | -        | NapCat拓展   |
| [set_group_remark]             | 设置群备注                | -    | ✨      | -        | NapCat拓展   |
| [group_poke]                   | 群内戳一戳                | -    | ✨      | -        | NapCat拓展   |
| [get_group_info_ex]            | 获取群信息扩展            | -    | ✨      | -        | NapCat拓展   |
| [get_group_detail_info]        | 获取群详细信息            | -    | ✨      | -        | NapCat拓展   |
| [get_group_ignore_add_request] | 获取群忽略添加请求        | -    | ✨      | -        | NapCat拓展   |
| [get_group_shut_list]          | 获取群禁言列表            | -    | ✨      | -        | NapCat拓展   |
| [get_group_ignored_notifies]   | 获取群忽略通知            | -    | ✨      | -        | NapCat拓展   |

## 文件相关

| api                          | 名称                 | gocq | NapCat | Lagrange | 备注         |
| ---------------------------- | -------------------- | ---- | ------ | -------- | ------------ |
| [get_group_file_url]         | 获取群文件资源链接   | ✅    | ✅      | ✅        | gocq拓展     |
| [get_private_file_url]       | 获取私聊文件资源链接 | ✅    | ✅      | ✅        | gocq拓展     |
| [upload_group_file]          | 上传群文件           | ✅    | ☑️      | ✅        | gocq拓展     |
| [get_group_file_system_info] | 获取群文件系统信息   | ✅    | ✅      | ❌        | gocq拓展     |
| [get_group_root_files]       | 获取群根目录文件列表 | ✅    | ✅      | ✅        | gocq拓展     |
| [get_group_files_by_folder]  | 获取群子目录文件列表 | ✅    | ✅      | ✅        | gocq拓展     |
| [delete_group_file]          | 删除群文件           | ✅    | ✅      | ✅        | gocq拓展     |
| [create_group_file_folder]   | 创建群文件文件夹     | ✅    | ⚠️      | ✅        | gocq拓展     |
| [delete_group_folder]        | 删除群文件文件夹     | ✅    | ✅      | ⚠️        | gocq拓展     |
| [upload_private_file]        | 上传私聊文件         | ✅    | ☑️      | ✅        | gocq拓展     |
| [move_group_file]            | 移动群文件           | -    | ✨      | ✨        | 社区拓展     |
| [upload_image]               | 上传图片             | -    | -      | ✨        | Lagrange拓展 |
| [rename_group_file_folder]   | 重命名群文件文件夹   | -    | -      | ✨        | Lagrange拓展 |
| [trans_group_file]           | 转发群文件           | -    | ✨      | -        | NapCat拓展   |
| [rename_group_file]          | 重命名群文件         | -    | ✨      | -        | NapCat拓展   |
| [get_file]                   | 获取文件             | -    | ✨      | -        | NapCat拓展   |

## Bot自身

| api                       | 名称                       | gocq | NapCat | Lagrange | 备注         |
| ------------------------- | -------------------------- | ---- | ------ | -------- | ------------ |
| [get_login_info]          | 获取登录号信息             | ✅    | ✅      | ✅        |              |
| [get_cookies]             | 获取 Cookies               | ✅    | ✅      | ✅        |              |
| [get_csrf_token]          | 获取 CSRF Token            | ✅    | ✅      | ✅        |              |
| [get_credentials]         | 获取 QQ 相关接口凭证       | ✅    | ✅      | ✅        |              |
| [get_record]              | 获取语音                   | ✅    | ☑️      | ❌        |              |
| [get_image]               | 获取图片                   | ✅    | ✅      | ❌        |              |
| [can_send_image]          | 检查是否可以发送图片       | ✅    | ✅      | ✅        |              |
| [can_send_record]         | 检查是否可以发送语音       | ✅    | ✅      | ✅        |              |
| [get_status]              | 获取运行状态               | ✅    | ✅      | ☑️        |              |
| [get_version_info]        | 获取版本信息               | ✅    | ✅      | ✅        |              |
| [get_online_clients]      | 获取当前账号在线客户端列表 | ✅    | ⚠️      | ❌        | gocq拓展     |
| [qidian_get_account_info] | 获取企点账号信息           | ✅    | ❌      | ❌        | gocq拓展     |
| [get_model_show]          | 获取在线机型               | ✅    | ✅      | ❌        | gocq拓展     |
| [set_model_show]          | 设置在线机型               | ✅    | ⚠️      | ❌        | gocq拓展     |
| [set_qq_profile]          | 设置登录号资料             | ✅    | ⚠️      | ❌        | gocq拓展     |
| [fetch_custom_face]       | 获取已收藏的QQ表情列表     | -    | ✨      | ✨        | 社区拓展     |
| [set_qq_avatar]           | 设置QQ头像                 | -    | ✨      | ✨        | 社区拓展     |
| [get_rkey]                | 获取rkey                   | -    | ✨      | ✨        | 社区拓展     |
| [nc_get_rkey]             | 获取NC版rkey               | -    | ✨      | -        | NapCat拓展   |
| [get_mface_key]           | 获取mface key              | -    | -      | ✨        | Lagrange拓展 |
| [get_rkey_server]         | 获取rkey服务器             | -    | ✨      | -        | NapCat拓展   |
| [set_diy_online_status]   | 设置自定义在线状态         | -    | ✨      | -        | NapCat拓展   |
| [set_online_status]       | 设置在线状态               | -    | ✨      | -        | NapCat拓展   |
| [set_input_status]        | 设置输入状态               | -    | ✨      | -        | NapCat拓展   |
| [get_profile_like]        | 获取个人资料点赞           | -    | ✨      | -        | NapCat拓展   |
| [get_robot_uin_range]     | 获取官方机器人账号范围     | -    | ✨      | -        | NapCat拓展   |
| [set_self_longnick]       | 设置自己的个性签名         | -    | ✨      | -        | NapCat拓展   |
| [get_recent_contact]      | 获取最近联系人             | -    | ✨      | -        | NapCat拓展   |
| [nc_get_user_status]      | 获取用户状态               | -    | ✨      | -        | NapCat拓展   |
| [get_clientkey]           | 获取clientkey              | -    | ✨      | -        | NapCat拓展   |

## 其他API

| api                            | 名称               | gocq | NapCat | Lagrange | 备注       |
| ------------------------------ | ------------------ | ---- | ------ | -------- | ---------- |
| [set_restart]                  | 重启 OneBot 实现   | ❌    | ❌      | ❌        |            |
| [clean_cache]                  | 清理缓存           | ✅    | ✅      | ❌        |            |
| [ocr_image]                    | 图片 OCR           | ✅    | ⚠️      | ✅        | gocq拓展   |
| [.ocr_image]                   | 图片 OCR           | ✅    | ⚠️      | ✅        | gocq拓展   |
| [download_file]                | 下载文件到缓存目录 | ✅    | ✅      | ❌        | gocq拓展   |
| [check_url_safely]             | 检查链接安全性     | ✅    | ⚠️      | ❌        | gocq拓展   |
| [.handle_quick_operation]      | 对事件执行快速操作 | ✅    | ✅      | ❌        |            |
| [.get_word_slices]             | 获取中文分词       | ✅    | ❌      | ❌        | gocq拓展   |
| [translate_en2zh]              | 英文翻译为中文     | -    | ✨      | -        | NapCat拓展 |
| [click_inline_keyboard_button] | 点击按钮           | -    | ✨      | -        | NapCat拓展 |
| [ArkSharePeer]                 | 获取推荐好友/群聊卡片           | -    | ✨      | -        | NapCat拓展 |
| [ArkShareGroup]                | 获取推荐群聊卡片             | -    | ✨      | -        | NapCat拓展 |
| [create_collection]            | 创建收藏           | -    | ✨      | -        | NapCat拓展 |
| [get_collection_list]          | 获取收藏列表       | -    | ✨      | -        | NapCat拓展 |
| [bot_exit]                     | 退出机器人         | -    | ✨      | -        | NapCat拓展 |
| [send_packet]                  | 发送自定义组包     | -    | ✨      | -        | NapCat拓展 |
| [nc_get_packet_status]         | 获取packet状态     | -    | ✨      | -        | NapCat拓展 |
| [get_mini_app_ark]             | 获取小程序卡片     | -    | ✨      | -        | NapCat拓展 |
| [get_ai_record]                | 获取AI语音         | -    | ✨      | -        | NapCat拓展 |
| [send_poke]                    | 发送戳一戳         | -    | ✨      | -        | NapCat拓展 |

[send_msg]: ./message.md#发送消息
[send_private_msg]: ./message.md#发送私聊消息
[send_group_msg]: ./message.md#发送群消息
[delete_msg]: ./message.md#撤回消息
[get_msg]: ./message.md#获取消息
[get_forward_msg]: ./message.md#获取合并转发消息
[send_forward_msg]: ./message.md#发送合并转发
[send_group_forward_msg]: ./message.md#发送合并转发-群聊
[send_private_forward_msg]: ./message.md#发送合并转发-好友
[get_group_msg_history]: ./message.md#获取消息历史记录-群聊
[get_friend_msg_history]: ./message.md#获取消息历史记录-好友
[mark_msg_as_read]: ./message.md#标记消息为已读
[set_group_reaction]: ./message.md#给消息添加表情回应
[get_ai_characters]: ./message.md#获取-Ai-声色列表
[send_group_ai_record]: ./message.md#发送群-Ai-语音
[.join_group_emoji_chain]: ./message.md#加入群聊表情接龙
[.join_friend_emoji_chain]: ./message.md#加入好友表情接龙
[set_msg_emoji_like]: ./message.md#nc-给消息添加表情回应
[fetch_emoji_like]: ./message.md#获取消息的表情已回应列表
[send_group_bot_callback]: ./message.md#调用群机器人回调
[mark_private_msg_as_read]: ./message.md#标记私聊消息为已读
[mark_group_msg_as_read]: ./message.md#标记群消息为已读
[_mark_all_as_read]: ./message.md#标记所有消息为已读
[forward_friend_single_msg]: ./message.md#转发好友单条消息
[forward_group_single_msg]: ./message.md#转发群聊单条消息

[send_like]: ./friend.md#发送好友赞
[set_friend_add_request]: ./friend.md#处理加好友请求
[get_stranger_info]: ./friend.md#获取陌生人信息
[get_friend_list]: ./friend.md#获取好友列表
[get_unidirectional_friend_list]: ./friend.md#获取单向好友列表
[delete_friend]: ./friend.md#删除好友
[delete_unidirectional_friend]: ./friend.md#删除单向好友
[set_friend_remark]: ./friend.md#设置好友备注
[get_friends_with_category]: ./friend.md#获取分类的好友列表
[get_doubt_friends_add_request]: ./friend.md#获取可疑好友请求
[set_doubt_friends_add_request]: ./friend.md#处理可疑好友请求
[friend_poke]: ./friend.md#好友戳一戳

[set_group_kick]: ./group.md#群组踢人
[set_group_ban]: ./group.md#群组单人禁言
[set_group_anonymous_ban]: ./group.md#群组匿名用户禁言
[set_group_whole_ban]: ./group.md#群组全员禁言
[set_group_admin]: ./group.md#群组设置管理员
[set_group_anonymous]: ./group.md#群组匿名
[set_group_card]: ./group.md#设置群名片
[set_group_name]: ./group.md#设置群名
[set_group_leave]: ./group.md#退出群组
[set_group_special_title]: ./group.md#设置群组专属头衔
[get_group_info]: ./group.md#获取群信息
[get_group_list]: ./group.md#获取群列表
[get_group_member_info]: ./group.md#获取群成员信息
[get_group_member_list]: ./group.md#获取群成员列表
[get_group_honor_info]: ./group.md#获取群荣誉信息
[set_group_add_request]: ./group.md#处理加群请求／邀请
[set_group_portrait]: ./group.md#设置群头像
[set_essence_msg]: ./group.md#设置精华消息
[delete_essence_msg]: ./group.md#移出精华消息
[get_essence_msg_list]: ./group.md#获取精华消息列表
[send_group_sign]: ./group.md#群打卡
[_get_group_notice]: ./group.md#获取群公告
[_send_group_notice]: ./group.md#发送群公告
[_del_group_notice]: ./group.md#删除群公告
[get_group_system_msg]: ./group.md#获取群系统消息
[get_group_at_all_remain]: ./group.md#获取群@全体成员剩余次数
[set_group_bot_status]: ./group.md#设置群Bot发言状态
[set_group_kick_members]: ./group.md#群组踢多人
[set_group_robot_add_option]: ./group.md#设置机器人进群选项
[set_group_add_option]: ./group.md#设置群添加选项
[set_group_search]: ./group.md#设置群搜索
[set_group_remark]: ./group.md#设置群备注
[group_poke]: ./group.md#群内戳一戳
[get_group_info_ex]: ./group.md#获取群信息扩展
[get_group_detail_info]: ./group.md#获取群详细信息
[get_group_ignore_add_request]: ./group.md#获取群忽略添加请求
[get_group_shut_list]: ./group.md#获取群禁言列表
[get_group_ignored_notifies]: ./group.md#获取群忽略通知

[get_group_file_url]: ./file.md#获取群文件资源链接
[get_private_file_url]: ./file.md#获取私聊文件资源链接
[upload_group_file]: ./file.md#上传群文件
[get_group_file_system_info]: ./file.md#获取群文件系统信息
[get_group_root_files]: ./file.md#获取群根目录文件列表
[get_group_files_by_folder]: ./file.md#获取群子目录文件列表
[delete_group_file]: ./file.md#删除群文件
[create_group_file_folder]: ./file.md#创建群文件文件夹
[delete_group_folder]: ./file.md#删除群文件文件夹
[upload_private_file]: ./file.md#上传私聊文件
[upload_image]: ./file.md#上传图片
[move_group_file]: ./file.md#移动群文件
[rename_group_file_folder]: ./file.md#重命名群文件文件夹
[trans_group_file]: ./file.md#转发群文件
[rename_group_file]: ./file.md#重命名群文件
[get_file]: ./file.md#获取文件

[get_login_info]: ./bot.md#获取登录号信息
[get_cookies]: ./bot.md#获取-Cookies
[get_csrf_token]: ./bot.md#获取-CSRF-Token
[get_credentials]: ./bot.md#获取-QQ-相关接口凭证
[get_record]: ./bot.md#获取语音
[get_image]: ./bot.md#获取图片
[can_send_image]: ./bot.md#检查是否可以发送图片
[can_send_record]: ./bot.md#检查是否可以发送语音
[get_status]: ./bot.md#获取运行状态
[get_version_info]: ./bot.md#获取版本信息
[get_online_clients]: ./bot.md#获取当前账号在线客户端列表
[qidian_get_account_info]: ./bot.md#获取企点账号信息
[get_model_show]: ./bot.md#获取在线机型
[set_model_show]: ./bot.md#设置在线机型
[set_qq_profile]: ./bot.md#设置登录号资料
[get_mface_key]: ./bot.md#获取mface-key
[set_qq_avatar]: ./bot.md#设置QQ头像
[get_rkey]: ./bot.md#获取rkey
[fetch_custom_face]: ./bot.md#获取已收藏的QQ表情列表
[nc_get_rkey]: ./bot.md#获取NC版rkey
[get_rkey_server]: ./bot.md#获取rkey服务器
[set_diy_online_status]: ./bot.md#设置自定义在线状态
[set_online_status]: ./bot.md#设置在线状态
[set_input_status]: ./bot.md#设置输入状态
[get_profile_like]: ./bot.md#获取个人资料点赞
[get_robot_uin_range]: ./bot.md#获取官方机器人账号范围
[set_self_longnick]: ./bot.md#设置自己的个性签名
[get_recent_contact]: ./bot.md#获取最近联系人
[nc_get_user_status]: ./bot.md#获取用户状态
[get_clientkey]: ./bot.md#获取clientkey

[set_restart]: ./other.md#重启-OneBot-实现
[clean_cache]: ./other.md#清理缓存
[ocr_image]: ./other.md#图片-OCR
[.ocr_image]: ./other.md#图片-OCR
[download_file]: ./other.md#下载文件到缓存目录
[check_url_safely]: ./other.md#检查链接安全性
[.handle_quick_operation]: ./other.md#对事件执行快速操作
[.get_word_slices]: ./other.md#获取中文分词
[translate_en2zh]: ./other.md#英文翻译为中文
[click_inline_keyboard_button]: ./other.md#点击按钮
[ArkSharePeer]: ./other.md#获取推荐好友/群聊卡片
[ArkShareGroup]: ./other.md#获取推荐群聊卡片
[create_collection]: ./other.md#创建收藏
[get_collection_list]: ./other.md#获取收藏列表
[bot_exit]: ./other.md#退出机器人
[send_packet]: ./other.md#发送自定义组包
[nc_get_packet_status]: ./other.md#获取packet状态
[get_mini_app_ark]: ./other.md#获取小程序卡片
[get_ai_record]: ./other.md#获取AI语音
[send_poke]: ./other.md#发送戳一戳
