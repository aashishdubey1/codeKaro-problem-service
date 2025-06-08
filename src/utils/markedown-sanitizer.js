const marked = require('marked')
const sanitizer = require('sanitize-html')
const TurndownService = require('turndown')

const turndownService = new TurndownService()


function sanitizeMarkdown(markdownContent){


    const convertedHtml = marked.parse(markdownContent)



    const sanitizedHtml = sanitizer(convertedHtml,{
        allowedTags:sanitizer.defaults.allowedTags
    })

    return turndownService.turndown(sanitizedHtml)

}

module.exports = sanitizeMarkdown