# DDSP-SVC 常见错误及解决方法

本文档提供了在使用 DDSP-SVC 过程中可能遇到的一些常见错误及其解决方法。

Authors:

[@Charming·](https://space.bilibili.com/399248533)

[@空客造雾部](https://space.bilibili.com/457021084)

[@多玩幻灵qwq](https://space.bilibili.com/503423945)

## The system cannot find the path specified.

- Tips :教你一个生活小技巧：压缩包要解压才能使用。

## CUDA out of memory. Tried to allocate ...

**不要怀疑，你的显卡显存或虚拟内存不够用了。以下是 100% 解决问题的解决方法，照着做必能解决，请不要再在各种地方提问这个问题了**

 - 1.在报错中找到 XX GiB already allocated 之后，是否显示 0 bytes free，如果是 0 bytes free 那么看第2， 3，4步，如果显示 XX MiB free 或者 XX GiB free, 看第 5 步

 - 2.如果是预处理的时候爆显存：
    换用对显存占用友好的 f0 预测器（友好度从高到低：parselmouth >= harvest >= rmvpe ≈ fcpe >> crepe），建议首选 rmvpe 或 fcpe

 - 3.如果是训练的时候爆显存：
   - a. 检查数据集有没有过长的切片（20秒以上）
   - b. 调小批量大小
   - c. 使用cpu进行训练
   - d. 把你数据集写进内存，而不是缓存
   - e. 或者开启数据随用随取
   - f. 吃共享显存（绝对不推荐）
   - g. 去 AutoDL 等云算力平台上面租一张大显存的显卡跑
  
 - 4.如果是推理的时候爆显存：
   - a. 推理源（干声）不干净（有残留的混响，伴奏，和声），导致自动切片切不开。提取干声最佳实践请参考歌曲人声分离
   - b. 调大切片阈值（比如-40调成-30，再大就不建议了，你也不想唱一半就被切一刀吧）
   - c. 设置推理加速，同时会影响音频质量
   - d. 使用 cpu 推理，速度会比较慢，但是不会爆显存

 - 5.如果显示仍然有空余显存却还是爆显存了，那就是你的虚拟内存不够大，调整到至少 50G 以上。

## 内存错误

错误信息可能为：

- numpy.core._exceptions._ArrayMemnryEror:UInable to allocate 46.2 MiB for an array with shape(504576,6,2) anddata type f1oat64
- ImportError: DLL load failed while importing _multiprocessing: 页面文件太小，无法完成操作。
- MemoryError

解决方法：

 - 1.开虚拟内存，如已开启请继续添加空间（操作方法请自行百度）
 - 2.买个新内存
 - 3.把数据扔进显存
 - 4.开启随用随取    

## num_samples should be a positive integer value,but got num_samples=0

数据集过短，切不出验证，或者可能根本没数据集

## RuntimeError: Carnot load audio from file: ffprobe' not found. Please install ffmpeg in your system to use non-WAV audio file formats and make sure 'ffprobe'

更新整合包

## fairseq.tasks.text_to_speech | Please install tensorboardX: pip install tensorboardX

- 没有问题，程序正在训练，请等待日志出现。

## 为什么我没有去除背景音乐和自动混音？

- 请在下载界面下载 [uvr权重](https://www.123pan.com/s/BEzKjv-MCqqv.html) 文件，并且解压后放入ddsp项目的根目录内。

## Error请将你的数据集放到 dataset_raw/你的角色名字文件夹中

- 按照错误信息中的提示操作即可。

## raise ValueError(' [x] nan ddsp_loss ') ValueError:  [x] nan ddsp_loss

- 建议更换为 `fp32` 进行训练，以解决此问题。

## Connection errored out.

- 请勿关闭终端。关闭 WebUI 终端会导致无法连接。你把 WebUI 终端都关了当然连接不上了……

## Error No such file or directory: data/train pitch aug_dict.npy

- 请重新进行数据预处理。

## RuntimeError: Cannot load audio from file: ffprobe not found.Please install ffmpeg your system use non WAV dio file formats and make sure ffprobe is in your PATH

- 请确保已正确解压压缩包，并重新尝试。

## File corrupted! This program has been manipulated and maybe it's infected by a Virus or cracked. This file won"t work anymore.

- 关掉你那些该死的杀毒软件，包括 Windows Defender ，然后重新解压软件。

:::tip
***持续更新中。。。***
:::