import { INodeTypeDescription } from "n8n-workflow";

/**
 * Options to be displayed
 */
export const nodeDescription: INodeTypeDescription = {
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
			description:
				"Html content to generate image",
		}
	],
};
