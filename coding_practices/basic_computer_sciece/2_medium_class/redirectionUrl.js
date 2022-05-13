function redirectionUrl(language){
    // 関数を完成させてください
    baseURL = 'www.example.org/'
switch(language){
    case('English'):
        lg = 'en'
        break        
    case('Japanese'):
        lg = 'ja'
        break    
    case('Spanish'):
        lg = 'es'
        break    
    case('Russian'):
        lg = 'ru'
        break
    default:
        lg = ''
        break
  }
  message = baseURL + lg
  return message
}

// Alberto は多言語対応のウェブサイト制作のチームに所属しています。アクセスするユーザーの使用言語によって、サイトの表示を変更する仕組みを実装するようにマネージャーに指示されました。文字列 Japanese, English, Spanish, Russian が与えられるので、文字列によって www.example.org のサブディレクトリにリダイレクトする、redirectionUrl という関数を作成してください。例えば、この関数では Japanese が選択された時、www.example.org/ja を返します。もし、上記以外の文字列が入力された時、www.example.org/ を返します。

// 関数の入出力例

// 入力のデータ型： string language

// 出力のデータ型： string

// redirectionUrl("English") --> www.example.org/en

// redirectionUrl("Japanese") --> www.example.org/ja

// redirectionUrl("Spanish") --> www.example.org/es

// redirectionUrl("Russian") --> www.example.org/ru

// redirectionUrl("German") --> www.example.org/