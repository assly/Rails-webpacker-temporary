# Todo-mock

## About

TodoList アプリのモックアップです。

## Requirement

- sqlite3
- node (9.x)
- yarn

## Specific

- Rails
- React
- yarn
- Jest
- webpack

## Run

## Setup

```
# set database's schema
$ bin/rails db:migrate

# sample data initialize to DB(not required)
$ bin/rails db:seed
```

### Application(production)

```
# assets initialization
$ bin/webpack

# server (on localhost:3000)
$ bin/rails s
```

### Rails' test

```
$ bin/rails t
```

### JavaScript's test(now empty)

```
yarn test
```

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
- [App cannot serve pack files in production](https://github.com/rails/webpacker/issues/1249)
  - production環境でのassets読み込みがうまくいかなかったため
- [React js onClick can't pass value to method](https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method)
  - `handleDestory`の受け渡しに
- [bind(this)とは](https://ja.stackoverflow.com/questions/8482/bindthisとは)
- [Function.prototype.bind()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  - `bind`の真理
- [React removing an element when onClick](https://stackoverflow.com/questions/44988996/react-removing-an-element-when-onclick)
- [Array.prototype.splice()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - `state.todos`から要素の削除を行う
- [teamcapybara/Capybara - github](https://github.com/teamcapybara/capybara)
- [Testing That Elements Do Not Exist With Capybara](https://adamdelong.com/testing-elements-not-exist-capybara/)
  - `integration_test`の作成に参考
- [incompatible with armv7l](https://github.com/Shopify/bootsnap/issues/67)
- [【Ruby on Rails】環境変数エラー](https://blog.naichilab.com/entry/2015/12/05/232651)
- [Webpack + Babel: Couldn't find preset “es2015” relative to directory](https://stackoverflow.com/questions/40188578/webpack-babel-couldnt-find-preset-es2015-relative-to-directory)
  - raspberry piでproduction運用のための設定
