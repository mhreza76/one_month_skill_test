import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//   var app = angular.module("myApp", []);
// app.controller('todoCtrl', function(){
//   $scope.todolist = [
//     {todoText: 'Eating', done: false},
//     {todoText: 'Sleep', done: false},
//     {todoText: 'Bread', done: false},
//     {todoText: 'Eating', done: false},
//     {todoText: 'Eating', done: false}
// ];
// })