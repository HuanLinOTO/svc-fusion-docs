# 正式使用 SVC Fusion

https://www.yuque.com/yuqueyonghux2gzt8/ek7xd3

## 1：下载和部署

官网：[https://sf.dysjs.com/](https://sf.dysjs.com/)

[SVC Fusion 整合包文档](https://sf.dysjs.com/)

点击链接加入群聊【幻灵的炼丹工坊】：

[正在跳转](https://qm.qq.com/q/9VZmMSQUbm)

获取整合包链接后进入网盘下载（目前 Fusion 使用 123 网盘发布）

下载完成后用 bandizip 或 7zip 进行解压（不要使用 winrar，会出现解压文件损坏的报错）

[7-Zip](https://7-zip.com)

解压完成后进入整合包（整合包本体如下）

![image.png](imgs\08787f1dfffc36740e6865934e46cb3f9b1eb449f867a4c7a7f55ea00d95caa1.png)

**文件结构说明**

| 文件夹      | 说明                                         |
| ----------- | -------------------------------------------- |
| exp         | 工作目录                                     |
| archieve    | 训练归档文件夹                               |
| models      | 已训练模型文件夹                             |
| dataset_raw | 原始数据集文件夹                             |
| data        | 可用于训练的数据集存放位置，完成训练后可删除 |
| tmp         | 数据处理临时文件夹，完成数据处理后可删除     |

## 2：SVC-Fusion，启动！

双击启动 WebUI.bat

![启动 WebUI.bat.jpg](imgs\f3afbad6bc14640fd467b038ee9e77cc0a4c62a048ef6a5086fed10b7074533c.png)

初次启动可能需要等待一段时间。

出现提示框后，点击我同意，进入网页。

此时 cmd 控制台大概是这样的（使用 Fusion 时请勿关闭控制台！）

![image.png](imgs\8cb548b4bfc711a6283e0e360d916e560a8fc8d0a2dfd34f26f8ab8ac905640b.png)

浏览器将自动打开网页，如下

![image.png](imgs\528c634baa3b6fcbd71688a62cf0eb34583953da83d752076cf5e837741f6b76.png)

:::tip
推荐使用 Edge、Chrome 浏览器打开网页，并关闭网页翻译和加速器。

打开 webui 的过程中可能会出现若干警告，具体请详见文末的常见报错。
:::

## 3：预处理

![image.png](imgs\53b9002819e4c095a3c40a37daa219beedca01b6090cfad3e0699fd35bf4c51e.png)

#### 点击“打开数据集文件夹”进入 dataset_raw 文件夹

![image.png](imgs\df164fc6a4543f84d0d38c448ff081fa24d4c2b02d5caa42cb3db5e107352414.png)

#### 将准备好的数据集打包成文件夹放入此处，注意文件结构

```
dataset_raw/

|-你的角色名字 1/

| | 1.wav

| | 2.wav

| | 3.wav

| ...

|-你的角色名字 2/

| | 1.wav

| | 2.wav

| | 3.wav

| ...
```

:::tip
如果是单说话人，你的 dataset_raw 文件夹里面应该是这样的

![image.png](imgs\68d84d0666750a050a473866a3368cbc102edbaa2b92924ed952461670e91c1d.png)

如果是多说话人，你的 dataset_raw 文件夹里面应该是这样的

![image.png](imgs\1cbd0a762e7e05b8e7dd177330aadd5911c80f25421ba613554da88f508e6150.png)

数据集文件夹里应当是这样的

![image.png](imgs\df26a08af29892797407d7c54a269434c8f8f43fe7804b425ee5eed6039112a6.png)
:::

注：数据集命名若包含 **特殊字符或中文** 则 **可能** 在处理时发生报错，可使用未鸟的批量重命名工具进行修正。

为了能够直观地教学，本次以单说话人进行示范。

#### 回到网页，选择数据处理，进行预处理

![image.png](imgs\f88d67c94a1dfee2b19e1e3b333e266cf8ecf1a099a70d0864ebdfcf914a7ff3.png)

##### 选择需要的算法（算法选择参考前文）

![image.png](imgs\4d6b40b26afc98b3e852a8096ae5ca8f8794a2c184fd7026b75e911193a7b9cd.png)

##### 若选择 So-vits，则另有几个选项，按需勾选（如果不懂不建议乱动）

![image.png](imgs\66df3714ba3497c2dc6acbf59dd1458c05647c2d149ebff9313a290385ae29a9.png)

##### 选择声音编码器（目前仅支持 768）

![image.png](imgs\3e76170184e2aceafd5d24eedc9d104f7a37fd4507a6eb11db17112e77def11a.png)

选择 F0 预处理器（通常为默认）

![image.png](imgs\a0c58023853f72eec3d4c9c246f4aa4dcac12617d3f3e21af2a8440db4be6aaf.png)

![image.png](imgs\1bfe9c67c572f1249ad3a51a047cade6cdf3e51f890e59a10fbd658939acf9d9.png)

##### 选择设备进行训练(DDSP 支持 cpu 计算）

![image.png](imgs\a0f2afef02f4519bfde4245516dcf28dcb70bab24f513cc1599000051563f8ba.png)

~~此处以入门卡作演示~~

![image.png](imgs\cdc4c8fbeb0108d6b43f40d39b56d377f48cce62dad0b7acb5be5e71cedd14de.png)

##### 然后选择用于 reflow 的采样器

![image.png](imgs\46df3d286290f24ad99cd3a4735f3276bff1c1e2c5b4d504fb418c842782c544.png)

##### 选择完成后，点击”提交“进行预处理

![image.png](imgs\f1177aeba5902b0c3376c6d859c21fefa75b82e964eec8a8985da6b2f9614f67.png)

##### 预处理完成

![image.png](imgs\d5280bb529dad39a0d47ecfb376399cd07595ec2e1a07f63f766aac0fa7b75e7.png)

![image.png](imgs\ecfaa36ef2a56016b04efcd98385bfaa6fb67b06526a747d8f613e616f6b9d06.png)

**注：本教程以 ddsp6.0 为模型，其他算法的预处理/训练/推理界面略有不同，但操作逻辑相似。**

## 4：训练

#### 点击进入训练界面

![image.png](imgs\3ec2ab16ad2aa72cb4b427fbd9a1e7853b030de31daab39888a13aa1c98cd382.png)

#### 选择参数（一般为默认参数，默参也能用）

##### 以下为训练参数详解：

**训练批次大小：batch_size（bs），越大越好，越大越占显存，注意不能超过训练集条数。根据显存酌情调整，一般默认的数值不会爆显存**

**训练进程数：如果你显卡较好，可以设为 0，会提升速度但不影响质量**

**训练精度：默认 fp32（单精度），选择 fp16（半精度）、bf16（混合精度） 可以获得更快的速度和更低的显存占用，但是炸炉概率 up up**

**验证间隔：每 N 步验证一次，同时保存。默认 1000**

**日志间隔：每 N 步输出一次日志。默认 1，建议改为 100，否则报告较为频繁（不影响质量）**

**强制保存模型间隔：每 N 步保存一次模型。默认 1000**

**lr 衰减力度：高级玩法，不建议动**

**缓存设备：选择 cuda 可以获得更快的速度，但是需要更大显存的显卡 (SoVITS 主模型无效)，选择 cpu 则载入内存，减小硬盘 io 压力**

**缓存所有数据：若内存和显存较小则建议关闭，**

**最大训练轮数：默认 100000，不建议动，正常不需要跑这么久**

**使用预训练模型：是否调用底模。勾选可以大幅减少训练时间，如果不懂不要动**

##### **确定参数后点击“提交”开始训练**

![image.png](imgs\150752cb5b0fb16a8be8c3c3e06fe99bff33337f93e2aaf149692ab67cce310c.png)

等待弹出训练 bat

![image.png](imgs\134df3b3d80f864e880ad9738081366ebbd552e847cfe14a902619ba8ba6bf2b.png)

训练时长与数据集时长、质量、算法、预测器、bs、lr、GPU 相关，因此一般建议每 1000-2000 步（step）停下进行试听。

Tensorboard 可作为 loss 数值上的参考

~~训练日子参数和推荐训练步数会在文档 DLC 中发布~~

**注意：不要迷信步数和 loss，无论哪个算法都不是炼的越久越好的！**

![CF9E79DF424BB6DE3E9FE7FD6F317486.jpg](imgs\a7b507a229d8da9714b4d1207d5ac91a901098f04eefd04a2bb69ebc419f7fc1.png)

结束、暂停训练请按停止训练（或直接关闭训练 bat）

## 5：推理

#### 训练完成并归档后点击推理，来到推理界面

![image.png](imgs\0a258014f3faa94b5c02707f0f9bdbd7b6cdbf58ae48fcfd2bc8fbd04045647f.png)

##### 首先选择用于推理的模型

![image.png](imgs\bd55d00fbb538914d3283b844b203a3cb96e6999fa28617576c3ce32f6636e14.png)

![image.png](imgs\b641d36da29a528f69dec967036421a652f34da861f780cee946aa1c3039ce17.png)

如果模型加载正常，则会显示相应的算法

![image.png](imgs\887b51b077828c4f23a0b87be864030e7c6f77cc731d2336feba8eb474fdd4f5.png)

接下来选择推理用的设备（优先使用 GPU）

![image.png](imgs\e231692b5cf09ffc16171be5ff57ba80a9d86085d19d68b6c4d07900aafd0131.png)

##### 点击选择模型进行加载

![image.png](imgs\40b6ba1e6873973aef81e2ce9a009e198560ff1666556b7218c9563d12998b52.png)

加载成功后会显示说话人

![image.png](imgs\f5f2f7284fe917676a06f2ae55799c18d802ea218723f2e90853b96a31d4df6d.png)

##### 放入用于转换音色的音频文件（即推理源）

![image.png](imgs\3a69832a9f54ca3fc10ebc9379f224d06f32160fa43dc3d7974a91b594268245.png)

若推理源没有经过人声分离，则需要勾选去除伴奏（可视歌曲情况勾选去除和声）

![image.png](imgs\01b0f89f4de3ae75a96589cf0c3d8d482f5a9074fbb126cc8341de6b4ce12bd6.png)

接下来选择推理参数

![image.png](imgs\98f7b9fab7fa88911cf64383165ba9fe90fb37d08b939aefd5d084a2055b5e6f.png)

##### 以下为推理参数详解：

**f0 提取器：用于音高提取/预测的模型，一般认为 remove 最均衡，fcpe 更自然**（其余选项正在测试中，将在 DLC 中详细述）

**变调：每 12 为一个八度，参考：女模型转男原声 12，男模型转女原声 -12，因异性声调不同的音色泄露、失真可以调节这个**

**切片阈值：人声切片的阈值，如推理源有底噪可以调为 -40 或更高**

**采样器：用于 reflow 的采样器，一般默认就好（二者差异正在实验中）**

**推理步数：推理步长，一般默认就行**

T Start：~~不知道~~**控制浅扩散的参数**

**共振峰偏移：值越大声音越细，值越小声音越粗**

##### **调整完参数后点击“提交”进行推理**

![image.png](imgs\288b4a733d3aa297390a7593b58419219494b1271165366aacc1b1f643e70166.png)

**推理完成**

![image.png](imgs\21b50640f474c704713e6b7e5a3b601864314e350e466a1932151a6d05b67d25.png)

可以试听推理后的音频，并对参数进行微调

##### 如果对音频比较满意，可以进行保存

![image.png](imgs\9b86eeca8c2204a71096b7531773a2d3b10ba14e4a430eb1430c776125b5187e.png)

保存完文件后，可以在其他软件内进行加伴奏、混音、和声等处理
