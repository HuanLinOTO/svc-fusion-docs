# SVC-Fusion 常见错误及解决方法

本文档提供了在使用 SVC Fusion 过程中可能遇到的一些常见错误及其解决方法。

Authors:

[@Charming·](https://space.bilibili.com/399248533)

[@空客造雾部](https://space.bilibili.com/457021084)

[@多玩幻灵 qwq](https://space.bilibili.com/503423945)


## CUDA out of memory. Tried to allocate ...

**不要怀疑，你的显卡显存或虚拟内存不够用了。以下是 100% 解决问题的解决方法，照着做必能解决，请不要再在各种地方提问这个问题了**

- 1.在报错中找到 XX GiB already allocated 之后，是否显示 0 bytes free，如果是 0 bytes free 那么看第 2， 3，4 步，如果显示 XX MiB free 或者 XX GiB free, 看第 5 步

- 2.如果是预处理的时候爆显存：
  换用对显存占用友好的 f0 预测器（友好度从高到低：parselmouth >= harvest >= rmvpe ≈ fcpe >> crepe），建议首选 rmvpe 或 fcpe

- 3.如果是训练的时候爆显存：

  - a. 检查数据集有没有过长的切片（20 秒以上）
  - b. 调小批量大小
  - c. 使用 cpu 进行训练
  - d. 把你数据集写进内存，而不是缓存
  - e. 或者开启数据随用随取
  - f. 吃共享显存（绝对不推荐）
  - g. 去 AutoDL 等云算力平台上面租一张大显存的显卡跑

- 4.如果是推理的时候爆显存：

  - a. 推理源（干声）不干净（有残留的混响，伴奏，和声），导致自动切片切不开。提取干声最佳实践请参考歌曲人声分离
  - b. 调大切片阈值（比如-40 调成-30，再大就不建议了，你也不想唱一半就被切一刀吧）
  - c. 设置推理加速，同时会影响音频质量
  - d. 使用 cpu 推理，速度会比较慢，但是不会爆显存

- 5.如果显示仍然有空余显存却还是爆显存了，那就是你的虚拟内存不够大，调整到至少 50G 以上。

## IMPORTANT: You are using gradio version 4.18.0, however version 4.29.0 is available, please upgrade.

- 这不是报错，不用管

## 内存错误

错误信息可能为：

- numpy.core.\_exceptions.\_ArrayMemnryEror:UInable to allocate 46.2 MiB for an array with shape(504576,6,2) anddata type f1oat64
- ImportError: DLL load failed while importing \_multiprocessing: 页面文件太小，无法完成操作。
- MemoryError

解决方法：

- 1.开虚拟内存，如已开启请继续添加空间（操作方法请自行百度）
- 2.买个新内存
- 3.把数据扔进显存
- 4.开启随用随取

## num_samples should be a positive integer value,but got num_samples=0

- 数据集过短，切不出验证，或者可能根本没数据集，文件夹为空

## fairseq.tasks.text_to_speech | Please install tensorboardX: pip install tensorboardX

- 没有问题，程序正在训练，请等待日志出现。

## Error 请将你的数据集放到 dataset_raw/你的角色名字文件夹中

- 按照错误信息中的提示操作即可。

## size mismatch for ddsp_model.unit2ctrl.dense_out.weight_v: copying a param with shape torch.Size([4100, 512]) from checkpoint, the shape in current model is torch.Size([4100, 1024]).

- 请检查选择的底模是否为一开始训练使用的底模

## raise ValueError(' [x] nan ddsp_loss ') ValueError: [x] nan ddsp_loss

- 建议更换为 `fp32` 进行训练，以解决此问题。

## Connection errored out.

- 请勿关闭终端。关闭 WebUI 终端会导致无法连接。你把 WebUI 终端都关了当然连接不上了……

## Error No such file or directory: data/train pitch aug_dict.npy

- 请重新进行数据预处理。

## AttributeError: 'SoVITSModel' object has no attribute 'use_cluster'

- 请先加载模型

## Compilation is in progress. Please wait...

- 正在编译，请等待

##

:::tip
**_持续更新中。。。_**
:::
