<template>
  <ClientOnly>
    <div class="download-component">
      <NModalProvider>
        <!-- 版本额外说明区域 -->
        <div v-if="extra_info.length > 0" class="version-info-section">
          <template v-for="(item, index) in extra_info" :key="index">
            <div class="version-info-card">
              <div class="card-header">
                <div class="card-icon">
                  <span class="icon">ℹ️</span>
                </div>
                <h3 class="card-title">版本额外说明 {{ index + 1 }}</h3>
              </div>
              <div class="card-content" v-html="item"></div>
            </div>
          </template>
        </div>

        <!-- 下载按钮区域 -->
        <div class="download-section">
          <div class="download-card">
            <!-- <div class="download-header">
              <div class="download-icon">
                <span class="icon">📥</span>
              </div>
              <h2 class="download-title">准备下载</h2>
            </div> -->

            <div class="download-content">
              <div class="wait-info" v-if="props.wait_time > 0">
                <div class="wait-timer">
                  <span class="timer-icon">⏱️</span>
                  <span class="timer-text">等待 {{ props.wait_time }}s 后，方可点击跳转按钮</span>
                </div>
              </div>

              <NButton @click="gogogo" class="download-btn" :class="{ disabled: props.wait_time > 0 }" size="large"
                block>
                <span class="btn-icon">🚀</span>
                跳转到云盘
              </NButton>
            </div>
          </div>
        </div>

        <!-- 模态框 -->
        <n-modal v-model:show="showModal" class="download-modal">
          <div class="modal-card">
            <div class="modal-header">
              <h2 class="modal-title">请确认</h2>
              <div class="modal-subtitle">请仔细阅读以下条款并确认同意</div>
            </div>

            <!-- 条款切换按钮 -->
            <div class="tab-buttons">
              <button class="tab-btn" :class="{ active: showDisclaimer }"
                @click="showDisclaimer = true; showPrivacy = false">
                <span class="tab-icon">📋</span>
                免责声明
              </button>
              <button class="tab-btn" :class="{ active: showPrivacy }"
                @click="showPrivacy = true; showDisclaimer = false">
                <span class="tab-icon">🔒</span>
                隐私说明
              </button>
            </div>

            <!-- 条款内容 -->
            <div class="tab-content">
              <div class="content-wrapper" v-if="showDisclaimer">
                <div class="content-scroll">
                  <p>尊敬的用户：</p>
                  <p>感谢您使用 SVC Fusion
                    整合包（以下简称"本整合包"）。在使用本整合包之前，请您务必仔细阅读并充分理解本免责声明的全部内容。如果您开始使用本整合包，或者进行二次售卖，即表示您已完全理解并同意本声明的全部内容。</p>
                  <p><strong>一、关于本整合包</strong></p>
                  <ol>
                    <li><strong>所有权：</strong>
                      本整合包的所有权及相关知识产权均归属于原作者"HuanLin"（B站@多玩幻灵qwq）所有。任何未经授权的复制、修改、反向工程、出售本整合包的全部或部分内容的行为均属侵权。</li>
                    <li><strong>免费使用：</strong>
                      本整合包目前仅供个人娱乐和非商业用途免费使用。严禁任何形式的售卖行为，包括但不限于收费教学、VIP课程等。如需商业用途，请务必联系原作者获取正式的商业授权。
                    </li>
                    <li><strong>内容限制：</strong> 禁止将本整合包用于制作任何血腥、暴力、性相关、政治相关或其他违反法律法规、社会公德的内容。</li>
                  </ol>
                  <p><strong>二、关于二次售卖</strong></p>
                  <ol>
                    <li><strong>授权与限制:
                      </strong>原作者允许用户对本整合包进行二次售卖，但必须严格遵守原作者发布的《关于二次贩卖本整合包的授权说明》中的所有条款，包括但不限于收入分配、版权声明、传播方式等。
                    </li>
                    <li><strong>风险自担: </strong>二次售卖者需自行承担因二次售卖行为产生的一切风险和法律责任，包括但不限于用户纠纷、内容侵权、税务问题等。原作者对二次售卖行为不承担任何连带责任。
                    </li>
                    <li><strong>用户内容: </strong>二次售卖者有义务确保其用户使用本整合包产出的内容合法合规，并对用户行为导致的任何法律责任承担全部责任。</li>
                    <li><strong>协议遵守: </strong>进行二次售卖即视为同意《关于二次贩卖本整合包的授权说明》，二次售卖者有义务定期查看并遵守该授权说明的最新版本。</li>
                  </ol>
                  <p><strong>三、版权与软件著作权声明</strong></p>
                  <ol>
                    <li><strong>整合包版权：</strong>本整合包所有权及相关知识产权归属于原作者"HuanLin"（B站@多玩幻灵qwq）所有。</li>
                    <li><strong>启动器版权：</strong>本整合包启动器版权归属于"爱过留过"和"南京睿思澳科技有限公司"。</li>
                    <li>
                      <strong>产品所有权及限制：</strong>启动器所有权归南京睿思澳电子科技有限公司所有，未经公司书面许可，严禁进行任何形式的商用、转售、分发、修改或复制。本产品及其相关内容受版权法保护，任何未经授权的使用行为将追究法律责任。
                    </li>
                    <li>
                      <strong>软件著作权：</strong>本产品已获得软件著作权保护。任何未经授权的使用、复制、修改或分发行为均属违法，将依法追究其法律责任，包括但不限于经济赔偿及刑事责任。
                    </li>
                  </ol>
                  <p><strong>四、免责场景</strong></p>
                  <ol>
                    <li><strong>模型训练数据：</strong> 本整合包中使用的 AI
                      模型可能基于公开数据集或其他来源进行训练。我们无法保证训练数据的绝对准确性和完整性，模型输出的结果可能存在偏差或不确定性。</li>
                    <li><strong>第三方内容：</strong> 本整合包可能包含来自第三方的模型、插件、脚本或其他内容。这些内容的版权归其各自所有者所有，我们不对其内容、准确性或安全性承担任何责任。</li>
                    <li><strong>用户生成内容：</strong> 用户需对自己使用本整合包生成的任何内容负责。禁止生成任何违反法律法规、社会公德、侵犯他人权益（包括但不限于版权、肖像权、名誉权等）的内容。
                    </li>
                  </ol>
                  <p><strong>五、其他</strong></p>
                  <ol>
                    <li><strong>免责范围:
                      </strong>原作者及版权所有方不对因使用本整合包（包括但不限于二次售卖）产生的任何直接或间接损失承担责任，包括但不限于数据丢失、设备损坏、利润损失、名誉损害等。</li>
                    <li><strong>适用法律: </strong>本免责声明适用中华人民共和国法律。如有任何争议，应首先通过友好协商解决；协商不成的，任何一方均有权向原作者所在地有管辖权的人民法院提起诉讼。
                    </li>
                    <li><strong>解释权: </strong>本免责声明的最终解释权归原作者所有。原作者保留随时修改本声明的权利。</li>
                    <li><strong>更新通知：</strong> 本免责声明的更新将在原作者发布渠道（如B站、爱发电等）公布，建议您定期查看。</li>
                  </ol>
                  <p><strong>联系方式</strong></p>
                  <ul>
                    <li>B站：@多玩幻灵qwq</li>
                    <li>QQ群：172701496</li>
                  </ul>
                </div>
              </div>
              <div class="content-wrapper" v-if="showPrivacy">
                <div class="content-scroll">
                  <p>尊敬的用户：</p>
                  <p>本隐私说明旨在向您说明在使用 SVC Fusion 整合包（以下简称"本整合包"）时，我们如何处理您的个人信息。请您在使用本整合包之前，务必仔细阅读并充分理解本隐私说明的全部内容。</p>
                  <p><strong>一、信息收集与使用</strong></p>
                  <ol>
                    <li><strong>不主动收集：</strong> 本整合包本身不会主动收集您的任何个人信息，如姓名、联系方式、设备信息、地理位置等。</li>
                    <li><strong>二次售卖者责任：</strong>
                      如果您通过二次售卖者购买或获取本整合包，二次售卖者可能会根据其自身业务需要收集您的个人信息。请您务必仔细阅读二次售卖者的隐私政策，了解其信息收集和使用
                      practices。原作者不对二次售卖者的隐私行为承担任何责任。</li>
                    <li><strong>授权确认：</strong>
                      如果您进行二次售卖，按照《关于二次贩卖本整合包的授权说明》，您需要打印、签名并将签名后的页面发送至原作者QQ。这将涉及您主动提供个人信息（QQ号）。原作者仅将此信息用于确认您已同意授权协议，不会用于其他任何目的。原作者会妥善保管您的个人信息，防止泄露、丢失或滥用。
                    </li>
                  </ol>
                  <p><strong>二、信息共享与披露</strong></p>
                  <ol>
                    <li><strong>不共享: </strong>原作者不会将因授权确认收集到的个人信息（QQ号）共享给任何第三方。</li>
                    <li><strong>法律要求: </strong>除非根据法律法规的强制性规定，或配合政府部门、司法机关的调查，否则原作者不会披露您的个人信息。</li>
                  </ol>
                  <p><strong>三、信息安全</strong></p>
                  <p>原作者采取合理的安全措施保护您的个人信息，防止未经授权的访问、使用、披露、修改或破坏。具体措施包括但不限于：加密存储、访问控制、安全审计等。</p>
                  <p><strong>四、未成年人保护</strong></p>
                  <p>本整合包主要面向成年人用户。如果您是未成年人，请在您的监护人同意并指导下使用本整合包。</p>
                  <p><strong>五、隐私说明的更新</strong></p>
                  <p>原作者保留随时更新本隐私说明的权利。更新后的隐私说明将在原作者发布渠道（如B站、爱发电等）公布。</p>
                  <p><strong>六、联系我们</strong></p>
                  <p>如果您对本隐私说明有任何疑问或建议，请通过以下方式联系原作者：</p>
                  <ul>
                    <li>B站：@多玩幻灵qwq</li>
                    <li>QQ群：172701496</li>
                  </ul>
                  <p><strong>七、 适用范围</strong></p>
                  <p>本隐私协议仅适用于原作者提供的SVC Fusion整合包，不适用于任何第三方通过本整合包提供的服务。</p>
                  <p><strong>八、您的权利</strong></p>
                  <p>您对您的个人信息拥有以下权利：</p>
                  <ul>
                    <li><strong>查询权：</strong> 您有权查询我们是否持有您的个人信息，以及持有哪些信息。</li>
                    <li><strong>更正权：</strong> 如果您发现您的个人信息不准确或不完整，您有权要求我们更正。</li>
                    <li><strong>删除权：</strong> 在特定情况下，您有权要求我们删除您的个人信息。</li>
                    <li><strong>撤回同意权：</strong> 您有权随时撤回您对我们处理您个人信息的同意。</li>
                    <li><strong>限制处理权：</strong> 在特定情况下，您有权要求我们限制处理您的个人信息。</li>
                  </ul>
                  <p>如果您希望行使上述任何权利，请通过"六、联系我们"中提供的方式与我们联系。</p>
                  <p><strong>九、 数据保留</strong></p>
                  <p>我们仅在为实现本隐私说明所述目的所必需的期限内保留您的个人信息（QQ号）。授权确认信息将在授权关系终止后一年内删除，除非法律法规另有规定。</p>
                </div>
              </div>
            </div>

            <!-- 确认选项 -->
            <div class="confirmation-section">
              <div class="checkboxes-wrapper">
                <template v-for="(question, index) in questions" :key="index">
                  <div class="checkbox-item">
                    <n-checkbox v-model:checked="question_values[index]" class="custom-checkbox">
                      {{ question }}
                    </n-checkbox>
                  </div>
                </template>

                <div class="checkbox-item agreement-checkbox">
                  <n-checkbox v-model:checked="agreementChecked" class="custom-checkbox">
                    <span class="agreement-text">我同意以上条款</span>
                  </n-checkbox>
                </div>
              </div>

              <NButton class="confirm-btn" type="primary" size="large" block @click="check_question">
                <span class="btn-icon">✨</span>
                GOGOGO
              </NButton>
            </div>
          </div>
        </n-modal>

        <!-- 赞助模态框 -->
        <n-modal v-model:show="showSponsorModal" class="sponsor-modal">
          <div class="sponsor-card">
            <div class="sponsor-header">
              <span class="sponsor-icon"></span>
              <h2 class="sponsor-title">是否愿意赞助?</h2>
              <p class="sponsor-subtitle">您的支持是我们持续开发的动力</p>
            </div>
            <div class="sponsor-actions">
              <NButton class="sponsor-confirm-btn" type="primary" size="large" @click="handleSponsorConfirm">
                <span class="btn-icon">❤️</span>
                确认
              </NButton>
              <NButton class="sponsor-cancel-btn" size="large" @click="handleSponsorCancel">
                <span class="btn-icon">⏭️</span>
                取消
              </NButton>
            </div>
          </div>
        </n-modal>

        <!-- 感谢赞助模态框 -->
        <n-modal v-model:show="showThankYouModal" class="thank-you-modal">
          <div class="thank-you-card">
            <div class="thank-you-header">
              <span class="thank-you-icon">🎉</span>
              <h2 class="thank-you-title">感谢您的赞助</h2>
              <p class="thank-you-subtitle">点击跳转到网盘</p>
            </div>
            <NButton class="thank-you-btn" type="primary" size="large" @click="handleThankYouClick">
              <span class="btn-icon">📦</span>
              跳转到网盘
            </NButton>
          </div>
        </n-modal>
      </NModalProvider>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import * as naive from "naive-ui";
