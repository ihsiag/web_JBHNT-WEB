const smoothScroll = ()=> {
return(<></>);
//   function KepMouseWheelSmooth() {

//       var t = this;
//       t.scrollTargetPos = 0;
//       t.scrollPos = 0;
//       t.delta;
//       t.timeoutId;
//       t.decelerationBase = 0.1;//この値が小さいほど減速率がゆるやかに

//       t.wheelFlag = false;

//       t.mouseWheelEvent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

//       t.bodyH = $('body').innerHeight();
//       t.winH = $(window).height();

//       $(document).on(t.mouseWheelEvent, function(e) {

//           //safariだとテキスト選択中おかしい
//           if(!t.wheelFlag){
//               var selection = getSelection();
//               if(selection.rangeCount > 0){
//                 var range = selection.getRangeAt(0);
//                 selection.removeAllRanges();
//               }
//           }

//           e.preventDefault();
//           clearTimeout(t.timeoutId);
//           t.wheelFlag = true;

//           t.delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

//           //Firefoxだけdeltaの値が10分の1
//           if (uaObj.browserName == 'firefox') t.delta = t.delta * 15;

//           t.scrollPos -= t.delta;//ターゲットY値 リミット値を設ける
//           if (t.scrollPos < 0) t.scrollPos = 0;
//           if (t.scrollPos > t.bodyH - t.winH) t.scrollPos = t.bodyH - t.winH;

//           t.timeoutId = setTimeout(function() {t.wheelFlag = false; }, 1000);//ホイール完了後は処理軽減

//           return false;

//       });

//       // ブラウザから出た時 処理軽減
//       $('body').on('mouseleave', function(e) {

//           clearTimeout(t.timeoutId);
//           t.wheelFlag = false;
//           t.deceleration = 0;//スクロールバーのノブを動作させた時のガクるのを抑えるため
//           return false;

//       });

//       $('body').on('mouseenter', function(e) {

//           t.deceleration = t.decelerationBase;
//           return false;

//       });

//       //スクロールバーで動作させたあとの値取得
//       t.scrollFunc = function() {
//           //スクロールバーの処理
//           if (!t.wheelFlag) {
//               t.scrollPos = $(document).scrollTop();
//               t.scrollTargetPos = $(document).scrollTop();
//           }
//       }

//       //初期値を取得
//       t.scrollPos = $(document).scrollTop();
//       t.scrollTargetPos = $(document).scrollTop();

//       $(window).on('scroll', function() { t.scrollFunc() });

//       t.smoothScrollfunc = function() {

//           if (t.wheelFlag) {
//               var ty = (t.scrollPos - $(document).scrollTop()) * t.deceleration;//(ターゲットY値-現在Y値)*減速率
//               t.scrollTargetPos += Math.floor(ty);
//               $(document).scrollTop((t.scrollTargetPos));
//           }

//           requestAnimationFrame(t.smoothScrollfunc);//requestAnimationFrame これは革命です

//       }

//       t.deceleration = t.decelerationBase;
//       t.smoothScrollfunc();

//   }

//   //PCのみ発動
//   if (uaObj.deviceName == "PC") var kepMouseWheelSmooth = new KepMouseWheelSmooth();

};

export default smoothScroll;