'use strict';
//robotという引数を持つ無名関数をモジュールとしている。 
module.exports = (robot) => {
    //HubotのAPIの利用方法はここ
    ///hello>/iは正規表現。マッチしたら次に渡す無名関数を実行するという形式
    //msgオブジェクトからユーザーの名前を受け取り、「hello,ユーザー名」と発言する
    robot.hear(/hello>/i, (msg) => {
const username = msg.message.user.name;
msg.send('hello, ' + username);
});
};
