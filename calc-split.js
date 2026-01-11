function calcSplit() {
    const total = parseFloat(document.getElementById('sb-total').value); // 合計（例: 28000）
    const totalNum = parseFloat(document.getElementById('sb-num').value); // 全員（例: 4）
    
    const specialAmount = parseFloat(document.getElementById('sb-special-amount').value) || 0; // 先出分（例: 10000）
    const specialNum = parseFloat(document.getElementById('sb-special-num').value) || 0; // 先出人数（例: 1）
    
    const resArea = document.getElementById('res-split');

    // バリデーション
    if (!total || !totalNum || totalNum <= 0) {
        resArea.innerText = "金額と人数を入力してください";
        return;
    }

    // 残りの金額
    const remainingAmount = total - specialAmount;
    // 残りの人数（ここが修正ポイント！）
    const remainingNum = totalNum - specialNum;

    if (remainingNum <= 0) {
        resArea.innerText = "残りの人数が0人以下になってしまいます";
        return;
    }

    if (remainingAmount < 0) {
        resArea.innerText = "設定金額が合計を超えています";
        return;
    }

    // 残りのメンバー1人あたりの額
    const perPerson = Math.ceil(remainingAmount / remainingNum);

    resArea.style.color = "black";
    resArea.innerHTML = `
        残金 <strong>${remainingAmount.toLocaleString()}</strong> 円を 
        <strong>${remainingNum}</strong> 人で割ります。<br>
        1人あたり <strong>${perPerson.toLocaleString()}</strong> 円です。
    `;
}
