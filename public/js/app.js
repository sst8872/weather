const form = document.querySelector('.search');
const output = document.querySelector('.output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let address = form['search-weather'].value;
    fetchWeather(address);
    form.reset();
});

function fetchWeather(address) {
    fetch(`/weather?address=${address}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                output.textContent = data.error
            } else {
                output.innerHTML = '';
                const h3 = document.createElement('h3');
                h3.textContent = data.location;
                output.appendChild(h3);
                const p = document.createElement('p');
                p.textContent = data.forecastData;
                output.appendChild(p);
            }
    });
}
