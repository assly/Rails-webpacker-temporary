# Rails webpacker temporary

## About

今後自由に拡張できるお試し用途として作成。
テストに関してはもう少し追加が必要かも？

## Specific

- Rails
- React
- yarn
- Jest
- webpack

## References

- [RailsのVue.jsをWebackerとJestでテストする](https://techracho.bpsinc.jp/hachi8833/2018_03_26/53865)
- [Rails & Webackerでフロントエンド開発環境を整える](https://qiita.com/hiyamamoto/items/e0a30b4799314174b80f)
- [Testing React Apps](https://facebook.github.io/jest/docs/ja/tutorial-react.html)
  - Seen only
- [Vue.jsとRailsの最適な融合を考える](https://tech.medpeer.co.jp/entry/2018/02/26/080000)
  - axiosのpostを使うために参照
- [How to get csrf token in server rendered dom](https://github.com/reactjs/react-rails/issues/207)
  - CSRF対策
- [Forms - React](https://reactjs.org/docs/forms.html#controlled-components)
- [Ajaxを劇的に簡単にするReact.js](http://blog.masuidrive.jp/2015/03/03/react/)
  - Formを作るのに大変参考にした
- [よく忘れるRailsのコントローラーでのrenderメソッドのレシピ集](http://ruby-rails.hatenadiary.com/entry/20141125/1416918957#render-ctrl-only-status-code)
  - `todos#create todos#update todo#destory`のアクションのレスポンスとして
- [Rails5でassetsをRailsに配信させる](https://qiita.com/littlekbt/items/2cce848313b1f082e224)
  - production環境でのassets読み込みがうまくいかなかったため

## Run

### Application

```
$ rails s
```

### Webpack's Complation

```
$ bin/webpacker
```

### JavaScript's test

```
yarn test
```
