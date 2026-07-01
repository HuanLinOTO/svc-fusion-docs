<template>
    <div v-if="visible" class="modal-overlay" @click="$emit('update:visible', false)">
        <div class="modal-container" @click.stop>
            <div class="modal-header">
                <h3>加入社区交流</h3>
                <p class="modal-subtitle">与开发者和用户一起探讨 SVC Fusion</p>
                <button class="close-btn" @click="$emit('update:visible', false)" aria-label="关闭">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <div class="sponsor-notice">
                    <div class="notice-content">
                        <span class="notice-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </span>
                        <span class="notice-text">维护社区需要成本，欢迎赞助支持我们</span>
                    </div>
                </div>

                <div class="groups-grid">
                    <div class="group-item active"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=IZUTPdPpO2o-v4jt4i5LqUl5ZqXWLhpL&jump_from=webapi&authKey=EoTXKZUb7L6ooqWHEAV7qcGfFnczg1b7JuXlWVwYtXcX2cCJbTsqLCcJlkfD+xAW')">
                        <div class="new-tag">推荐</div>
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/172701496/172701496/40"
                                    alt="群头像" />
                                <div class="status-dot online"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊一群</h4>
                                <p class="group-desc">人多·首选</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <div class="member-progress-section">
                                <div class="member-info">
                                    <span class="member-count">{{ getMemberCount(172701496, '~2000 成员') }}</span>
                                    <span v-if="groupsData.get(172701496)" class="max-count">/ {{
                                        getMaxMembersDisplay(172701496) }}</span>
                                </div>
                                <div v-if="groupsData.get(172701496)" class="progress-bar">
                                    <div class="progress-fill" :style="{
                                        width: getMemberProgress(172701496) + '%',
                                        backgroundColor: getProgressColor(172701496)
                                    }"></div>
                                </div>
                            </div>
                            <span class="join-btn">
                                加入
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="group-item active"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=Z93WMbn5a8v6MXDiBzcywyEFcIdhi_ls&jump_from=webapi&authKey=tCNl9eJLLVY2TNgf2KyT2cWylxNMAlWxScUHIVqc2bz0xbSf05ZMLR4ooq0yGcim')">
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/894118597/894118597/40"
                                    alt="群头像" />
                                <div class="status-dot online"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊二群</h4>
                                <p class="group-desc">活跃讨论</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <div class="member-progress-section">
                                <div class="member-info">
                                    <span class="member-count">{{ getMemberCount(894118597, '~1000 成员') }}</span>
                                    <span v-if="groupsData.get(894118597)" class="max-count">/ {{
                                        getMaxMembersDisplay(894118597) }}</span>
                                </div>
                                <div v-if="groupsData.get(894118597)" class="progress-bar">
                                    <div class="progress-fill" :style="{
                                        width: getMemberProgress(894118597) + '%',
                                        backgroundColor: getProgressColor(894118597)
                                    }"></div>
                                </div>
                            </div>
                            <span class="join-btn">
                                加入
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="group-item active"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=lbGSH-YcsabtCsy7g7ckpvBlPaLLwKdi&jump_from=webapi&authKey=UzTwXtfSKvkiBavgYQgkJ8lrcbV3lK0evVuYZjtKYcBiHdnyo8Q1JBOC4pmE2y65')">
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/1038540343/1038540343/40"
                                    alt="群头像" />
                                <div class="status-dot online"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊三群</h4>
                                <p class="group-desc">新群 · 欢迎加入</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <div class="member-progress-section">
                                <div class="member-info">
                                    <span class="member-count">{{ getMemberCount(1038540343, '成员增长中') }}</span>
                                    <span v-if="groupsData.get(1038540343)" class="max-count">/ {{
                                        getMaxMembersDisplay(1038540343) }}</span>
                                </div>
                                <div v-if="groupsData.get(1038540343)" class="progress-bar">
                                    <div class="progress-fill" :style="{
                                        width: getMemberProgress(1038540343) + '%',
                                        backgroundColor: getProgressColor(1038540343)
                                    }"></div>
                                </div>
                            </div>
                            <span class="join-btn">
                                加入
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="modal-tips">
                    <div class="tip-item">
                        <span class="tip-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>分享使用技巧和经验</span>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>获取技术支持和帮助</span>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span>第一时间了解更新动态</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
    visible: boolean
}>()

defineEmits<{
    'update:visible': [value: boolean]
}>()

interface GroupInfo {
    id: number
    member_count: number
    name: string
}

const groupsData = ref<Map<number, GroupInfo>>(new Map())

const fetchGroupsData = async () => {
    try {
        const response = await fetch('https://syg.xdy.huanlin2026.me/api/groups')
        const result = await response.json()
        if (result.code === 0 && result.data?.groups) {
            const map = new Map<number, GroupInfo>()
            result.data.groups.forEach((group: GroupInfo) => {
                map.set(group.id, group)
            })
            groupsData.value = map
        }
    } catch (error) {
        console.error('Failed to fetch groups data:', error)
    }
}

