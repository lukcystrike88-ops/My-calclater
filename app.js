/**
 * 画面切り替え関数
 * @param {string} pageId - 表示したい画面のID
 */
function showPage(pageId) {
    // 1. すべてのページ（class="page"）を取得して非表示にする
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. 指定されたIDのページだけを表示する
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // 3. 画面が切り替わったとき、一番上までスクロールする（おまけ機能）
        window.scrollTo(0, 0);
    }
}
