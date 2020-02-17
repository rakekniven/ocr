OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "Recoñecemento óptico de caracteres",
    "Text recognition for your images and pdf files" : "Recoñecemento de texto para as súas imaxes e ficheiros pdf",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Descrición\n\nO procesamento de OCR (recoñecemento óptico de caracteres) do Nextcloud para imaxes con tesseract-js trae a funcionalidade do OCR ao seu Nextcloud.\nA aplicación emprega jseract-js no navegador para procesar imaxes (png, jpeg, tiff) e garda o ficheiro PDF de saída no cartafol de orixe no Nextcloud. Isto, por exemplo, permítelle buscar nel.\n\n## Requisitos previos, requisitos e dependencias\nA aplicación OCR ten algúns requisitos previos:\n\n- [Nextcloud 16 e superior] (https://nextcloud.com/)\n\n- Só é compatíbel coas últimas versións dos navegadores web modernos (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Os datos preparados por Tesseract necesitan aproximadamente 200 MB de espazo no servidor (instalarase automaticamente).\n\n\n_*No Safari hai actualmente un problema con [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) que require que un administrador configure «script-src» como »unsafe-eval» para que a aplicación funcione correctamente. Dado que isto é bastante inseguro, a aplicación non o fai por si mesmo e recomenda decidilo baixo a súa propia responsabilidade (asegúrese de ter claro qué é CSP e cales son, p. ex. os riscos non seguros)._\n\n## Instalación\nInstale a aplicación dende a [Tenda de aplicacións do Nextcloud](https://apps.nextcloud.com/apps/ocr) ou descargue o paquete de publicación do Github (**NON** as fontes) e coloque o contido en **nextcloud/apps/ ocr/**\n\n## Descargo de responsabilidade\nO software distribúese «TAL COMO É», SEN GARANTÍAS OU\nCONDICIÓNS DE NINGÚN TIPO, xa sexan expresas ou implícitas. \n\n## Nota\nA versión 3 e as versións anteriores xa non son asistidas0/mantidas polo autor. Por iso, para o procesamento asíncrono de fondo, bifurque o repositorio e use a rama «sen mantemento» para traballar en melloras. O autor non foi quen de asistilo polo moito esforzo requirido.\nAdemais este proxecto está baseado nun porto de montaxe web de tesseract. O mantedor deixou de traballar no procesamento de PDF nesta aplicación e comezará a traballar nunha aplicación separada para o manexo de PDF.",
    "Target file already exists:" : "O ficheiro destino xa existe:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Produciuse un erro inesperado durante a carga do seu idioma preferido. No seu lugar non se establecerá ningún idioma.",
    "An unexpected error occured during the upload of the processed file." : "Produciuse un erro inesperado durante a carga do ficheiro procesado.",
    "An unexpected error occured during the deletion of the original file." : "Produciuse un erro inesperado durante a eliminación do ficheiro orixinal.",
    "An unexpected error occured during Tesseract processing." : "Produciuse un erro durante o procesado co Tesseract.",
    "OCR processing failed:" : "Produciuse un fallo no procesamento OCR:",
    "MIME type not supported." : "Tipo MIME non admitido.",
    "Process" : "Proceso",
    "A large number of files may take a very long time." : "Un gran número de ficheiros poden levar moito tempo.",
    "{file}/{files} Files successfully processed" : "{file}/{files} ficheiros procesados satisfactoriamente",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n ficheiro está a ser procesado:","%n ficheiros están a ser procesados:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Eliminar o ficheiro orixinal (imaxe)","Eliminar os ficheiros orixinais (imaxes)"],
    "_%n file_::_%n files_" : ["%n ficheiro","%n ficheiros"],
    "Afrikaans" : "Africáner",
    "Arabic" : "Árabe",
    "Azerbaijani" : "Azerí",
    "Belarusian" : "Bieloruso",
    "Bengali" : "Bengalí",
    "Bulgarian" : "Búlgaro",
    "Catalan" : "Catalán",
    "Czech" : "Checo",
    "Chinese" : "Chinés",
    "Traditional Chinese" : "Chinés tradicional",
    "Cherokee" : "Cherokee",
    "Danish" : "Danés",
    "German" : "Alemán",
    "Greek" : "Grego",
    "English" : "Inglés",
    "English (Old)" : "Inglés (antigo)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternativo",
    "Math" : "Matematicas",
    "Estonian" : "Estonio",
    "Basque" : "Éuscaro",
    "Persian (Farsi)" : "Persa (Farsi)",
    "Finnish" : "Finés",
    "French" : "Francés",
    "Frankish" : "Franco",
    "French (Old)" : "Francés (antigo)",
    "Galician" : "Galego",
    "Ancient Greek" : "Grego antigo",
    "Hebrew" : "Hebreo",
    "Hindi" : "Hindi",
    "Croatian" : "Croata",
    "Hungarian" : "Húngaro",
    "Indonesian" : "Indonesio",
    "Icelandic" : "Islandés",
    "Italian" : "Italiano",
    "Italian (Old)" : "Italiano (antigo)",
    "Japanese" : "Xaponés",
    "Kannada" : "Canarés",
    "Korean" : "Coreano",
    "Latvian" : "Letón",
    "Lithuanian" : "Lituano",
    "Malayalam" : "Malayalam",
    "Macedonian" : "Macedonio",
    "Maltese" : "Maltés",
    "Malay" : "Malaio",
    "Dutch" : "Holandés",
    "Norwegian" : "Noruegués",
    "Polish" : "Polaco",
    "Portuguese" : "Portugués",
    "Romanian" : "Romanés",
    "Russian" : "Ruso",
    "Slovakian" : "Eslovaco",
    "Slovenian" : "Esloveno",
    "Spanish" : "Español",
    "Old Spanish" : "Español antigo",
    "Albanian" : "Albanés",
    "Serbian (Latin)" : "Serbio (Latín)",
    "Swahili" : "Swahili",
    "Swedish" : "Sueco",
    "Tamil" : "Tamil",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalo",
    "Thai" : "Tailandés",
    "Turkish" : "Turco",
    "Ukrainian" : "Ucraíno",
    "Vietnamese" : "Vietnamita",
    "Press enter to select" : "Prema Intro para seleccionar",
    "Press enter to remove" : "Prema Intro para retirar",
    "Selected" : "Seleccionado",
    "No matches found" : "Non se atopou ningunha coincidencia",
    "Select language" : "Seleccionar idioma",
    "Save" : "Gardar",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Produciuse un erro inesperado ao gardar o seu idioma preferido. Tenteo de novo.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Produciuse un erro inesperado durante a carga do seu idioma preferido. Tenteo de novo.",
    "An error occured during save of your favorite languages. Please check your input." : "Produciuse un erro inesperado ao gardar o seu idioma preferido. Verifique a súa entrada.",
    "Selected languages will be preselected by default in the OCR dialog." : "Os idiomas seleccionados serán preseleccionados de xeito predeterminado no diálogo do OCR.",
    "Favorite languages" : "Idiomas preferidos"
},
"nplurals=2; plural=(n != 1);");
