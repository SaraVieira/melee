// @flow
import React, { Component } from 'react';
import showdown from 'showdown';
import Parser from 'html-react-parser';
import ls from 'local-storage';
import style from './styles.css';

const converter = new showdown.Converter();
const key = 'meleeTextContent';

type State = {
  text: string,
};

type Props = {};

class Main extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { text: ls(key) || '' };
  }

  state: State;

  componentDidMount() {
    this.text.value = this.state.text;
  }

  text: {
    value: string,
  };

  updateMarkdown(text: string) {
    this.setState({ text });
    ls(key, text);
  }

  props: Props;

  render() {
    return (
      <section className={style.wrapper}>
        <textarea
          className={style.text}
          ref={input => {
            this.text = input;
          }}
          onChange={() => this.updateMarkdown(this.text.value)}
        />
        <div className={style.html}>
          {Parser(converter.makeHtml(this.state.text))}
        </div>
      </section>
    );
  }
}

export default Main;
