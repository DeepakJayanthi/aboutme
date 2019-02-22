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
    assert.ok(PrimeOrNot(3), true, "Given number is Prime");
    assert.ok(PrimeOrNot(5), true, "Given number is Prime");
    assert.ok(PrimeOrNot(7), true, "Given number is Prime");
    assert.ok(PrimeOrNot(11), true, "Given number is  Prime");
    assert.ok(PrimeOrNot(97), true, "Given number is  Prime");
    
 });