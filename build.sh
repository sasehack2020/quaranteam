conda create -c rdkit -n rdkit
conda activate rdkit
conda install -c conda-forge rdkit
python3 -m venv env
source env/bin/activate
pip install flask python-dotenv
npm install
npm start && npm start-api