const { NButton, NSpace, NModalProvider, NCard, NModal, NCheckbox } = naive;
import versions from "../version.json";
import env_versions from "../env_version.json";

const props = defineProps<{
  wait_time: number;
  link: string;
  version: string;
}>();

const extra_info = ref<string[]>([]);
const questions = ref<string[]>([]);
const question_values = ref<boolean[]>([]);
const agreementChecked = ref(false);
const showDisclaimer = ref(true);
const showPrivacy = ref(false);
const showSponsorModal = ref(false);
const showThankYouModal = ref(false);

const gogogo = () => {
  if (props.wait_time > 0) {
    return;
  }
  go_link.value = props.link;
  showModal.value = true;
};

const check_question = () => {
  console.log(question_values.value);
  if (
    question_values.value.every((v) => v) &&
    question_values.value.length === questions.value.length &&
    agreementChecked.value
  ) {
    showModal.value = false;
    showSponsorModal.value = true;
  }
};

const handleSponsorConfirm = () => {
  window.open("https://afdian.com/a/dwhlqwq", "_blank");
  showSponsorModal.value = false;
  showThankYouModal.value = true;
};

const handleSponsorCancel = () => {
  window.open(go_link.value, "_blank");
  showSponsorModal.value = false;
};

const handleThankYouClick = () => {
  window.open(go_link.value, "_blank");
  showThankYouModal.value = false;
};

