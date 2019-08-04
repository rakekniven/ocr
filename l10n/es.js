OC.L10N.register(
    "ocr",
    {
    "Afrikaans" : "afrikaans",
    "Arabic" : "árabe",
    "Azerbaijani" : "azerí",
    "Belarusian" : "bielorruso",
    "Bengali" : "bengalí",
    "Bulgarian" : "búlgaro",
    "Catalan" : "catalán",
    "Czech" : "checo",
    "Chinese" : "chino",
    "Traditional Chinese" : "chino tradicional",
    "Cherokee" : "cheroki",
    "Danish" : "danés",
    "German" : "alemán",
    "Greek" : "griego",
    "English" : "inglés",
    "English (Old)" : "inglés (antiguo)",
    "Esperanto" : "esperanto",
    "Esperanto alternative" : "esperanto alternativo",
    "Math" : "matemático",
    "Estonian" : "estonio",
    "Basque" : "vasco",
    "Persian (Farsi)" : "persa (farsi)",
    "Finnish" : "finés",
    "French" : "francés",
    "Frankish" : "franco",
    "French (Old)" : "francés (antiguo)",
    "Galician" : "gallego",
    "Ancient Greek" : "griego antiguo",
    "Hebrew" : "hebreo",
    "Hindi" : "hindi",
    "Croatian" : "croata",
    "Hungarian" : "húngaro",
    "Indonesian" : "indonesio",
    "Icelandic" : "islandés",
    "Italian" : "italiano",
    "Italian (Old)" : "italiano (antiguo)",
    "Japanese" : "japonés",
    "Kannada" : "kanada",
    "Korean" : "coreano",
    "Latvian" : "letón",
    "Lithuanian" : "lituano",
    "Malayalam" : "malayalam",
    "Macedonian" : "macedonio",
    "Maltese" : "maltés",
    "Malay" : "malayo",
    "Dutch" : "neerlandés",
    "Norwegian" : "noruego",
    "Polish" : "polaco",
    "Portuguese" : "portugués",
    "Romanian" : "rumano",
    "Russian" : "ruso",
    "Slovakian" : "eslovaco",
    "Slovenian" : "eslovenio",
    "Spanish" : "español",
    "Old Spanish" : "español antiguo",
    "Albanian" : "albanés",
    "Serbian (Latin)" : "serbio (latino)",
    "Swahili" : "suajili",
    "Swedish" : "sueco",
    "Tamil" : "tamil",
    "Telugu" : "telugu",
    "Tagalog" : "tagalo",
    "Thai" : "tailandés",
    "Turkish" : "turco",
    "Ukrainian" : "ucraniano",
    "Vietnamese" : "vietamita",
    "OCR" : "OCR",
    "Target file already exists:" : "El archivo destino ya existe:",
    "An unexpected error occured during the upload of the processed file." : "Ha ocurrido un error inesperado durante la subida del archivo procesado.",
    "An unexpected error occured during the deletion of the original file." : "Ha ocurrido un error inesperado durante la eliminación del archivo original.",
    "An unexpected error occured during Tesseract processing." : "Ha ocurrido un error inesperado durante el procesamiento de Tesseract.",
    "PDF does not contain any Pages to process." : "El PDF no contiene ninguna página que procesar.",
    "An unexpected error occured during pdf processing." : "Ha ocurrido un error inesperado durante el procesamiento del pdf.",
    "OCR processing failed:" : "El proceso de OCR ha fallado:",
    "No file selected." : "No se ha seleccionado ningún archivo.",
    "MIME type not supported." : "Tipo MIME no soportado.",
    "Press to select" : "Pulsa para seleccionar",
    "No matches found" : "No se han encontrado coincidencias",
    "Select language" : "Seleccione idioma ",
    "Process" : "Proceso",
    "PDF files and a large number of files may take a very long time." : "Los archivos PDF y un número grande de archivos pueden suponer un tiempo muy extenso.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Archivos procesados con éxito",
    "_%n file is being processed:_::_%n files are being processed:_" : ["Se está procesando %n archivo:","Se están procesando %n  archivos:"],
    "_Replace (PDF) or delete (image) original file_::_Replace (PDF) or delete (images) original files_" : ["Reemplazar (PDF) o eliminar archivo original (imágen)","Reemplazar (PDF) o eliminar archivos originales (imágenes)"],
    "_%n file_::_%n files_" : ["%n archivo","%n archivos"],
    "Optical character recognition" : "Reconocimiento óptico de caracteres",
    "Text recognition for your images and pdf files" : "Reconocimiento de texto para tus imágenes y archivos pdf",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff) and PDFs and saves the output file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 15 or 16](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Consideration\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort." : "# Descripción\n\nNextcloud OCR (reconocimiento óptico de caracteres) consigue la capacidad de procesar imágenes y PDF con tesseract-js a tu Nextcloud.\nLa app usa tesseract-js en el navegador para procesar imágenes (png, jpeg, tiff) y PDF y guarda el archivo obtenido en la carpeta de origen en Nextcloud. Esto, por ejemplo, te permite buscar en él.\n\n## Prerrequisitos, requisitos y dependencias\nLa app OCR tiene varios prerrequisitos:\n\n- [Nextcloud 15 o 16]((https://nextcloud.com/)\n\n- Solo soportada en las últimas versiones de los navegadores modernos (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_*En Safari hay actualmente un problema con [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) que requiere que un administrador configure 'script-src' como 'unsafe-eval' para que la app funciones correctamente. Dado que esto es bastante inseguro, la app por sí misma no lo hace y recomienda decidirlo bajo tu propia responsabilidad (por favor, asegúrate de tener claro qué es CSP y qué causa unsafe-eval)._\n\n## Instalación\nInstala la app desde la [AppStore de Nextcloud](http://apps.nextcloud.com) o descarga el paquete de la ´ltima versión de github (**NO** las fuentes) y coloca el contenido en **nextcloud/apps/ocr**.\n\n## Descarga de responsabilidad\nEl software se distribuye en una BASE \"COMO ES\", SIN GARANTÍAS O\nCONDICIONES DE NINGÚN TIPO, ni expresas ni implícitas.\n\n## Consideración\nLa versión 3 y anteriores ya no están soportadas/mantenidas por el autor. Por tanto, para procesamiento asíncrono en segundo plano, por favor bifurca el repositorio y usa la rama \"not-maintained\" para trabajar en mejoras. El autor no podía mantenerlo porque el esfuerzo era excesivo."
},
"nplurals=2; plural=(n != 1);");
