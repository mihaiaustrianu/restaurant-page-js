import './styles.css';

function component(){
    const headline = document.createElement('div');
    headline.classList.add('headline');
    const title = document.createElement('h2');
    title.innerText = "Mihai's"

    headline.appendChild(title);
    return headline;
}
content = document.querySelector('.content')
content.appendChild(component());