const showModal = ref(false);
const go_link = ref("");
const cur_version: any = versions.find((v) => v.version === props.version);
console.log(cur_version);
if (cur_version?.patch) {
  extra_info.value.push(
    `该版本需要安装补丁才可使用，补丁 <a href="${cur_version?.patch}" target="_blank">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录`
      .split("\n")
      .map((l) => `<p>${l}</p>`)
      .join("")
  );
  questions.value.push("我已知晓该版本需要安装补丁");
}
if (cur_version?.linux) {
  extra_info.value.push(
    `该版本有 Linux 补丁可用
Linux 用户可在下载完整包后，下载 <a href="${cur_version?.linux}" target="_blank">补丁</a> 覆盖到整合包根目录以使用
环境请自行解决
详细请看：<a href="/start/linux.html" target="_blank">Linux 补丁使用说明</a>`
      .split("\n")
      .map((l) => `<p>${l}</p>`)
      .join("")
  );
}
if (cur_version?.env) {
  extra_info.value.push(
    `该版本需要搭配环境包才可使用
环境版本 ${cur_version?.env}，如果您已安装过该环境包，可直接下载整合包
<a href="${env_versions[cur_version?.env]}" target="_blank">点击下载</a>
将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可`
      .split("\n")
      .map((l) => `<p>${l}</p>`)
      .join("")
  );
  questions.value.push(
    "我已知晓该版本需要安装环境包，并且知道如何安装环境（不知道的看版本额外说明）"
  );
}
</script>

