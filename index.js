function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let offset = 0;
    const markedText = plainTextPositions.reduce((highlightedText, { start, end }) => {
        const plainWord = plainText.slice(start, end);
        const htmlStart = start + offset;
        const htmlEnd = start + offset + plainWord.length;
        const htmlWord = htmlContent.slice(htmlStart, htmlEnd);
        const markedWord = `<mark>${htmlWord}</mark>`;

        // Update the offset for HTML tags
        const tagsInPlainText = plainText.slice(start).match(/<[^>]*>/g);
        const tagsInHtmlContent = htmlContent.slice(htmlStart).match(/<[^>]*>/g);
        if (tagsInPlainText && tagsInHtmlContent) {
            const tagCountDifference = tagsInHtmlContent.length - tagsInPlainText.length;
            offset += tagCountDifference * 3; // Each tag takes 3 characters (<mark> or </mark>)
        }

        return highlightedText.slice(0, htmlStart) + markedWord + highlightedText.slice(htmlEnd);
    }, htmlContent);

    return markedText;
}

module.exports = highlightHTMLContent;