import Clock from "./Clock";
import Clock2 from "./Clock2";
import Clock3 from "./Clock3";
import Toggle from "./Toggle";
import Animals from "./Animals";
import Counter from "./Counter";

const Learning = () => {
    return ( 
        <div>
            <Clock timezone="America/New_York" />
            <Clock2 timezone="Asia/Tokyo" />
            <Clock3 timezone="Europe/London" />

            <Toggle/>

            <Animals/>

            <Counter/>
        </div>
     );
}
 
export default Learning;