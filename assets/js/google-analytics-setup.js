window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "{{ site.google_analytics }}");

// Function to get URL query parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Capture the 'source' parameter and send to GA4
const source = getQueryParam('utm_source');
if (source) {
  gtag('event', 'page_view', {
    'utm_source': source
  });
}