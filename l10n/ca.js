OC.L10N.register(
    "ocr",
    {
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Àrab",
    "Azerbaijani" : "Azerí",
    "Belarusian" : "Bielorús",
    "Bengali" : "Bengalí",
    "Bulgarian" : "Búlgar",
    "Catalan" : "Català",
    "Czech" : "Txec",
    "Chinese" : "Xinès",
    "Traditional Chinese" : "Xinès tradicional",
    "Cherokee" : "Cherokee",
    "Danish" : "Danès",
    "German" : "Alemany",
    "Greek" : "Grec",
    "English" : "Anglès",
    "English (Old)" : "Anglès (Antic)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternatiu",
    "Math" : "Math",
    "Estonian" : "Estonià",
    "Basque" : "Basc",
    "Persian (Farsi)" : "Persa (Farsi)",
    "Finnish" : "Finès",
    "French" : "Francès",
    "Frankish" : "Francès (Frankish)",
    "French (Old)" : "Francès (Antic)",
    "Galician" : "Gallec",
    "Ancient Greek" : "Grec Antic",
    "Hebrew" : "Hebreu",
    "Hindi" : "Hindi",
    "Croatian" : "Croata",
    "Hungarian" : "Hongarès",
    "Indonesian" : "Indonesi",
    "Icelandic" : "Islandès",
    "Italian" : "Italià",
    "Italian (Old)" : "Italià (Antic)",
    "Japanese" : "Japonès",
    "Kannada" : "Kannada",
    "Korean" : "Coreà",
    "Latvian" : "Letó",
    "Lithuanian" : "Lituà",
    "Malayalam" : "Malayalam",
    "Macedonian" : "Macedoni",
    "Maltese" : "Maltès",
    "Malay" : "Malai",
    "Dutch" : "Holandès",
    "Norwegian" : "Noruec",
    "Polish" : "Polonès",
    "Portuguese" : "Portuguès",
    "Romanian" : "Romanès",
    "Russian" : "Rus",
    "Slovakian" : "Eslovac",
    "Slovenian" : "Eslovè",
    "Spanish" : "Espanyol",
    "Old Spanish" : "Espanyol Antic",
    "Albanian" : "Albanès",
    "Serbian (Latin)" : "Serbi Llatí",
    "Swahili" : "Suahili",
    "Swedish" : "Suec",
    "Tamil" : "Tamil",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalog",
    "Thai" : "Tailandès",
    "Turkish" : "Turc",
    "Ukrainian" : "Ucraïnès",
    "Vietnamese" : "Vietnamita",
    "OCR" : "OCR",
    "Target file already exists:" : "El fitxer de destinació ja existeix:",
    "An unexpected error occured during the upload of the processed file." : "H hagut un error inesperat mentre es processava la pujada del fitxer.",
    "An unexpected error occured during the deletion of the original file." : "Hi ha hagut un error inesperat mentre es suprimia el fitxer original.",
    "An unexpected error occured during Tesseract processing." : "Hi ha hagut un error inesperat durant el processament del Tesseract.",
    "PDF does not contain any Pages to process." : "PDF no conté cap Plana per processar.",
    "An unexpected error occured during pdf processing." : "Hi ha hagut un error inesperat durant el processament del PDF.",
    "OCR processing failed:" : "S'ha produït un error mentre es processava l'OCR:",
    "No file selected." : "No s'ha seleccionat cap fitxer.",
    "MIME type not supported." : "El tipus MIME no està suportat.",
    "Press to select" : "Premeu per seleccionar",
    "No matches found" : "No s'han trobat coincidències",
    "Select language" : "Selecciona l'idioma",
    "Process" : "Processa",
    "PDF files and a large number of files may take a very long time." : "Fitxers PDF i una quantitat gran de fitxers podria trigar una bona estona.",
    "{file}/{files} Files successfully processed" : "S'han processat correctament {file}/{files} fitxers",
    "_%n file is being processed:_::_%n files are being processed:_" : ["S'estan processant %n fitxers:","S'estan processant %n fitxers:"],
    "_Replace (PDF) or delete (image) original file_::_Replace (PDF) or delete (images) original files_" : ["Substitueix (PDF) o suprimeix (imatges) fitxer original","Substitueix (PDF) o suprimeix (imatges) fitxers originals"],
    "_%n file_::_%n files_" : ["fitxer %n","%n fitxers "],
    "Optical character recognition" : "Reconeixement òptic de caràcters",
    "Text recognition for your images and pdf files" : "Reconeixement de text per a les vostres imatges i fitxers pdf",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff) and PDFs and saves the output file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 15 or 16](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Consideration\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort." : "# Descripció\n\nL'OCR porta a Nextcloud el processament d'imatges i PDFs amb la llibreria tesseract-js, permetent el Reconeixement Òptic de Caràcters.\nAquesta aplicació empra tesseract-js (javascript) al navegador per tal de processar imatges (png, jpeg i tiff) i PDFs i desar el resultat a un fitxer a la mateixa carpeta del Nextcloud. Això permet després poder fer cerques de text a carpetes que contenen imatges o PDFs amb text.\n\n## Prerequisits i dependències\nL'aplicació OCR té els següents requisits per poder funcionar:\n\n - [Nextcloud 15 o 16](https://nextcloud.com/)\n - Darreres versions de navegadors web moderns (Firefox, Chrome, Edge, Opera, Safari)\n_* A Safari actualment hi ha un problema amb la [Política de seguretat de continguts](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), que requereix que un usuari Administrador estableixi el valor de la variable  'script-src' a 'unsafe-eval' per tal de que l'aplicació pugui funcionar correctament. Com és una configuració amb un cert risc per a la seguretat, l'aplicació no pot establir aquest valor per si mateixa i ho heu de fer pel vostre compte i risc (si us plau, assegureu-vos de saber què és el CSP i les conseqüències del unsafe-eval)._\n\n## Instal·lació\nInstal·leu l'aplicació des de la [AppStore a Nextcloud](http://apps.nextcloud.com) o baixeu la darrera versió des instal·lable de github (**NO** els fitxers de codi font) i poseu el contingut al directori **/apps/ocr/** de la vostra instal·lació de Nextcloud al servidor.\n\n## Exempció de responabilitat\nAquest software es distribueix sota la base \"TAL QUAL ÉS\", és a dir, SENSE CAP GARANTIA O CONDICIÓ DE CAP MENA, expressa o implícita.\n\n## Altres considreacions\nJa no es dona manteniment ni són compatibles la versió 3 o anteriors. Així que per a processament en segon pla asíncron heu de fer un fork del repositori i emprar la branca \"not-maintained\" si voleu treballar en millores. L'autor de l'aplicació ja not pot fer-ho per la quantitat d'esforç requerit."
},
"nplurals=2; plural=(n != 1);");
