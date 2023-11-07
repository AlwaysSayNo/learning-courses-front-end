// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// all tokens will expire after 365 from 15.05.2023
export const environment = {
  production: true,
  apiUrl: "/api/",
  user1: {
    login: 'user1@gmail.com',
    password: 'password',
    role: 'STUDENT',
    token: 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6IlNUVURFTlQiLCJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNDAxOTQsImV4cCI6MTcxNTYzNDAwMH0.3rvoZE5HDd1HzLUydGYkA2XxlhVt5_3yMCcMZiXUyirDFLl-wW313aZdWvvuknFc'
  },
  user2: {
    login: 'user2@gmail.com',
    password: 'password',
    role: 'STUDENT',
    token: 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6IlNUVURFTlQiLCJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNDAzMDEsImV4cCI6MTcxNTYzNDAwMH0.HiZzT32FE7bH9KwLZZ3wEqS4c5ctYReqD9EjgJFj1633V3duUOQkmmMiQGKN-fnb'
  },
  instructor1: {
    login: 'instructor1@gmail.com',
    password: 'password',
    role: 'INSTRUCTOR',
    token: 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6IklOU1RSVUNUT1IiLCJzdWIiOiJpbnN0cnVjdG9yMUBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNDAyNDAsImV4cCI6MTcxNTYzNDAwMH0.Ow_KWPu5f8YuBtZkyHEtCglNSfs_CTk9hhPhPeiELv9b8j1_pWzQaN7v1GmtpgrO'
  },
  instructor2: {
    login: 'instructor2@gmail.com',
    password: 'password',
    role: 'INSTRUCTOR',
    token: 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6IklOU1RSVUNUT1IiLCJzdWIiOiJpbnN0cnVjdG9yMkBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNDAyNjAsImV4cCI6MTcxNTYzNDAwMH0.ppFHPnVPcHeqP_KIQwW32Lb0R3T0rgYd18xV9puMGOvwKWKWgM2XCOi5NDal74KD'
  },
  admin: {
    login: 'admin1@gmail.com',
    password: 'password',
    role: 'ADMIN',
    token: 'eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6IkFETUlOIiwic3ViIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY4NDE0MDM1MCwiZXhwIjoxNzE1NjM0MDAwfQ.e4INOxRvW5VxeKVFKP67ot-jiDKH9U8KlOT8NrgWVhzfT1Jk4ZAYpWzTHTmh9AOh'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
