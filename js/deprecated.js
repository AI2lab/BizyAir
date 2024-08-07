import { app } from "../../scripts/app.js";


app.registerExtension({
    name: "bizyair.deprecated.nodes",

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        const warning_msg = {
            "BizyAirSetAPIKey": "It will be available until 2024/08/15. Please click \"BizyAir Key\" button to set API key instead.",
            "BizyAirMZChatGLM3TextEncode": "It will be available until 2024/08/15. Please use \"☁️BizyAir MinusZone ChatGLM3 Text Encode\" node instead.",
            "BizyAirKolorsTextEncode": "It will be available until 2024/08/15. Please use \"☁️BizyAir MinusZone ChatGLM3 Text Encode\" node instead.",
            "BizyAirKolorsVAEEncode": "It will be available until 2024/08/15. Please use \"☁️BizyAir VAE Encode\" node instead.",
            "BizyAirKolorsVAEDecode": "It will be available until 2024/08/15. Please use \"☁️BizyAir VAE Decode\" node instead.",
            "BizyAirKolorsSampler": "It will be available until 2024/08/15. Please use \"☁️BizyAir KSampler\" node instead.",
            //"BizyAirSuperResolution": "It will be available until 2024/08/31. Please use \"☁️BizyAir Image Super Resolution\" node instead.",
        }
        if (Object.keys(warning_msg).includes(nodeData.name)) {
            async function alert_deprecated(node_name, display_name) {
                alert(`${display_name}: ${warning_msg[node_name]}`);
            }
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function (message) {
                onNodeCreated?.apply(this, arguments);
                alert_deprecated.call(this, nodeData.name, nodeData.display_name);
            };
        }
    },
});
