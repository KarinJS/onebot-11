# 其他API

## 重启 OneBot 实现

- `set_restart`

::: details 点击查看请求示例数据

```json
{
  "delay": 0
}
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明                                                                 |
| ------- | -------- | ------ | -------------------------------------------------------------------- |
| `delay` | number   | `0`    | 要延迟的毫秒数，如果默认情况下无法重启，可以尝试设置延迟为 2000 左右 |

### 响应数据

无

## 清理缓存

- `clean_cache`

### 参数

无

### 响应数据

无

## 图片 OCR

- `ocr_image` (gocq拓展)
- `.ocr_image` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "image": "image.jpg"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "texts": [
    {
      "text": "识别出的文本",
      "confidence": 100,
      "coordinates": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "language": "zh_CN"
}
```

:::

::: details 点击查看 NapCat 响应示例数据

```json
[
  {
    "text": "nU",
    "pt1": {
      "x": "25.930853",
      "y": "1.711797"
    },
    "pt2": {
      "x": "72.461205",
      "y": "2.745806"
    },
    "pt3": {
      "x": "72.193184",
      "y": "14.806514"
    },
    "pt4": {
      "x": "25.662836",
      "y": "13.772506"
    },
    "charBox": [
      {
        "charText": "nU",
        "charBox": {
          "pt1": {
            "x": "41.186707",
            "y": "2.050816"
          },
          "pt2": {
            "x": "56.442558",
            "y": "2.389835"
          },
          "pt3": {
            "x": "56.182915",
            "y": "14.073647"
          },
          "pt4": {
            "x": "40.927063",
            "y": "13.734628"
          }
        }
      }
    ],
    "score": ""
  },
  {
    "text": "yion in",
    "pt1": {
      "x": "40.310081",
      "y": "19.155090"
    },
    "pt2": {
      "x": "92.413017",
      "y": "17.004047"
    },
    "pt3": {
      "x": "93.224297",
      "y": "36.654957"
    },
    "pt4": {
      "x": "41.121365",
      "y": "38.806000"
    },
    "charBox": [
      {
        "charText": "yion",
        "charBox": {
          "pt1": {
            "x": "40.310081",
            "y": "19.155090"
          },
          "pt2": {
            "x": "66.660988",
            "y": "18.067207"
          },
          "pt3": {
            "x": "67.446922",
            "y": "37.104027"
          },
          "pt4": {
            "x": "41.096012",
            "y": "38.191910"
          }
        }
      },
      {
        "charText": " ",
        "charBox": {
          "pt1": {
            "x": "66.660988",
            "y": "18.067207"
          },
          "pt2": {
            "x": "73.847603",
            "y": "17.770512"
          },
          "pt3": {
            "x": "74.633530",
            "y": "36.807331"
          },
          "pt4": {
            "x": "67.446922",
            "y": "37.104027"
          }
        }
      },
      {
        "charText": "in",
        "charBox": {
          "pt1": {
            "x": "73.847603",
            "y": "17.770512"
          },
          "pt2": {
            "x": "85.825287",
            "y": "17.276018"
          },
          "pt3": {
            "x": "86.611214",
            "y": "36.312836"
          },
          "pt4": {
            "x": "74.633530",
            "y": "36.807331"
          }
        }
      }
    ],
    "score": ""
  },
  {
    "text": "mlHttp.",
    "pt1": {
      "x": "6.956338",
      "y": "61.610126"
    },
    "pt2": {
      "x": "72.331848",
      "y": "65.844292"
    },
    "pt3": {
      "x": "71.104248",
      "y": "84.798470"
    },
    "pt4": {
      "x": "5.728738",
      "y": "80.564301"
    },
    "charBox": [
      {
        "charText": "mlHttp",
        "charBox": {
          "pt1": {
            "x": "9.230268",
            "y": "61.757401"
          },
          "pt2": {
            "x": "61.530674",
            "y": "65.144737"
          },
          "pt3": {
            "x": "60.341438",
            "y": "83.506592"
          },
          "pt4": {
            "x": "8.041031",
            "y": "80.119255"
          }
        }
      },
      {
        "charText": ".",
        "charBox": {
          "pt1": {
            "x": "63.804607",
            "y": "65.292007"
          },
          "pt2": {
            "x": "70.626396",
            "y": "65.733833"
          },
          "pt3": {
            "x": "69.437164",
            "y": "84.095695"
          },
          "pt4": {
            "x": "62.615368",
            "y": "83.653870"
          }
        }
      }
    ],
    "score": ""
  }
]
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明                                   |
| ------- | -------- | ------ | -------------------------------------- |
| `image` | string   | -      | 图片ID，格式同图片消息段的 `file` 参数 |

### 响应数据

| 字段名     | 数据类型        | 说明    |
| ---------- | --------------- | ------- |
| `texts`    | TextDetection[] | OCR结果 |
| `language` | string          | 语言    |

**TextDetection**

| 字段名        | 数据类型       | 说明   |
| ------------- | -------------- | ------ |
| `text`        | string         | 文本   |
| `confidence`  | number (int32) | 置信度 |
| `coordinates` | vector2[]      | 坐标   |

- `NapCat`
  - 经测试，在 `Linux` 上无法使用此功能
  - 返回参数请参考上方 `NapCat` 响应示例数据

## 下载文件到缓存目录

- `download_file` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "url": "http://example.com/file.jpg",
  "thread_count": 1,
  "headers": [
    "User-Agent: Mozilla/5.0"
  ]
}
```

