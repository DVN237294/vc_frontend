import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



var myApp = angular.module('app', []);

myApp.controller('ListCtrl', function($scope) {
  $scope.items = [{
    'name': 'Item 1'
  }, {
    'name': 'Item 2'
  }, {
    'name': 'Account 3'
  }, {
    'name': 'Account 4'
  }, {
    'name': 'Item 5'
  }, {
    'name': 'Item 6'
  }, {
    'name': 'User 7'
  }, {
    'name': 'User 8'
  }];
});

// jQuery
$('.dropdown-menu').find('input').click(function(e) {
  e.stopPropagation();
});