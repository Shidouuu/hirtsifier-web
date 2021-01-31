function getText() {
    const getInput = document.getElementById("input"); 
    const txtInput = getInput.value;
    const txtOutput = document.getElementById("output");
    txtOutput.value = txtInput.replace(/b|m|n|\,|\.|\<|\>/ig, '');
}
function hirts() {
    const getHirts = document.getElementById("hirts");
}
function copy() {
    const copyText = document.querySelector("#output");
    copyText.select();
    document.execCommand("copy");
    }
function countChars(obj){
    document.getElementById("char_num").innerHTML = obj.value.length;
}