import { Pipe, PipeTransform } from '@angular/core';
import { Video } from 'src/api';

@Pipe({
    name: 'filter'
})

export class SearchPipe implements PipeTransform {
    transform(videos: Video[], args?: any): any {

        if(!videos || !args)return null;

        args = args.toLowerCase();
         
        videos.forEach(element => {
            if(args = element)
            return videos.filter(video => video.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
            });
            
    }
}