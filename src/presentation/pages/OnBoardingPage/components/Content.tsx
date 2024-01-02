import React from 'react';
import styled from 'styled-components';

const Content = ({ value, type }: { value: any; type: string }) => {
  let content = null;

  if (type === 'text') {
    content = value;
  } else if (type === 'list') {
    content = (
      <ol className="decimal">
        {value.map((text: string) => {
          return <li key={text}>{text}</li>;
        })}
      </ol>
    );
  } else if (type === 'explain-list') {
    content = (
      <>
        <div>{value.explain && value.explain} </div>
        <ol className="explainList decimal">
          {value.content.map((text: string) => {
            return <li key={text}>{text}</li>;
          })}
        </ol>
        <div>{value.wordExplain && value.wordExplain}</div>
      </>
    );
  } else if (type === 'alpha-list') {
    content = (
      <>
        <div>{value.explain && value.explain} </div>
        <ol className="explainList decimal">
          {value.content.map((text: { value: string; content: string[] }) => {
            return (
              <div key={text.value}>
                <li>{text.value}</li>
                <ol className="alpha">
                  {text.content.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ol>
              </div>
            );
          })}
        </ol>
        <div>{value.wordExplain && value.wordExplain}</div>
      </>
    );
  } else if (type === 'rome-list') {
    content = (
      <>
        <div>{value.explain && value.explain} </div>
        <ol className="explainList decimal">
          {value.content.map((text: { value: string; content: string[] }) => {
            return (
              <div key={text.value}>
                <li>{text.value}</li>
                <ol className="alpha">
                  {text.content.map((e: any) => (
                    <div key={e.value}>
                      <li>{e.value}</li>
                      <ol className="rome">
                        {e.content.map((el: string) => (
                          <li key={el}>{el}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </ol>
              </div>
            );
          })}
        </ol>
        <div>{value.wordExplain && value.wordExplain}</div>
      </>
    );
  }

  return <ContentWrapper>{content}</ContentWrapper>;
};

export default Content;

const ContentWrapper = styled.div`
  ol {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-left: 20px;
  }

  .decimal {
    list-style: decimal;
  }
  .alpha {
    list-style: lower-alpha;
  }
  .rome {
    list-style: lower-roman;
  }
  .explainList {
    color: #5c6983;
    font-size: 12px;
  }
`;
