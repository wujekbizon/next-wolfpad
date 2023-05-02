
import tiktoken
enc = tiktoken.encoding_for_model('gpt-3.5-turbo')

number = len(enc.encode('Hello world!'))

book_text = """
Mrs. Darling quivered and went to the window. It was securely fastened.
She looked out, and the night was peppered with stars. They were
crowding round the house, as if curious to see what was to take place
there, but she did not notice this, nor that one or two of the smaller
ones winked at her. Yet a nameless fear clutched at her heart and made
her cry, “Oh, how I wish that I wasn’t going to a party to-night!”

Even Michael, already half asleep, knew that she was perturbed, and he
asked, “Can anything harm us, mother, after the night-lights are lit?”

“Nothing, precious,” she said; “they are the eyes a mother leaves
behind her to guard her children.”

She went from bed to bed singing enchantments over them, and little
Michael flung his arms round her. “Mother,” he cried, “I’m glad of
you.” They were the last words she was to hear from him for a long
time.
"""

def num_tokens_from_string(string:str, model_name:str) -> int:
  """Returns  the number of tokens in a text string."""
  encoding = tiktoken.encoding_for_model(model_name)
  num_tokens = len(encoding.encode(string))
  return num_tokens


tokens = num_tokens_from_string(book_text, "gpt-3.5-turbo")
print(tokens)
price_per_token = 0.002 / 1000
price = num_tokens_from_string(book_text, "gpt-3.5-turbo") * price_per_token
print(price)