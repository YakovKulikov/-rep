const handle = () => {
    const inputs = document.querySelector("input");
    let arr = [];
    // for (i=0; i < inputs.length; i++) {
    //     arr.push(inputs[i].value)
    // }
    inputs.forEach(el => arr.push(el.value))
    alert(arr.join(""));
    console.log("Hello")
}
    const button = document.querySelector(".btn");
    button.addEventListener("click", handle);