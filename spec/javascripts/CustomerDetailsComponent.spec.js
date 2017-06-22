var proxyquire = require("proxyquire");
var CustomerDetailsComponent = proxyquire(
    "../../webpack/CustomerDetailsComponent",
    {
        "./CustomerDetailsComponent.html": {
            "@noCallThru": "true"
        }
    }
);

var createMockRoute = function(id) {
    var observable = td.object(["subscribe"]);
    var routeParams = { "id" : id };
    var mockActivatedRoute = { "params": observable };
    td.when(observable.subscribe(
        td.callback(routeParams),
        td.matchers.isA(Function)
    )).thenReturn();
    return mockActivatedRoute;
};

var td = require("testdouble");
var component = null;
describe("CustomerDetailsComponentComponent", function() {
    describe("initial state", function() {
        beforeEach(function() {
            component = new CustomerDetailsComponent();
        });
        it("sets customer to null", function() {
            expect(component.customer).toBe(null);
        });
    });
    describe("ngOnInit", function() {
        var customer = {
            id: 1,
            created_at: (new Date()).toString(),
            first_name: "Pat",
            last_name: "Jones",
            username: "pj",
            email: "pjones@somewhere.net"
        }
    // more setup to come ...
        beforeEach(function() {
            var route = createMockRoute(customer.id);
            var http = createMockHttp(customer);
            component = new CustomerDetailsComponent(route,http);
        });
        it("fetches the customer from the back-end", function() {
            component.ngOnInit();
            expect(component.customer).toBe(customer);
        });
    });
});
