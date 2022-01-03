

export default function pickFood() {
var foodList = ["치킨", "피자", "탕수육", "짜장면", "베트남 쌀국수", "짬뽕", "족발", "돈까스", "해물탕", "케익", "떡볶이", "삼겹살", "갈비", "소머리국밥", "돼지국밥", "해물찜", "회", "닭발", "찜닭"]

    const Random = (min, max) => {
        var seed = Math.random();
        var sub = Number(max) - Number(min) + 1;
        var ran = Number(Math.floor(seed * sub + Number(min)));
        console.log(seed);
        console.log(ran);
        return ran;
    };

    var res = foodList[Random(0, foodList.length - 1)];
    return res;
}