import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args === '' || args.length < 3) {
      return value
    }

    //if(args.length >= 3) page_size = 100

    const resultPosts = [];

    for (const post of value){
      if(post.Nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    }
    
    return resultPosts;
  }

}
