
document.getElementById('submitButton').addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const orderType = document.getElementById('orderType').value;
    const gender = document.getElementById('gender').value;
    const cold = document.getElementById('cold').checked;
    const hot = document.getElementById('hot').checked;

    let temperature = '';
    if (cold) temperature = 'Cold';
    if (hot) temperature = (temperature ? temperature + ' and ' : '') + 'Hot';

    const submittedData = `
        <strong>Name:</strong> ${name}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Order Type:</strong> ${orderType}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Drink Temperature:</strong> ${temperature || 'None'}<br>
    `;

    document.getElementById('submittedData').innerHTML = submittedData;

}