:::

::: details 点击查看 NapCat 请求示例数据

```json
{
  "url": "http://example.com/file.jpg",
  "base64": "base64",
  "name": "file.jpg",
  "headers": [
    "User-Agent: Mozilla/5.0"
  ]
}
```

::: details 点击查看响应示例数据

```json
{
  "file": "D:/CQP/data/download/file.jpg"
}
```

:::

### 参数

| 字段名         | 数据类型        | 默认值 | 说明         |
| -------------- | --------------- | ------ | ------------ |
| `url`          | string          | -      | 链接地址     |
| `thread_count` | number (int32)  | `1`    | 下载线程数   |
| `headers`      | string 或 array | -      | 自定义请求头 |

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

- `NapCat`

| 字段名    | 数据类型        | 默认值 | 说明                        |
| --------- | --------------- | ------ | --------------------------- |
| `url`     | string          | -      | 链接地址 与 `base64` 二选一 |
| `base64`  | string          | -      | 图片base64 与 `url` 二选一  |
| `name`    | string          | -      | 自定义文件名称              |
| `headers` | string 或 array | -      | 自定义请求头                |

### 响应数据

| 字段名 | 数据类型 | 说明             |
| ------ | -------- | ---------------- |
| `file` | string   | 下载后的文件路径 |

## 检查链接安全性

- `check_url_safely` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "url": "http://example.com"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "level": 1
}
```

:::

### 参数

| 字段名 | 数据类型 | 默认值 | 说明           |
| ------ | -------- | ------ | -------------- |
| `url`  | string   | -      | 需要检查的链接 |

### 响应数据

| 字段名  | 数据类型 | 说明                           |
| ------- | -------- | ------------------------------ |
| `level` | number   | 安全等级，1:安全 2:未知 3:危险 |

## 对事件执行快速操作

- `.handle_quick_operation`

::: details 点击查看请求示例数据

```json
{
  "context": {
    "message_id": 123456789,
    "user_id": 987654321,
    "message": "Hello World",
    "raw_message": "Hello World"
  },
  "operation": {
    "reply": "你好",
    "auto_escape": false
  }
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                               |
| ----------- | -------- | ------ | -------------------------------------------------- |
| `context`   | object   | -      | 事件数据对象，可做精简，如去掉原始消息只保留消息id |
| `operation` | object   | -      | 快速操作对象，例如 `{"reply": "回复内容"}`         |

### 响应数据

无

## 获取中文分词

- `.get_word_slices` (gocq拓展)

::: details 点击查看请求示例数据

```json
{
  "content": "中文分词测试"
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "slices": [
    "中文",
    "分词",
    "测试"
  ]
}
```

:::

### 参数

| 字段名    | 数据类型 | 默认值 | 说明 |
| --------- | -------- | ------ | ---- |
| `content` | string   | -      | 内容 |

### 响应数据

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `slices` | string[] | 分词结果 |

## 英文翻译为中文

- `translate_en2zh` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "words": [
    "hello",
    "world"
  ]
}
```

:::

::: details 点击查看响应示例数据

```json
[
  "你好",
  "世界"
]
```

:::

### 参数

| 字段名  | 数据类型 | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `words` | string[] | -      | 英文文本 |

### 响应数据

返回一个数组，每个元素为中文翻译，请参考上方响应示例数据

## 点击按钮

- `click_inline_keyboard_button` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "bot_appid": "123456789",
  "button_id": "button_1",
  "callback_data": "string",
  "msg_seq": "10086"
}
```

:::

::: details 点击查看响应示例数据

