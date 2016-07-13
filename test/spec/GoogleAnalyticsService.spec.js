/* globals testUtils */
describe('Service: GoogleAnalytics', function () {
  'use strict';

  var scope, GoogleAnalyticsService;

  testUtils().testSetup({
    'moduleName': 'GoogleAnalyticsModule',
    'translations': {
      'GoogleAnalytics': {
        'name': {
          'first': 'Luke'
        }
      }
    }
  });

  beforeEach(inject(function ($rootScope, _GoogleAnalyticsService_) {
    scope = $rootScope;
    GoogleAnalyticsService = _GoogleAnalyticsService_;
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should correctly say hello', function () {
    expect(GoogleAnalyticsService.sayHello()).toEqual('hello Luke');
  });
});
