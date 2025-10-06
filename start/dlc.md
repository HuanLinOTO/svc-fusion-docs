<script setup>
const dlcSections = [
  {
    id: 'ddsp-svc-63',
    title: 'DDSP-SVC 6.3',
    items: [
      {
        icon: '🤖',
        title: 'ddsp6.3_6x512_6x1024',
        description: '推荐这个 前级参数 6x512，后级参数 6x1024',
        netdiskLink: 'https://pan.quark.cn/s/f47eff7e88dc',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x1024.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x1024.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_6x512_10x2048',
        description: '前级参数 6x512，后级参数 10x2048',
        netdiskLink: 'https://pan.quark.cn/s/3ecb7fcc93cc',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_10x2048.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_10x2048.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_6x1024_6x1024',
        description: '前级参数 6x1024，后级参数 6x1024',
        netdiskLink: 'https://pan.quark.cn/s/6170968a28b6',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x1024_6x1024.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x1024_6x1024.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_10x1024_6x512',
        description: '前级参数 10x1024，后级参数 6x512',
        netdiskLink: 'https://pan.quark.cn/s/ebb194d574f4',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_10x1024_6x512.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_10x1024_6x512.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_10x1024_6x1024',
        description: '前级参数 10x1024，后级参数 6x1024',
        netdiskLink: 'https://pan.quark.cn/s/0dd1da7c39b5',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_10x1024_6x1024.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_10x1024_6x1024.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_6x512_6x512',
        description: '前级参数 6x512，后级参数 6x512（轻量模型）',
        netdiskLink: 'https://pan.quark.cn/s/d13c7a9ddbb8',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x512.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x512.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.3_6x512_6x768',
        description: '前级参数 6x512，后级参数 6x768',
        netdiskLink: 'https://pan.quark.cn/s/e271491451d6',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x768.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.3-Pretrain/resolve/main/ddsp6.3_6x512_6x768.sf_dlc'
      }
    ]
  },
  {
    id: 'ddsp-svc-61',
    title: 'DDSP-SVC 6.1',
    note: 'attn 代表有注意力机制，noise 代表非人声优化',
    items: [
      {
        icon: '🤖',
        title: 'ddsp6.1_1024_10',
        description: 'DDSP 6.1 预训练模型',
        netdiskLink: 'https://pan.quark.cn/s/04c27ca7182c',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_1024_10.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_1024_10.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_1024_10_attn',
        description: 'DDSP 6.1 预训练模型（带注意力机制）',
        netdiskLink: 'https://pan.quark.cn/s/54c382f0e2c7',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_1024_10_attn.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_1024_10_attn.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_2048_6',
        description: 'DDSP 6.1 预训练模型',
        netdiskLink: 'https://pan.quark.cn/s/0b2880557b4f',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_2048_6.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_2048_6.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_2048_6_attn',
        description: 'DDSP 6.1 预训练模型（带注意力机制）',
        netdiskLink: 'https://pan.quark.cn/s/49588bdc2f26',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_2048_6_attn.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_2048_6_attn.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_noise_1024_10',
        description: 'DDSP 6.1 预训练模型（非人声优化）',
        netdiskLink: 'https://pan.quark.cn/s/e02a8cee3058',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_1024_10.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_1024_10.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_noise_1024_10_attn',
        description: 'DDSP 6.1 预训练模型（非人声优化，带注意力机制）',
        netdiskLink: 'https://pan.quark.cn/s/0ec4a01fb299',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_1024_10_attn.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_1024_10_attn.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_noise_2048_6',
        description: 'DDSP 6.1 预训练模型（非人声优化）',
        netdiskLink: 'https://pan.quark.cn/s/addd94582ea4',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_2048_6.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_2048_6.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6.1_noise_2048_6_attn',
        description: 'DDSP 6.1 预训练模型（非人声优化，带注意力机制）',
        netdiskLink: 'https://pan.quark.cn/s/ab818039584b',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_2048_6_attn.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.1-Pretrain/resolve/main/ddsp6.1_noise_2048_6_attn.sf_dlc'
      }
    ]
  },
  {
    id: 'ddsp-svc-60',
    title: 'DDSP-SVC 6.0',
    note: 'attn 代表有注意力机制，noise 代表非人声优化',
    items: [
      {
        icon: '🤖',
        title: 'ddsp6_cvec_512_6',
        description: 'DDSP 6.0 预训练模型',
        netdiskLink: 'https://pan.quark.cn/s/7ec3c692a02b',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.0-Pretrain/resolve/main/ddsp6_cvec_512_6.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.0-Pretrain/resolve/main/ddsp6_cvec_512_6.sf_dlc'
      },
      {
        icon: '🤖',
        title: 'ddsp6_cvec_1024_12',
        description: 'DDSP 6.0 预训练模型',
        netdiskLink: 'https://pan.quark.cn/s/3534f92d2a7b',
        primaryLink: 'https://huggingface.co/SVCFusion/DDSP6.0-Pretrain/resolve/main/ddsp6_cvec_1024_12.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/DDSP6.0-Pretrain/resolve/main/ddsp6_cvec_1024_12.sf_dlc'
      }
    ]
  },
  {
    id: 'reflow-vae-svc',
    title: 'Reflow-VAE-SVC',
    items: [
      {
        icon: '🔄',
        title: 'reflow_contentvec768l12',
        description: '由 bfloat16 训练',
        netdiskLink: 'https://pan.quark.cn/s/39621301a62f',
        primaryLink: 'https://huggingface.co/SVCFusion/Reflow-VAE-SVC-Pretrain/resolve/main/reflow_contentvec768l12.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/Reflow-VAE-SVC-Pretrain/resolve/main/reflow_contentvec768l12.sf_dlc'
      }
    ]
  },
  {
    id: 'so-vits-svc',
    title: 'So-VITS-SVC',
    items: [
      {
        icon: '🎤',
        title: 'sovits_diff_vec768l12',
        description: '浅扩散底模',
        netdiskLink: 'https://pan.quark.cn/s/9bc0eb7c9549',
        primaryLink: 'https://huggingface.co/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_diff_vec768l12.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_diff_vec768l12.sf_dlc'
      },
      {
        icon: '🎤',
        title: 'sovits_shiren_tradition',
        description: '老底模，由深夜诗人训练，羽毛整合包里的就是这个',
        netdiskLink: 'https://pan.quark.cn/s/480e4ae8a942',
        primaryLink: 'https://huggingface.co/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_shiren_tradition.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_shiren_tradition.sf_dlc'
      },
      {
        icon: '🎤',
        title: 'sovits_so-vits-svc_cvec768l12_BigDataset_Test_2024.12.21#1',
        description: '幻灵训练底模，数据量大，微调效果好',
        netdiskLink: 'https://pan.quark.cn/s/5e5fa9ca1c31',
        primaryLink: 'https://huggingface.co/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_so-vits-svc_cvec768l12_BigDataset_Test_2024.12.21%231.sf_dlc',
        mirrorLink: 'https://hf-mirror.com/SVCFusion/So-VITS-SVC-Pretrain/resolve/main/sovits_so-vits-svc_cvec768l12_BigDataset_Test_2024.12.21%231.sf_dlc'
      }
    ]
  }
]
</script>

