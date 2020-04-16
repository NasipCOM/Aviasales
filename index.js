const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    inputCitiesTo = document.querySelector(".input__cities-to"),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart0');

const cities = ['Bishkek', 'Karakol', 'Osh',
    'Batken', 'Talas', 'Djalal-Abad', 'Naryn'];


const showCities = (input, list) => {
    list.textContent = '';
    if (input.value !== "") {


        const citiesFrom = cities.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase())
        });

        citiesFrom.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        })

    }
};

dropdownCitiesFrom.addEventListener('click', (event) => {
    dropdownCitiesFrom.textContent = '';
    const target = event.target;
    if (target.tagName.toLowerCase === 'li'); {
        inputCitiesFrom.value = target.textContent;
    }
});

inputCitiesFrom.addEventListener('input', () => {
    showCities(inputCitiesFrom, dropdownCitiesFrom);
});