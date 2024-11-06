export interface HTMLElementData {
  tag: string;
  content: string;
  children: ChildData[];
}

export interface NodeData {
  nodeType: number;
  content: string;
}

export type ChildData = HTMLElementData | NodeData;

export function isHTMLElement(data: ChildData): data is HTMLElementData {
  return (data as HTMLElementData).tag !== undefined;
}

export function isNodeData(child: ChildData): child is NodeData {
  return (child as NodeData).nodeType !== undefined;
}

export function isTextNode(data: ChildData): data is NodeData {
  return (data as NodeData).nodeType === 3;
}

export function collectChildData(rootNode: Node): ChildData[] {
  const result: ChildData[] = [];

  if (rootNode.nodeType === Node.ELEMENT_NODE) {
    const element = rootNode as HTMLElement;
    const elementData: ChildData = {
      tag: element.tagName.toLowerCase(),
      content: "",
      children: []
    };

    // Se l'elemento ha un solo figlio di tipo testo, mettiamolo come content
    if (element.childNodes.length === 1 && element.firstChild?.nodeType === Node.TEXT_NODE) {
      elementData.content = element.firstChild.textContent?.trim() || "";
    } else {
      // Altrimenti processa i nodi figli
      element.childNodes.forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          elementData.children.push(...collectChildData(child));
        }
      });
    }

    result.push(elementData);
  }

  return result;
}