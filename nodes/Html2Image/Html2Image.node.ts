import {IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription} from "n8n-workflow";
import nodeHtmlToImage from 'node-html-to-image'
import {nodeDescription} from "./Html2Image.node.options";

export class Html2Image implements INodeType {
	description: INodeTypeDescription = nodeDescription;

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const html = this.getNodeParameter('html', 0) as string;

		let returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const newItem: INodeExecutionData = {
				json: {},
				binary: {},
				pairedItem: {
					item: i,
				},
			};

			const image = await nodeHtmlToImage({
				html,
				puppeteerArgs: {
					headless: true,
					args: ['--no-sandbox']
				}
			}).catch((e: any) => {throw new Error(e)})

			if(image instanceof Buffer) {
				newItem.binary!['data'] = await this.helpers.prepareBinaryData(Buffer.from(image), undefined, 'image/png');
			}

			returnData.push(newItem)
		}


		return this.prepareOutputData(returnData);
	}
}
