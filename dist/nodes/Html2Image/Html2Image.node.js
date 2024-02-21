"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html2Image = void 0;
const node_html_to_image_1 = __importDefault(require("node-html-to-image"));
const Html2Image_node_options_1 = require("./Html2Image.node.options");
class Html2Image {
    constructor() {
        this.description = Html2Image_node_options_1.nodeDescription;
    }
    async execute() {
        const items = this.getInputData();
        const html = this.getNodeParameter('html', 0);
        let returnData = [];
        for (let i = 0; i < items.length; i++) {
            const newItem = {
                json: {},
                binary: {},
                pairedItem: {
                    item: i,
                },
            };
            const image = await (0, node_html_to_image_1.default)({
                html,
                puppeteerArgs: {
                    headless: true,
                    args: ['--no-sandbox']
                }
            }).catch((e) => { throw new Error(e); });
            if (image instanceof Buffer) {
                newItem.binary['data'] = await this.helpers.prepareBinaryData(Buffer.from(image), undefined, 'image/png');
            }
            returnData.push(newItem);
        }
        return this.prepareOutputData(returnData);
    }
}
exports.Html2Image = Html2Image;
//# sourceMappingURL=Html2Image.node.js.map