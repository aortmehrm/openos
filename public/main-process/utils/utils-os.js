
const macaddress = require('macaddress');
const uuid = require('uuid');
const moment = require('moment')
const os = require('os')

/**
 * 32자리 UUID를 반환합니다 
 */
function getUUID() {
    // 인덱싱이 되는경우 '-'가 성능저하가 됨으로 
    // 인덱싱 성능 보장용으로 사용한다. DB에 사용할경우 type을 binary로 하면 된다.
    // [인덱싱 성능 관련 참고:https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/]
    let tokens = uuid.v4().split('-')
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
}

function getDateString(format){
    return moment().format(format)
}

async function getMacAddress() {
    let mac = await macaddress.one();
    return mac;
}

function getIpAddress() {
    return require("ip").address();
}

function getOsRelease(){
    return os.release();
}

function getOsPlatForm(){
    return os.platform();
}

function getOsInfo() {
    return os.platform + '-' + os.release();
}

function getOsHostName() {
    return os.hostname();
}
    
module.exports = {
    getUUID: getUUID,
    getDateString: getDateString,
    getMacAddress: getMacAddress,
    getIpAddress: getIpAddress,
    getOsRelease: getOsRelease,
    getOsPlatForm: getOsPlatForm,
    getOsInfo: getOsInfo,
    getOsHostName: getOsHostName
}
