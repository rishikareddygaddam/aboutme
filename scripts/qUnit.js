const regex=/^[a-zA-Z]+$/;
function validation(name) {
    if(regex.test(name)) {
        return name;
    } else {
        return null;
    }
}

QUnit.module(" Validation ")

QUnit.test("validation for full name", function (assert) {
    assert.equal(validation("rishika"), "rishika", "name returns correctly when string is passed");
    assert.equal(validation(""), null, "Return null when passed empty string");
    assert.equal(validation("12345"), null, "Return null when a number is passed");
    assert.equal(validation("rishika 12345"), null, "Return null when a number is passed with a string");
    assert.equal( validation("12345 rishika"), null, "Return null when a number is passed with a string");
});