# DLC

## 索引

<nav class="dlc-index">
  <ul>
    <li v-for="section in dlcSections" :key="section.id" style="margin: 0;">
      <a :href="`#${section.id}`">{{ section.title }}</a>
    </li>
    <li style="margin: 0;"><a href="#installation">安装说明</a></li>
    <li style="margin: 0;"><a href="#network-guide">网络访问说明</a></li>
  </ul>
</nav>

<section
  v-for="section in dlcSections"
  :key="section.id"
  :id="section.id"
  class="dlc-section"
>
  <h2>{{ section.title }}</h2>
  <p v-if="section.note" class="dlc-note">{{ section.note }}</p>
  <DlcItem v-for="item in section.items" :key="item.title" v-bind="item" />
</section>

<h2 id="installation">安装说明</h2>

1. **下载 DLC**：点击上方对应的下载链接（推荐使用网盘下载）
2. **安装 DLC**：下载完成后，在 SVCFusion 中进入"小工具 → DLC"页面
3. **上传文件**：将下载的 DLC 文件上传到页面中
4. **完成安装**：点击"安装"按钮进行安装
5. **刷新页面**：安装完成后建议刷新页面以查看新内容

<h2 id="network-guide">网络访问说明</h2>

:::tip
如果无法访问 HuggingFace，可以使用镜像链接进行下载。镜像站点提供相同的内容，但访问速度可能更快。网盘下载通常是最稳定的选择。
:::

:::warning 注意事项

- 请确保下载的 DLC 版本与您的 SVCFusion 版本兼容
- 如遇到安装问题，请参考 [FAQ 页面](/faq/) 或加入交流群获取帮助
  :::

<style scoped>
.dlc-index ul {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  padding: 0;
  list-style: none;
  margin: 0 0 24px;
}

.dlc-index a {
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
}

.dlc-index a:hover {
  text-decoration: underline;
}

.dlc-section {
  margin-bottom: 48px;
}

.dlc-section h2 {
  margin-top: 48px;
}

.dlc-note {
  margin: 12px 0 24px;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .dlc-index ul {
    gap: 8px 16px;
  }
}
</style>
