import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
} from "qiankun";
import apps from "./app.js"

registerMicroApps(apps, {
    beforeLoad: () => {
        console.log("加载前");
        return Promise.resolve();
    },
    afterMount: () => {
        console.log("加载后");
        return Promise.resolve();
    },
})

addGlobalUncaughtErrorHandler(event => {
    console.error(event);
    const {
        msg
    } = event
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        console.error("微应用加载失败，请检查应用是否可运行");
    }
})

export default start