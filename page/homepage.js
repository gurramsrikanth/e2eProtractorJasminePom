var home_page = function(){
		var greetingInput = element(by.model('yourName'));
		var message = element(by.binding('yourName'));
		var todoList = element.all(by.repeater('todo in todoList.todos'));
		var todoInput = element(by.model('todoList.todoText'));
		var todoAddButton = element(by.buttonText('add'));
		var todoAddBtnCss = element(by.css('.btn-primary[value=add]'));
		
		this.setMessage = function(message){
			greetingInput.sendKeys('Srikanth');
		}
		
		this.getMessage = function(){
			return message.getText();
		}
		
		this.get = function(){
			browser.get('https://www.angularjs.org/');
		}
		
		this.getTodoListCount = function(){
			return todoList.count();
		}
		
		this.getFirstTask = function(){
			return todoList.first().getText();
		}
		
		this.addTodo = function(task){
			todoInput.sendKeys(task);
			todoAddButton.click();
		}
		
		this.getTodoTask = function(index){
			return todoList.get(index).getText();
		}
		
		this.completeTask = function(index){
			todoList.get(index).click();
		}
	};

	
module.exports = new home_page();
