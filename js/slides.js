let slide = document.getElementById('slider');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');

// クリックイベント

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider2');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#000';
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider3');
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#000';
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider4');
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#000';
    count = 0;
  } else {
    slide.classList.remove('slider4');
    slide.classList.add('slider1');
    list4.style.backgroundColor = 'transparent';
    list1.style.backgroundColor = '#000';
    count = 0;
  }
};

function prevClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider4');
    list1.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#000';
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider1');
    list2.style.backgroundColor = 'transparent';
    list1.style.backgroundColor = '#000';
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider2');
    list3.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#000';
    count = 0;
  } else {
    slide.classList.remove('slider4');
    slide.classList.add('slider3');
    list4.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#000';
    count = 0;
  }
};

// インジケーター

list1.addEventListener('click', click1);
list2.addEventListener('click', click2);
list3.addEventListener('click', click3);
list4.addEventListener('click', click4);

function click1() {
  slide.classList.add('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  list1.style.backgroundColor = '#000';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  count = 0;
}

function click2() {
  slide.classList.remove('slider1');
  slide.classList.add('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = '#000';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  count = 0;
}

function click3() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.add('slider3');
  slide.classList.remove('slider4');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = '#000';
  list4.style.backgroundColor = 'transparent';
  count = 0;
}

function click4() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.add('slider4');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = '#000';
  count = 0;
}

// 自動スライド
let count = 0;

setInterval(() => {
  if (count > 4) {
    count = 0;
    nextClick();
  }
  count++;
  console.log(count);
}, 2000);