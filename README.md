# Marketing Codex

Esta aplicação oferece uma interface moderna para jornalistas e equipes de marketing utilizando Next.js e Tailwind CSS. O front-end é empacotado e exibido via Streamlit.

## Pré-requisitos
- Node.js e npm instalados
- Python 3.11 ou superior

## Passo a passo
1. Instale as dependências do Node:
   ```bash
   cd marketing-codex
   npm install
   ```
2. Gere os arquivos estáticos do Next.js:
   ```bash
   npm run build
   ```
   Os arquivos serão criados em `marketing-codex/out`.
3. Instale as dependências Python:
   ```bash
   pip install -r requirements.txt
   ```
4. Inicie o app com Streamlit:
   ```bash
   streamlit run app.py
   ```

O `app.py` executa `npm run build` automaticamente caso o diretório `out` ainda não exista.