const getMemberCount = (groupId: number, fallback: string) => {
    const group = groupsData.value.get(groupId)
    if (group) {
        return `${group.member_count} 成员`
    }
    return fallback
}

const maxMemberLevels = [100, 300, 500, 1000, 2000, 3000]

const getMaxMembers = (currentCount: number): number => {
    for (const level of maxMemberLevels) {
        if (currentCount <= level) {
            return level
        }
    }
    return 3000
}

const getMemberProgress = (groupId: number): number => {
    const group = groupsData.value.get(groupId)
    if (group) {
        const maxMembers = getMaxMembers(group.member_count)
        return Math.min((group.member_count / maxMembers) * 100, 100)
    }
    return 0
}

const getProgressColor = (groupId: number): string => {
    const progress = getMemberProgress(groupId)
    if (progress >= 90) return '#ef4444'
    if (progress >= 70) return '#f59e0b'
    return '#10b981'
}

const getMaxMembersDisplay = (groupId: number): string => {
    const group = groupsData.value.get(groupId)
    if (group) {
        return `${getMaxMembers(group.member_count)}`
    }
    return ''
}

watch(() => props.visible, (newVal) => {
    if (newVal) {
        fetchGroupsData()
    }
})

const goto = (url: string) => {
    if (typeof window !== 'undefined') {
        window.open(url, "_blank")
    }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 37, 64, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: modalFadeIn 0.2s ease-out;
    padding: 20px;
}

