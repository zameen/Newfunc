Array.prototype.unique = function(){
    let ans = [...new Set(this)];
    return ans;
};