OC.L10N.register(
    "ocr",
    {
    "OCR" : "Prepoznavanje znakov OCR",
    "Optical character recognition" : "Optično prepoznavanje znakov",
    "Text recognition for your images" : "Optično branje besedila v slikovnih datotekah",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Opis\n\nNextcloud OCR (orodje za optično prepoznavo znakov) za slikovne datoteke razširja uporabnost okolja Nextcloud.\nProgram za obdelavo slik (zapisi png, jpeg, tiff in bmp) uporablja orodje tesseract-js, ki se zažene v brskalniku in podpira izvoz v datoteko PDF neposredno v okolje oblaka.\n\n## Predpogoji, zahteve in odvisnosti\nProgram Nextcloud OCR zahteva:\n\n- [Različico Nextcloud 16 ali višjo](https://nextcloud.com/)\n\n- Novejšo različico spletnega brskalnika (Chrome, Edge, Firefox, Opera, Safari*).\n\n- Program Tesseract traineddata zahteva približno 200 MB prostora na strežniku (nameščen je samodejno).\n\n\n_* Pri brskalniku Safari je trenutno težava z vzpostavljanjem [Varnostnih določil](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), zaradi katere je treba skrbniško določiti »script-src« na »unsafe-eval«, da program sploh deluje. Ker je ta nastavitev lahko problematična, se ne nastavi samodejno. Pri uporabi je priporočena previdnost (poznati je treba ozadje CSP in razloge za napako unsafe-eval)._\n\n## Namestitev\nProgram je mogoče namestiti neposredno iz [Trgovine Nextcloud](https://apps.nextcloud.com/apps/ocr) oziroma ročno prek GitHub (**Ne** v izvorni kodi) s kopiranjem vsebine v mapo **nextcloud/apps/ocr/**.\n\n## Izjava o omejitvi odgovornosti\nProgramska oprema je objavljena »KOT JE« in brez vsakršne  GARANCIJE oziroma posebnih pogojev.\n\n## Opomba\nAvtor različic 3 in starejših ne posodablja več niti jih ne vzdržuje, zato za neusklajeno uporabo ustvarite ločeno skladišče in uporabite vejo »not-maintained«.\nProjekt temelji tudi na prenosu programa tesseract v webassembly. Prav tako ni več podprta trenutne obdelava PDF, saj se začenja priprava ločenega programa za te naloge.",
    "Target file already exists:" : "Ciljna datoteka že obstaja:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Med brisanjem nalaganjem priljubljenega jezika je prišlo do nepričakovane napake. Jezik ne bo nastavljen.",
    "An unexpected error occured during the upload of the processed file." : "Med pošiljanjem obdelovane datoteke je prišlo do nepričakovane napake.",
    "An unexpected error occured during the deletion of the original file." : "Med brisanjem izvorne datoteke je prišlo do nepričakovane napake.",
    "An unexpected error occured during Tesseract processing." : "Med obdelovanjem Tesseract je prišlo do nepričakovane napake.",
    "OCR processing failed:" : "Optična obdelava je spodletela:",
    "MIME type not supported." : "Vrsta MIME ni podprta.",
    "Process" : "Opravilo",
    "A large number of files may take a very long time." : "Veliko število datotek lahko povzroči dolgotrajno izvajanje opravila.",
    "{file}/{files} Files successfully processed" : "{file}/{files} datotek je uspešno obdelanih",
    "_%n file is being processed:_::_%n files are being processed:_" : ["V obdelavi je %n datoteka:","V obdelavi sta %n datoteki:","V obdelavi so%n datoteke:","V obdelavi je %n datotek:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Izbriši izvorno datoteko (sliko)","Izbriši izvorni datoteki (sliki)","Izbriši izvorne datoteke (slike)","Izbriši izvorne datoteke (slike)"],
    "_%n file_::_%n files_" : ["%n datoteka","%n datoteki","%n datoteke","%n datotek"],
    "Afrikaans" : "Afrikanščina",
    "Arabic" : "Arabščina",
    "Azerbaijani" : "Azerbajdžanščina",
    "Belarusian" : "Beloruščina",
    "Bengali" : "Bengalščina",
    "Bulgarian" : "Bolgarščina",
    "Catalan" : "Katalonščina",
    "Czech" : "Češčina",
    "Chinese" : "Kitajščina",
    "Traditional Chinese" : "Tradicionalna kitajščina",
    "Cherokee" : "Čerokeščina",
    "Danish" : "Danščina",
    "German" : "Nemščina",
    "Greek" : "Grščina",
    "English" : "Angleščina",
    "English (Old)" : "Angleščina (stara)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto (alternativni)",
    "Math" : "Matematika",
    "Estonian" : "Estonščina",
    "Basque" : "Baskovščina",
    "Persian (Farsi)" : "Perzijščina (farsi)",
    "Finnish" : "Finščina",
    "French" : "Francoščina",
    "Frankish" : "Starofrankonščina",
    "French (Old)" : "Francoščina (stara)",
    "Galician" : "Galicijščina",
    "Ancient Greek" : "Starogrščina",
    "Hebrew" : "Hebrejščina",
    "Hindi" : "Hindujščina",
    "Croatian" : "Hrvaščina",
    "Hungarian" : "Madžarščina",
    "Indonesian" : "Indonezijščina",
    "Icelandic" : "Islandščina",
    "Italian" : "Italijanščina",
    "Italian (Old)" : "Italijanščina (stara)",
    "Japanese" : "Japonščina",
    "Kannada" : "Kanada",
    "Korean" : "Korejščina",
    "Latvian" : "Latvijščina",
    "Lithuanian" : "Litvanščina",
    "Malayalam" : "Malajlamščina",
    "Macedonian" : "Makedonščina",
    "Maltese" : "Malteščina",
    "Malay" : "Malajščina",
    "Dutch" : "Nizozemščina",
    "Norwegian" : "Norveščina",
    "Polish" : "Poljščina",
    "Portuguese" : "Portugalščina",
    "Romanian" : "Romunščina",
    "Russian" : "Ruščina",
    "Slovakian" : "Slovaščina",
    "Slovenian" : "Slovenščina",
    "Spanish" : "Spanščina",
    "Old Spanish" : "Stara spanščina",
    "Albanian" : "Albanščina",
    "Serbian (Latin)" : "Srbščina (latinica)",
    "Swahili" : "Svahili",
    "Swedish" : "Švedščina",
    "Tamil" : "Tamilšlina",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalog",
    "Thai" : "Tajščina",
    "Turkish" : "Turščina",
    "Ukrainian" : "Ukrajinščina",
    "Vietnamese" : "Vietnamščina",
    "Press enter to select" : "Pritisnite vnosno tipko za izbor",
    "Press enter to remove" : "Pritisnite vnosno tipko za odstranjevanje",
    "Selected" : "Izbrano",
    "No matches found" : "Ni najdenih zadetkov",
    "Select language" : "Izbor jezika",
    "Save" : "Shrani",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Med shranjevanjem priljubljenih jezikov je prišlo do neznane napake. Poskusite znova.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Med nalaganjem priljubljenih jezikov je prišlo do neznane napake. Poskusite znova.",
    "An error occured during save of your favorite languages. Please check your input." : "Med shranjevanjem priljubljenih jezikov je prišlo do napake. Poskusite znova.",
    "Selected languages will be preselected by default in the OCR dialog." : "Izbrani jeziki bodo privzeto določeni za prikaz v pogovornem oknu optičnega bralnika OCR.",
    "Favorite languages" : "Priljubljen jeziki"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
