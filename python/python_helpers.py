
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

def num_tokens_from_messages(messages, model="gpt-3.5-turbo-0301"):
    """Returns the number of tokens used by a list of messages."""
    try:
        encoding = tiktoken.encoding_for_model(model)
    except KeyError:
        print("Warning: model not found. Using cl100k_base encoding.")
        encoding = tiktoken.get_encoding("cl100k_base")
    if model == "gpt-3.5-turbo":
        print("Warning: gpt-3.5-turbo may change over time. Returning num tokens assuming gpt-3.5-turbo-0301.")
        return num_tokens_from_messages(messages, model="gpt-3.5-turbo-0301")
    elif model == "gpt-4":
        print("Warning: gpt-4 may change over time. Returning num tokens assuming gpt-4-0314.")
        return num_tokens_from_messages(messages, model="gpt-4-0314")
    elif model == "gpt-3.5-turbo-0301":
        tokens_per_message = 4  # every message follows <|start|>{role/name}\n{content}<|end|>\n
        tokens_per_name = -1  # if there's a name, the role is omitted
    elif model == "gpt-4-0314":
        tokens_per_message = 3
        tokens_per_name = 1
    else:
        raise NotImplementedError(f"""num_tokens_from_messages() is not implemented for model {model}. See https://github.com/openai/openai-python/blob/main/chatml.md for information on how messages are converted to tokens.""")
    num_tokens = 0
    for message in messages:
        num_tokens += tokens_per_message
        for key, value in message.items():
            num_tokens += len(encoding.encode(value))
            if key == "name":
                num_tokens += tokens_per_name
    num_tokens += 3  # every reply is primed with <|start|>assistant<|message|>
    return num_tokens


example_messages = [
    {
        "role": "system",
        "content": "You are a helpful, pattern-following assistant that translates corporate jargon into plain English.",
    },
    {
        "role": "system",
        "name": "example_user",
        "content": "New synergies will help drive top-line growth.",
    },
    {
        "role": "system",
        "name": "example_assistant",
        "content": "Things working well together will increase revenue.",
    },
    {
        "role": "system",
        "name": "example_user",
        "content": "Let's circle back when we have more bandwidth to touch base on opportunities for increased leverage.",
    },
    {
        "role": "system",
        "name": "example_assistant",
        "content": "Let's talk later when we're less busy about how to do better.",
    },
    {
        "role": "user",
        "content": "This late pivot means we don't have time to boil the ocean for the client deliverable.",
    },
]


print(num_tokens_from_messages(example_messages, "gpt-3.5-turbo"))


def code_review(file_path):
    with open(file_path, "r") as file:
        content = file.read()