/**
 * 速度・距離・時間の計算（単位変換含む）
 */
function calcSpeed() {
    const dist = parseFloat(document.getElementById('s-dist').value); // 距離(m)
    const time = parseFloat(document.getElementById('s-time').value); // 時間(秒)
    const resArea = document.getElementById('res-speed');

    resArea.style.color = "black";

    // 1. 距離と時間から「速度」を出す
    if (dist && time) {
        const mps = (dist / time).toFixed(2);       // 秒速(m/s)
        const kph = (mps * 3.6).toFixed(2);        // 時速(km/h)
        resArea.innerHTML = `
            秒速: <strong>${mps}</strong> m/s<br>
            時速: <strong>${kph}</strong> km/h
        `;
    } 
    // 2. 速度と距離から「時間」を出す（将来的な拡張用）
    // 今回はシンプルに、入力されたmと秒から時速を出す機能をメインにしています
    else {
        resArea.innerText = "距離(m)と時間(秒)を入力してください";
        resArea.style.color = "red";
    }
}
