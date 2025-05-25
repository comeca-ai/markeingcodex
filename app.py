import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Marketing Codex", layout="wide")

st.write("## Marketing Codex")

st.info(
    "Esta aplicação utiliza uma interface construída em Next.js.\n"
    "Execute `npm run build` no diretório `marketing-codex` para gerar os arquivos em `marketing-codex/out` e, em seguida, inicie este app."
)

try:
    with open('marketing-codex/out/index.html') as f:
        html = f.read()
    components.html(html, height=800, scrolling=True)
except FileNotFoundError:
    st.error('Arquivo build não encontrado. Execute `npm run build` primeiro.')
