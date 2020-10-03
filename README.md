# Quaranteam

SASEHack 2020 project

## Run locally

```
git clone https://github.com/sasehack2020/quaranteam.git
cd quaranteam
conda create -c rdkit -n rdkit
conda activate rdkit
conda install -c conda-forge rdkit
python3 -m venv env
source env/bin/activate
pip install flask python-dotenv
npm install
npm start && npm start-api
```