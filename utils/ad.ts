export const go_uc_ad = (): void => {
    const url = "https://www.compshare.cn/images/compshareImage-1aly0zqh3gvc?referral_code=1ywd4VqDKknFWCEUZvOoWo&ytag=GPU_aiguoliuguo_SF"
    // 打开新页面
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
        // 成功打开新页面
        newWindow.focus();
    }
    // @ts-ignore
    if (typeof window.gtag === "function") {
        console.log("Sending click_ad event to Google Analytics");
        // @ts-ignore
        window.gtag('event', 'click_ucloud_ad', {
            event_category: 'ad',
            event_label: 'go_uc_ad'
        });
    }
}

// 添加第二个广告网站的函数
export const go_aigate_ad = (): void => {
    const url = "https://studio.aigate.cc/images/1007735255911759872?channel=E4Z7B2W5C&coupon=AM8HLIZE2C"
    // 打开新页面
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
        // 成功打开新页面
        newWindow.focus();
    }
    // @ts-ignore
    if (typeof window.gtag === "function") {
        console.log("Sending click_ad event to Google Analytics");
        // @ts-ignore
        window.gtag('event', 'click_aigate_ad', {
            event_category: 'ad',
            event_label: 'go_aigate_ad'
        });
    }
}
// 添加讯度云计算广告函数
export const go_xunduyun_ad = (): void => {
    const url = "https://www.kdocs.cn/l/cjQe2kMl8GuG"
    // 打开新页面
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
        // 成功打开新页面
        newWindow.focus();
    }
    // @ts-ignore
    if (typeof window.gtag === "function") {
        console.log("Sending click_ad event to Google Analytics");
        // @ts-ignore
        window.gtag('event', 'click_xunduyun_ad', {
            event_category: 'ad',
            event_label: 'go_xunduyun_ad'
        });
    }
}