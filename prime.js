
window.onload = function(e){ 
document.getElementById("myBtn").addEventListener("click", function(){
    Prime();
    
  });

  document.getElementById("myBtn").addEventListener("click", function(){
    
  });

function Prime()
        {
            
            number = Number(document.getElementById("N").value);

            const isPrime=PrimeOrNot(number);
            if(isPrime)
            {
               // window.alert(number+"-The inputed number is Prime");
                document.getElementById("result").innerHTML = "Given number is Prime";
            }
            else
            {
               // window.alert(number+"-The inputted number is not Prime");
                document.getElementById("result").innerHTML = "Given number is not Prime";
            }
        }
    }


    function PrimeOrNot(value){


        var i,flag=0,number;
        number = Number(document.getElementById("N").value);

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