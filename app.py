import streamlit as st
import streamlit.components.v1 as components
import subprocess
from pathlib import Path

st.set_page_config(page_title="Marketing Codex", layout="wide")

st.write("## Marketing Codex")

st.info(
    "Esta aplicação utiliza uma interface construída em Next.js.\n"
    "Execute `npm run build` no diretório `marketing-codex` para gerar os arquivos em `marketing-codex/out` e, em seguida, inicie este app."
)

build_path = Path('marketing-codex/out/index.html')

if not build_path.exists():
    st.warning('Arquivo de build não encontrado. Tentando executar `npm run build`...')
    try:
        subprocess.check_call(['npm', 'run', 'build'], cwd='marketing-codex')
    except FileNotFoundError:
        st.error('npm não encontrado. Verifique a instalação do Node.js.')
    except subprocess.CalledProcessError as e:
        st.error('Falha ao executar `npm run build`. Rode manualmente para ver detalhes.')

if build_path.exists():
    with open(build_path) as f:
        html = f.read()
    components.html(html, height=800, scrolling=True)
else:
    st.error('Arquivo build não encontrado. Execute `npm run build` primeiro.')
