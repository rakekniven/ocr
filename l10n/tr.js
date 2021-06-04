OC.L10N.register(
    "ocr",
    {
    "OCR" : "Karakter tanıma",
    "Optical character recognition" : "Optik karakter tanıma",
    "Text recognition for your images" : "Görselleriniz için metin tanıma",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Açıklama\n\nNextcloud OCR (optik karakter tanuma) görselleri tesseract-js ile işleyerek Nextcloud sunucunuza OCR özelliği ekler.\nUygulama görsel (png, jpeg, tiff, bmp) dosyalarını web tarayıcı üzerinde tesseract-js ile işleyerek sonuç dosyasını nextcloud üzerindeki kaynak klasörüne pdf olarak kaydeder. Böylece görsel ve pdf dosyaları içinde arama yapmak gibi olanaklara sahip olursunuz.\n\n## Koşullar, Gereksinimler ve Bağımlılıklar\nOCR uygulamasının kullanılabilmesi için bazı gereksinimler karşılanmalıdır:\n\n - [Nextcloud 16 ve üzerindeki sürümler](https://nextcloud.com/)\n\n - Modern web tarayıcıları (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract verileri için sunucu üzerinde 200 MB kadar disk alanı (otomatik kurulur).\n\n_* Safari üzerinde [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) ile ilgili bir sorun bulunuyor. Uygulamanın düzgün çalışmasını sağlamak için bir Yöneticinin 'script-src' ayarını 'unsafe-eval' olarak değiştirmesi gereklidir. Uygulamanın bu ayarı kendi kendine yapması güvenli olmadığından bu işlemi yapıp yapmamaya sizin karar vermeniz önerilir (lütfen Content Security Policy özelliğinin ne olduğunu ve örneğin unsafe-eval değerinin ne anlama geldiğini bildiğinizden emin olun)._\n\n## Kurulum\nUygulamayı [Nextcloud Mağazası](https://apps.nextcloud.com/apps/ocr) üzerinden ya da github üzerindeki yayınlarından (kaynak kodlarından **DEĞİL**) indirerek ve içeriğini **nextcloud/apps/ocr/** klasörüne yükleyerek edinebilirsiniz.\n\n## Sorumluluk Reddi\nBu uygulama \"OLDUĞU GİBİ\" dağıtılmaktadır. Belirtilmiş ya da belirtilmemiş HERHANGİ BİR KOŞUL YA DA GARANTİ İÇERMEZ.\n\n## Not\n3. ve önceki sürümler artık geliştirici tarafından desteklenmiyor. Eş zamanlı olmayan arka plan işlemesi için lütfen depoyu dallandırın ve iyileştirmeler üzerinde çalışmak için \"not-maintained\" dalını kullanın. Bu işlem çok emek gerektirdğinden geliştirici destek veremiyor.\nBu poje tesseract web mekanizması dalını ve kullanır. Geliştiricisi bu uygulamadaki PDF işleme özelliğini kaldırdı ve PDF işlemleri için ayrı bir uygulama geliştirmeye başladı.",
    "Target file already exists:" : "Hedef dosya zaten var:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Sık kullandığınız diller yüklenirken beklenmeyen bir sorun çıktı. Bu nedenle herhangi bir dil ayarlanmayacak.",
    "An unexpected error occured during the upload of the processed file." : "İşlenen dosya yüklenirken beklenmeyen bir sorun çıktı.",
    "An unexpected error occured during the deletion of the original file." : "Özgün dosya silinirken beklenmeyen bir sorun çıktı.",
    "An unexpected error occured during Tesseract processing." : "Tesseract işlemesi sırasında beklenmeyen bir sorun çıktı.",
    "OCR processing failed:" : "Karakter tanıma işlemi tamamlanamadı:",
    "MIME type not supported." : "MIME türü desteklenmiyor.",
    "Process" : "İşlem",
    "A large number of files may take a very long time." : "Çok sayıda dosyanın işlenmesi çok uzun sürebilir.",
    "{file}/{files} Files successfully processed" : "{file}/{files} dosya işlendi",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n dosya işleniyor:","%n dosya işleniyor:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Özgün dosyayı sil (görsel)","Özgün dosyaları sil (görseller)"],
    "_%n file_::_%n files_" : ["%n dosya","%n dosya"],
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Arapça",
    "Azerbaijani" : "Azerice",
    "Belarusian" : "Belarusça",
    "Bengali" : "Bengalce",
    "Bulgarian" : "Bulgarca",
    "Catalan" : "Katalanca",
    "Czech" : "Çekçe",
    "Chinese" : "Çince",
    "Traditional Chinese" : "Geleneksel Çince",
    "Cherokee" : "Çerokice",
    "Danish" : "Danca",
    "German" : "Almanca",
    "Greek" : "Yunanca",
    "English" : "İngilizce",
    "English (Old)" : "İngilizce (Eski)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Alternatif Esperanto",
    "Math" : "Matematik",
    "Estonian" : "Estonca",
    "Basque" : "Baskça",
    "Persian (Farsi)" : "Farsça (İran)",
    "Finnish" : "Fince",
    "French" : "Fransızca",
    "Frankish" : "Frenkçe",
    "French (Old)" : "Fransızca (Eski)",
    "Galician" : "Galiçyaca",
    "Ancient Greek" : "Antik Yunanca",
    "Hebrew" : "İbranice",
    "Hindi" : "Hintçe",
    "Croatian" : "Hırvatça",
    "Hungarian" : "Macarca",
    "Indonesian" : "Endonezce",
    "Icelandic" : "İzlandaca",
    "Italian" : "İtalyanca",
    "Italian (Old)" : "İtalyanca (Eski)",
    "Japanese" : "Japonca",
    "Kannada" : "Kannada",
    "Korean" : "Korece",
    "Latvian" : "Letonca",
    "Lithuanian" : "Litvanca",
    "Malayalam" : "Malayamca",
    "Macedonian" : "Makedonca",
    "Maltese" : "Maltaca",
    "Malay" : "Malayca",
    "Dutch" : "Felemenkçe",
    "Norwegian" : "Norveççe",
    "Polish" : "Lehçe",
    "Portuguese" : "Portekizce",
    "Romanian" : "Romence",
    "Russian" : "Rusça",
    "Slovakian" : "Slovakça",
    "Slovenian" : "Slovence",
    "Spanish" : "İspanyolca",
    "Old Spanish" : "Eski İspanyolca",
    "Albanian" : "Arnavutça",
    "Serbian (Latin)" : "Sırpça (Latin)",
    "Swahili" : "Svahili",
    "Swedish" : "İsveçce",
    "Tamil" : "Tamilce",
    "Telugu" : "Teluguca",
    "Tagalog" : "Tagalogca",
    "Thai" : "Tayca",
    "Turkish" : "Türkçe",
    "Ukrainian" : "Ukraynaca",
    "Vietnamese" : "Vietnamca",
    "Press enter to select" : "Seçmek için Enter tuşuna basın",
    "Press enter to remove" : "Kaldırmak için Enter tuşuna basın",
    "Selected" : "Seçilmiş",
    "No matches found" : "Eşleşen bir sonuç bulunamadı",
    "Select language" : "Dil seçin",
    "Save" : "Kaydet",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Sık kullandığınız diller kaydedilirken beklenmeyen bir sorun çıktı. Lütfen yeniden deneyin.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Sık kullandığınız diller yüklenirken beklenmeyen bir sorun çıktı. Lütfen yeniden deneyin.",
    "An error occured during save of your favorite languages. Please check your input." : "Sık kullandığınız diller kaydedilirken bir sorun çıktı. Lütfen girişinizi denetleyin.",
    "Selected languages will be preselected by default in the OCR dialog." : "Seçilen diller OCR penceresinde önceden seçilmiş olarak görüntülenir.",
    "Favorite languages" : "Sık kullanılan diller"
},
"nplurals=2; plural=(n > 1);");
