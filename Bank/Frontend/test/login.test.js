const loginFnc =  require('../js/login')


test('Checking login validation: ', () =>{
    expect(loginFnc("carsd", "asdasd")).toBe(true);
    expect(loginFnc("", "")).toBe(false);
    expect(loginFnc("carlosmenacho", "ccccc")).toBe(true);
});

