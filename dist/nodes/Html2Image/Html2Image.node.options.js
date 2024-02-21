"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDescription = void 0;
exports.nodeDescription = {
    displayName: "Html to Image",
    name: "html2image",
    group: ["html2image"],
    version: 1,
    description: "Convert a html to image",
    defaults: {
        name: "Html to Image",
        color: "#125580",
    },
    icon: "file:node-icon.svg",
    inputs: ["main"],
    outputs: ["main"],
    properties: [
        {
            displayName: "Html",
            name: "html",
            type: "string",
            typeOptions: {
                editor: 'htmlEditor',
            },
            default: '',
            description: "Html content to generate image",
        }
    ],
};
//# sourceMappingURL=Html2Image.node.options.js.map