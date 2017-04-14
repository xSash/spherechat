'use strict';

angular
	.module('myApp', [
		'myApp.404',
		'myApp.502',
		'myApp.about',
		'myApp.comingsoon',
		'myApp.downloads',
		'myApp.faq',
		'myApp.login',
		'myApp.resetpassword',
		'myApp.signup',
		'myApp.main',
		'myApp.webclient',
		'ngRoute',
		'routeStyles',
		'api',
		'auth',
		'session'
	])

	.config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {
		$locationProvider.hashPrefix('!');
		$resourceProvider.defaults.stripTrailingSlashes = false;
		$routeProvider
			.when('/', {
			    templateUrl: 'website/main/main.html',
			    controller: 'MainCtrl',
			    css: ['https://fonts.googleapis.com/css?family=Montserrat:100,300,400,600,700,800,900',
					  'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',
					  'https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,600,700&amp;subset=latin,latin-ext',
					  'http://fonts.googleapis.com/css?family=Varela+Round%3A400%7CHind%3A700%2C300%7CMontserrat%3A700%7CPlayfair+Display%3A400&#038;subset=latin&#038;ver=1490464751',
					  'lib/font-awesome-4.6.3/css/font-awesome.css',
					  'lib/font-awesome-4.6.3/css/font-awesome.min.css',
					  'css/animate.css',
					  'css/preloader.css',
					  'css/uncss.css',
					  'css/bootstrap.min.css',
					  'css/main.css',
					  'css/style.css',
				  	  'css/style2.css',
					  'css/testimony.css',
					  'css/common.min.css',
					  'css/home.min.css',
					  'css/apps.min.css',
					  'css/intro.css',
					  'css/social.css',
					  'css/steps.css',
					  'css/integrations.css']
			})
			.when('/404', {
			    templateUrl: 'website/404/404.html',
			    controller: '404Ctrl'
			})
			.when('/502', {
			    templateUrl: 'website/502/502.html',
			    controller: '502Ctrl'
			})
			.when('/about', {
			    templateUrl: 'website/about/about.html',
			    controller: 'AboutCtrl'
			})
			.when('/comingsoon', {
			    templateUrl: 'website/comingsoon/comingsoon.html',
			    controller: 'ComingsoonCtrl',
			    css: ['http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300',
			          'http://fonts.googleapis.com/css?family=Exo+2:400,100,100italic,200,200italic,300,300italic,400italic,500,500italic,700,700italic,600,600italic',
			          'http://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600',
			          'css/normalize.css',
			          'css/component.css',
			          'css/bg-slider.css',
					  'clock/css/clock.css',
					  'css/main.css',
					  'css/responsive.css']
			})
			.when('/downloads', {
			    templateUrl: 'website/downloads/downloads.html',
			    controller: 'DownloadsCtrl',
			    css: ['css/downloads.css']
			})
			.when('/faq', {
			    templateUrl: 'website/faq/faq.html',
			    controller: 'FaqCtrl',
			    css: ['https://fonts.googleapis.com/css?family=Montserrat:100,300,400,600,700,800,900',
			          'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',
			          'https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,600,700&amp;subset=latin,latin-ext',
			          'http://fonts.googleapis.com/css?family=Varela+Round%3A400%7CHind%3A700%2C300%7CMontserrat%3A700%7CPlayfair+Display%3A400&#038;subset=latin&#038;ver=1490464751',
			          'lib/font-awesome-4.6.3/css/font-awesome.css',
			          'css/animate.css',
			          'css/preloader.css',
			          'css/init.css',
			          'css/uncss.css',
			          'css/bootstrap.min.css',
			          'css/main.css',
			          'css/style.css',
			          'css/style2.css',
			          'css/testimony.css',
			          'css/common.min.css',
			          'css/home.min.css',
			          'css/apps.min.css',
			          'css/intro.css',
			          'css/social.css']
			})
			.when('/login', {
			    templateUrl: 'website/login/login.html',
			    controller: 'LoginCtrl',
			    redirectIfLoggedIn: true,
			    css: ['http://fonts.googleapis.com/css?family=Open+Sans:400,300,600',
			          'css/login.css',
			          'css/particules.css',
			          'css/checkbox.css']
			})
			.when('/resetpassword', {
			    templateUrl: 'website/resetpassword/resetpassword.html',
			    controller: 'ResetpasswordCtrl',
			    css: ['http://fonts.googleapis.com/css?family=Open+Sans:400,300,600',
			          'css/resetpassword.css',
			          'css/particules.css']
			})
			.when('/signup', {
			    templateUrl: 'website/signup/signup.html',
			    controller: 'SignupCtrl',
			    redirectIfLoggedIn: true,
			    css: ['http://fonts.googleapis.com/css?family=Open+Sans:400,300,600',
			          'css/confetti.css',
			          'css/signup.css',
			          'css/checkbox.css']
			})
			
			.when('/webclient', {
			    templateUrl: 'webclient/webclient.html',
			    controller: 'WebclientCtrl',
			    css: ['https://cdnjs.cloudflare.com/ajax/libs/Primer/3.0.1/css/primer.css',
			          'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
			          'webclient/preloader.css',
			          'webclient/front-prof.css',
			          'webclient/sidemenu.css',
			          'webclient/intercom.css',
			          'webclient/chat.css',
			          'webclient/main.css',
			          'webclient/test2.css',
			          'webclient/gear.css',
			          'webclient/anime.css',
			          'webclient/style2.css',
			          'webclient/image.css',
			          'lib/font-awesome-4.6.3/css/font-awesome.css',
			          'lib/octicons/octicons.min.css',
			          'css/animate.css',
			          'css/confetti.css',
			          ]
			})
			.otherwise({redirectTo: '/'});
	}])

	.directive('head', ['$rootScope','$compile', function($rootScope, $compile) {
		return {
		    restrict: 'E',
		    link: function(scope, elem){
		        var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
		        elem.append($compile(html)(scope));
		        scope.routeStyles = {};
		        $rootScope.$on('$routeChangeStart', function (e, next, current) {
		            if(current && current.$$route && current.$$route.css){
		                if(!angular.isArray(current.$$route.css)){
		                    current.$$route.css = [current.$$route.css];
		                }
		                angular.forEach(current.$$route.css, function(sheet){
		                    delete scope.routeStyles[sheet];
		                });
		            }
		            if(next && next.$$route && next.$$route.css){
		                if(!angular.isArray(next.$$route.css)){
		                    next.$$route.css = [next.$$route.css];
		                }
		                angular.forEach(next.$$route.css, function(sheet){
		                    scope.routeStyles[sheet] = sheet;
		                });
		            }
		        });
		    }
		};
	}])
	
    .run(function($rootScope, $location, session, auth) {
    	$rootScope.session = session;
    	$rootScope.auth = auth;
    	
    	$rootScope.logout = function(){
    		auth.logout();
    		$location.path('/');
    	}
    	
	    $rootScope.$on("$routeChangeStart", function(event, next, current) {
	    	$rootScope.hideNavbar = false;
	    	$rootScope.hideFooter = false;
	    	
	    	if(auth.isLoggedIn() && next.redirectIfLoggedIn){
	    		$location.path('/');
	    	}
	    });
	});