<style lang="scss" scoped>
.download-component {
  margin: 24px 0;
}

.version-info-section {
  margin-bottom: 32px;
}

.version-info-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(102, 126, 234, 0.25);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    .card-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 8px rgba(102, 126, 234, 0.25);

      .icon {
        font-size: 18px;
      }
    }

    .card-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .card-content {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #374151;

    :deep(p) {
      margin: 8px 0;
    }

    :deep(a) {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        color: #764ba2;
        text-decoration: underline;
      }
    }

    :deep(code) {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
      font-size: 0.9em;
    }
  }
}

.download-section {
  margin-bottom: 32px;
}

.download-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.25);
  }

  .download-header {
    text-align: center;
    margin-bottom: 24px;

    .download-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
      box-shadow: 0 6px 18px rgba(102, 126, 234, 0.3);
      animation: float 3s ease-in-out infinite;

      .icon {
        font-size: 32px;
        color: white;
      }
    }

    .download-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .download-content {
    .wait-info {
      margin-bottom: 20px;

      .wait-timer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
        border: 2px solid #fb923c;
        border-radius: 12px;
        color: #c2410c;
        font-weight: 600;

        .timer-icon {
          font-size: 18px;
        }

        .timer-text {
          font-size: 1rem;
        }
      }
    }

    .download-btn {
      height: 48px;
      border-radius: 14px;
      font-size: 1.1rem;
      font-weight: 600;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      color: white;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
      }

      &:hover:not(.disabled) {
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);

        &::before {
          left: 100%;
        }
      }

      &.disabled {
        opacity: 0.6;
        cursor: not-allowed;
        background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
      }

      .btn-icon {
        margin-right: 6px;
        font-size: 1.1rem;
      }
    }
  }
}