.modal-container {
    background: var(--surface-page, white);
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(10, 37, 64, 0.25), 0 0 0 1px rgba(50, 50, 93, 0.05);
    max-width: 640px;
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
    animation: modalSlideIn 0.25s ease-out;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 28px 32px 24px;
    text-align: center;
    background: var(--surface-subtle, #f6f9fc);
    border-bottom: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
    color: var(--text-primary, #0a2540);
    position: relative;

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 6px 0;
        letter-spacing: -0.02em;
    }

    .modal-subtitle {
        font-size: 0.95rem;
        color: var(--text-secondary, #425466);
        margin: 0;
        font-weight: 400;
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: transparent;
        border: none;
        border-radius: 6px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted, #8392ab);
        cursor: pointer;
        transition: all 0.15s ease;

        &:hover {
            background: var(--border-subtle, rgba(50, 50, 93, 0.08));
            color: var(--text-primary, #0a2540);
        }

        svg {
            width: 18px;
            height: 18px;
        }
    }
}

.modal-content {
    padding: 28px 32px;
    flex: 1 1 auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.sponsor-notice {
    background: linear-gradient(135deg,
        rgba(99, 91, 255, 0.08) 0%,
        rgba(255, 138, 200, 0.08) 100%);
    border: 1px solid rgba(99, 91, 255, 0.16);
    border-radius: 8px;
    padding: 14px 18px;
    margin-bottom: 24px;

    .notice-content {
        display: flex;
        align-items: center;
        gap: 10px;

        .notice-icon {
            display: flex;
            align-items: center;
            color: var(--vp-c-brand-1, #635bff);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .notice-text {
            color: var(--text-secondary, #425466);
            font-weight: 500;
            font-size: 0.9rem;
        }
    }
}

.groups-grid {
    display: grid;
    gap: 16px;
    margin-bottom: 24px;

    .group-item {
        border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
        border-radius: 10px;
        padding: 20px;
        transition: all 0.15s ease;
        background: var(--surface-page, white);
        position: relative;
        overflow: hidden;
        box-shadow: 0 1px 2px rgba(50, 50, 93, 0.04);

        &.active {
            cursor: pointer;

            &:hover {
                border-color: var(--vp-c-brand-1, #635bff);
                box-shadow: 0 4px 12px rgba(99, 91, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.04);
                transform: translateY(-1px);

                .join-btn {
                    background: var(--gradient-stripe, linear-gradient(135deg, #635bff 0%, #7a73ff 100%));
                    color: white;
                    border-color: transparent;
                }
            }
        }

        &.disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .new-tag {
            position: absolute;
            top: 12px;
            right: 12px;
            background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.1));
            color: var(--vp-c-brand-1, #635bff);
            font-size: 0.7rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 100px;
            letter-spacing: 0;
        }

        .group-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 16px;

            .avatar-container {
                position: relative;
                flex-shrink: 0;

                .group-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 2px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
                }

                .status-dot {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid var(--surface-page, white);

                    &.online {
                        background: #10b981;
                    }

                    &.offline {
                        background: #6b7280;
                    }
                }
            }

            .group-info {
                flex: 1;

                .group-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-primary, #0a2540);
                    margin: 0 0 2px 0;
                    letter-spacing: -0.01em;
                }

                .group-desc {
                    font-size: 0.85rem;
                    color: var(--text-muted, #8392ab);
                    margin: 0;
                    line-height: 1.4;
                }
            }
        }

        .group-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;

            .member-progress-section {
                flex: 1;
                min-width: 0;

                .member-info {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                    margin-bottom: 6px;

                    .member-count {
                        font-size: 0.8rem;
                        color: var(--text-secondary, #425466);
                        font-weight: 600;
                    }

                    .max-count {
                        font-size: 0.75rem;
                        color: var(--text-muted, #8392ab);
                        font-weight: 500;
                    }
                }

                .progress-bar {
                    width: 100%;
                    height: 4px;
                    background: var(--surface-muted, #f4f6f8);
                    border-radius: 2px;
                    overflow: hidden;

                    .progress-fill {
                        height: 100%;
                        border-radius: 2px;
                        transition: width 0.5s ease, background-color 0.3s ease;
                    }
                }
            }

            .join-btn {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                background: var(--surface-page, white);
                color: var(--vp-c-brand-1, #635bff);
                font-size: 0.85rem;
                font-weight: 600;
                padding: 7px 14px;
                border-radius: 6px;
                border: 1px solid var(--vp-c-brand-1, #635bff);
                transition: all 0.15s ease;
                flex-shrink: 0;

                svg {
                    width: 14px;
                    height: 14px;
                    transition: transform 0.15s ease;
                }
            }
        }
    }
}

.modal-tips {
    background: var(--surface-subtle, #f6f9fc);
    border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
    border-radius: 10px;
    padding: 18px 20px;

    .tip-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 0.9rem;
        color: var(--text-secondary, #425466);

        &:last-child {
            margin-bottom: 0;
        }

        .tip-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--vp-c-brand-1, #635bff);
            flex-shrink: 0;

            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
}

// Modal Animations
@keyframes modalFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 768px) {
    .modal-container {
        margin: 16px;
        border-radius: 12px;
    }

    .modal-header {
        padding: 24px 20px 20px;

        h3 {
            font-size: 1.3rem;
        }
    }

    .modal-content {
        padding: 24px 20px;
    }

    .groups-grid .group-item {
        padding: 18px 16px;

        .group-header {
            gap: 12px;

            .avatar-container .group-avatar {
                width: 44px;
                height: 44px;
            }

            .group-info .group-name {
                font-size: 1.05rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .modal-overlay {
        padding: 10px;
    }

    .groups-grid .group-item .group-header {
        flex-direction: column;
        text-align: center;
        gap: 14px;

        .group-info {
            text-align: center;
        }
    }
}

// Dark mode support
.dark {
    .modal-container {
        background: var(--surface-page, #0a2540);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06);
    }

    .modal-header {
        background: var(--surface-subtle, #1a1f36);
        border-bottom-color: var(--border-subtle, rgba(255, 255, 255, 0.08));
        color: var(--text-primary, #ffffff);

        .modal-subtitle {
            color: var(--text-secondary, #c4cdda);
        }

        .close-btn {
            color: var(--text-muted, #8b9bb4);

            &:hover {
                background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.12));
                color: var(--text-primary, #ffffff);
            }
        }
    }

    .groups-grid .group-item {
        background: var(--surface-subtle, #1a1f36);
        border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));

        &.active:hover {
            border-color: var(--vp-c-brand-2, #7a73ff);
        }

        .group-header {
            .avatar-container .group-avatar {
                border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));
            }

            .group-info {
                .group-name {
                    color: var(--text-primary, #ffffff);
                }

                .group-desc {
                    color: var(--text-muted, #8b9bb4);
                }
            }
        }

        .group-footer {
            .member-progress-section {
                .member-count {
                    color: var(--text-secondary, #c4cdda);
                }

                .progress-bar {
                    background: var(--surface-muted, #1f243d);
                }
            }

            .join-btn {
                background: var(--surface-page, #0a2540);
                color: var(--vp-c-brand-2, #7a73ff);
                border-color: var(--vp-c-brand-2, #7a73ff);
            }
        }
    }

    .sponsor-notice {
        background: linear-gradient(135deg,
            rgba(122, 115, 255, 0.12) 0%,
            rgba(255, 138, 200, 0.07) 100%);
        border-color: rgba(122, 115, 255, 0.2);

        .notice-content {
            .notice-icon {
                color: var(--vp-c-brand-2, #7a73ff);
            }

            .notice-text {
                color: var(--text-secondary, #c4cdda);
            }
        }
    }

    .modal-tips {
        background: var(--surface-subtle, #1a1f36);
        border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));

        .tip-item {
            color: var(--text-secondary, #c4cdda);

            .tip-icon {
                color: var(--vp-c-brand-2, #7a73ff);
            }
        }
    }
}
</style>
