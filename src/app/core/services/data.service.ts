

export class DataService {
    constructor() {}
    getData(name_file: string): string[] {
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', name_file, false);
        xhr.send();
    
        if (xhr.status !== 200) {
            return ['Ошибка ' + xhr.status + ': ' + xhr.statusText];
        }
        else {
            let json_date = JSON.parse(xhr.responseText);
            return json_date["table"];
        }

    }
}
