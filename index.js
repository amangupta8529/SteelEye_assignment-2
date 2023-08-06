function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    plainTextPositions.sort((a, b) => b.start - a.start);
    for (const position of plainTextPositions) {
        const startTag = '<mark>';
        const endTag = '</mark>';
        const start = htmlContent.indexOf(plainText.substr(position.start, position.end - position.start));
        const end = start + (position.end - position.start);
        htmlContent = htmlContent.slice(0, start) + startTag + htmlContent.slice(start, end) + endTag + htmlContent.slice(end);
    }

    return htmlContent;
}

module.exports = highlightHTMLContent;
