OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "OCR",
    "Text recognition for your images" : "画像の文字認識",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# 説明\n\ntesseract-jsを使った画像とPDFのNextcloud OCR（光学式文字認識）処理は、あなたのNextcloudにOCR機能をもたらします。\nアプリは画像（png、jpeg、tiff、bmp）とPDFを処理するために、ブラウザでtesseract-jsを使用してnextcloudのソースフォルダに出力ファイルを保存し、それを検索することもできます。\n\n## 前提条件、要件および依存関係\nOCRアプリにはいくつかの前提条件があります。\n\n- [Nextcloud 16またはそれ以降](https://nextcloud.com/)\n\n- 最新の最新ウェブブラウザ（Chrome、Edge、Firefox、Opera、Safari *）でのみサポート\n\n- Tesseractのトレーニングされたデータは、サーバー上に約200 MBのスペースを必要とします（自動的にインストールされます）。\n\n_ * Safariでは、現在[Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)に問題があります。 script-srcを 'unsafe-eval'に変更して、アプリが正しく動作するようにします。 これは非常に安全ではないため、アプリ自体は設定せず、自己責任で行うことを推奨します。（CSPについて危険性を理解した上で行ってください）。_\n\n## インストール\n[Nextcloud AppStore](http://apps.nextcloud.com)からアプリをインストールするか、githubからリリースパッケージをダウンロードし（ソースではありません）、コンテンツを** nextcloud/apps/ocr/**に配置します。\n\n## 免責事項\nソフトウェアは明示または黙示を問わず、いかなる条件でも「保証なしに」「現状のまま」で配布されます。\n\n## 検討事項\nバージョン3以前のバージョンは、作者によってもうサポート/メンテナンスされていません。 したがって、非同期バックグラウンド処理の場合は、リポジトリをフォークし、「メンテナンスされていない」ブランチを使用して改善に取り組んでください。作者はあまりにも面倒すぎるためサポートすることができませんでした。\nさらに、このプロジェクトは、tesseractのwebassemblyポートに基づいています。メンテナはこのアプリでのPDF処理の作業をやめ、PDF処理のための別のアプリの作業を始める予定です。",
    "Target file already exists:" : "目標ファイルは既に存在します。",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "よく使う言語の読込中に予期しないエラーが発生しました。言語は設定されません。",
    "An unexpected error occured during the upload of the processed file." : "処理済みファイルのアップロード中に予期しないエラーが発生しました",
    "An unexpected error occured during the deletion of the original file." : "元ファイルの削除中に予期しないエラーが発生しました",
    "An unexpected error occured during Tesseract processing." : "Tesseract処理中に予期しないエラーが発生しました。",
    "OCR processing failed:" : "OCR処理に失敗しました:",
    "MIME type not supported." : "MIMEタイプは対応していません",
    "Process" : "プロセス",
    "A large number of files may take a very long time." : "多数のファイルでは非常に長い時間がかかる場合があります。",
    "{file}/{files} Files successfully processed" : "{file}/{files} ファイルは正常に処理されました",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n個のファイルは処理中です:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["元のファイル(画像)を削除する"],
    "_%n file_::_%n files_" : ["%n 個のファイル"],
    "Afrikaans" : "アフリカーンス語",
    "Arabic" : "アラビア語",
    "Azerbaijani" : "アゼルバイジャン語",
    "Belarusian" : "ベラルーシ語",
    "Bengali" : "ベンガル語",
    "Bulgarian" : "ブルガリア語",
    "Catalan" : "カタルーニャ語",
    "Czech" : "チェコ語",
    "Chinese" : "中国語",
    "Traditional Chinese" : "繁体字中国語",
    "Cherokee" : "チェロキー語",
    "Danish" : "デンマーク語",
    "German" : "ドイツ語",
    "Greek" : "ギリシャ語",
    "English" : "英語",
    "English (Old)" : "英語（旧）",
    "Esperanto" : "エスペラント",
    "Esperanto alternative" : "代替エスペラント語",
    "Math" : "数学",
    "Estonian" : "エストニア語",
    "Basque" : "バスク語",
    "Persian (Farsi)" : "ペルシャ語（ペルシア語）",
    "Finnish" : "フィンランド語",
    "French" : "フランス語",
    "Frankish" : "フランク語",
    "French (Old)" : "フランス語(旧)",
    "Galician" : "ガリシア語",
    "Ancient Greek" : "古代ギリシャ語",
    "Hebrew" : "ヘブライ語",
    "Hindi" : "ヒンディー語",
    "Croatian" : "クロアチア語",
    "Hungarian" : "ハンガリー語",
    "Indonesian" : "インドネシア語",
    "Icelandic" : "アイスランド語",
    "Italian" : "イタリア語",
    "Italian (Old)" : "イタリア語(旧)",
    "Japanese" : "日本語",
    "Kannada" : "カンナダ語",
    "Korean" : "韓国語",
    "Latvian" : "ラトビア語",
    "Lithuanian" : "リトアニア語",
    "Malayalam" : "マラヤーラム語",
    "Macedonian" : "マケドニア語",
    "Maltese" : "マルタ語",
    "Malay" : "マレー語",
    "Dutch" : "オランダ語",
    "Norwegian" : "ノルウェー語",
    "Polish" : "ポーランド語",
    "Portuguese" : "ポルトガル語",
    "Romanian" : "ルーマニア語",
    "Russian" : "ロシア語",
    "Slovakian" : "スロバキア語",
    "Slovenian" : "スロベニア語",
    "Spanish" : "スペイン語",
    "Old Spanish" : "古スペイン語",
    "Albanian" : "アルバニア語",
    "Serbian (Latin)" : "セルビア語（ラテン語）",
    "Swahili" : "スワヒリ語",
    "Swedish" : "スウェーデン語",
    "Tamil" : "タミル語",
    "Telugu" : "テルグ語",
    "Tagalog" : "タガログ語",
    "Thai" : "タイ語",
    "Turkish" : "トルコ語",
    "Ukrainian" : "ウクライナ語",
    "Vietnamese" : "ベトナム語",
    "Press enter to select" : "Enterキーを押して選択",
    "Press enter to remove" : "Enterキーを押して削除",
    "Selected" : "選択済",
    "No matches found" : "一致するものが見つかりません。",
    "Select language" : "言語を選択する",
    "Save" : "保存",
    "An unexpected error occured during save of your favorite languages. Please try again." : "よく使う言語の保存中に予期しないエラーが発生しました。もう一度保存してください。",
    "An unexpected error occured during load of your favorite languages. Please try again." : "よく使う言語の読込中に予期しないエラーが発生しました。もう一度読込してください。",
    "An error occured during save of your favorite languages. Please check your input." : "よく使う言語の保存中にエラーが発生っしました。入力の内容をもう一度確認してください。",
    "Selected languages will be preselected by default in the OCR dialog." : "選択した言語は、OCRダイアログでデフォルトで事前に選択されます。",
    "Favorite languages" : "お気に入りの言語"
},
"nplurals=1; plural=0;");
