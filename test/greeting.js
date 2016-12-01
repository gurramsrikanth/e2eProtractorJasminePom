describe('greeting functionality', function(){
	var homePage;
	
	beforeEach(function(){
		homePage = require('../page/homepage.js')
		homePage.get();
	});
	
	it('Verify Greeting message', function(){		
		homePage.setMessage('Srikanth');		
		expect(homePage.getMessage()).toEqual('Hello Srikanth!');
	});
	
	it('List of To-dos', function(){		
		expect(homePage.getTodoListCount()).toEqual(2);		
		expect(homePage.getFirstTask()).toEqual('learn angular');
	});
	
	it('add todos', function(){				
		homePage.addTodo("Todo 1");
//		browser.pause();
		homePage.addTodo("Todo 2");
		homePage.addTodo("Todo 3");
		
		expect(homePage.getTodoTask(2)).toEqual('Todo 1');
		expect(homePage.getTodoTask(3)).toEqual('Todo 2');
		
		for(i=0;i<homePage.getTodoListCount();i++){
			homePage.completeTask(i);
		}
		
	});
});
