import { controller } from 'controller';

class Router {
    start() {
        const sammy = Sammy(function() {
            // Home Page
            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', controller.getHome);

            // Post Page
            this.get('#/post', controller.getPost);


            // Blog PAge
            this.get('#/blog', controller.getBlog);
        });

        $(function() {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };