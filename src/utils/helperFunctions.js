'use strict';

//*** helper functions */

module.export = function convertFollowersToNumbers(string) {
    let arr = string.split('|');
    let result = arr.map(item => parseInt(item))
    return result;
}

module.export = function stringToArray(string) {

    return string.split('|')

}
// **************** end of helper *************
