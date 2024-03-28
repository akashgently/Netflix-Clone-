import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataServiceService {
  constructor() {}
  getMockData(): any[] {
    return [
      {
        id: 1,
        language: 'English',
        genre: 'Action',
        category: 'series',
        link: 'https://youtu.be/l4yVf28RfO4?si=WZu8c5HTNsVeg-Dl',
      },
      {
        id: 2,
        language: 'English',
        genre: 'Action',
        category: 'series',
        link: 'https://youtu.be/Hfbe73rLBZk?si=rLb6HhkV2OWCSYtD',
      },
      {
        id: 3,
        language: 'English',
        genre: 'Action',
        category: 'series',
        link: 'https://youtu.be/EzRjtl3RWXA?si=VwBMgIMbHMzm6JBh',
      },
      {
        id: 4,
        language: 'English',
        genre: 'Action',
        category: 'series',
        link: 'https://youtu.be/0VLYbRBv8Qw?si=fH7nVXUzEaOXYVdQ',
      },
      {
        id: 5,
        language: 'English',
        genre: 'Action',
        category: 'series',
        link: 'https://youtu.be/b0gr5qRHUVc?si=4EVBjsCnwn3K8XTE',
      },
      {
        id: 6,
        language: 'Tamil',
        genre: 'Action',
        category: 'Movie',
        link: 'https://youtu.be/Fyj5wbzRPC8?si=DSp_98hwcLvyQpPE',
      },
      {
        id: 7,
        language: 'Tamil',
        genre: 'Thriller',
        category: 'Movie',
        link: 'https://youtu.be/6hjeN_1r3dM?si=9B4_k9HacvcXeK4Y',
      },
      {
        id: 8,
        language: 'Tamil',
        genre: 'Action',
        category: 'Movie',
        link: 'https://youtu.be/GgwuvA2HLkE?si=Sm95JqJuHgzKiFxG',
      },
      {
        id: 9,
        language: 'Tamil',
        genre: 'Action',
        category: 'Movie',
        link: 'https://youtu.be/nQrZUPwnDsc?si=m_RJwiMoa4SnBk7n 65tf6t56rttTRDSARDS456789456789457',
      },
      {
        id: 10,
        language: 'English',
        genre: 'Romantic',
        category: 'Movie',
        link: 'https://youtu.be/5IMevYAxCyU?si=wC8k3CE7SliBvXyz',
      },
    ];
  }
}
