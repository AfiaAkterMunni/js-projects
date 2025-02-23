// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();

});

// Calculate Results
function calculateResults(e) {
    // ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculateYear = parseFloat(years.value) * 12;


    //compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculateYear);
    const monthly = (principle * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculateYear).toFixed(2);
        totalInterest.value = ((monthly * calculateYear) - principle).toFixed(2);

        // Hide results
        document.getElementById('results').style.display = 'block';

        // Show loader
        document.getElementById('loading').style.display = 'none';
    }
    else {
        showErrorMessage('Please check your numbers');
    }

    e.preventDefault();
}

function showErrorMessage(error) {
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'none';
    errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card = document.querySelector('.card');
    heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
    // console.log(errorDiv);

    setTimeout(clearError, 3000);
}

//clear error message
function clearError() {
    document.querySelector('.alert').remove();
}