<template>
    <div class="comparison-section">
        <div class="section-header">
            <h2 class="section-title">为什么推荐迁移羽毛整合包</h2>
            <p class="section-subtitle">相比羽毛 So-VITS-SVC 整合包，我们提供更多功能和更好的用户体验</p>
        </div>

        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-header">功能特性</th>
                        <th class="package-header feather">羽毛整合包</th>
                        <th class="package-header fusion">SVC Fusion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(feature, index) in features" :key="index" class="feature-row">
                        <td class="feature-name">
                            <span v-if="feature.link" class="clickable-feature" @click="openLink(feature.link)">
                                {{ feature.name }}
                            </span>
                            <span v-else>{{ feature.name }}</span>
                        </td>
                        <td class="support-cell feather">
                            <span class="support-icon"
                                :class="{ supported: feature.feather, unsupported: !feature.feather }">
                                {{ feature.feather ? '✓' : '✗' }}
                            </span>
                        </td>
                        <td class="support-cell fusion">
                            <span class="support-icon"
                                :class="{ supported: feature.fusion, unsupported: !feature.fusion }">
                                {{ feature.fusion ? '✓' : '✗' }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section-footer">
            <p class="footer-text">没有任何贬低羽毛的意思，但是羽毛确实很久没更新了（）</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const features = [
    { name: '50系N卡支持', feather: false, fusion: true },
    { name: '自定义底模', feather: false, fusion: true },
    { name: '自定义声码器', feather: false, fusion: true },
    { name: '音区偏移', feather: false, fusion: true },
    { name: '内置离线分离', feather: false, fusion: true },
    { name: '自动混音', feather: false, fusion: true },
    { name: '实时（变声器）', feather: false, fusion: true },
    { name: '声码器变调', feather: false, fusion: true },
    { name: '完整的模型管理系统', feather: false, fusion: true },
    { name: 'AMD 显卡支持', feather: false, fusion: true, link: 'https://www.bilibili.com/video/BV1k9NtzmEV2/' }
]

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.comparison-section {
    padding: 80px 0;
    color: #ffffff00;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);

    .section-header {
        text-align: center;
        margin-bottom: 60px;

        .section-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 16px 0;
            line-height: 1.2;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: #64748b;
            font-weight: 500;
            margin: 0;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    .comparison-table-wrapper {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(102, 126, 234, 0.1);
    }

    .comparison-table {
        width: 100%;
        border-collapse: collapse;

        thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

            th {
                padding: 24px 20px;
                color: white;
                font-weight: 700;
                font-size: 1.1rem;
                text-align: center;
                border: none;

                &.feature-header {
                    text-align: left;
                    background: rgba(255, 255, 255, 0.1);
                }

                &.package-header {
                    position: relative;

                    &.feather {
                        background: rgba(239, 68, 68, 0.9);
                    }

                    &.fusion {
                        background: rgba(34, 197, 94, 0.9);
                    }
                }
            }
        }

        tbody {
            .feature-row {
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(102, 126, 234, 0.02);
                }

                &:nth-child(even) {
                    background: rgba(248, 250, 252, 0.5);

                    &:hover {
                        background: rgba(102, 126, 234, 0.05);
                    }
                }

                td {
                    padding: 20px;
                    border-bottom: 1px solid #f1f5f9;

                    &.feature-name {
                        font-weight: 600;
                        color: #374151;
                        font-size: 1rem;

                        .clickable-feature {
                            cursor: pointer;
                            color: #667eea;
                            text-decoration: underline;
                            transition: all 0.3s ease;

                            &:hover {
                                color: #764ba2;
                                text-decoration: none;
                            }
                        }
                    }

                    &.support-cell {
                        text-align: center;

                        .support-icon {
                            display: inline-block;
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                            line-height: 32px;
                            font-weight: 700;
                            font-size: 1rem;
                            transition: all 0.3s ease;

                            &.supported {
                                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                                color: white;
                                box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                            }

                            &.unsupported {
                                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                                color: white;
                                box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
                            }
                        }
                    }
                }
            }
        }
    }

    .section-footer {
        text-align: center;
        margin-top: 40px;

        .footer-text {
            font-size: 1.1rem;
            color: #64748b;
            font-style: italic;
            margin: 0;
        }
    }
}

@media (max-width: 768px) {
    .comparison-section {
        padding: 60px 20px;

        .section-header .section-title {
            font-size: 2.5rem;
        }

        .comparison-table-wrapper {
            margin: 0 10px;
        }

        .comparison-table {
            thead th {
                padding: 16px 12px;
                font-size: 0.9rem;
            }

            tbody td {
                padding: 16px 12px;

                &.feature-name {
                    font-size: 0.9rem;
                }

                &.support-cell .support-icon {
                    width: 28px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 0.9rem;
                }
            }
        }

        .section-footer .footer-text {
            font-size: 1rem;
            padding: 0 20px;
        }
    }
}

@media (max-width: 480px) {
    .comparison-section {
        .section-header .section-title {
            font-size: 2rem;
        }

        .comparison-table {
            thead th {
                padding: 12px 8px;
                font-size: 0.8rem;
            }

            tbody td {
                padding: 12px 8px;

                &.feature-name {
                    font-size: 0.8rem;
                }

                &.support-cell .support-icon {
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 0.8rem;
                }
            }
        }
    }
}

// Dark mode support
.dark {
    .comparison-section {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);

        .section-header {
            .section-subtitle {
                color: #94a3b8;
            }
        }

        .comparison-table-wrapper {
            background: rgba(30, 41, 59, 0.9);
            border-color: rgba(102, 126, 234, 0.3);
        }

        .comparison-table tbody {
            .feature-row {
                &:hover {
                    background: rgba(102, 126, 234, 0.1);
                }

                &:nth-child(even) {
                    background: rgba(51, 65, 85, 0.3);

                    &:hover {
                        background: rgba(102, 126, 234, 0.15);
                    }
                }

                td {
                    border-bottom-color: rgba(51, 65, 85, 0.5);

                    &.feature-name {
                        color: #e2e8f0;

                        .clickable-feature {
                            color: #818cf8;

                            &:hover {
                                color: #a5b4fc;
                            }
                        }
                    }
                }
            }
        }

        .section-footer .footer-text {
            color: #94a3b8;
        }
    }
}
</style>