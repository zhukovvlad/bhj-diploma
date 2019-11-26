/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
class Entity {
  static URL = '';
  static HOST = 'https://bhj-diplom.letsdocode.ru/';
  /*
  constructor() {
    this.URL = '';
    this.HOST = 'https://bhj-diplom.letsdocode.ru/'
  }
  */


  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    createRequest({
      'data': data,
      'method': 'GET',
      url: (Entity.HOST + Entity.URL),
      'callback': callback 
    })
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    const modifyData = Object.assign({}, data);
    modifyData._method = 'PUT';
    console.log('modify: ', modifyData);
    console.log('data ', data);
    createRequest({
      'data': modifyData,
      'method': 'POST',
      url: (Entity.HOST + Entity.URL),
      'callback': callback 
    })

  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    const getData = Object.assign({}, data);
    getData.id = id;
    console.log(getData);
    createRequest({
      'data': getData,
      'method': 'GET',
      'responseType': 'json',
      url: (Entity.HOST + Entity.URL),
      'callback': callback
    })

  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    const removeData = Object.assign({}, data);
    removeData.id = id;
    removeData._method = 'DELETE';
    createRequest({
      'data': removeData,
      'method': 'POST',
      'responseType': 'json',
      url: (Entity.HOST + Entity.URL),
      'callback': callback 
    })
  }
}

