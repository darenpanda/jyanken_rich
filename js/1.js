

function janken(user) {
    
    // コンピュータの手の画像ファイル名を配列に保存
    let pcJankens = ['gu_rev.png', 'choki_rev.png', 'pa_rev.png'];
 
    // ユーザの手の画像ファイル名を配列に保存
    let userJankens = ['gu.png', 'choki.png', 'pa.png'];
 
    // コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);
 
    // ユーザの手の画像を表示するimgタグをDOMツリーから検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "img/" + userJankens[user];
 
    // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
    let pcImg = document.getElementById("pcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "img/" + pcJankens[pc];
 
    // ユーザから見た勝敗結果(文字列)を2次元配列に保存      
    let result = [['あいこ', '勝ち', '負け'],
                  ['負け', 'あいこ', '勝ち'],
                  ['勝ち', '負け', 'あいこ']];
 
    // 勝敗結果を
    document.getElementById("result1").textContent = result[user][pc];

    
 
}


$(function(){
    //候補を配列で設定
    var aryList = ["日本",'中国','トルコ','フランス','フィンランド','アメリカ','カナダ'];
    
    //グローバル変数
    var key = 0;
    var max_len = aryList.length - 1;
    var randStart;
    var speed = 20; //シャッフルスピード
    
    //文字シャッフル関数
    //20ミリ秒毎に候補の文字列をシャッフルさせる
    var randShuffle= function(){
        if(key > max_len) key = 0;
       
        $('.rand_name').text(aryList[key]);
        key++;
    }
    //文字シャッフル開始
    randStart = setInterval(randShuffle, speed);
    
    //回転を止める（抽選結果）
    $('.stop').click(function(){
        var random = Math.floor(Math.random() * (max_len + 1)); //ランダムで配列の数を取得
        $('.rand_name').text(aryList[random]); //対象の数値に該当する文字を表示
        
        clearInterval(randStart); //シャッフルストップ
        $(this).hide(); //止めるボタンの非表示
        $('.restart').show(); //再開ボタンの表示
    });
    
    //回転を再開する
    $('.restart').click(function(){
        $(this).hide(); //再開ボタンの非表示
        $('.stop').show(); //止めるボタンの表示
        randStart = setInterval(randShuffle, speed); //シャッフル再開
    });
    
  
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    //リクエスト用のURLを生成する
    function createURL( value ) {
      var API_KEY = '26484929-a5fdca32f98c080c73b9f78c1';
      var baseUrl = 'https://pixabay.com/api/?key=' + API_KEY;
      var keyword = '&q=' + encodeURIComponent( value );
      var option = '&orientation=horizontal&per_page=40';
      var URL = baseUrl + keyword + option;
      
      return URL;
    }
     
      
    //画像のJSONデータを画面に表示する
    function createImage( json ) {
      var result = document.getElementById('result');
    
      result.innerHTML = '';  //検索するごとに画面をリセットする
    
      //該当する画像があれば
      if( json.totalHits > 0 ) {
        json.hits.forEach( function( value ) {
          var img = document.createElement('img');
          var a = document.createElement('a');
    
          a.href = value.pageURL;  //ダウンロード用のサイトURL
          a.target = '_blank';
          img.src = value.previewURL;  //プレビュー用の画像URL
          
          a.appendChild( img );
          result.appendChild( a );
        })
      }
      else {
        alert('該当する写真がありません');
      }
    }
      
    });
  

    window.addEventListener('DOMContentLoaded', function(){

      const audioElement = document.querySelector("audio");
    
      audioElement.addEventListener('loadeddata', (e)=> {
        audioElement.muted = false;
        audioElement.autoplay = true;
      });
    });