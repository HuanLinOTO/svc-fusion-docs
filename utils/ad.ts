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
        // @ts-ignore
        window.gtag('event', 'click_ad', {
            event_category: 'ad',
            event_label: 'go_uc_ad'
        });
    }
}