/**
 * 割引後の価格を計算
 */
function calcDiscount() {
    const price = parseFloat(document.getElementById('d-price').value);
    const rate = parseFloat(document.getElementById('d-rate').value);
    const resArea = document.getElementById('res-discount');

    if (isNaN(price) || isNaN(rate)) {
        resArea.innerText = "金額と割引率を入力してください";
        resArea.style.color = "red";
        return;
    }

    // 計算式：定価 × (1 - 割引率/100)
    const discountedPrice = Math.floor(price * (1 - rate / 100));
    const savings = price - discountedPrice;

    resArea.style.color = "black";
    resArea.innerHTML = `
        割引後：<strong>${discountedPrice.toLocaleString()}</strong> 円<br>
        <span style="font-size:0.9em; color:#28a745;">（${savings.toLocaleString()} 円お得！）</span>
    `;
}

/**
 * 割引前から元値を逆算
 */
function calcOriginalPrice() {
    const price = parseFloat(document.getElementById('d-price').value); // 割引後の価格として取得
    const rate = parseFloat(document.getElementById('d-rate').value);
    const resArea = document.getElementById('res-discount');

    if (isNaN(price) || isNaN(rate) || rate >= 100) {
        resArea.innerText = "正しく入力してください（割引率は100未満）";
        resArea.style.color = "red";
        return;
    }

    // 計算式：割引後の価格 ÷ (1 - 割引率/100)
    const originalPrice = Math.floor(price / (1 - rate / 100));

    resArea.style.color = "black";
    resArea.innerHTML = `
        割引前の元値：<strong>${originalPrice.toLocaleString()}</strong> 円
    `;
}
