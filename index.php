<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">

    <title>001-B: Markdown + VanillaJS</title>

    <link href="./css/github-styles.css" rel="stylesheet">
    <link href="./css/app.css" rel="stylesheet">
</head>
<body>
    <main>
      <section class="editor js-editor">
        <textarea class="editor__markdown" placeholder="Mark something down 😉" autofocus></textarea>
        <div class="editor__preview markdown-body"></div>
        <button class="btn-save" title="Download File">
          <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
            <g fill="#1565C0">
                <polygon points="24,37.1 13,24 35,24"/>
                <rect x="20" y="4" width="8" height="4"/>
                <rect x="20" y="10" width="8" height="4"/>
                <rect x="20" y="16" width="8" height="11"/>
                <rect x="6" y="40" width="36" height="4"/>
            </g>
          </svg>
        </button>
        <button class="btn-preview">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.372 56.372" style="enable-background:new 0 0 56.372 56.372;" xml:space="preserve">
                <path style="fill:#E7ECED;" d="M56.372,28.284l-7.234,7.234c-11.517,11.517-30.19,11.517-41.707,0L0,28.087l7.234-7.234
                    c11.517-11.517,30.19-11.517,41.707,0L56.372,28.284z"/>
                <circle style="fill:#3083C9;" cx="28.158" cy="28.156" r="12"/>
                <path style="fill:#FFFFFF;" d="M21.158,28.156c-0.552,0-1-0.448-1-1c0-3.86,3.14-7,7-7c0.552,0,1,0.448,1,1s-0.448,1-1,1
                    c-2.757,0-5,2.243-5,5C22.158,27.708,21.711,28.156,21.158,28.156z"/>
            </svg>
        </button>
      </section>
    </main>
    <script src="./js/marked.min.js"></script>
    <script src="./js/app.js"></script>
</body>
</html>
