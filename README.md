# Marketing Codex

This project provides a small demo interface for journalists and marketing teams. The web
interface is built with **Next.js** and **Tailwind CSS** while a minimal
**Streamlit** wrapper serves the exported static files.

## Setup

1. Install Node (v18 or newer) and Python 3.9+ on your system.
2. Install the Node dependencies:
   ```bash
   cd marketing-codex
   npm install
   ```
3. Build the Next.js project and export the static files:
   ```bash
   npm run build
   ```
   The generated files will appear in `marketing-codex/out`.
4. Install the Python requirement:
   ```bash
   pip install -r requirements.txt
   ```

## Running

After building the interface you can start the Streamlit wrapper:

```bash
streamlit run app.py
```

If `marketing-codex/out` is missing, `app.py` will attempt to run
`npm run build` automatically and display an error if building fails.
