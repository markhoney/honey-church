# Guru

```sh
choco install -y cuda --version=10.1
choco install -y python --version=3.7.9
pip install --upgrade pip
pip3 install gpt-2-simple tensorflow=gpu==1.15
wget https://developer.nvidia.com/compute/machine-learning/cudnn/secure/7.6.5.32/Production/10.1_20191031/cudnn-10.1-windows10-x64-v7.6.5.32.zip
```




```sh
wget --recursive --page-requisites --html-extension --no-parent --domains www.sacred-texts.com www.sacred-texts.com
```

```sh
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
