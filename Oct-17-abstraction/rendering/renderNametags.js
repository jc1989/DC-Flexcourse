
function renderNametags(nametags) {
    let names = "";

    for (i = 0; i < nametags.length; i++){
        names += `
        <div class = "text-center mt-5 nametag">
        <div>
        <h4>Hello, my name is: </h4>
        </div>
        <div class = "nametags">
        ${nametags[i]}
        </div>
        </div>
    `
    }
    return names;
}
    

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}