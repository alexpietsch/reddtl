function removeQueryParam(requestDetails) {
  let url = new URL(requestDetails.url);

  if (url.searchParams.has("tl")) {
    url.searchParams.delete("tl");
    return { redirectUrl: url.href };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  removeQueryParam,
  { urls: ["*://*.reddit.com/*"], types: ["main_frame"] },
  ["blocking"]
);
