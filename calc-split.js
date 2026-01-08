function calcSplit() {
    const totalEl = document.getElementById('sb-total');
    const numEl = document.getElementById('sb-num');
    const specialEl = document.getElementById('sb-special');
    const resArea = document.getElementById('res-split');

    if (!totalEl || !numEl || !resArea) {
        console.error("HTMLのIDが見つかりません");
        return;
    }

    const total = parseFloat(totalEl.value);
    const num = parseFloat(numEl.value);
    const specialAmount = parseFloat(specialEl.value) || 0;

    if (isNaN(total) || isNaN(num) || num <= 0) {
        resArea.innerText = "合計金額と人数を正しく入力してください";
        resArea.style.color = "red";
        return;
    }

    const remainingAmount = total - specialAmount;
    if (remainingAmount < 0) {
        resArea.innerText = "多めに払う額が合計を超えています";
        return;
    }

    const perPerson = Math.ceil(remainingAmount / num);
    resArea.style.color = "black";
    resArea.innerHTML = `1人あたり <strong>${perPerson.toLocaleString()}</strong> 円です`;
}
