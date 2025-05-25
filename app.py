import streamlit as st
import streamlit.components.v1 as components
import subprocess

st.set_page_config(page_title="Marketing Codex", layout="wide")

st.write("## Marketing Codex")

st.info(
    "Esta aplicação utiliza uma interface construída em Next.js.\n"
    "Execute `npm run build` no diretório `marketing-codex` para gerar os arquivos em `marketing-codex/out` e, em seguida, inicie este app."
)

try:
    with open("marketing-codex/out/index.html") as f:
        html = f.read()
    components.html(html, height=800, scrolling=True)
except FileNotFoundError:
    st.warning("Arquivo build não encontrado. Tentando executar `npm run build`...")
    try:
        subprocess.run(["npm", "run", "build"], cwd="marketing-codex", check=True)
        with open("marketing-codex/out/index.html") as f:
            html = f.read()
        components.html(html, height=800, scrolling=True)
    except Exception:
        st.error(
            "Não foi possível gerar o build automaticamente.\n"
            "Certifique-se de que as dependências estão instaladas e execute `npm run build` manualmente."
        )
