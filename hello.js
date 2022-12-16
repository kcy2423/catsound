
(function () {
      const slideList = document.querySelector('.slide_list');  // Slide parent dom
      const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
      const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
      const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
      const pagination = document.querySelector('.slide_pagination');
      const slideLen = slideContents.length;  // slide length
      const slideWidth = 400; // slide width
      const slideSpeed = 300; // slide speed
      const startNum = 0; // initial slide index (0 ~ 4)
      
      slideList.style.width = slideWidth * (slideLen + 2) + "px";
      
      // Copy first and last slide
      let firstChild = slideList.firstElementChild;
      let lastChild = slideList.lastElementChild;
      let clonedFirst = firstChild.cloneNode(true);
      let clonedLast = lastChild.cloneNode(true);

      // Add copied Slides
      slideList.appendChild(clonedFirst);
      slideList.insertBefore(clonedLast, slideList.firstElementChild);

      // Add pagination dynamically
      let pageChild = '';
      for (var i = 0; i < slideLen; i++) {
        pageChild += '<li class="dot';
        pageChild += (i === startNum) ? ' dot_active' : '';
        pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
      }
      pagination.innerHTML = pageChild;
      const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

      slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

      let curIndex = startNum; // current slide index (except copied slide)
      let curSlide = slideContents[curIndex]; // current slide dom
      curSlide.classList.add('slide_active');

      /** Next Button Event */
      slideBtnNext.addEventListener('click', function() {
        if (curIndex <= slideLen - 1) {
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
        }
        if (curIndex === slideLen - 1) {
          setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
          }, slideSpeed);
          curIndex = -1;
        }
        curSlide.classList.remove('slide_active');
        pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
        curSlide = slideContents[++curIndex];
        curSlide.classList.add('slide_active');
        pageDots[curIndex].classList.add('dot_active');
      });

      /** Prev Button Event */
      slideBtnPrev.addEventListener('click', function() {
        if (curIndex >= 0) {
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
        }
        if (curIndex === 0) {
          setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
          }, slideSpeed);
          curIndex = slideLen;
        }
        curSlide.classList.remove('slide_active');
        pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
        curSlide = slideContents[--curIndex];
        curSlide.classList.add('slide_active');
        pageDots[curIndex].classList.add('dot_active');
      });

      /** Pagination Button Event */
      let curDot;
      Array.prototype.forEach.call(pageDots, function (dot, i) {
        dot.addEventListener('click', function (e) {
          e.preventDefault();
          curDot = document.querySelector('.dot_active');
          curDot.classList.remove('dot_active');
          
          curDot = this;
          this.classList.add('dot_active');

          curSlide.classList.remove('slide_active');
          curIndex = Number(this.getAttribute('data-index'));
          curSlide = slideContents[curIndex];
          curSlide.classList.add('slide_active');
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
        });
      });
    })();









    function open_pop1() {
      win1 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write1.html',
        'sdpop01',
        'resizabe=no width=485 height=415 left=150 top=130');
      win2 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering1.html',
        'sdpop02',
        'resizabe=no width=500 height=380 left=500 top=300');
      }


    function close_pop1(){
        win1.close();
        win2.close();
      }


    function open_pop2() {
      win3 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write2.html',
        'sdpop03',
        'resizabe=no width=325 height=364 left=150 top=130');
      win4 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering2.html',
        'sdpop04',
        'resizabe=no width=750 height=470 left=500 top=300');
      }

    function close_pop2(){
        win3.close();
        win4.close();
      }

    function open_pop3() {
      win5 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write3.html',
        'sdpop05',
        'resizabe=no width=487 height=271 left=150 top=400');
      win6 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering3.html',
        'sdpop06',
        'resizabe=no width=120 height=140 left=650 top=320');
      }

    function close_pop3(){
        win5.close();
        win6.close();
      }


    function open_pop4() {
      win7 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write4.html',
        'sdpop07',
        'resizabe=no width=416 height=178 left=150 top=130');
      win8 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering4.html',
        'sdpop08',
        'resizabe=no width=800 height=420 left=500 top=300');
      }

    function close_pop4(){
        win7.close();
        win8.close();
      }


    function open_pop5() {
      win9 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write5.html',
        'sdpop09',
        'resizabe=no width=485 height=202 left=150 top=130');
      win10 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering5.html',
        'sdpop10',
        'resizabe=no width=500 height=320 left=500 top=80');
      }

    function close_pop5(){
        win9.close();
        win10.close();
      }


    function open_pop6() {
      win11 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write6.html',
        'sdpop11',
        'resizabe=no width=485 height=233 left=150 top=130');
      win12 = open(' file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering6.html',
        'sdpop12',
        'resizabe=no width=200 height=500 left=800 top=270');
      }

    function close_pop6(){
        win11.close();
        win12.close();
      }

    function open_pop7() {
      win13 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write7.html',
        'sdpop13',
        'resizabe=no width=485 height=221 left=150 top=130');
      win14 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering7.html',
        'sdpop14',
        'resizabe=no width=860 height=500 left=500 top=300');
      }

    function close_pop7(){
        win13.close();
        win14.close();
      }

    function open_pop8() {
      win15 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write8.html',
        'sdpop15',
        'resizabe=no width=485 height=197 left=150 top=130');
      win16 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering8.html',
        'sdpop16',
        'resizabe=no width=300 height=240 left=500 top=300');
      }

    function close_pop8(){
        win15.close();
        win16.close();
      }

    function open_pop9() {
      win17 = open(' file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write9.html',
        'sdpop17',
        'resizabe=no width=485 height=222 left=210 top=350');
      win18 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering9.html',
        'sdpop18',
        'resizabe=no width=115 height=15 left=700 top=300');
      }

    function close_pop9(){
        win17.close();
        win18.close();
      }

    function open_pop10() {
      win19 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write10.html',
        'sdpop19',
        'resizabe=no width=485 height=172 left=150 top=150');
      win20 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering10.html',
        'sdpop20',
        'resizabe=no width=800 height=200 left=500 top=330');
      }

    function close_pop10(){
        win19.close();
        win20.close();
      }

    function open_pop11() {
      win21 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write11.html',
        'sdpop21',
        'resizabe=no width=485 height=172 left=150 top=150');
      win22 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering11.html',
        'sdpop22',
        'resizabe=no width=800 height=200 left=500 top=330');
      }

    function close_pop11(){
        win21.close();
        win22.close();
      }

    function open_pop12() {
      win23 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/write12.html',
        'sdpop23',
        'resizabe=no width=485 height=172 left=150 top=130');
      win24 = open('file:///Users/kimchaeyeon/Desktop/2022-2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%80%E1%85%B5/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB/untitle/lettering12.html',
        'sdpop24',
        'resizabe=no width=500 height=310 left=500 top=300');
      }

    function close_pop12(){
        win23.close();
        win24.close();
      }