(() => {
  const $editor = document.querySelector(".js-editor");
  const $textarea = document.querySelector(".editor__markdown");
  const $preview = document.querySelector(".editor__preview");
  const $btnDownload = document.querySelector(".btn-save");
  const $btnPreview = document.querySelector(".btn-preview");

  function debounce(fn, time) {
    let timeout;

    return function () {
      const functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  function saveTextAsFile(title = "filname") {
    const textToWrite = $textarea.value;
    const textFileAsBlob = new Blob([textToWrite], { type: "text/markdown" });
    const fileNameToSaveAs = `${title}.md`; //filename.extension

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";

    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
    $textarea.focus({ preventScroll: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    $textarea.value = localStorage.getItem("md-vanilla");
    $preview.innerHTML = marked($textarea.value);

    $btnDownload.addEventListener("click", (e) => {
      saveTextAsFile();
    });

    $btnPreview.addEventListener("click", (e) => {
      $editor.classList.toggle("is-previewing");
      $textarea.focus({ preventScroll: true });
    });

    $textarea.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        $textarea.scrollTop = $textarea.offsetHeight;
      }

      $preview.innerHTML = marked(e.target.value);
      localStorage.setItem("md-vanilla", e.target.value);
    });
  });
})();
