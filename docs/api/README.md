# Api 列表一览

> [!note]
> api没有超链接的代表还未完成收集  
> 未完成收集的状态不代表真实性  
> ✅ 代表对应协议实现了此Api  
> ❌ 代表对应协议未实现此Api  
> ⚠️ 如果Api实现有差异，会在对应Api文档中注明  
> ⚠️ 需要注意的是，所有文档都仅供参考，请以实际实现为准

## 消息相关

| api                        | 名称                 | gocq | NapCat | Lagrange | 备注     |
| -------------------------- | -------------------- | ---- | ------ | -------- | -------- |
| [send_msg]                 | 发送消息             | ✅    | ✅      | ✅        |          |
| [send_private_msg]         | 发送私聊消息         | ✅    | ✅      | ✅        |          |
| [send_group_msg]           | 发送群消息           | ✅    | ✅      | ✅        |          |
| [delete_msg]               | 撤回消息             | ✅    | ✅      | ✅        |          |
| [get_msg]                  | 获取消息             | ✅    | ✅      | ✅        |          |
| [get_forward_msg]          | 获取合并转发消息     | ✅    | ✅      | ✅        |          |
| [send_forward_msg]         | 发送合并转发消息     | ✅    | ✅      | ✅        |          |
| [send_group_forward_msg]   | 发送合并转发(群聊)   | ✅    | ✅      | ✅        | gocq拓展 |
| [send_private_forward_msg] | 发送合并转发(好友)   | ✅    | ✅      | ✅        | gocq拓展 |
| [get_group_msg_history]    | 获取群消息历史记录   | ✅    | ✅      | ✅        | gocq拓展 |
| [get_friend_msg_history]   | 获取好友消息历史记录 | ❌    | ✅      | ✅        | 社区拓展 |

## 好友相关

| api                              | 名称             | gocq | NapCat | Lagrange | 备注     |
| -------------------------------- | ---------------- | ---- | ------ | -------- | -------- |
| [send_like]                      | 发送好友赞       | ❌    | ✅      | ✅        |          |
| [set_friend_add_request]         | 处理加好友请求   | ✅    | ✅      | ✅        |          |
| `get_unidirectional_friend_list` | 获取单向好友列表 | ✅    | ✅      | ✅        | gocq拓展 |
| `delete_friend`                  | 删除好友         | ✅    | ✅      | ✅        | gocq拓展 |
| `delete_unidirectional_friend`   | 删除单向好友     | ✅    | ✅      | ✅        | gocq拓展 |
| `get_stranger_info`              | 获取陌生人信息   | ✅    | ✅      | ✅        |          |
| `get_friend_list`                | 获取好友列表     | ✅    | ✅      | ✅        |          |

## 群聊相关

| api                       | 名称                      | gocq | NapCat | Lagrange | 备注     |
| ------------------------- | ------------------------- | ---- | ------ | -------- | -------- |
| `set_group_kick`          | 群组踢人                  | ✅    | ✅      | ✅        |          |
| `set_group_ban`           | 群组单人禁言              | ✅    | ✅      | ✅        |          |
| `set_group_anonymous_ban` | 群组匿名用户禁言          | ✅    | ✅      | ✅        |          |
| `set_group_whole_ban`     | 群组全员禁言              | ✅    | ✅      | ✅        |          |
| `set_group_admin`         | 群组设置管理员            | ✅    | ✅      | ✅        |          |
| `set_group_anonymous`     | 群组匿名                  | ✅    | ✅      | ✅        |          |
| `set_group_card`          | 设置群名片（群备注）      | ✅    | ✅      | ✅        |          |
| `set_group_name`          | 设置群名                  | ✅    | ✅      | ✅        |          |
| `set_group_leave`         | 退出群组                  | ✅    | ✅      | ✅        |          |
| `set_group_special_title` | 设置群组专属头衔          | ✅    | ✅      | ✅        |          |
| `set_group_add_request`   | 处理加群请求／邀请        | ✅    | ✅      | ✅        |          |
| `set_group_portrait`      | 设置群头像                | ✅    | ✅      | ✅        | gocq拓展 |
| `set_essence_msg`         | 设置精华消息              | ✅    | ✅      | ✅        | gocq拓展 |
| `delete_essence_msg`      | 移出精华消息              | ✅    | ✅      | ✅        | gocq拓展 |
| `get_essence_msg_list`    | 获取精华消息列表          | ✅    | ✅      | ✅        | gocq拓展 |
| `send_group_sign`         | 群打卡                    | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_notice`        | 获取群公告                | ✅    | ✅      | ✅        | gocq拓展 |
| `send_group_notice`       | 发送群公告                | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_system_msg`    | 获取群系统消息            | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_at_all_remain` | 获取群 @全体成员 剩余次数 | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_info`          | 获取群信息                | ✅    | ✅      | ✅        |          |
| `get_group_list`          | 获取群列表                | ✅    | ✅      | ✅        |          |
| `get_group_member_info`   | 获取群成员信息            | ✅    | ✅      | ✅        |          |
| `get_group_member_list`   | 获取群成员列表            | ✅    | ✅      | ✅        |          |
| `get_group_honor_info`    | 获取群荣誉信息            | ✅    | ✅      | ✅        |          |

