import{_ as e,c as a,o as r,V as o}from"./chunks/framework.BpLZpJbo.js";const m=JSON.parse('{"title":"SVC-Fusion 常见错误及解决方法","description":"","frontmatter":{},"headers":[],"relativePath":"faq/index.md","filePath":"faq/index.md"}'),t={name:"faq/index.md"},i=o('<h1 id="svc-fusion-常见错误及解决方法" tabindex="-1">SVC-Fusion 常见错误及解决方法 <a class="header-anchor" href="#svc-fusion-常见错误及解决方法" aria-label="Permalink to &quot;SVC-Fusion 常见错误及解决方法&quot;">​</a></h1><p>本文档提供了在使用 DDSP-SVC 过程中可能遇到的一些常见错误及其解决方法。</p><p>Authors:</p><p><a href="https://space.bilibili.com/399248533" target="_blank" rel="noreferrer">@Charming·</a></p><p><a href="https://space.bilibili.com/457021084" target="_blank" rel="noreferrer">@空客造雾部</a></p><p><a href="https://space.bilibili.com/503423945" target="_blank" rel="noreferrer">@多玩幻灵 qwq</a></p><h2 id="the-system-cannot-find-the-path-specified" tabindex="-1">The system cannot find the path specified. <a class="header-anchor" href="#the-system-cannot-find-the-path-specified" aria-label="Permalink to &quot;The system cannot find the path specified.&quot;">​</a></h2><ul><li>Tips :教你一个生活小技巧：压缩包要解压才能使用。</li></ul><h2 id="cuda-out-of-memory-tried-to-allocate" tabindex="-1">CUDA out of memory. Tried to allocate ... <a class="header-anchor" href="#cuda-out-of-memory-tried-to-allocate" aria-label="Permalink to &quot;CUDA out of memory. Tried to allocate ...&quot;">​</a></h2><p><strong>不要怀疑，你的显卡显存或虚拟内存不够用了。以下是 100% 解决问题的解决方法，照着做必能解决，请不要再在各种地方提问这个问题了</strong></p><ul><li><p>1.在报错中找到 XX GiB already allocated 之后，是否显示 0 bytes free，如果是 0 bytes free 那么看第 2， 3，4 步，如果显示 XX MiB free 或者 XX GiB free, 看第 5 步</p></li><li><p>2.如果是预处理的时候爆显存： 换用对显存占用友好的 f0 预测器（友好度从高到低：parselmouth &gt;= harvest &gt;= rmvpe ≈ fcpe &gt;&gt; crepe），建议首选 rmvpe 或 fcpe</p></li><li><p>3.如果是训练的时候爆显存：</p><ul><li>a. 检查数据集有没有过长的切片（20 秒以上）</li><li>b. 调小批量大小</li><li>c. 使用 cpu 进行训练</li><li>d. 把你数据集写进内存，而不是缓存</li><li>e. 或者开启数据随用随取</li><li>f. 吃共享显存（绝对不推荐）</li><li>g. 去 AutoDL 等云算力平台上面租一张大显存的显卡跑</li></ul></li><li><p>4.如果是推理的时候爆显存：</p><ul><li>a. 推理源（干声）不干净（有残留的混响，伴奏，和声），导致自动切片切不开。提取干声最佳实践请参考歌曲人声分离</li><li>b. 调大切片阈值（比如-40 调成-30，再大就不建议了，你也不想唱一半就被切一刀吧）</li><li>c. 设置推理加速，同时会影响音频质量</li><li>d. 使用 cpu 推理，速度会比较慢，但是不会爆显存</li></ul></li><li><p>5.如果显示仍然有空余显存却还是爆显存了，那就是你的虚拟内存不够大，调整到至少 50G 以上。</p></li></ul><h2 id="access-is-denied-press-any-key-to-continue-ddsp-webui-exe-is-not-recognized-as-an-internal-or-external-operable-program-or-bantch-file-press-any-key-to-continue-modulenotfounderror-no-module-named-dist-press-any-key-to-continue" tabindex="-1">Access is denied. Press any key to continue . . . \\ &quot; ddsp.webui.exe &quot; is not recognized as an internal or external operable program or bantch file. Press any key to continue . . . \\ ModuleNotFoundError: No module named &#39;dist&#39; Press any key to continue . . . <a class="header-anchor" href="#access-is-denied-press-any-key-to-continue-ddsp-webui-exe-is-not-recognized-as-an-internal-or-external-operable-program-or-bantch-file-press-any-key-to-continue-modulenotfounderror-no-module-named-dist-press-any-key-to-continue" aria-label="Permalink to &quot;Access is denied. Press any key to continue . . . \\ &quot; ddsp.webui.exe &quot; is not recognized as an internal or external operable program or bantch file. Press any key to continue . . . \\ ModuleNotFoundError: No module named &#39;dist&#39; Press any key to continue . . .&quot;">​</a></h2><ul><li>关掉你那些该死的杀毒软件，包括 Windows Defender ，然后重新解压软件。</li></ul><h2 id="important-you-are-using-gradio-version-4-18-0-however-version-4-29-0-is-available-please-upgrade" tabindex="-1">IMPORTANT: You are using gradio version 4.18.0, however version 4.29.0 is available, please upgrade. <a class="header-anchor" href="#important-you-are-using-gradio-version-4-18-0-however-version-4-29-0-is-available-please-upgrade" aria-label="Permalink to &quot;IMPORTANT: You are using gradio version 4.18.0, however version 4.29.0 is available, please upgrade.&quot;">​</a></h2><ul><li>这不是报错，不用管</li></ul><h2 id="内存错误" tabindex="-1">内存错误 <a class="header-anchor" href="#内存错误" aria-label="Permalink to &quot;内存错误&quot;">​</a></h2><p>错误信息可能为：</p><ul><li>numpy.core._exceptions._ArrayMemnryEror:UInable to allocate 46.2 MiB for an array with shape(504576,6,2) anddata type f1oat64</li><li>ImportError: DLL load failed while importing _multiprocessing: 页面文件太小，无法完成操作。</li><li>MemoryError</li></ul><p>解决方法：</p><ul><li>1.开虚拟内存，如已开启请继续添加空间（操作方法请自行百度）</li><li>2.买个新内存</li><li>3.把数据扔进显存</li><li>4.开启随用随取</li></ul><h2 id="num-samples-should-be-a-positive-integer-value-but-got-num-samples-0" tabindex="-1">num_samples should be a positive integer value,but got num_samples=0 <a class="header-anchor" href="#num-samples-should-be-a-positive-integer-value-but-got-num-samples-0" aria-label="Permalink to &quot;num_samples should be a positive integer value,but got num_samples=0&quot;">​</a></h2><p>数据集过短，切不出验证，或者可能根本没数据集</p><h2 id="fairseq-tasks-text-to-speech-please-install-tensorboardx-pip-install-tensorboardx" tabindex="-1">fairseq.tasks.text_to_speech | Please install tensorboardX: pip install tensorboardX <a class="header-anchor" href="#fairseq-tasks-text-to-speech-please-install-tensorboardx-pip-install-tensorboardx" aria-label="Permalink to &quot;fairseq.tasks.text_to_speech | Please install tensorboardX: pip install tensorboardX&quot;">​</a></h2><ul><li>没有问题，程序正在训练，请等待日志出现。</li></ul><h2 id="error-请将你的数据集放到-dataset-raw-你的角色名字文件夹中" tabindex="-1">Error 请将你的数据集放到 dataset_raw/你的角色名字文件夹中 <a class="header-anchor" href="#error-请将你的数据集放到-dataset-raw-你的角色名字文件夹中" aria-label="Permalink to &quot;Error 请将你的数据集放到 dataset_raw/你的角色名字文件夹中&quot;">​</a></h2><ul><li>按照错误信息中的提示操作即可。</li></ul><h2 id="raise-valueerror-x-nan-ddsp-loss-valueerror-x-nan-ddsp-loss" tabindex="-1">raise ValueError(&#39; [x] nan ddsp_loss &#39;) ValueError: [x] nan ddsp_loss <a class="header-anchor" href="#raise-valueerror-x-nan-ddsp-loss-valueerror-x-nan-ddsp-loss" aria-label="Permalink to &quot;raise ValueError(&#39; [x] nan ddsp_loss &#39;) ValueError: [x] nan ddsp_loss&quot;">​</a></h2><ul><li>建议更换为 <code>fp32</code> 进行训练，以解决此问题。</li></ul><h2 id="connection-errored-out" tabindex="-1">Connection errored out. <a class="header-anchor" href="#connection-errored-out" aria-label="Permalink to &quot;Connection errored out.&quot;">​</a></h2><ul><li>请勿关闭终端。关闭 WebUI 终端会导致无法连接。你把 WebUI 终端都关了当然连接不上了……</li></ul><h2 id="error-no-such-file-or-directory-data-train-pitch-aug-dict-npy" tabindex="-1">Error No such file or directory: data/train pitch aug_dict.npy <a class="header-anchor" href="#error-no-such-file-or-directory-data-train-pitch-aug-dict-npy" aria-label="Permalink to &quot;Error No such file or directory: data/train pitch aug_dict.npy&quot;">​</a></h2><ul><li>请重新进行数据预处理。</li></ul><h2 id="runtimeerror-cannot-load-audio-from-file-ffprobe-not-found-please-install-ffmpeg-your-system-use-non-wav-dio-file-formats-and-make-sure-ffprobe-is-in-your-path" tabindex="-1">RuntimeError: Cannot load audio from file: ffprobe not found.Please install ffmpeg your system use non WAV dio file formats and make sure ffprobe is in your PATH <a class="header-anchor" href="#runtimeerror-cannot-load-audio-from-file-ffprobe-not-found-please-install-ffmpeg-your-system-use-non-wav-dio-file-formats-and-make-sure-ffprobe-is-in-your-path" aria-label="Permalink to &quot;RuntimeError: Cannot load audio from file: ffprobe not found.Please install ffmpeg your system use non WAV dio file formats and make sure ffprobe is in your PATH&quot;">​</a></h2><ul><li>请确保已正确解压压缩包，并重新尝试。</li></ul><h2 id="attributeerror-sovitsmodel-object-has-no-attribute-use-cluster" tabindex="-1">AttributeError: &#39;SoVITSModel&#39; object has no attribute &#39;use_cluster&#39; <a class="header-anchor" href="#attributeerror-sovitsmodel-object-has-no-attribute-use-cluster" aria-label="Permalink to &quot;AttributeError: &#39;SoVITSModel&#39; object has no attribute &#39;use_cluster&#39;&quot;">​</a></h2><ul><li>请先加载模型</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong><em>持续更新中。。。</em></strong></p></div>',38),l=[i];function s(n,u,d,p,c,h){return r(),a("div",null,l)}const b=e(t,[["render",s]]);export{m as __pageData,b as default};
