function PrimeOrNot(value){


    var i,flag=0,number;
    //number = Number(document.getElementById("N").value);

    for(i=2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = 1;
            break;
        }
    }
    if(flag == 0)
    {
       // window.alert(number+"-The inputed number is Prime");
       return true;
    }
    else
    {
       // window.alert(number+"-The inputted number is not Prime");
       return false;
    }



}

QUnit.test("PrimeOrNot", function(assert) {
    assert.ok(PrimeOrNot(3), true, "The addition of two numbers of 30-30 is 60");
    assert.ok(PrimeOrNot(5), true, "The addition of two numbers of 20-20 is 40");
    assert.ok(PrimeOrNot(7), true, "The addition of two numbers of 10-10 is 20");
    assert.notOk(PrimeOrNot(20), false, "The addition of two numbers of 5-5 is 10");
    assert.notOk(PrimeOrNot(30), false, "The addition of two numbers of 35-35 is 70");
    
 });