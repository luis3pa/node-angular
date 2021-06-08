import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: unknown, ...args: any): unknown {
    if (args != null) {
      if (args=='ingles')
        switch (value) {
          case 1: return 'ADMINISTRATOR';
          case 2: return 'USER';
                              
        }    
    }
    switch (value) {
      case 1: return 'Administrador';
      case 2: return 'Usuario';                       
    }  
    return null;
  }

}