angular
	.module('auth', ['api', 'session'])
	.service('auth',  ['api', 'session', function(api, session){
		this.isLoggedIn = function(){
			return session.getCurrentUser() !== null;
		}
		
		this.login = function(token, user, callback){
			
		}
		
		this.logout = function(){
			session.setAuthToken(null);
			session.setCurrentUser(null);
		}
	}]);

angular
	.module('session', [])
	.service('session',  [function(){
		this._authToken = null;
		this._currentUser = null;
		
		this.setAuthToken = function(token){
			this._authToken = token;
		}
		
		this.getAuthToken = function(){
			return this._authToken;
		}
		
		this.setCurrentUser = function(user){
			this._currentUser = user;
		}
		
		this.getCurrentUser = function(){
			return this._currentUser;
		}
	}]);

angular
	.module('api', ['ngResource', 'session'])
    .factory('api', ['$resource', 'session', function($resource, session){
    	var serverAddress = 'http://spherechat.tk:8000/';
    	
    	var api = {};
    	
    	api.login = $resource(serverAddress + 'api/auth/login/');
    	api.register = $resource(serverAddress + 'api/auth/registration/');
    	
    	api.friendship = $resource(serverAddress + 'api/friendship/friendship/', {headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}});
    	api.friendrequest = $resource(serverAddress + 'api/friendship/friendrequest/', {headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}});
    	
    	api.user = $resource(serverAddress + 'api/users/', {headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}}, {
    		'getCurrent': {
    			method: 'GET',
    			url: serverAddress + 'api/me/',
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'getOne': {
    			method: 'GET',
    			url: serverAddress + 'api/users/:id/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		}
    	});
    	
    	api.channel = $resource(serverAddress + 'api/messaging/channel/', {headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}}, {
    		'getOne': {
    			method: 'GET',
    			url: serverAddress + 'api/messaging/channel/:id/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
	    	'getMessages': {
				method: 'GET',
				url: serverAddress + 'api/messaging/channel/:id/message/',
				params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
			},
    		'getOneMessage': {
    			method: 'GET',
    			url: serverAddress + 'api/messaging/channel/:channelId/message/:messageId/',
    			params: {discussionId: '@channelId', messageId: '@messageId'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
			'postMessage': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/channel/:channelId/message/',
    			params: {discussionId: '@channelId'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postHeartbeat': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/channel/:id/tune/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postAllRead': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/channel/:id/see/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postAddMembers': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/channel/:id/add_members/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		}
    	});
    	
    	api.privateDiscussion = $resource(serverAddress + 'api/messaging/privatediscussion/', {headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}}, {
    		'getOne': {
    			method: 'GET',
    			url: serverAddress + 'api/messaging/privatediscussion/:id/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'getMessages': {
    			method: 'GET',
    			url: serverAddress + 'api/messaging/privatediscussion/:id/message/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'getOneMessage': {
    			method: 'GET',
    			url: serverAddress + 'api/messaging/privatediscussion/:discussionId/message/:messageId/',
    			params: {discussionId: '@discussionId', messageId: '@messageId'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postMessage': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/privatediscussion/:discussionId/message/',
    			params: {discussionId: '@discussionId'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postHeartbeat': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/privatediscussion/:id/tune/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postAllRead': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/privatediscussion/:id/see/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		},
    		'postAddMembers': {
    			method: 'POST',
    			url: serverAddress + 'api/messaging/privatediscussion/:id/add_members/',
    			params: {id: '@id'},
    			headers: {'Authorization': function(){return 'Token ' + session.getAuthToken()}}
    		}
    	});
    	return api;
    }]);