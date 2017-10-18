const HANDLERS_PATH = './views/';

class HandlebarsHandler {
    getTemplate(templateName) {
        const templatePath = `${HANDLERS_PATH}${templateName}.hbs`;
        console.log(templatePath);
        return new Promise((resolve, reject) => {
            $.get(templatePath)
                .done(resolve)
                .fail(reject);
        });
    }

    createTemplate(templateName, targetSelector, dataObject) {
        return this.getTemplate(templateName)
            .then((template) => {
                const compiledTemplate = Handlebars.compile(template);
                const templateHtml = compiledTemplate(dataObject);
                const $wrappedTemplate = $('<div/>');
                $wrappedTemplate.html(templateHtml);
                $(targetSelector).html($wrappedTemplate.html());

                return template;
            }).catch(console.log);
    }
}
const handlebarsHandler = new HandlebarsHandler();
export { handlebarsHandler };