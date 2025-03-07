/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let i=0
    let lrg=candies[i];
    let result=[]
    for(i=1;i<candies.length;i++){//test i init
        if(lrg<candies[i]){
            lrg=candies[i]
        }
    }
    for(let i=0;i<candies.length;i++){
        if(lrg>candies[i]+extraCandies){
            result.push(false)
        }else{
            result.push(true)
        }
    }
    return result
};