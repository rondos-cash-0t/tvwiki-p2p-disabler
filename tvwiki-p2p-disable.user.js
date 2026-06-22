// ==UserScript==
// @name         Tvwiki P2P Disabler
// @match        https://tvwiki31.net/*
// @match        https://player.bunny-frame.online/*
// @match        https://*.bunny-frame.online/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

(() => {
    const win = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;

    // isP2PUploadDisabled : 업로드만 비활성화
    // isP2PDisabled : P2P 자체 비활성화

    // true : 업로드만 비활성화 / false : P2P 전체 비활성화
    const uploadOnly = true;

    const isVar = (uploadOnly ? "isP2PUploadDisabled" : "isP2PDisabled");

    Object.defineProperty(Object.prototype, isVar, {
        configurable: true,
        get() {
            return true;
        },
        set(_) {
            // ignore
        }
    });

    console.log("[P2P] Object.prototype " + isVar + " forced true");
})();
