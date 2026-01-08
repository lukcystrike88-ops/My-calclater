/**
 * 価格比較 (A vs B)
 */
function calcComparison() {
    // 入力値を取得
    const p1Price = parseFloat(document.getElementById('p1-price').value);
    const p1Qty = parseFloat(document.getElementById('p1-qty').value);
    const p2Price = parseFloat(document.getElementById('p2-price').value);
    const p2Qty = parseFloat(document.getElementById('p2-qty').value);
    const resArea = document.getElementById('res-comp');

    // 入力チェック
    if (!p1Price || !p1Qty || !p2Price || !p2Qty) {
        resArea.innerText = "すべての項目を入力してください";
        resArea.style.color = "red";
        return;
    }

    // 単価計算
    const unit1 = p1Price / p1Qty;
    const unit2 = p2Price / p2Qty;

    // 比較結果の表示
    resArea.style.color = "black";
    if (unit1 < unit2) {
        const diff = (unit2 - unit1).toFixed(2);
        resArea.innerHTML = `<strong>商品Aの方がお得です！</strong><br>(1単位あたり ${diff}円 安い)`;
    } else if (unit1 > unit2) {
        const diff = (unit1 - unit2).toFixed(2);
        resArea.innerHTML = `<strong>商品Bの方がお得です！</strong><br>(1単位あたり ${diff}円 安い)`;
    } else {
        resArea.innerText = "どちらも同じ単価です";
    }
}

/**
 * 単価計算 (1個あたり)
 */
function calcUnitPrice() {
    const total = parseFloat(document.getElementById('u-total-price').value);
    const count = parseFloat(document.getElementById('u-count').value);
    const resArea = document.getElementById('res-unit');

    if (!total || !count) {
        resArea.innerText = "金額と個数を入力してください";
        resArea.style.color = "red";
        return;
    }

    const result = (total / count).toFixed(2);
    resArea.style.color = "black";
    resArea.innerHTML = `1個(単位)あたり <strong>${result} 円</strong> です`;
}
