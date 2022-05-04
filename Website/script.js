
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);


function next(){
    location.href = 'https://www.hotstar.com/in/sports/cricket/indian-premier-league/mumbai-indians-vs-chennai-super-kings-m705416/live-streaming/1540014215';
}
