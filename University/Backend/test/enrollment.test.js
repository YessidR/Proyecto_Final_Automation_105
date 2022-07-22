const {newEnrollment} = require('../config/Enrollment');

test('insert into Enrollment Table: ', () => {
    data = {
        id_student : 3,
        validation_date : '10/07/2022',
        date : '10/08/2022',
        code_1 : 'ABCDE',
        code_2 : 'FGHIJ',
        code_3 : 'KLMNO',
        code_4 : 'PQRST',
        code_5 : 'UVWXY'
    }
    res = {}
    expect(newEnrollment(data,res)).toBe("test passed")
});