.download-modal {
  :deep(.n-modal) {
    max-width: 90vw;
    max-height: 85vh;
  }
}

.modal-card {
  width: 680px;
  max-width: 90vw;
  max-height: 85vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  .modal-header {
    text-align: center;
    margin-bottom: 24px;

    .modal-title {
      font-size: 1.6rem;
      font-weight: 700;
      margin: 0 0 6px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .modal-subtitle {
      color: #64748b;
      font-size: 0.95rem;
      font-weight: 500;
    }
  }

  .tab-buttons {
    display: flex;
    gap: 6px;
    margin-bottom: 20px;
    background: rgba(248, 250, 252, 0.8);
    padding: 6px;
    border-radius: 12px;

    .tab-btn {
      flex: 1;
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: #64748b;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 0.9rem;

      .tab-icon {
        font-size: 14px;
      }

      &.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 3px 8px rgba(102, 126, 234, 0.25);
      }

      &:not(.active):hover {
        color: #667eea;
        background: rgba(102, 126, 234, 0.1);
      }
    }
  }

  .tab-content {
    flex: 1;
    margin-bottom: 24px;
    min-height: 200px;
    max-height: 50vh;
    overflow-x: hidden;
    overflow-y: scroll;


    .content-wrapper {
      height: 100%;
      border: 1px solid rgba(102, 126, 234, 0.15);
      border-radius: 12px;
      overflow: hidden;

      .content-scroll {
        height: 100%;
        padding: 16px;
        overflow-y: auto;
        font-size: 13px;
        line-height: 1.5;
        color: #374151;

        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar-track {
          background: rgba(248, 250, 252, 0.5);
          border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        p {
          margin: 6px 0;
        }

        strong {
          color: #374151;
          font-weight: 600;
        }

        ol,
        ul {
          margin: 6px 0;
          padding-left: 18px;
        }

        li {
          margin: 3px 0;
        }
      }
    }
  }

  .confirmation-section {
    .checkboxes-wrapper {
      margin-bottom: 20px;

      .checkbox-item {
        margin-bottom: 12px;
        padding: 12px;
        background: rgba(248, 250, 252, 0.5);
        border-radius: 10px;
        border: 1px solid rgba(102, 126, 234, 0.1);
        transition: all 0.3s ease;

        &:hover {
          background: rgba(102, 126, 234, 0.05);
          border-color: rgba(102, 126, 234, 0.2);
        }

        &.agreement-checkbox {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-color: #0ea5e9;

          .agreement-text {
            font-weight: 600;
            color: #0c4a6e;
          }
        }

        :deep(.n-checkbox) {
          .n-checkbox__label {
            font-weight: 500;
            color: #374151;
            line-height: 1.4;
            font-size: 0.9rem;
          }
        }
      }
    }

    .confirm-btn {
      height: 44px;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border: none;
      color: white;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);
      }

      .btn-icon {
        margin-right: 6px;
        font-size: 1rem;
      }
    }
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}

// 响应式设计
@media (max-width: 768px) {

  .version-info-card,
  .download-card {
    padding: 20px 16px;
    border-radius: 14px;
  }

  .download-card .download-header {
    .download-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;

      .icon {
        font-size: 24px;
      }
    }

    .download-title {
      font-size: 1.5rem;
    }
  }

  .modal-card {
    width: 95vw;
    padding: 20px 16px;
    border-radius: 20px;

    .modal-header .modal-title {
      font-size: 1.3rem;
    }

    .tab-content {
      min-height: 150px;
      max-height: 40vh;
    }
  }
}

