
const transferFnc = require('../js/transfer')

const today  = () =>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
} 

test('Checking payment method: ', () =>{
    expect(transferFnc()).toBe(today());
});

