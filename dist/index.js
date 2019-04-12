"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aliyun_sdk_node_request_1 = require("aliyun-sdk-node-request");
function getSignature(secret, config) {
    const instance = new aliyun_sdk_node_request_1.default({
        AccessKeySecret: secret
    });
    return instance.getSignature(aliyun_sdk_node_request_1.constructSignatureStr(config));
}
exports.default = getSignature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBNkU7QUFFN0UsU0FBUyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU07SUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQ0FBWSxDQUFDO1FBQ2hDLGVBQWUsRUFBRSxNQUFNO0tBQ3hCLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQywrQ0FBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==