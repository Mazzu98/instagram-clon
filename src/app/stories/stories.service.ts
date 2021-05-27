import { Injectable } from '@angular/core';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  stories: Story[] = [
    new Story(1,'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','germi.le2'),    
    new Story(2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP20w1laJrQpjpeFmSHxJ_6d_tV1W8MJRBIA&usqp=CAU','mar_few'),
    new Story(3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA7_UIsvijh2DBa2UPA2EiVrVrl2tKnX3YA&usqp=CAU','hector.63'),
    new Story(4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5uf2odielYuzQQXTpeZsNDn7V4aBQxo5XQ&usqp=CAU','gler_wwx'),
    new Story(5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bloxJ0289czmyJskoVkpFQsOE3oFN5Gi9g&usqp=CAU','wstk.8rwe'),
    new Story(6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQXoSyqoh5pEmSMs9Mx9EYXC98LkFxB3pDQ&usqp=CAU','govir_100'),
    new Story(7,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugbEuVyywi6zyn7yrK8YjtSL9a9-i4ufpxw&usqp=CAU','rare_guy'),
    new Story(8,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCRCv5F8uZbyJY4e_soujFCl97IcM7hfabQ&usqp=CAU','knee_head'),
    new Story(9,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkT9NZGDQRWjw2Z4nHzjS2dsIGALSaCTQzOA&usqp=CAU','weed_420'),
    new Story(10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EGgSUMVxTgoqEEFH1WpaurGZOTXDpdX_aw&usqp=CAU','pepe_32'),    
    new Story(2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP20w1laJrQpjpeFmSHxJ_6d_tV1W8MJRBIA&usqp=CAU','mar_few'),
    new Story(3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA7_UIsvijh2DBa2UPA2EiVrVrl2tKnX3YA&usqp=CAU','hector.63'),
  ]

}
