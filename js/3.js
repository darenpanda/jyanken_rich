<script type="text/javascript">
// グローバル変数宣言
var janken_cnt = 0;
var janken_id = null ;
var janken_cpunum 

//====== 1秒間インターバルタイマー起動ルーチン ======
function StartJankenGame() {

    if (janken_id == null){  // まだタイマー起動していない時のみ有効
        document.getElementById("janken_message1").innerHTML = "チノちゃんの手: なにかな？";
        document.getElementById("janken_message2").innerHTML = "結果: どうなるかな？";

        // ボタンとセレクトボックスの操作を禁止
        document.getElementById("janken_button").disabled = "disabled"
        document.getElementById("janken_select").disabled = "disabled"

        // 1秒間インターバルタイマーをセット
        janken_id = setInterval(function(){myJankenGame();}, 1000);

        janken_cnt = 0; // ジャンケン処理工程カウンタをリセット
    }
}


//====== ジャンケン処理ルーチン ======
// (インターバルタイマーによって1秒毎に呼ばれる）
function myJankenGame() {
    var cpuhand;
    var judge_txt;
    var judge_img;
    var janken_img = new Array();
    var cpu_img = new Array();

    // ジャンケン中の画像設定
    janken_img[0] = "/img/IMG_5188.jpg";
    janken_img[1] = "/img/IMG_5188.jpg";
    janken_img[2] = "/img/omikuji.jpg";
    janken_img[3] = "/img/trip.jpg";
    janken_img[4] = "/img/IMG_5188.jpg";
    janken_img[5] = "/img/trip.jpg";

    // チノちゃんの出し手の画像設定
    cpu_img[0] = "/img/pa.png;
    cpu_img[1] = "/img/pa.png";
    cpu_img[2] = "/img/pa.png";

    // 判定結果ごとのチノちゃんの画像設定
    var win_img = "/img/IMG_5188.jpg";
    var draw_img = "/img/IMG_5188.jpg";
    var lose_img = "/img/IMG_5188.jpg";

    // セレクトボックスからユーザーの出し手を取得
    var myte = document.getElementById("janken_select").selectedIndex;

    if (janken_cnt < 6){ // ジャンケンぽんまでの画像表示処理
        document.getElementById("janken_gazo").src = janken_img[janken_cnt];
    }
    else if (janken_cnt == 6){ // チノちゃんの出し手設定処理
        janken_cpunum = Math.floor(Math.random() * 3); // 0～2の乱数を作る
        // 乱数値に応じてチノちゃんの出し手を割り当てる
        if(janken_cpunum == 0) {
            cpuhand = "ぐー";
        } else if(janken_cpunum == 1) {
            cpuhand = "ちょき";
        } else {
            cpuhand = "ぱー";
        }
        // 出し手に応じてテキストと表示画像を設定
        document.getElementById("janken_gazo").src = cpu_img[janken_cpunum ];
        document.getElementById("janken_message1").innerHTML = "チノちゃんの手: " + cpuhand;
    }
    else if (janken_cnt > 7){ // じゃんけん勝負結果判定処理
        if ((myte == 0 && janken_cpunum == 1) || (myte == 1 && janken_cpunum == 2) || (myte == 2 && janken_cpunum == 0)){
            judge_txt = "あなたの勝ち";
            judge_img = win_img ;
        } else if(myte == janken_cpunum) {
            judge_txt = "ひきわけ";
            judge_img = draw_img ;
        } else {
            judge_txt = "あなたの負け";
            judge_img = lose_img ;
        }
        // 判定結果に応じてテキストと表示画像を設定
        document.getElementById("janken_message2").innerHTML = "結果: " + judge_txt;
        document.getElementById("janken_gazo").src = judge_img ;

        clearInterval(janken_id);   // インターバルタイマーをリセット
        janken_id = null;           // タイマーID値をクリア
 
       // ボタンとセレクトボックスの操作を有効にする
        document.getElementById("janken_button").disabled = "";
        document.getElementById("janken_button").style.background = 'ButtonFace';
        document.getElementById("janken_select").disabled = "";
    }
    janken_cnt++; // ジャンケン処理工程を進める
}
</script>