```json
{ 
  "result": 0,
  "errMsg": "",
  "status": 1,
  "promptText": "提示文本",
  "promptType": 1,
  "promptIcon": 1
}
```

:::

### 参数

| 字段名        | 数据类型 | 默认值 | 说明     |
| ------------- | -------- | ------ | -------- |
| `group_id`    | number   | -      | 群号     |
| `message_id`  | number   | -      | 消息ID   |
| `button_id`   | string   | -      | 按钮ID   |
| `button_data` | string   | -      | 按钮数据 |

### 响应数据

| 字段名       | 数据类型 | 说明     |
| ------------ | -------- | -------- |
| `result`     | string   | 结果     |
| `errMsg`     | string   | 错误信息 |
| `status`     | number   | 状态     |
| `promptText` | string   | 提示文本 |
| `promptType` | number   | 提示类型 |
| `promptIcon` | number   | 提示图标 |

## 获取推荐好友/群聊卡片

- `ArkSharePeer` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": 123456789,
  "phoneNumber": "12345678901"
}
```

:::

::: details 点击查看响应示例数据

```json
{ 
  "result": 0,
  "errMsg": "",
  "arkMsg": ""
}
```

### 参数

| 字段名        | 数据类型 | 默认值 | 说明             |
| ------------- | -------- | ------ | ---------------- |
| `user_id`     | number   | -      | 要分享的用户QQ号 |
| `phoneNumber` | string   | -      | 目标用户QQ号     |

### 响应数据

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `result` | number   | 结果     |
| `errMsg` | string   | 错误信息 |
| `arkMsg` | string   | ark消息  |

## 获取推荐群聊卡片

- `ArkShareGroup` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "group_id": 123456789,
  "phoneNumber": 987654321
}
```

:::

::: details 点击查看响应示例数据

```json
{ 
  "result": 0,
  "errMsg": "",
  "arkJson": ""
}
```

:::

### 参数

| 字段名        | 数据类型 | 默认值 | 说明         |
| ------------- | -------- | ------ | ------------ |
| `group_id`    | number   | -      | 要分享的群号 |
| `phoneNumber` | string   | -      | 目标用户QQ号 |

### 响应数据

| 字段名    | 数据类型 | 说明     |
| --------- | -------- | -------- |
| `result`  | number   | 结果     |
| `errMsg`  | string   | 错误信息 |
| `arkJson` | string   | ark消息  |

## 创建收藏

- `create_collection` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "rawData": "收藏内容",
  "brief": "收藏简介"  
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "result": 0,
  "errMsg": ""
}
```

### 参数

| 字段名    | 数据类型 | 默认值 | 说明     |
| --------- | -------- | ------ | -------- |
| `rawData` | string   | -      | 收藏内容 |
| `brief`   | string   | -      | 收藏简介 |

### 响应数据

| 字段名   | 数据类型 | 说明     |
| -------- | -------- | -------- |
| `result` | number   | 结果     |
| `errMsg` | string   | 错误信息 |

## 获取收藏列表

- `get_collection_list` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "category": 1,
  "count": 10
}
```

:::

::: details 点击查看响应示例数据

```json
{
  "result": 0,
  "errMsg": "",
  "collectionSearchList": { // 收藏列表
    "collectionItemList": [
      {
        "cid": "string", // 收藏ID
        "type": 0, // 收藏类型
        "status": 0, // 收藏状态
        "author": { // 收藏者
          "type": 0, // 收藏者类型
          "numId": "string", // 收藏者QQ号
          "strId": "string", // 收藏者QQ号
          "groupId": "string", // 收藏者群号
          "groupName": "string", // 收藏者群名
          "uid": "string" // 收藏者QQ号
        },
        "bid": 0, // 收藏ID
        "category": 0, // 收藏类型
        "createTime": "string", // 收藏时间
        "collectTime": "string", // 收藏时间
        "modifyTime": "string", // 收藏时间
        "sequence": "string", // 收藏顺序
        "shareUrl": "string", // 收藏链接
        "customGroupId": 0, // 收藏群号
        "securityBeat": true, // 是否安全 
        "summary": { // 收藏摘要
          "textSummary": "string", // 文本摘要
          "linkSummary": "string", // 链接摘要
          "gallerySummary": "string", // 图片摘要
          "audioSummary": "string", // 音频摘要
          "videoSummary": "string", // 视频摘要
          "fileSummary": "string", // 文件摘要
          "locationSummary": "string", // 位置摘要
          "richMediaSummary": "string" // 富媒体摘要
        }
      }
    ],
    "hasMore": true, // 是否还有更多
    "bottomTimeStamp": "0708098400" // 时间戳
  }
}
```

