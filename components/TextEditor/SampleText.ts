import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { $createListItemNode, $createListNode } from '@lexical/list';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createLinkNode } from '@lexical/link';

const prepopulatedText = () => {
  const root = $getRoot();

  const heading = $createHeadingNode('h1');
  heading.append(
    $createTextNode('Welcome to Wolfpad - an interactive coding environment.')
  );
  root.append(heading);

  const heading2 = $createHeadingNode('h1');
  heading2.append(
    $createTextNode(
      `You can write Javascript, see it executed, and write comprehensive documentation using built in markdown editor.`
    )
  );

  root.append(heading2);
  const list = $createListNode('number');
  list.append(
    $createListItemNode().append(
      $createTextNode(
        `The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell!`
      )
    ),
    $createListItemNode().append(
      $createTextNode(
        `You can show any React component, string, number, or anything else by calling the > show < function. This is a function built into this environment. Call show multiple times to show multiple values`
      )
    ),
    $createListItemNode().append(
      $createTextNode(
        `Re-order or delete cells using the buttons on the top right`
      )
    ),
    $createListItemNode().append(
      $createTextNode(
        `Add new cells by hovering on the divider between each cell`
      )
    )
  );
  root.append(list);
};

export default prepopulatedText;
