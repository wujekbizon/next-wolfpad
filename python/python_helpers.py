
import tiktoken
enc = tiktoken.encoding_for_model('gpt-3.5-turbo')

number = len(enc.encode('Hello world!'))

def num_tokens_from_string(string:str, model_name:str) -> int:
  """Returns  the number of tokens in a text string."""
  encoding = tiktoken.encoding_for_model(model_name)
  num_tokens = len(encoding.encode(string))
  return num_tokens