:::

### 参数

| 字段名     | 数据类型 | 默认值 | 说明     |
| ---------- | -------- | ------ | -------- |
| `category` | number   | -      | 收藏类型 |
| `count`    | number   | -      | 收藏数量 |

### 响应数据

| 字段名                 | 数据类型                                      | 说明     |
| ---------------------- | --------------------------------------------- | -------- |
| `result`               | number                                        | 结果     |
| `errMsg`               | string                                        | 错误信息 |
| `collectionSearchList` | [collectionSearchList](#collectionSearchList) | 收藏列表 |

#### collectionSearchList

| 字段名               | 数据类型                                    | 说明         |
| -------------------- | ------------------------------------------- | ------------ |
| `collectionItemList` | [collectionItemList[]](#collectionItemList) | 收藏列表     |
| `hasMore`            | boolean                                     | 是否还有更多 |
| `bottomTimeStamp`    | string                                      | 时间戳       |

#### collectionItemList

| 字段名          | 数据类型            | 说明     |
| --------------- | ------------------- | -------- |
| `cid`           | string              | 收藏ID   |
| `type`          | number              | 收藏类型 |
| `status`        | number              | 收藏状态 |
| `author`        | [author](#author)   | 收藏者   |
| `bid`           | number              | 收藏ID   |
| `category`      | number              | 收藏类型 |
| `createTime`    | string              | 收藏时间 |
| `collectTime`   | string              | 收藏时间 |
| `modifyTime`    | string              | 收藏时间 |
| `sequence`      | string              | 收藏顺序 |
| `shareUrl`      | string              | 收藏链接 |
| `customGroupId` | number              | 收藏群号 |
| `securityBeat`  | boolean             | 是否安全 |
| `summary`       | [summary](#summary) | 收藏摘要 |

#### author

| 字段名      | 数据类型 | 说明       |
| ----------- | -------- | ---------- |
| `type`      | number   | 收藏者类型 |
| `numId`     | string   | 收藏者QQ号 |
| `strId`     | string   | 收藏者QQ号 |
| `groupId`   | string   | 收藏者群号 |
| `groupName` | string   | 收藏者群名 |
| `uid`       | string   | 收藏者QQ号 |

#### summary

| 字段名             | 数据类型 | 说明       |
| ------------------ | -------- | ---------- |
| `textSummary`      | string   | 文本摘要   |
| `linkSummary`      | string   | 链接摘要   |
| `gallerySummary`   | string   | 图片摘要   |
| `audioSummary`     | string   | 音频摘要   |
| `videoSummary`     | string   | 视频摘要   |
| `fileSummary`      | string   | 文件摘要   |
| `locationSummary`  | string   | 位置摘要   |
| `richMediaSummary` | string   | 富媒体摘要 |

## 退出机器人

- `bot_exit` (NapCat拓展)

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 发送自定义组包

- `send_packet` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{}
```

:::

### 参数

::: tip 提示
该 API 较为特殊 请参考源码
:::

### 响应数据

::: tip 提示
该 API 较为特殊 请参考源码
:::

## 获取packet状态

- `nc_get_packet_status` (NapCat拓展)

### 参数

::: tip 提示
该 API 无需参数
:::

### 响应数据

::: tip 提示
该 API 没有响应数据
:::

## 获取小程序卡片

- `get_mini_app_ark` (NapCat拓展)

::: details 点击查看请求示例数据

```json
// 第一种 固定模板 bili、weibo
{
   "type": "bili",
   "title": "拾雪的一天",
   "desc": "vlog记录一天的生活",
   "picUrl": "https://thirdqq.qlogo.cn/g?b=oidb&k=09ElpZZZUTHFhoIlvs0lFg&kti=ZyBvjxHhVOI&s=640",
   "jumpUrl": "pages/video/video?bvid=BV1GJ411x7h7/",
   "webUrl": "https://thirdqq.qlogo.cn/g?b=oidb&k=09ElpZZZUTHFhoIlvs0lFg&kti=ZyBvjxHhVOI&s=640",
   "rawArkData": true
}

// 第二种 自定义
{
  "title": "string",
  "desc": "string",
  "picUrl": "string",
  "jumpUrl": "string",
  "iconUrl": "string",
  "webUrl": "string",
  "appId": "string",
  "scene": "string",
  "templateType": "string",
  "businessType": "string",
  "verType": "string",
  "shareType": "string",
  "versionId": "string",
  "sdkId": "string",
  "withShareTicket": "string",
  "rawArkData": true,
}
```

:::

::: details 点击查看响应示例数据

```json
// 根据传递的rawArkData 拥有不同的返回值
// true
{
  "data": {
    "appName": "string",
    "appView": "string",
    "ver": "string",
    "desc": "string",
    "prompt": "string",
    "metaData": "MetaData",
    "config": "Config"
  }
}

// false
{
  "data": {
    "ver": "string",
    "prompt": "string",
    "config": "Config",
    "app": "string",
    "view": "string",
    "meta": "MetaData",
    "miniappShareOrigin": 0,
    "miniappOpenRefer": "string"
  }
}
```

:::

### 参数

- 固定模板

| 字段名       | 数据类型 | 默认值 | 说明                       |
| ------------ | -------- | ------ | -------------------------- |
| `type`       | string   | -      | 模板类型 `bili` 或 `weibo` |
| `title`      | string   | -      | 标题                       |
| `desc`       | string   | -      | 描述                       |
| `picUrl`     | string   | -      | 图片URL                    |
| `jumpUrl`    | string   | -      | 跳转URL                    |
| `webUrl`     | string   | -      | 网页URL                    |
| `rawArkData` | boolean  | false  | 是否返回原始ark数据        |

- 自定义

| 字段名            | 数据类型 | 默认值 | 说明                |
| ----------------- | -------- | ------ | ------------------- |
| `title`           | string   | -      | 标题                |
| `desc`            | string   | -      | 描述                |
| `picUrl`          | string   | -      | 图片URL             |
| `jumpUrl`         | string   | -      | 跳转URL             |
| `iconUrl`         | string   | -      | 图标URL             |
| `webUrl`          | string   | -      | 网页URL             |
| `appId`           | string   | -      | 应用ID              |
| `scene`           | string   | -      | 场景                |
| `templateType`    | string   | -      | 模板类型            |
| `businessType`    | string   | -      | 业务类型            |
| `verType`         | string   | -      | 版本类型            |
| `shareType`       | string   | -      | 分享类型            |
| `versionId`       | string   | -      | 版本ID              |
| `sdkId`           | string   | -      | SDK ID              |
| `withShareTicket` | string   | -      | 是否分享            |
| `rawArkData`      | boolean  | false  | 是否返回原始ark数据 |

### 响应数据

以下都是 `data` 的字段，详情参考上方的示例响应

- `rawArkData: true`

| 字段名     | 数据类型 | 说明     |
| ---------- | -------- | -------- |
| `appName`  | string   | 应用名称 |
| `appView`  | string   | 应用视图 |
| `ver`      | string   | 版本     |
| `desc`     | string   | 描述     |
| `prompt`   | string   | 提示     |
| `metaData` | string   | 元数据   |
| `config`   | string   | 配置     |

- `rawArkData: false`

| 字段名               | 数据类型 | 说明     |
| -------------------- | -------- | -------- |
| `ver`                | string   | 版本     |
| `prompt`             | string   | 提示     |
| `config`             | string   | 配置     |
| `app`                | string   | 应用     |
| `view`               | string   | 视图     |
| `meta`               | string   | 元数据   |
| `miniappShareOrigin` | number   | 分享来源 |
| `miniappOpenRefer`   | string   | 分享来源 |

## 获取AI语音

- `get_ai_record` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "character": "音色",
  "group_id": 1,
  "text": "要转换为语音的文本"
}
```

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                      |
| ----------- | -------- | ------ | ----------------------------------------- |
| `character` | string   | -      | 音色，应该调用 `get_ai_characters` 先获取 |
| `group_id`  | number   | -      | 群号                                      |
| `text`      | string   | -      | 要转换为语音的文本                        |

### 响应数据

直接返回字符串。

## 发送戳一戳

- `send_poke` (NapCat拓展)

::: details 点击查看请求示例数据

```json
{
  "user_id": "123456789",
  "group_id": "987654321",
  "target_id": "123456789"
}
```

:::

### 参数

| 字段名      | 数据类型 | 默认值 | 说明                                      |
| ----------- | -------- | ------ | ----------------------------------------- |
| `user_id`   | string   | -      | 目标用户QQ号，与group_id二选一            |
| `group_id`  | string   | -      | 群号，如果是群内戳一戳，与user_id二选一   |
| `target_id` | string   | -      | 可选，被戳的用户QQ号，不提供则使用user_id |

### 响应数据

::: tip 提示
该 API 没有响应数据
:::
