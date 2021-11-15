OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "Optické rozpoznávání znaků",
    "Text recognition for your images" : "Rozpoznávání textu v obrázcích",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Popis\n\nNextcloud OCR (optické rozpoznávání znaků), zpracovávání obrázků pomocí součásti tesseract-js, přidává do Nextcloud funkci OCR.\nTato aplikace používá součást tesseract-js v prohlížeči pro zpracovávání obrázků (png, jpeg, tiff, bmp) a ukládá výstup do PDF souboru ve zdrojové složce v Nextcloud. To například umožňuje hledání podle textu v obrázku.\n\n## Předpoklady, požadavky a závislosti\nAplikace OCR má několik požadavků:\n\n - [Nextcloud 16 a novější](https://nextcloud.com/)\n\n- Tesseract pro svou databázi rozpoznávaných znaků vyžaduje přibližně 200 MB prostoru na serveru (bude nainstalováno automaticky).\n\n - Podporovány jsou pouze nejnovější verze moderních webových prohlížečů (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* Se Safari je v tuto chvíli problém s [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), které vyžaduje, aby správce nastavil volbu 'script-src' na 'unsafe-eval', aby funkce pracovala správně. Kvůli tomu, že to není bezpečné, aplikace samotná to nenastavuje a doporučuje vám to rozhodnou na vaše nebezpečí (ujistěte se, že víte co CSP vlastně je a co např. unsafe-eval způsobuje)._\n\n## Instalace\nNainstalujte aplikaci z [Nextcloud katalogu aplikací](https://apps.nextcloud.com/apps/ocr) nebo si stáhněte balíček s vydáním z portálu github (**NE** zdrojové kódy samotné) a jeho obsah umístěte do **nextcloud/apps/ocr/**.\n\n## Zřeknutí se zodpovědnosti\nTento software je šířen TAK „JAK JE“, BEZ JAKÝCHKOLI ZÁRUK NEBO PODMÍNEK\nJAKÉHOKOLI DRUHU, ať už vyjádřených nebo samo sebou se rozumících.\n\n## Poznámka\nVerze 3 a starší už nejsou autorem podporovány/udržovány. Takže pro asynchronní zpracovávání na pozadí si případně vytvořte fork a použijte pro vylepšování větev „not-maintained“. Autor neměl kapacity tuto variantu podporovat, protože bylo příliš časově náročné.\nDále, tento projekt je založený na portu tesseract do webassembly. Správce projektu zastavil práce na funkci pro zpracovávání formátu PDF s tím, že vytvoří zvlášť aplikaci pro nakládání s tímto formátem. ",
    "Target file already exists:" : "Cílový soubor už existuje:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Došlo k neočekávané chybě při načítání vašich oblíbených jazyků. Namísto toho nebude nastaven žádný jazyk.",
    "An unexpected error occured during the upload of the processed file." : "Při nahrávání zpracovaného souboru došlo k neočekávané chybě.",
    "An unexpected error occured during the deletion of the original file." : "Při mazání původního souboru došlo k neočekávané chybě.",
    "An unexpected error occured during Tesseract processing." : "Při zpracovávání v Tesseract došlo k neočekávané chybě.",
    "OCR processing failed:" : "Rozpoznání textu z obrázku se nezdařilo:",
    "MIME type not supported." : "MIME typ není podporován.",
    "Process" : "Zpracovat",
    "A large number of files may take a very long time." : "Velké množství souborů může zabrat velmi dlouho.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Souborů úspěšně zpracováno",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n soubor je zpracováván:","%n soubory jsou zpracovávány:","%n souborů je zpracováváno:","%n soubory jsou zpracovávány:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Smazat původní soubor (obrázek)","Smazat původní soubory (obrázky)","Smazat původní soubory (obrázky)","Smazat původní soubory (obrázky)"],
    "_%n file_::_%n files_" : ["%n soubor","%n soubory","%n souborů","%n soubory"],
    "Afrikaans" : "afrikánština",
    "Arabic" : "arabština",
    "Azerbaijani" : "ázerbájdžánština",
    "Belarusian" : "běloruština",
    "Bengali" : "bengálština",
    "Bulgarian" : "bulharština",
    "Catalan" : "katalánština",
    "Czech" : "čeština",
    "Chinese" : "čínština",
    "Traditional Chinese" : "tradiční čínština",
    "Cherokee" : "čerokézština",
    "Danish" : "dánština",
    "German" : "němčina",
    "Greek" : "řečtina",
    "English" : "angličtina",
    "English (Old)" : "angličtina (stará)",
    "Esperanto" : "esperanto",
    "Esperanto alternative" : "esperanto (alternativní)",
    "Math" : "Matematika",
    "Estonian" : "estonština",
    "Basque" : "baskičtina",
    "Persian (Farsi)" : "perština (fârsi)",
    "Finnish" : "finština",
    "French" : "francouzština",
    "Frankish" : "franština",
    "French (Old)" : "francouzština (stará)",
    "Galician" : "galicijština",
    "Ancient Greek" : "starověká řečtina",
    "Hebrew" : "hebrejština",
    "Hindi" : "hindština",
    "Croatian" : "chorvatština",
    "Hungarian" : "maďarština",
    "Indonesian" : "indonéština",
    "Icelandic" : "islandština",
    "Italian" : "italština",
    "Italian (Old)" : "italština (stará)",
    "Japanese" : "japonština",
    "Kannada" : "kannadština",
    "Korean" : "korejština",
    "Latvian" : "lotyština",
    "Lithuanian" : "litevština",
    "Malayalam" : "malajálamština",
    "Macedonian" : "makedonština",
    "Maltese" : "maltština",
    "Malay" : "malajština",
    "Dutch" : "holandština",
    "Norwegian" : "norština",
    "Polish" : "polština",
    "Portuguese" : "portugalština",
    "Romanian" : "rumunština",
    "Russian" : "ruština",
    "Slovakian" : "slovenština",
    "Slovenian" : "slovinština",
    "Spanish" : "španělština",
    "Old Spanish" : "stará španělština",
    "Albanian" : "albánština",
    "Serbian (Latin)" : "srbština (latinka)",
    "Swahili" : "svahilština",
    "Swedish" : "švédština",
    "Tamil" : "tamilština",
    "Telugu" : "telugština",
    "Tagalog" : "tagalština",
    "Thai" : "thajština",
    "Turkish" : "turečtina",
    "Ukrainian" : "ukrajinština",
    "Vietnamese" : "vietnamština",
    "Press enter to select" : "Vyberte stisknutím klávesy Enter",
    "Press enter to remove" : "Odstraníte stisknutím klávesy Enter",
    "Selected" : "Vybraný",
    "No matches found" : "Nenalezeny žádné shody",
    "Select language" : "Vyberte jazyk",
    "Save" : "Uložit",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Při ukládání vašeho oblíbeného jazyka došlo k chybě. Zkuste to znovu.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Došlo k chybě při načítání vašich oblíbených jazyků. Zkuste to znovu.",
    "An error occured during save of your favorite languages. Please check your input." : "Došlo k chybě při ukládání vašich oblíbených jazyků. Zkontrolujte své zadání.",
    "Selected languages will be preselected by default in the OCR dialog." : "Vyberte jazyky, které budou předvybrány v OCR dialogu.",
    "Favorite languages" : "Často používané jazyky"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
