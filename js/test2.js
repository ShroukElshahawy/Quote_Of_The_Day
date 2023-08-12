var qoute =[
    {'qoute':"Its not what happens to you, but how you react to it that matters.",
    'Auther': "--Epictetus"
},
{'qoute':"The best revenge is massive success."
,
'Auther': "--Frank Sinatra"
},
{'qoute':"Resentment is like drinking poison and waiting for your enemies to die."
,
'Auther': "--Nelson Mandela"
},
{'qoute':"Resentment is like drinking poison and waiting for your enemies to die."

,
'Auther': "--Nelson Mandela"
},
]
function getQuate() {
var num=Math.floor(Math.random()*qoute.length)
console.log(num);
document.getElementById('qoute').innerHTML=qoute[num].qoute;
document.getElementById('auther').innerHTML=qoute[num].Auther;
}


