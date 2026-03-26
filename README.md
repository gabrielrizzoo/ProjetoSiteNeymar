# ⚽ Neymar Jr. Portfolio | The Professional Refactor

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Este projeto é uma **revisão completa e profissional** de um site desenvolvido originalmente em 2023, durante o 1º período do curso de Ciência da Computação na Universidade Veiga de Almeida (UVA). 

Recentemente, em 2026, decidi retomar o código para aplicar conceitos avançados de **Engenharia de Software**, **UI/UX Design** e **Clean Code**, transformando um exercício acadêmico em um portfólio de alto nível.

---

## 🔄 O Grande Retrabalho (Refactor Log)

Diferente da versão original entregue em sala de aula, esta versão foi reconstruída exclusivamente por mim para demonstrar minha evolução técnica ao longo da graduação. As principais melhorias foram:

### 🎨 Engenharia de Estilos & UI/UX
* **Unificação de Arquitetura:** Substituí a estrutura redundante de múltiplos arquivos (`portifolio.css`, `novidades.css`, `detalhes.css`) por um sistema global e robusto concentrado no `style1.css`.
* **Design System com Variáveis:** Implementação de uma paleta de cores e sistema de transições centralizados via `:root` CSS, facilitando a manutenção.
* **Micro-interações:** Adição de efeitos de `hover` com zoom suave em imagens, barra de rolagem personalizada e efeitos de *glassmorphism* (desfoque de fundo) nos cards de conteúdo.
* **Responsividade Completa:** O layout foi refatorado para ser totalmente adaptável (Mobile-First) utilizando `flexbox` e `media queries`.

### 🛠️ Otimização de Código
* **Separação de Responsabilidades:** Removi scripts que antes eram executados "inline" no HTML e centralizei toda a lógica de animação no arquivo `script.js`.
* **Aprimoramento de Animações:** Refinei o uso da biblioteca **ScrollReveal.js**, criando revelações de elementos mais fluidas e profissionais.
* **Semântica HTML:** Melhorei a organização das tags para garantir uma estrutura mais limpa e melhor preparada para SEO.

---

## ✨ Funcionalidades Atuais

* 🚀 **Efeito Parallax:** Navegação com profundidade nas imagens de fundo controlada via CSS puro.
* 📱 **Navegação Inteligente:** Menu fixo com *blur* dinâmico para garantir legibilidade em qualquer ponto da página.
* 🎥 **Cards de Conteúdo:** Organização visual premium para as conquistas e projetos do atleta.
* 🔗 **Hub de Contatos:** Seção dedicada com integração direta às plataformas oficiais do Neymar Jr.

---

## 🛠️ Stack Tecnológica

As seguintes ferramentas foram fundamentais nesta nova etapa do projeto:

* **HTML5:** Estruturação semântica avançada.
* **CSS3:** Uso intensivo de Flexbox, Variáveis, Transições e Backdrop Filter.
* **JavaScript (Vanilla):** Manipulação de eventos e lógica de animação.
* **ScrollReveal.js:** Biblioteca externa para efeitos de revelação.
* **Google Fonts:** Utilização da família *Poppins* para um visual moderno e limpo.

---

## 👨‍💻 Autoria e Créditos

Este projeto possui duas fases de autoria:

1. **Versão Original (2023):** Desenvolvida em dupla por Gabriel Rizzo e Pedro Tavares como parte da grade curricular.
2. **Versão Refatorada (2026):** Reformulação total de design e engenharia realizada exclusivamente por **Gabriel Rizzo**.
