import AliyunHelper, { constructSignatureStr } from 'aliyun-sdk-node-request'

function getSignature(secret, config) {
  const instance = new AliyunHelper({
    AccessKeySecret: secret
  });
  return instance.getSignature(constructSignatureStr(config));
}

export default getSignature;
