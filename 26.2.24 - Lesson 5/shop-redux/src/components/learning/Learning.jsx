import Clock from './Clock';
import Clock2 from './Clock2';
import Clock3 from './Clock3';
import Toggle from './Toggle';
import Animals from './Animals';
import Counter from './Counter';
import CounterHook from './CounterHook';
import ThemedButton from './contexts/ThemedButton';
import ThemedButtonHookContext from './contexts/ThemedButtonHookContext';
import ThemedButtonHookCustomProvider from './contexts/ThemedButtonHookCustomProvider';
import AddTodo from './todos/AddTodo';
import Todos from './todos/Todos';

const Learning = () => {
    return ( 
        <div>

            <Clock timezone="America/New_York" />
            <Clock2 timezone="Asia/Tokyo" />
            <Clock3 timezone="Europe/London" />

            <Toggle/>
            <Animals/>
            <Counter/>

            <hr/>
            <CounterHook/>

            <hr style={{marginTop: '25px'}}/>
            <h3>Themed Button</h3>
            <ThemedButton/>

            <hr style={{marginTop: '25px'}}/>
            <h3>Themed Button - Hook Context</h3>
            <ThemedButtonHookContext/>

            <hr style={{marginTop: '25px'}}/>
            <h3>Themed Button - Hook Custom Provider</h3>
            <ThemedButtonHookCustomProvider/>

            <hr style={{marginTop: '25px'}}/>
            <h3>Todos</h3>
            <Todos/>
            <br/>
            <AddTodo/>

        </div>
     );
}
 
export default Learning;