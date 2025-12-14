# 社区经验分享

<script setup>
import VideoCard from '../components/VideoCard.vue'
import { ref, onMounted } from 'vue'

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
    🎤 这是社区的经验和技巧，帮助你更好地使用 SVC Fusion
  </p>
  
  <div class="contribute-banner">
    <span class="contribute-icon">💡</span>
    <span>有任何想分享的经验？欢迎在 QQ 群直接找我添加，或在视频简介中 [@多玩幻灵qwq](https://space.bilibili.com/503423945)</span>
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

/* QQ群统计样式 */
.group-stats {
  margin: 24px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.stats-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.stats-icon {
  font-size: 1.3em;
}

.stats-title {
  font-weight: 600;
  color: #4a5568;
}

.stats-total {
  padding: 4px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.85em;
}

.stats-total strong {
  font-weight: 700;
}

.stats-loading {
  color: #a0aec0;
  font-size: 0.85em;
}

.group-cards {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.group-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.15);
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 180px;
}

.group-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.group-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.group-name {
  font-weight: 600;
  color: #2d3748;
  font-size: 0.95em;
}

.group-id {
  font-size: 0.75em;
  color: #a0aec0;
  font-family: monospace;
}

.group-count {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-left: auto;
}

.group-count .count-number {
  font-size: 1.4em;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.group-count .count-label {
  font-size: 0.8em;
  color: #718096;
}

.group-count.loading .count-number {
  color: #a0aec0;
  background: none;
  -webkit-text-fill-color: #a0aec0;
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

.dark .group-stats {
  background: rgba(26, 32, 44, 0.6);
  border-color: rgba(102, 126, 234, 0.2);
}

.dark .stats-title {
  color: #e2e8f0;
}

.dark .group-card {
  background: #1a202c;
  border-color: rgba(102, 126, 234, 0.2);
}

.dark .group-card:hover {
  border-color: rgba(102, 126, 234, 0.4);
}

.dark .group-name {
  color: #e2e8f0;
}

.dark .group-id {
  color: #718096;
}

.dark .group-count .count-label {
  color: #a0aec0;
}

.dark .guide-hint {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%);
  border-color: rgba(255, 152, 0, 0.3);
  color: #fbbf24;
}
</style>
