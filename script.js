// function parseUrlParams() {
//     const url = window.location.href;
//     const urlArray = url.split('?');
//     const paramsString = urlArray[1];
//     if (paramsString) {
//         const paramsArray = paramsString.split('&');
//         const paramsObj = {};
//         for (const str of paramsArray) {
//             const strArray = str.split('=');
//             paramsObj[strArray[0]] =  decodeURIComponent(strArray[1]);
//         }
//         console.log(paramsObj);
//     } else {
//         return null
//     }
// }

// parseUrlParams();



/////////////////////////////////////////////////////////////////////////////
function parseUrlParams() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const param = Object.fromEntries(urlSearchParams);
    console.log(param);
}

parseUrlParams();