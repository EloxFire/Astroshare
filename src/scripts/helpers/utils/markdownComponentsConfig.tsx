
import React from 'react';

export const markdownCustomConfig = {
  h1: ({ node, ...props }: any) => <h1 className="remark-h1" {...props} />,
  h2: ({ node, ...props }: any) => <h2 className="remark-h2" {...props} />,
  h3: ({ node, ...props }: any) => <h3 className="remark-h3" {...props} />,
  h4: ({ node, ...props }: any) => <h4 className="remark-h4" {...props} />,
  h5: ({ node, ...props }: any) => <h5 className="remark-h5" {...props} />,
  h6: ({ node, ...props }: any) => <h6 className="remark-h6" {...props} />,
  p: ({ node, ...props }: any) => <p className="remark-p" {...props} />,
  a: ({ node, ...props }: any) => <a className="remark-a" {...props} />,
  ul: ({ node, ...props }: any) => <ul className="remark-ul" {...props} />,
  ol: ({ node, ...props }: any) => <ol className="remark-ol" {...props} />,
  li: ({ node, ...props }: any) => <li className="remark-li" {...props} />,
  table: ({ node, ...props }: any) => <table className="remark-table" {...props} />,
  thead: ({ node, ...props }: any) => <thead className="remark-thead" {...props} />,
  tbody: ({ node, ...props }: any) => <tbody className="remark-tbody" {...props} />,
  tr: ({ node, ...props }: any) => <tr className="remark-tr" {...props} />,
  th: ({ node, ...props }: any) => <th className="remark-th" {...props} />,
  td: ({ node, ...props }: any) => <td className="remark-td" {...props} />,
  blockquote: ({ node, ...props }: any) => <blockquote className="remark-blockquote" {...props} />,
  code: ({ node, ...props }: any) => <code className="remark-code" {...props} />,
  img: ({ node, ...props }: any) => <img className="remark-img" {...props} />,
  em: ({ node, ...props }: any) => <em className="remark-em" {...props} />,
  strong: ({ node, ...props }: any) => <strong className="remark-strong" {...props} />,
  hr: ({ node, ...props }: any) => <hr className="remark-hr" {...props} />,
};