## 文件相关

| api                          | 名称                 | gocq | NapCat | Lagrange | 备注     |
| ---------------------------- | -------------------- | ---- | ------ | -------- | -------- |
| `get_group_file_url`         | 获取群文件资源链接   | ✅    | ✅      | ✅        | gocq拓展 |
| `get_private_file_url`       | 获取私聊文件资源链接 | ✅    | ✅      | ✅        | gocq拓展 |
| `upload_group_file`          | 上传群文件           | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_file_system_info` | 获取群文件系统信息   | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_root_files`       | 获取群根目录文件列表 | ✅    | ✅      | ✅        | gocq拓展 |
| `get_group_files_by_folder`  | 获取群子目录文件列表 | ✅    | ✅      | ✅        | gocq拓展 |
| `delete_group_file`          | 删除群文件           | ✅    | ✅      | ✅        | gocq拓展 |
| `create_group_file_folder`   | 创建群文件文件夹     | ✅    | ✅      | ✅        | gocq拓展 |
| `delete_group_folder`        | 删除群文件文件夹     | ✅    | ✅      | ✅        | gocq拓展 |
| `upload_private_file`        | 上传私聊文件         | ✅    | ✅      | ✅        | gocq拓展 |

## Bot自身

| api                       | 名称                       | gocq | NapCat | Lagrange | 备注     |
| ------------------------- | -------------------------- | ---- | ------ | -------- | -------- |
| `get_login_info`          | 获取登录号信息             | ✅    | ✅      | ✅        |          |
| `get_cookies`             | 获取 Cookies               | ✅    | ✅      | ✅        |          |
| `get_csrf_token`          | 获取 CSRF Token            | ✅    | ✅      | ✅        |          |
| `get_credentials`         | 获取 QQ 相关接口凭证       | ✅    | ✅      | ✅        |          |
| `get_record`              | 获取语音                   | ✅    | ✅      | ✅        |          |
| `get_image`               | 获取图片                   | ✅    | ✅      | ✅        |          |
| `can_send_image`          | 检查是否可以发送图片       | ✅    | ✅      | ✅        |          |
| `can_send_record`         | 检查是否可以发送语音       | ✅    | ✅      | ✅        |          |
| `get_status`              | 获取运行状态               | ✅    | ✅      | ✅        |          |
| `get_version_info`        | 获取版本信息               | ✅    | ✅      | ✅        |          |
| `get_online_clients`      | 获取当前账号在线客户端列表 | ✅    | ✅      | ✅        | gocq拓展 |
| `qidian_get_account_info` | 获取企点账号信息           | ✅    | ✅      | ✅        | gocq拓展 |
| `_get_model_show`         | 获取在线机型               | ✅    | ✅      | ✅        | gocq拓展 |
| `_set_model_show`         | 设置在线机型               | ✅    | ✅      | ✅        | gocq拓展 |
| `set_qq_profile`          | 设置登录号资料             | ✅    | ✅      | ✅        | gocq拓展 |

## 其他API

| api                       | 名称               | gocq | NapCat | Lagrange | 备注     |
| ------------------------- | ------------------ | ---- | ------ | -------- | -------- |
| `set_restart`             | 重启 OneBot 实现   | ✅    | ✅      | ✅        |          |
| `clean_cache`             | 清理缓存           | ✅    | ✅      | ✅        |          |
| `ocr_image`               | 图片 OCR           | ✅    | ✅      | ✅        | gocq拓展 |
| `download_file`           | 下载文件到缓存目录 | ✅    | ✅      | ✅        | gocq拓展 |
| `check_url_safely`        | 检查链接安全性     | ✅    | ✅      | ✅        | gocq拓展 |
| `.handle_quick_operation` | 对事件执行快速操作 | ✅    | ✅      | ✅        |          |
| `.get_word_slices`        | 获取中文分词       | ✅    | ✅      | ✅        | gocq拓展 |

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

[send_like]: ./friend.md#发送好友赞
[set_friend_add_request]: ./friend.md#处理加好友请求
