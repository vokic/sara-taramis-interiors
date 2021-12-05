function openNav() {
  document.getElementById("myTopnav").style.height = "300px";
  document.getElementById("main").style.marginTop = "300px";
  document.getElementById("button-open").style.display = "none";
}

function closeNav() {
  document.getElementById("myTopnav").style.height = "0";
  document.getElementById("main").style.marginTop = "0";
  document.getElementById("button-open").style.display = "block";
  
}



      fetch.onload = function() {
        if(this.status == 200 ) {
            var elem = JSON.parse();
            var output = '';
            for (var i=0, l=elem.elements.length; i<l ; i++) {
                output += `
                    <div>
                        <p>Name : ${elem.elements[i].name}</p>
                        <p>Symbol : ${elem.elements[i].symbol}</p>
                        <p>Number : ${elem.elements[i].number}</p>
                    </div> 
                `; 
            }
            $('.data').html(output);
        }}
        console.log(elem);