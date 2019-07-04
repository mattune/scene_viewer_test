# AR CoreのScene Viewerを使ってブラウザAR

専用のwebコンポーネント``` <model-viewer> ```を使えば簡単！  

[DEMO](https://mattune.github.io/scene_viewer_test/#/)  

## Poly APIを使えば世界中の3Dモデルも簡単にWeb AR！
[Poly](https://poly.google.com/) にはAPIが公開されているので、GLTF2.0形式のファイルは簡単に``` <model-viewer> ```で表示できる。  
APIの使い方は[このページ](https://developers.google.com/poly/develop/web)を見ればだいたい分かる。
  
[DEMO](https://mattune.github.io/scene_viewer_test/#/poly)  
  
※GLTF形式のデータだとAR表示の時にマテリアル情報が無く真っ白な見た目になる。  
正しく表示するにはGLB形式に変換しないと仕様上難しそう。
