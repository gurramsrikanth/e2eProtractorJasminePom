describe('Addition', function(){
	it('sum of 5+2 should be 7', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(5);
		element(by.model('second')).sendKeys(2);
		element(by.id('gobutton')).click();
		result = element(by.binding('latest')).getText();
		expect(result).toEqual('7');
		
		element(by.model('first')).sendKeys(1);
	    element(by.model('second')).sendKeys(2);
	
	    element(by.id('gobutton')).click();
	    
	    result = element.all(by.repeater('result in memory'));
	    expect(result.count()).toEqual(2);
	    
	    expect(result.first).toContain('1 + 2');
	
	});
	
	
});

