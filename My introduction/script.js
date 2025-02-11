document.addEventListener('DOMContentLoaded', function () {
// 获取页面中的第一个 header 元素
const header = document.querySelector('header');
const toggle = document.querySelector('#toggle');
const navigation = document.querySelector('#navigation');
const main = document.getElementById('main');
const links = document.querySelectorAll('#navigation a')

// 页面加载后，添加类名 'show'，触发 header 的动画
window.addEventListener('load', () => {
  setTimeout(() => {
    header.classList.add('show');
  }, 100); // 延迟 0.1 秒再触发动画
});

// 点击 toggle 按钮时，激活toggleMenu的任务
toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log("Toggling menu...");

  main.classList.toggle('active'); // 切换 main 的状态
  console.log(main.classList);

  toggle.classList.toggle('active');    // 切换按钮的旋转效果
  console.log(toggle.classList);

  navigation.classList.toggle('active');    // 切换导航栏的旋转效果
  console.log(navigation.classList);
}

// 为每个导航链接添加点击事件监听器
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();  // 阻止默认行为（跳转）

    // 获取目标元素
    const targetId = link.getAttribute('href').substring(1);    // 获取 href 属性值并去除 # 符号
    const targetElement = document.getElementById(targetId);    // 查找目标元素

    // 检查目标元素是否存在
    if (targetElement) {
      // 获取目标元素到页面顶部的距离
      const targetPosition = targetElement.offsetTop;
      // 设置一个自定义的偏移量（例如，50px）
      const offset = 83;  
      // 使用 window.scrollTo 或 window.scroll 来实现平滑滚动，并设置自定义偏移量
      window.scrollTo({
        top: targetPosition - offset, // 目标位置减去偏移量
        behavior: 'smooth'  // 平滑滚动
      });
    }
  });
});
});
// 在页面加载后，添加类名 'show'，触发动画
//window.addEventListener('load', () => {
 // setTimeout(() => {
  //  header.classList.add('show');
 // }, 100); // 延迟 1 秒再触发动画
//});

//function toggle() {
  //  var main = document.getElementById('main');   // 获取 main 元素
  //  main.classList.toggle('active');
//}