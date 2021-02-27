(() => {
  const $editor = document.querySelector(".js-editor");
  const $textarea = document.querySelector(".editor__markdown");
  const $preview = document.querySelector(".editor__preview");
  const $btnDownload = document.querySelector(".btn-save");
  const $btnPreview = document.querySelector(".btn-preview");

  const writeToStore = (md = $textarea.value) => {
    localStorage.setItem("md-vanilla", md);
  };

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
      !$editor.classList.contains("is-previewing") &&
        $textarea.focus({ preventScroll: true });
    });

    $textarea.addEventListener("keyup", (e) => {
      $preview.innerHTML = marked(e.target.value);
      writeToStore(e.target.value);
    });

    window.addEventListener("blur", (e) => {
      writeToStore();
    });
  });
})();