// 暗色模式支持
.dark {

  .version-info-card,
  .download-card,
  .modal-card {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(102, 126, 234, 0.25);
    color: #e2e8f0;

    .card-content,
    .content-scroll {
      color: #cbd5e1;

      strong {
        color: #e2e8f0;
      }
    }
  }

  .wait-timer {
    background: linear-gradient(135deg, #451a03 0%, #92400e 100%);
    border-color: #d97706;
    color: #fed7aa;
  }

  .tab-buttons {
    background: rgba(51, 65, 85, 0.8);

    .tab-btn {
      color: #94a3b8;

      &:not(.active):hover {
        color: #818cf8;
        background: rgba(102, 126, 234, 0.2);
      }
    }
  }

  .tab-content {
    * {
      color: white !important
    }
  }

  .checkbox-item {
    background: rgba(51, 65, 85, 0.5);
    border-color: rgba(102, 126, 234, 0.2);

    &:hover {
      background: rgba(102, 126, 234, 0.1);
    }

    &.agreement-checkbox {
      background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      border-color: #0ea5e9;

      .agreement-text {
        color: #bae6fd;
      }
    }

    :deep(.n-checkbox .n-checkbox__label) {
      color: #cbd5e1;
    }
  }

  .content-scroll::-webkit-scrollbar-track {
    background: rgba(51, 65, 85, 0.5);
  }
}

// 赞助模态框样式
.sponsor-modal {
  :deep(.n-modal) {
    max-width: 90vw;
  }
}

.sponsor-card {
  width: 500px;
  max-width: 90vw;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;

  .sponsor-header {
    margin-bottom: 32px;

    .sponsor-icon {
      font-size: 4rem;
      display: block;
      margin-bottom: 16px;
      animation: pulse 2s ease-in-out infinite;
    }

    .sponsor-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0 0 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sponsor-subtitle {
      color: #64748b;
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }
  }

  .sponsor-actions {
    display: flex;
    gap: 16px;
    justify-content: center;

    .sponsor-confirm-btn {
      flex: 1;
      max-width: 180px;
      height: 48px;
      border-radius: 14px;
      font-size: 1.1rem;
      font-weight: 600;
      background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
      border: none;
      color: white;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(236, 72, 153, 0.35);
      }

      .btn-icon {
        margin-right: 6px;
        font-size: 1rem;
      }
    }

    .sponsor-cancel-btn {
      flex: 1;
      max-width: 180px;
      height: 48px;
      border-radius: 14px;
      font-size: 1.1rem;
      font-weight: 600;
      background: rgba(248, 250, 252, 0.8);
      border: 2px solid rgba(102, 126, 234, 0.2);
      color: #64748b;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        background: rgba(102, 126, 234, 0.1);
        border-color: rgba(102, 126, 234, 0.4);
        color: #667eea;
      }

      .btn-icon {
        margin-right: 6px;
        font-size: 1rem;
      }
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

// 暗色模式下的赞助模态框样式
.dark {
  .sponsor-card {
    background: rgba(30, 41, 59, 0.95);
    border-color: rgba(102, 126, 234, 0.25);

    .sponsor-header {
      .sponsor-subtitle {
        color: #94a3b8;
      }
    }

    .sponsor-actions {
      .sponsor-cancel-btn {
        background: rgba(51, 65, 85, 0.8);
        border-color: rgba(102, 126, 234, 0.3);
        color: #cbd5e1;

        &:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          color: #818cf8;
        }
      }
    }
  }
}

// 感谢赞助模态框样式
.thank-you-modal {
  :deep(.n-modal) {
    max-width: 90vw;
  }
}

.thank-you-card {
  width: 500px;
  max-width: 90vw;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;

  .thank-you-header {
    margin-bottom: 32px;

    .thank-you-icon {
      font-size: 4rem;
      display: block;
      margin-bottom: 16px;
      animation: bounce 1s ease-in-out;
    }

    .thank-you-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0 0 8px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .thank-you-subtitle {
      color: #64748b;
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }
  }

  .thank-you-btn {
    width: 100%;
    max-width: 300px;
    height: 48px;
    border-radius: 14px;
    font-size: 1.1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
    }

    .btn-icon {
      margin-right: 6px;
      font-size: 1rem;
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
}

// 暗色模式下的感谢赞助模态框样式
.dark {
  .thank-you-card {
    background: rgba(30, 41, 59, 0.95);
    border-color: rgba(102, 126, 234, 0.25);

    .thank-you-header {
      .thank-you-subtitle {
        color: #94a3b8;
      }
    }
  }
}
</style>
