<template>
  <ClientOnly>
    <NModalProvider>
      <template v-for="(item, index) in extra_info">
        <div class="tip custom-block">
          <p class="custom-block-title">版本额外说明 {{ index + 1 }}</p>
          <div v-html="item"></div>
        </div>
      </template>
      <n-space vertical>
        <div>等待 {{ props.wait_time }}s 后，方可点击跳转按钮</div>
        <NButton @click="gogogo" style="width: 100%">跳转到云盘</NButton>
      </n-space>
      <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="请确认" :bordered="false" size="huge" role="dialog" aria-modal="true">
          <!-- 免责声明和隐私说明按钮 -->
          <n-space>
            <n-button :type="showDisclaimer ? 'primary' : 'default'" :autofocus="showDisclaimer"
              :disabled="showDisclaimer" @click="showDisclaimer = true; showPrivacy = false">
              免责声明
            </n-button>
            <n-button :type="showPrivacy ? 'primary' : 'default'" :autofocus="showPrivacy" :disabled="showPrivacy"
              @click="showPrivacy = true; showDisclaimer = false">
              隐私说明
            </n-button>
          </n-space>
          <!-- 免责声明和隐私说明内容 -->
          <div class="disclaimer" v-if="showDisclaimer">
            <div v-html="disclaimerContent"></div>
          </div>
          <div class="disclaimer" v-if="showPrivacy">
            <div v-html="privacyContent"></div>
          </div>
          <n-space vertical>
            <template v-for="(question, index) in questions">
              <n-checkbox v-model:checked="question_values[index]">
                {{ question }}
              </n-checkbox>
            </template>
            <!-- 添加“我同意以上条款”复选框 -->
            <n-checkbox v-model:checked="agreementChecked">
              我同意以上条款
            </n-checkbox>
            <n-button style="width: 100%" type="info" @click="check_question">GOGOGO</n-button>
          </n-space>
        </n-card>
      </n-modal>
    </NModalProvider>
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

const disclaimerContent = computed(() => {
  return `
    <p>尊敬的用户：</p>
    <p>
      感谢您使用 SVC Fusion 整合包（以下简称“本整合包”）。在使用本整合包之前，请您务必仔细阅读并充分理解本免责声明的全部内容。如果您开始使用本整合包，或者进行二次售卖，即表示您已完全理解并同意本声明的全部内容。
    </p>
    <p><strong>一、关于本整合包</strong></p>
    <ol>
      <li><strong>所有权：</strong> 本整合包的所有权及相关知识产权均归属于原作者“HuanLin”（B站@多玩幻灵qwq）所有。任何未经授权的复制、修改、反向工程、出售本整合包的全部或部分内容的行为均属侵权。</li>
      <li><strong>免费使用：</strong> 本整合包目前仅供个人娱乐和非商业用途免费使用。严禁任何形式的售卖行为，包括但不限于收费教学、VIP课程等。如需商业用途，请务必联系原作者获取正式的商业授权。</li>
      <li><strong>内容限制：</strong> 禁止将本整合包用于制作任何血腥、暴力、性相关、政治相关或其他违反法律法规、社会公德的内容。</li>
    </ol>
     <p><strong>二、关于二次售卖</strong></p>
    <ol>
        <li><strong>授权与限制: </strong>原作者允许用户对本整合包进行二次售卖，但必须严格遵守原作者发布的《关于二次贩卖本整合包的授权说明》中的所有条款，包括但不限于收入分配、版权声明、传播方式等。</li>
        <li><strong>风险自担: </strong>二次售卖者需自行承担因二次售卖行为产生的一切风险和法律责任，包括但不限于用户纠纷、内容侵权、税务问题等。原作者对二次售卖行为不承担任何连带责任。</li>
        <li><strong>用户内容: </strong>二次售卖者有义务确保其用户使用本整合包产出的内容合法合规，并对用户行为导致的任何法律责任承担全部责任。</li>
        <li><strong>协议遵守: </strong>进行二次售卖即视为同意《关于二次贩卖本整合包的授权说明》，二次售卖者有义务定期查看并遵守该授权说明的最新版本。</li>
    </ol>
     <p><strong>三、版权与软件著作权声明</strong></p>
    <ol>
        <li><strong>整合包版权：</strong>本整合包所有权及相关知识产权归属于原作者“HuanLin”（B站@多玩幻灵qwq）所有。</li>
        <li><strong>启动器版权：</strong>本整合包启动器版权归属于“爱过留过”和“南京睿思澳科技有限公司”。</li>
        <li><strong>产品所有权及限制：</strong>启动器所有权归南京睿思澳电子科技有限公司所有，未经公司书面许可，严禁进行任何形式的商用、转售、分发、修改或复制。本产品及其相关内容受版权法保护，任何未经授权的使用行为将追究法律责任。</li>
        <li><strong>软件著作权：</strong>本产品暂未拥有软件著作权保护。（正在申请）</li>
    </ol>
    <p><strong>四、免责场景</strong></p>
    <ol>
      <li><strong>模型训练数据：</strong> 本整合包中使用的 AI 模型可能基于公开数据集或其他来源进行训练。我们无法保证训练数据的绝对准确性和完整性，模型输出的结果可能存在偏差或不确定性。</li>
      <li><strong>第三方内容：</strong> 本整合包可能包含来自第三方的模型、插件、脚本或其他内容。这些内容的版权归其各自所有者所有，我们不对其内容、准确性或安全性承担任何责任。</li>
      <li><strong>用户生成内容：</strong> 用户需对自己使用本整合包生成的任何内容负责。禁止生成任何违反法律法规、社会公德、侵犯他人权益（包括但不限于版权、肖像权、名誉权等）的内容。</li>
    </ol>
     <p><strong>五、其他</strong></p>
    <ol>
        <li><strong>免责范围: </strong>原作者及版权所有方不对因使用本整合包（包括但不限于二次售卖）产生的任何直接或间接损失承担责任，包括但不限于数据丢失、设备损坏、利润损失、名誉损害等。</li>
        <li><strong>适用法律: </strong>本免责声明适用中华人民共和国法律。如有任何争议，应首先通过友好协商解决；协商不成的，任何一方均有权向原作者所在地有管辖权的人民法院提起诉讼。</li>
        <li><strong>解释权: </strong>本免责声明的最终解释权归原作者所有。原作者保留随时修改本声明的权利。</li>
         <li><strong>更新通知：</strong> 本免责声明的更新将在原作者发布渠道（如B站、爱发电等）公布，建议您定期查看。</li>
    </ol>
    <p><strong>联系方式</strong></p>
     <ul>
        <li>B站：@多玩幻灵qwq</li>
        <li>QQ群：172701496</li>
     </ul>
  `;
});

