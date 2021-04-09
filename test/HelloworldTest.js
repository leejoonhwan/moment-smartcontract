// test_hello.js
const helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", function(accounts){

    before(async () =>{
        this.instance = await helloWorld.deployed();
    });

    
   it("greeting()", async () => {
        const greeting = await this.instance.greeting();
        console.log(greeting);
        assert.equal(greeting, "hello world!", "Wrong initialized value!");
    });
    
    
    
    it("setGreeting()", async () => {
        const val = "Hello, JSH!";

        await this.instance.setGreeting(val, {from: accounts[0]});
        const greeting = await this.instance.say();

        assert.equal(greeting, val, "dose not change the value!");
    });

});