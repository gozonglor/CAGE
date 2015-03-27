'use strict';
//The controller that sets up the tournament

var module = angular.module('tabtracker');
module.controller('Screen2Ctrl', Screen2Ctrl);

var tournament = { name: "" , totalTeams: 0 };

function Screen2Ctrl($scope){
		
		$scope.buildTournament = function(totalTeams, tournName){
			alert("I'm losing my mind");
			// tournament.name = tournName;
			// tournament.totalTeams = totalTeams;
		}
		
		
}