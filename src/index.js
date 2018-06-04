import React, { Component } from 'react';
import { render } from 'react-dom';
//import marked from 'marked';

class App extends Component {
  constructor() {
    super();
    this.defaultText = 
`# H1 element
## H2 element
Link: [Google](www.google.com)

Inline code: \`<p>\`

Block code: 
\`\`\`
const a = x => x * x
\`\`\`
List items:
- First Item
- Second Item

Blockquote:
> Example of blockquote.

Inline image: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Bold **text** example.
`
    this.state = {
      text: this.defaultText
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearOnFirstFocus = this.clearOnFirstFocus.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    }) 
  }

  clearOnFirstFocus() {
    if (this.state.text == this.defaultText) {
      this.setState({
        text: ''
      })
    }
  }

  render() {
    let content = marked(this.state.text);
    console.log(content);
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <textarea onClick={this.clearOnFirstFocus} onChange={this.handleChange} id="editor" cols="50" rows="20" placeholder="write some text" value={this.state.text}>
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html:content}}>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));