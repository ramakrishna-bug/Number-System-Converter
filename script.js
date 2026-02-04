function convert() {
    const number = document.getElementById("numberInput").value.trim();
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);
    const result = document.getElementById("result");

    if (number === "") {
        result.textContent = "⚠️ Please enter a number";
        return;
    }

    try {
        const decimal = parseInt(number, fromBase);
        if (isNaN(decimal)) throw "Invalid";

        const converted = decimal.toString(toBase).toUpperCase();
        result.textContent = `Result: ${converted}`;
    } catch {
        result.textContent = "❌ Invalid number for selected base";
    }
}
