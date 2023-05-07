const head = document.createElement("template");
head.innerHTML = `<meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="assets/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="assets/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="assets/android-chrome-512x512.png"
      />
      <link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />`;

document.head.append(head.content.cloneNode(true));
