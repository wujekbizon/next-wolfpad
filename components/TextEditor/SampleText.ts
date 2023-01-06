import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { $createListItemNode, $createListNode } from '@lexical/list';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createLinkNode } from '@lexical/link';

const prepopulatedText = () => {
  const root = $getRoot();

  const heading = $createHeadingNode('h1');
  heading.append($createTextNode('OpenAi Jarvis chatbot'));
  root.append(heading);
  const quote = $createQuoteNode();
  quote.append($createTextNode('This is a quote node.'));
  root.append(quote);
  const paragraph = $createParagraphNode();
  paragraph.append(
    $createTextNode('Here are some text formats: '),
    $createTextNode('code').toggleFormat('code'),
    $createTextNode(', '),
    $createTextNode('bold').toggleFormat('bold'),
    $createTextNode(', '),
    $createTextNode('italic').toggleFormat('italic'),
    $createTextNode(' and so on.')
  );
  root.append(paragraph);

  const paragraph2 = $createParagraphNode();
  paragraph2.append($createTextNode(`Here is a list example:`));
  root.append(paragraph2);
  const list = $createListNode('bullet');
  list.append(
    $createListItemNode().append(
      $createTextNode(`These are links (e.g., `),
      $createLinkNode('https://wolfai-chat-bot.vercel.app/').append(
        $createTextNode('The New Era Of AI')
      ),
      $createTextNode(`).`)
    ),
    $createListItemNode().append(
      $createTextNode(`Press twice on the link to see and edit the URL.`)
    )
  );
  root.append(list);
  const paragraph3 = $createParagraphNode();
  paragraph3.append(
    $createTextNode(
      `Press the bottom right button to switch to Markdown & vice versa.`
    )
  );
  root.append(paragraph3);
};

export default prepopulatedText;

export const testText = () => {
  const root = $getRoot();

  const heading = $createHeadingNode('h1');
  heading.append($createTextNode('Click me'));
  root.append(heading);
};
