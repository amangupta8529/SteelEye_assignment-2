function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    const store = {};
    for (var i = 0; i < plainTextPositions.length; i++) {
        store[plainTextPositions[i].start] = 1;
        store[plainTextPositions[i].end] = -1;
    }

    var counter = 0;
    for (var i = 0, j = 0; j < htmlContent.length; i++, j++) {
        if (store[i] === 1) {
            delete store[i];
            htmlContent = htmlContent.slice(0, j) + "<mark>" + htmlContent.slice(j);
        } else if (store[i] === -1) {
            delete store[i];
            htmlContent = htmlContent.slice(0, j) + "</mark>" + htmlContent.slice(j);
        }

        if (htmlContent[j] === "<") counter = 1;
        else if (htmlContent[j] === ">") counter = -1;
        else if (counter === -1) {
            if (plainText[i] === " ") {
                i++;
                counter = 0;
            } else
                counter = 0;
        }
        if (counter !== 0) i--;
    }
    return htmlContent;
}

module.exports = highlightHTMLContent;
