// Maplibre GL JSを使用してウェブ地図を作成するJavaScriptファイル

// 新しい地図オブジェクトを作成します
const map = new maplibregl.Map({
    // container: 地図を表示するHTML要素のIDを指定
    // index.htmlの<div id="map"></div>に地図が表示されます
    container: 'map',

    // style: 地図の見た目（スタイル）を決めるURL
    // 国土地理院の標準地図を利用
    style: {
      version: 8,
      sources: {
        'gsi-pale': {
          type: 'raster',
          // [カスタマイズ]
          // 以下のサイトを確認して、地図の種類を変えてみよう
          // std -> pale, english, ...
          // https://maps.gsi.go.jp/development/ichiran.html
          tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
        }
      },
      layers: [{
        id: 'gsi-pale',
        type: 'raster',
        source: 'gsi-pale',
      }]
    },

    // center: 地図の初期表示位置を経度・緯度で指定
    // [経度, 緯度] の順番で指定します（注意：緯度・経度ではありません）
    // 【カスタマイズ】日本の色々な場所を中心にしてみよう
    center: [139.6917, 35.6895], // 東京駅付近

    // zoom: 地図の初期ズームレベルを指定
    // 数値が大きいほど拡大表示されます
    // 【カスタマイズ】数字を変えてズームを調整してみよう
    zoom: 1,

    // 【カスタマイズ】 false -> true にすると？
    hash: false,
});

// 地図がクリックされたときの処理
// 'click'イベントは地図上のどこかがクリックされたときに発生します
map.on('click', function(e) {
    // e.lngLatにはクリックした位置の経度・緯度が含まれています
    const longitude = e.lngLat.lng; // 経度を取得
    const latitude = e.lngLat.lat;  // 緯度を取得

    // アラートでクリック位置を表示（小数点以下4桁まで表示）
    alert(`クリックした位置:\n経度: ${longitude.toFixed(4)}\n緯度: ${latitude.toFixed(4)}`);
});
