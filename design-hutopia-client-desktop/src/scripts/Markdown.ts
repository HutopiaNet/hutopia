interface Block {
  title: string;
  content: string;
  children: Block[];
  depth: number;
}

let delimiter = "###";

export function extractBlocks(text: string): Block[] {
  const regex = new RegExp(`${delimiter} *(\\w+)\n([\\s\\S]*?)\n${delimiter}`, 'g');

  function extractBlocksRecursive(text: string, depth = 0): Block[] {
    const blocks: Block[] = [];
    let match;

    // Cicla finché troviamo corrispondenze
    while ((match = regex.exec(text))) {
      const [, title, content] = match;

      // Estrai i figli solo se ci sono ulteriori match all'interno del contenuto
      const children = extractBlocksRecursive(content, depth + 1);

      blocks.push({
        title,
        content: content.trim(),
        children,
        depth,
      });

      // Aggiorna il testo rimanente togliendo la parte già processata
      text = text.slice(match.index + match[0].length);
      
      // Reset dell'indice della regex per evitare di processare lo stesso testo
      regex.lastIndex = 0;
    }

    return blocks;
  }

  return extractBlocksRecursive(text);
}

export function renderBlocks(blocks: Block[]): string {
  console.log('renderBlocks');

  return blocks.map(block => {
    const { title, content, children, depth } = block;
    const childrenHtml = renderBlocks(children);

    return `
      <div class="depth-${depth}">
        <div class="md-bar"/>

        <div>
          <h2>${title}</h2>
          <div>${content.replace(/\n/g, '<br />')}</div>
          ${childrenHtml}
        </div>
      </div>
    `;
  }).join('');
}

export function renderBlocksToVNode(blocks: Block[]): string {
  return blocks.map(block => {
    const { title, content, children, depth } = block;
    const childrenHtml = renderBlocks(children);

    return `
      <div class="depth-${depth}">
        <div class="md-bar"/>

        <div>
          <h2>${title}</h2>
          <div>${content.replace(/\n/g, '<br />')}</div>
          ${childrenHtml}
        </div>
      </div>
    `;
  }).join('');
}

export const testString = `
### chapter1
Introduzione
### section1.1
Argument 1
###
###

### chapter2
Conclusions
###
`;

export const blocks = extractBlocks(testString);
export const html = renderBlocks(blocks);

//console.log(html);
