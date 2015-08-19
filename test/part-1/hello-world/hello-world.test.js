var hello = require("../../../src/part-1/hello-world/hello-world");
var expect = require("chai").expect;

describe("Test the function sayHello", function() {
    "use strict";

    it("sayHello(); should return \"Hello, World!\"", function(done) {
        expect(hello.sayHello()).to.eql("Hello, World!");
        done();
    });

});
