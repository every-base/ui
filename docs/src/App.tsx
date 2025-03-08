import { Button, ThemeContext } from '@everybase/ui'
import theme from './theme';

const App = () => {
  return (
    <ThemeContext value={theme}>
      <div className="content">
        <h1 className='text-3xl font-bold underline'>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <Button primary label='Test' />
      </div>
    </ThemeContext>
  );
};

export default App;
