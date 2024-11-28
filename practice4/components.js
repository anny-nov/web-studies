class MyAccessibleComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Styles for accessibility
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                margin: 10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-family: Arial, sans-serif;
            }
            h1, p {
                margin: 0;
                padding: 8px;
            }
            h1:focus, p:focus {
                outline: 2px solid #007BFF;
                outline-offset: 4px;
            }
        `;

        // Content of the component
        const wrapper = document.createElement('div');
        const title = document.createElement('h1');
        title.setAttribute('tabindex', '0');
        title.textContent = this.getAttribute('title') || 'Заголовок';

        const paragraph = document.createElement('p');
        paragraph.setAttribute('tabindex', '0');
        paragraph.textContent = this.getAttribute('text') || 'Текст абзаца';

        // Adding SpeechSynthesis for focus
        const speak = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        };

        title.addEventListener('focus', () => speak(title.textContent));
        paragraph.addEventListener('focus', () => speak(paragraph.textContent));

        wrapper.appendChild(title);
        wrapper.appendChild(paragraph);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('my-accessible-component', MyAccessibleComponent);
