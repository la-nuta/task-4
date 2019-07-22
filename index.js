// Задание 4: Написать структуру данных Map
// Реализовать добавление, удаление, изменение существующих (ключ, значение), поиск по ключу

class MyMap {
    constructor() {
        this.collection = {};
    }

    set(key, value) {

        if (!(key in this.collection)) {
            this.size = this.size !== undefined ? this.size + 1 : 0;
        }
        this.collection[key] = value;
    };

    delete(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.size = this.size ? this.size - 1 : 0;
        }
    };

    get(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
}

let map = new MyMap();
let keyObj = {}, keyFunc = function() {};

map.set('prop1', 2);
map.set('prop2', 7);
map.set('prop3', 'val1');
map.set(3, 1);
map.set(0, 'val2');
map.set(0, 'val3');
map.set(keyObj, 'object value');
map.set(keyFunc, 'function value');
map.set(NaN, 'NaN value');
map.delete('prop3');

console.log('map', map);
console.log('map.get(prop1)', map.get('prop1'));
console.log('map.get(prop3)', map.get('prop3'));
console.log('map.get(keyObj)', map.get(keyObj));
console.log('map.get(keyFunc)', map.get(keyFunc));
console.log('map.get(NaN)', map.get(NaN));