const privacyContent = computed(() => {
  return `
    <p>尊敬的用户：</p>
    <p>
      本隐私说明旨在向您说明在使用 SVC Fusion 整合包（以下简称“本整合包”）时，我们如何处理您的个人信息。请您在使用本整合包之前，务必仔细阅读并充分理解本隐私说明的全部内容。
    </p>
    <p><strong>一、信息收集与使用</strong></p>
    <ol>
      <li><strong>不主动收集：</strong> 本整合包本身不会主动收集您的任何个人信息，如姓名、联系方式、设备信息、地理位置等。</li>
      <li><strong>二次售卖者责任：</strong> 如果您通过二次售卖者购买或获取本整合包，二次售卖者可能会根据其自身业务需要收集您的个人信息。请您务必仔细阅读二次售卖者的隐私政策，了解其信息收集和使用 practices。原作者不对二次售卖者的隐私行为承担任何责任。</li>
      <li><strong>授权确认：</strong> 如果您进行二次售卖，按照《关于二次贩卖本整合包的授权说明》，您需要打印、签名并将签名后的页面发送至原作者QQ。这将涉及您主动提供个人信息（QQ号）。原作者仅将此信息用于确认您已同意授权协议，不会用于其他任何目的。原作者会妥善保管您的个人信息，防止泄露、丢失或滥用。</li>
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
    <p>如果您希望行使上述任何权利，请通过“六、联系我们”中提供的方式与我们联系。</p>

    <p><strong>九、 数据保留</strong></p>
    <p>我们仅在为实现本隐私说明所述目的所必需的期限内保留您的个人信息（QQ号）。授权确认信息将在授权关系终止后一年内删除，除非法律法规另有规定。</p>
  `;
});


const check_question = () => {
  console.log(question_values.value);
  if (
    question_values.value.every((v) => v) &&
    question_values.value.length === questions.value.length &&
    agreementChecked.value
  ) {
    window.open(go_link.value, "_blank");
  }
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
const gogogo = () => {
  if (props.wait_time > 0) {
    return;
  }
  go_link.value = props.link;
  showModal.value = true;
};
</script>

<style lang="less" scoped>
.disclaimer {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
  max-height: 300px;
  overflow-y: auto;
}

.disclaimer h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>