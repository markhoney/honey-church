import os
import gpt_2_simple as gpt2

model_name = "355M"
if not os.path.isdir(os.path.join("models", model_name)):
	print(f"Downloading {model_name} model...")
	gpt2.download_gpt2(model_name = model_name)

sess = gpt2.start_tf_sess()
gpt2.finetune(sess, "qanon.txt", model_name = model_name, run_name = 'qanon', steps = 1000)
gpt2.generate(sess)
