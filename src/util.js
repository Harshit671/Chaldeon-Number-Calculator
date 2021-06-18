var x = {
    A: 1, J: 1, S: 3, B: 2, K: 2, T: 4, C: 3, L: 3, U: 6, D: 4,
    M: 4, V: 6, E: 5, N: 5, W: 6, F: 8, O: 7, X: 5, G: 3, P: 8, Y: 1, H: 5,
    Q: 1, Z: 7, I: 1, R: 2
};

export const getChar = (data) => {
    var getDreamNum;
    var getSoulNum;
    var getDestinyNum;
    let word1 = data.trim().toUpperCase();
    let word = word1.replace(/\s+/g, "");
    let str = word.split('');
    let getVowel = str.filter((char) => {
        return (char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
    }
    )
    console.log("getVowel", getVowel);
   
  
    if (str.length) {
        var getCompoundNum = str.reduce((total, char) => {
            return (isNaN(total) ? x[`${total}`] : total) + x[`${char}`];
        })
    }
    console.log("getCompoundNum", getCompoundNum);
    if (getVowel.length) {
        if (getVowel.length === 1) {
            var getVowelNum = x[`${getVowel[0]}`];
        }
        else {
            getVowelNum = getVowel.reduce((total, char) => {
                return (isNaN(total) ? x[`${total}`] : total) + x[`${char}`];
            })
        }
    }
    console.log("getVowelNum", getVowelNum);
    var getConsNum=getCompoundNum-getVowelNum;
    console.log("getConsNum", getConsNum);
    var getCompoundNum1=getCompoundNum;
    if (getCompoundNum1 === 11 || getCompoundNum1 === 22 || getCompoundNum1 === 33) {
         getDestinyNum = getCompoundNum1
    }
    else if(getCompoundNum1<10){
        getDestinyNum=getCompoundNum1
    }
    else {
        while (getCompoundNum1 >= 10) {
            var total1 = 0;
            var str1 = '' + getCompoundNum1;
            for (var i = 0; i < str1.length; i++) {
                total1 = total1 + parseInt(str1.charAt(i));
            }
            getCompoundNum1=total1;
            getDestinyNum = total1;
        }
    }
    console.log("getDestinyNum", getDestinyNum);
    if (getVowelNum === 11 || getVowelNum === 22 || getVowelNum === 33) {
         getSoulNum = getVowelNum
    }
    else if(getVowelNum<10){
        getSoulNum=getVowelNum
    }
    else {
        while (getVowelNum >= 10) {
            var total2 = 0;
            var str2 = '' + getVowelNum;
            for (var j = 0; j < str2.length; j++) {
                total2 = total2 + parseInt(str2.charAt(j));
            }
            getVowelNum=total2;
            getSoulNum = total2;
        }

    }
    console.log("getSoulNum", getSoulNum);
    if (getConsNum === 11 || getConsNum === 22 || getConsNum === 33) {
         getDreamNum = getConsNum
    }
    else if(getConsNum<10){
        getDreamNum=getConsNum
    }
    else {
        while (getConsNum >= 10) {
            var total3 = 0;
            var str3 = '' + getConsNum;
            for (var k = 0; k < str3.length; k++) {
                total3 = total3 + parseInt(str3.charAt(k));
            }
            getConsNum=total3;
            getDreamNum = total3;
        }

    }
    console.log("getDreamNum", getDreamNum);
    let arr=[getCompoundNum, getDestinyNum, getSoulNum, getDreamNum]
    return arr
};


