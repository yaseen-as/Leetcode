/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged='';
    let i=0;
    while(1){
        if(word1[i]){
            merged+=word1[i]
        }
        if(word2[i]){
            merged+=word2[i]
        }
        if(!word1[i] && !word2[i]){
            break;
        }
        i++
    }
    return merged
};