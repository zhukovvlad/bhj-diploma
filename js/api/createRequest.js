/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    if (options.data) {
        console.log(options.data);
        let fullUrl = new URL(options.url);
        console.log('URL is ' + fullUrl);
        let queryString = fullUrl.search;
        console.log(queryString);
        let searchParams = new URLSearchParams(queryString);
        console.log(searchParams);
        for (let item in options.data) {
            searchParams.append(item, options.data[item]);
            console.log(item + ': ' + options.data[item]);
        }

        fullUrl.search = searchParams.toString();
        options.url = fullUrl.toString();
        //console.log(newUrl);
        //console.log(typeof(newUrl));
    }
    if (options.method == 'GET') {
        console.log('Here it is ' + options.url);
        let xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url);
        xhr.send();
    
    }
    //return xhr;
};


createRequest({
    data: {
        username: 'zhukovvlad',
        password: 'password'
    },
    method: 'GET',
    url: 'https://yandex.ru/'});
