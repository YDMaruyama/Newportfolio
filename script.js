document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('#about ul li');
    const aboutSection = document.querySelector('#about');
  
    listItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        // data-bg属性から画像のURLを取得
        const bgImage = item.getAttribute('data-bg');
        // 直接背景画像を設定
        aboutSection.style.setProperty('--bg-image', `url(${bgImage})`);
        // 背景画像をスライドインさせるクラスを追加
        aboutSection.classList.add('bg-slide-in');
      });
  
      item.addEventListener('mouseleave', function () {
        // 背景画像をスライドアウトさせるためクラスを削除
        aboutSection.classList.remove('bg-slide-in');
      });
    });
});
