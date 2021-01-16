import {Injectable} from '@angular/core';
import {Obj} from '../../shared/interfaces';

@Injectable()
export class UrlService{

  // Return URL parameter from Object
  public paramsToUrl(params: Obj): string{
    if (Object.keys(params).length !== 0){
      let str = '';

      for (const key in params){
        if (params[key] !== undefined && params[key] !== null){
          if (str !== ''){
            str += '&';
          }
          str += key + '=' + encodeURIComponent(params[key]);
        }
      }
      return str;
    }
    else {
      return '';
    }
  }

}
