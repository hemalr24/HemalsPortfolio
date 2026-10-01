const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.querySelector("#copy-email");
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-email-status");
    try {
      await navigator.clipboard.writeText("rajput.hemal01@gmail.com");
      status.textContent = "Email address copied.";
    } catch {
      status.textContent = "Please select and copy the email address above.";
    }
  });
}
