# 关于 Linux

周所周知的原因，Windows 比 Linux 的用户多上不少，而且开发者的主力系统也是 Windows，所以本整合包优先开发 Windows 版本，Linux 版本的开发会相对滞后一些。

且因为无法找到合适的测试平台，Linux 版本的稳定性也无法保证，如有 Bug 还请见谅。

完整包内的环境是 Windows 的，Linux 版本的用户需要自行安装依赖。

欢迎 Linux 用户提交自己的 conda 环境，帮助我们完善 Linux 版本的用户体验。

另外，记得安装 FFmpeg

## 启动方式

在安装依赖后，使用 `python launcher.py` 启动整合包。

## 已知可能的问题

### 架构

仅支持 AMD64 架构，不支持 ARM 架构。

### Python 启动路径

整合包在非 Win32 下使用命令 `python` 作为拉起进程的方式，而不是 `sys.executable`，这可能会导致一些问题。

### 「打开数据集目录」

本功能使用 Win32 下的 `explorer` 命令实现，Linux 下可能无法使用。
