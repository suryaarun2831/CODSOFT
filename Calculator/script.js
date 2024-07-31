var display=document.getElementById('display');
function calculate()
{
    display.innerText=eval(display.innerText);
}
function appendValue(num)
{
    if(display.innerText == '0'){
        display.innerText=num.toString();
    }
    else{
        display.innerText+=num;
    }
}
function clearDisplay()
{
    display.innerText='0';
}
function deleteLast()
{
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}
document.querySelector('.AC').addEventListener('click',clearDisplay);
document.querySelector('.DE').addEventListener('click',deleteLast);
document.querySelector('.point').addEventListener('click',function(){appendValue('.')});
document.querySelector('.div').addEventListener('click',function(){appendValue('/')});
document.querySelector('.seven').addEventListener('click',function(){appendValue('7')});
document.querySelector('.eight').addEventListener('click',function(){appendValue('8')});
document.querySelector('.nine').addEventListener('click',function(){appendValue('9')});
document.querySelector('.four').addEventListener('click',function(){appendValue('4')});
document.querySelector('.five').addEventListener('click',function(){appendValue('5')});
document.querySelector('.six').addEventListener('click',function(){appendValue('6')});
document.querySelector('.one').addEventListener('click',function(){appendValue('1')});
document.querySelector('.two').addEventListener('click',function(){appendValue('2')});
document.querySelector('.three').addEventListener('click',function(){appendValue('3')});

document.querySelector('.doublezero').addEventListener('click',function()
{
    appendValue('0');
    appendValue('0');
}
);
document.querySelector('.zero').addEventListener('click',function(){appendValue('0')});
document.querySelector('.percent').addEventListener('click',function(){appendValue('%')});

document.querySelector('.mul').addEventListener('click',function(){appendValue('*')});
document.querySelector('.dif').addEventListener('click',function(){appendValue('-')});
document.querySelector('.add').addEventListener('click',function(){appendValue('+')});
document.querySelector('.equal').addEventListener('click',calculate);