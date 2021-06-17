# Guru

First install python:

```powershell
choco install -y python --version=3.7.9
py -3.7 -m pip install --upgrade pip
py -3.7 -m pip install gpt-2-simple
```
Then install the TensorFlow library. Either the CPU version:

```powershell
py -3.7 -m pip install gpt-2-simple tensorflow==1.15
```

or the faster GPU version (if you have a recent GPU):

```powershell
choco install -y cuda --version=10.1
wget https://developer.nvidia.com/compute/machine-learning/cudnn/secure/7.6.5.32/Production/10.1_20191031/cudnn-10.1-windows10-x64-v7.6.5.32.zip
py -3.7 -m install gpt-2-simple tensorflow-gpu==1.15
```

```powershell
wget --recursive --page-requisites --html-extension --no-parent --domains www.sacred-texts.com www.sacred-texts.com
```

```powershell
git clone https://github.com/chesters99/TextSimilarityAnalysis.git
rm TextSimilarityAnalysis/books/JaneAusten-*.txt
rm TextSimilarityAnalysis/books/Shakespeare-*.txt
```

```sh
cd data
wget https://www.gutenberg.org/files/17/17-0.txt
wget https://www.gutenberg.org/files/30/30.txt
wget https://www.gutenberg.org/files/124/124.txt
wget https://www.gutenberg.org/files/216/216.txt
wget https://www.gutenberg.org/files/2017/2017.txt
wget https://www.gutenberg.org/files/2388/2388.txt
wget https://www.gutenberg.org/files/2800/2800.txt
wget https://www.gutenberg.org/files/3283/3283-8.txt
wget https://www.gutenberg.org/files/3458/3458.txt
wget https://www.gutenberg.org/files/16523/16523-0.txt
wget https://www.gutenberg.org/files/24737/24737.txt
cd ..
type data/*.txt > texts.txt
```

```sh
py -3.7 index.py
```
