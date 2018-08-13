function openCity(evt, cityName) {
  var i, tabcontent, tablinks; // 定义所有变量

  // 获取所有内容(tabcontent)并隐藏他们
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //获取所有按钮,并移除所有的active样式
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //显示对应的内容并且给相应的激活状态
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  /* 
   * currentTarget 事件属性返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口。
   * 在捕获和起泡阶段，该属性是非常有用的，因为在这两个节点，它不同于 target 属性。
   */

}
//默认点开的选项
document.getElementById("defaultOpen").click();