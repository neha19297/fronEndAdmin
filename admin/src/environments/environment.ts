// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  registration_api: 'http://13.233.223.217:2020/users/registration',
  bank_details_api:'http://localhost:3000/bankDetail',
  login_api: 'http://localhost:3000/login',
   que_api:'http://localhost:3000/question_upload',
   course_chapter_api:"http://localhost:3000/courseChapter",
   course_api:'http://localhost:3000/courses',
   file_upload_api:'http://localhost:3000/uploadFile'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
