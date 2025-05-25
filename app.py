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
except FileNotFoundError:
    st.warning('Build não encontrado. Executando `npm run build`...')
    import subprocess
    result = subprocess.run(
        ['npm', 'run', 'build'],
        cwd='marketing-codex',
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    st.text(result.stdout)
    if result.returncode != 0:
        st.error('Falha ao executar `npm run build`. Veja o log acima.')
        st.stop()
    with open('marketing-codex/out/index.html') as f:
        html = f.read()

components.html(html, height=800, scrolling=True)
