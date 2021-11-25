const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
    <ul>
      <li><a href="index.html">Inicio</a></li>
      <li><a href="index2.html">Contacto</a></li>
      <li><a href="index3.html">Galeria</a></li>
    </ul>
    <ul class="social-row">
    <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-google-plus-g"></i></a>
                    </li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
  
  customElements.define('footer-component', Footer);