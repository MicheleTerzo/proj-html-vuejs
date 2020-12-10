Vue.config.devtools = true;

const myWebsite = new Vue({
    el : '#app',
    data : {
        navLinks : ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact us', 'JOIN US'],
        popularTopics: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Integer nec mi interdum nisl venenatis venenatis.',
            'Nunc id cursus eros.',
            'Etiam sit amet ipsum nec est ultricies ornare et vitae mauris.']
    }
})