# Marketing Codex

Este projeto contém uma interface web em Next.js/Tailwind voltada para jornalistas e equipes de marketing. A aplicação pode ser exibida em um wrapper Streamlit.

## Pré-requisitos
- Node.js e npm
- Python 3.9+

## Passos para execução
1. Instale as dependências do projeto React:
   ```bash
   cd marketing-codex
   npm install
   npm run build
   ```
   Isso gerará os arquivos estáticos em `marketing-codex/out`.
2. Volte para a raiz e instale as dependências Python (se necessário):
   ```bash
   pip install -r requirements.txt
   ```
3. Inicie a aplicação pelo Streamlit:
   ```bash
   streamlit run app.py
   ```

O Streamlit carregará os arquivos exportados do Next.js. Caso o build não esteja presente, a aplicação exibirá uma mensagem de erro solicitando que o build seja executado.
