
/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
function createAddURL(data = '') {
    let addUrl = [];
    for (let item in data) {
      addUrl.push(item + '=' + data[item]);
    }
  
    return (data) ? '?' + addUrl.join('&'): '';
  }
  
  
  const createRequest = (options = {}) => {
  
    let sendParameter;
    let xhr = new XMLHttpRequest();
  
    if (options.method == 'GET') {
      options.url = options.url + createAddURL(options.data);
      console.log('Here it is ' + options.url);
  
      sendParameter = null;
    } else {
      let formData = new FormData();
      if ('data' in options) {
        for (let item in options.data) {
          formData.append(item.toString(), options.data[item].toString());
          console.log(item + ': ' + options.data[item]);
        }
      }
      sendParameter = formData;
      console.log(...formData);
    }
  
    xhr.open(options.method, options.url, true);
    if ('headers' in options) {
        for (let item in options.headers) {
            xhr.setRequestHeader(item, options.headers[item]);
            console.log(item + ': ' + options.headers[item]);
        }
    }
    if ('responseType' in options) {
        xhr.responseType = options.responseType;
    }
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            options.callback;
        } else {
            return console.log('Error ' + xhr.status);
        }
    })
    console.log(sendParameter);
    xhr.send(sendParameter);
    };
    
    
    createRequest({
      data: {
        'username': 'zhukovvlad@yandex.ru',
        'password': 'sk'
      },
      headers: {
        'Content-type': 'application/json'
      },
      method: 'GET',
      responseType: 'json',
      url: 'https://bhj-diplom.letsdocode.ru/',
      callback: (err, response) => {
        console.log( 'Ошибка, если есть', err );
        console.log( 'Данные, если нет ошибки', response );
      }});