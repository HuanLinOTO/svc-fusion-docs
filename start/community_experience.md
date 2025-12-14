# 社区经验分享

<script setup>
import VideoCard from '../components/VideoCard.vue'

const videos = [
  {
    icon: '📦',
    title: '模型如何导入',
    author: '@阿祖拉达亚贡',
    authorLink: 'https://space.bilibili.com/28723812',
    bvid: 'BV1RpYYzpERB',
    aid: '115037461220528',
    cid: '31734435789'
  },
  {
    icon: '🎵',
    title: '合唱类 AI 翻唱是怎么做的',
    author: '@阿祖拉达亚贡',
    authorLink: 'https://space.bilibili.com/28723812',
    bvid: 'BV1iKqCYEE4e',
    aid: '113628778859194',
    cid: '27275167464'
  },
  {
    icon: '🔊',
    title: 'AI 翻唱：分辨哑音与去除和声',
    author: '@阿祖拉达亚贡',
    authorLink: 'https://www.bilibili.com/video/BV1YeenzJExZ',
    authorIcon: '🎬',
    description: 'AI 翻唱，今天我们来谈谈【分辨哑音】与【去除和声】。',
    bvid: 'BV1YeenzJExZ'
  },
  {
    icon: '⚙️',
    title: 'DDSP6.3 模型训练教程',
    author: '@Asterism_空无',
    authorLink: 'https://space.bilibili.com/1016431365',
    description: 'DDSP6.3 模型训练详解与实操演示。',
    bvid: 'BV1j42yBiERh'
  },
  {
    icon: '⚡',
    title: '3 分钟速成 AI 翻唱和声混音流程思路',
    author: '@AmethystBlack',
    authorLink: 'https://space.bilibili.com/200663509',
    description: '快速介绍个人向的 AI 翻唱、和声与混音的流程思路，适合快速上手参考。',
    bvid: 'BV1ksJiz6EkR'
  }
]
</script>

<div class="community-hero">
  <p class="hero-description">
    🎤 这儿是社区成员分享的经验和技巧，帮助你更好地使用 SVC Fusion
  </p>
  <div class="contribute-banner">
    <span class="contribute-icon">💡</span>
    <span>有任何想分享的经验？欢迎在 QQ 群找我添加，或直接 PR 到文档，喊 <strong>@aiguoliuguo</strong> 合并</span>
  </div>
</div>

<div class="guide-hint">
  <span class="guide-icon">🎬</span>
  <span>点击下方卡片即可观看视频教程</span>
</div>

<div class="video-grid">
  <VideoCard
    v-for="(video, index) in videos"
    :key="index"
    :icon="video.icon"
    :title="video.title"
    :author="video.author"
    :author-link="video.authorLink"
    :author-icon="video.authorIcon"
    :description="video.description"
    :bvid="video.bvid"
    :aid="video.aid"
    :cid="video.cid"
  />
</div>

<style>
.community-hero {
  text-align: center;
  margin-bottom: 24px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.15);
}

.hero-description {
  font-size: 1.2em;
  color: #4a5568;
  margin-bottom: 20px;
}

.contribute-banner {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 30px;
  font-size: 0.95em;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.contribute-icon {
  font-size: 1.2em;
}

.guide-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%);
  border: 1px dashed rgba(255, 152, 0, 0.4);
  border-radius: 12px;
  color: #b45309;
  font-size: 0.95em;
  font-weight: 500;
}

.guide-icon {
  font-size: 1.3em;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

@media (max-width: 640px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1200px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 深色模式适配 */
.dark .community-hero {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border-color: rgba(102, 126, 234, 0.25);
}

.dark .hero-description {
  color: #a0aec0;
}

.dark .guide-hint {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%);
  border-color: rgba(255, 152, 0, 0.3);
  color: #fbbf24;
}
</style>
