<template>
    <div class="comparison-section">
        <div class="section-header">
            <div class="section-eyebrow">对比</div>
            <h2 class="section-title">为什么推荐 SVC Fusion</h2>
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
                                <svg v-if="feature.feather" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </span>
                        </td>
                        <td class="support-cell fusion">
                            <span class="support-icon"
                                :class="{ supported: feature.fusion, unsupported: !feature.fusion }">
                                <svg v-if="feature.fusion" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
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
    { name: 'AMD 显卡支持', feather: false, fusion: true, link: 'https://www.bilibili.com/video/BV1NdewzpE5K/' }
]

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.comparison-section {
    padding: 96px 0;
    background: var(--surface-page, #ffffff);
    position: relative;

    .section-header {
        text-align: center;
        margin-bottom: 56px;
        padding: 0 20px;

        .section-eyebrow {
            display: inline-block;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--vp-c-brand-1, #635bff);
            margin-bottom: 16px;
        }

        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            color: var(--text-primary, #0a2540);
            margin: 0 0 16px 0;
            line-height: 1.15;
            letter-spacing: -0.03em;
        }

        .section-subtitle {
            font-size: 1.15rem;
            color: var(--text-secondary, #425466);
            font-weight: 400;
            margin: 0 auto;
            max-width: 560px;
            line-height: 1.6;
        }
    }

    .comparison-table-wrapper {
        max-width: 820px;
        margin: 0 auto;
        background: var(--surface-page, white);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(50, 50, 93, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
        border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
    }

    .comparison-table {
        width: 100%;
        border-collapse: collapse;
        display: table;
        margin: 0 !important;

        thead {
            background: var(--surface-muted, #f4f6f8);
            border-bottom: 1px solid var(--border-default, rgba(50, 50, 93, 0.13));

            th {
                padding: 20px 24px;
                color: var(--text-primary, #0a2540);
                font-weight: 700;
                font-size: 0.95rem;
                text-align: center;
                border: none;
                letter-spacing: -0.01em;

                &.feature-header {
                    text-align: left;
                }

                &.package-header {
                    position: relative;

                    &.feather {
                        color: var(--text-muted, #8392ab);
                    }

                    &.fusion {
                        color: var(--vp-c-brand-1, #635bff);

                        &::after {
                            content: '推荐';
                            display: block;
                            font-size: 0.7rem;
                            font-weight: 600;
                            margin-top: 4px;
                            color: var(--vp-c-brand-1, #635bff);
                        }
                    }
                }
            }
        }

        tbody {
            .feature-row {
                transition: background-color 0.15s ease;

                &:hover {
                    background: var(--vp-c-brand-mute, rgba(99, 91, 255, 0.03));
                }

                td {
                    padding: 18px 24px;
                    border-bottom: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.06));

                    &:last-child {
                        border-bottom: none;
                    }

                    &.feature-name {
                        font-weight: 500;
                        color: var(--text-primary, #0a2540);
                        font-size: 0.95rem;

                        .clickable-feature {
                            cursor: pointer;
                            color: var(--vp-c-brand-1, #635bff);
                            text-decoration: none;
                            transition: color 0.15s ease;

                            &:hover {
                                color: var(--vp-c-brand-3, #3b2fc9);
                                text-decoration: underline;
                            }
                        }
                    }

                    &.support-cell {
                        text-align: center;

                        .support-icon {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            transition: transform 0.15s ease;

                            svg {
                                width: 14px;
                                height: 14px;
                            }

                            &.supported {
                                background: rgba(16, 185, 129, 0.12);
                                color: #059669;
                            }

                            &.unsupported {
                                background: rgba(239, 68, 68, 0.1);
                                color: #dc2626;
                            }
                        }

                        &:hover .support-icon {
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }

    .section-footer {
        text-align: center;
        margin-top: 32px;

        .footer-text {
            font-size: 0.95rem;
            color: var(--text-muted, #8392ab);
            font-style: normal;
            margin: 0;
        }
    }
}

@media (max-width: 768px) {
    .comparison-section {
        padding: 64px 20px;

        .section-header .section-title {
            font-size: 2rem;
        }

        .comparison-table-wrapper {
            margin: 0 10px;
        }

        .comparison-table {
            thead th {
                padding: 14px 12px;
                font-size: 0.85rem;
            }

            tbody td {
                padding: 14px 12px;

                &.feature-name {
                    font-size: 0.85rem;
                }

                &.support-cell .support-icon {
                    width: 22px;
                    height: 22px;

                    svg {
                        width: 12px;
                        height: 12px;
                    }
                }
            }
        }

        .section-footer .footer-text {
            font-size: 0.9rem;
            padding: 0 20px;
        }
    }
}

@media (max-width: 480px) {
    .comparison-section {
        .section-header .section-title {
            font-size: 1.75rem;
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
            }
        }
    }
}

// Dark mode support
.dark {
    .comparison-section {
        background: var(--surface-page, #0a2540);

        .section-header {
            .section-title {
                color: var(--text-primary, #ffffff);
            }

            .section-subtitle {
                color: var(--text-secondary, #c4cdda);
            }
        }

        .comparison-table-wrapper {
            background: var(--surface-page, #0a2540);
            border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));
        }

        .comparison-table {
            thead {
                background: var(--surface-muted, #1f243d);
                border-bottom-color: var(--border-default, rgba(255, 255, 255, 0.13));

                th {
                    color: var(--text-primary, #ffffff);

                    &.package-header.fusion {
                        color: var(--vp-c-brand-2, #7a73ff);

                        &::after {
                            color: var(--vp-c-brand-2, #7a73ff);
                        }
                    }
                }
            }

            tbody {
                .feature-row {
                    &:hover {
                        background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.08));
                    }

                    td {
                        border-bottom-color: var(--border-subtle, rgba(255, 255, 255, 0.06));

                        &.feature-name {
                            color: var(--text-primary, #ffffff);

                            .clickable-feature {
                                color: var(--vp-c-brand-2, #7a73ff);

                                &:hover {
                                    color: var(--vp-c-brand-3, #3b2fc9);
                                }
                            }
                        }
                    }
                }
            }
        }

        .section-footer .footer-text {
            color: var(--text-muted, #8b9bb4);
        }
    }
}
</style>
