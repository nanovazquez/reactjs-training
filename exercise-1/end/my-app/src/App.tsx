import * as React from 'react';
import './App.css';

import AppHero from './components/AppHero';
import AppItems from './components/AppItems';
import postsService from './services/postsService';

class App extends React.Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = { items: [] };
  }

  public componentDidMount() {
    return postsService.getPosts()
      .then(posts => this.setState({ items: posts }))
      .catch(() => this.setState({ items: [] }))
  }

  public render() {
    const { items } = this.state;
    return (
      <div className="App">
        <AppHero
          message="Bienvenidos a React! 🚀"
        />
        <AppItems
          items={items}
        />
      </div>
    );
  }
}

export default App;
