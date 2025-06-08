# 隐藏 API

- [隐藏 API](#隐藏-api)
  - [`.handle_quick_operation` 对事件执行快速操作](#handle_quick_operation-对事件执行快速操作)
    - [参数](#参数)
    - [响应数据](#响应数据)
  - [`.get_word_slices` 获取中文分词](#get_word_slices-获取中文分词)
    - [参数](#参数-1)
    - [响应数据](#响应数据-1)

隐藏 API 是不建议一般用户使用的，它们只应该在 OneBot 实现内部或由 SDK 和框架使用，因为不正确的使用可能造成程序运行不正常。

所有隐藏 API 都以点号（`.`）开头。

## `.handle_quick_operation` 对事件执行快速操作

关于事件的快速操作，见 [快速操作](../event/README.md#快速操作)。

### 参数

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `context` | object | - | 事件数据对象，可做精简，如去掉 `message` 等无用字段 |
| `operation` | object | - | 快速操作对象，例如 `{"ban": true, "reply": "请不要说脏话"}` |

### 响应数据

无

<hr>

| 上一节 | 下一节 |
| --- | --- |
| [公开 API](public.md) | [事件概述](../event/README.md) |

## `.get_word_slices` 获取中文分词

::: danger 警告
隐藏 API 是不建议一般用户使用的, 它们只应该在 OneBot 实现内部或由 SDK 和框架使用, 因为不正确的使用可能造成程序运行不正常。
:::

### 参数

| 字段名    | 数据类型 | 说明 |
| --------- | -------- | ---- |
| `content` | string   | 内容 |

### 响应数据

| 字段名   | 数据类型  | 说明 |
| -------- | --------- | ---- |
| `slices` | string[]  | 词组 |
