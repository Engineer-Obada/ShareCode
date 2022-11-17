import "./App.css";
import ClickCounter from "./HigherOrderComponent/ClickCounter";
import ClickCounterTow from "./renderProps/ClickCounterTow";
import Counter from "./renderProps/Counter";
import HoverCounterTwo from "./renderProps/HoverCounterTwo";
import HoverCounter from "./HigherOrderComponent/HoverCounter";
import DocTitleOne from "./CustomHooks/DocTitleOne";
import DocTitleTow from "./CustomHooks/DocTitleTow";
import CounterOne from "./CustomHooks/CounterOne";
import CounterTow from "./CustomHooks/CounterTow";
import UseForm from "./CustomHooks/UseForm";
import DropdownMenu from "./ExsharingCode/DropdownMenu";

function App() {
  return (
    <div className="App">
      {/*-----------------------------------RenderProps--------------------------------------------------- */}
      {/* <Counter render={(count,handelClick)=>(
        <ClickCounterTow count={count} handelClick={handelClick} />
      )} />
      <Counter render={(count,handelClick)=>(
        <HoverCounterTwo count={count} handelClick={handelClick} />
      )} /> */}
      {/* <ClickCounterTow />
      <HoverCounterTwo/>
      <User render={(isLoggin) => isLoggin ? "obada" : "alsyed"}/> */}
      {/************************************************************************************************************** */}

      {/*-----------------------------------HigherOrderComponent--------------------------------------------------- */}

      {/*<ClickCounter name="obada"/>*/} {/*   لن يتم طباعتهاclickcounterلذلك اذا طبعتها في hocهنا يتم تمرير بروبس الى */}
      {/*<HoverCounter />

      {/********************************************************************************************************************/}

      {/*------------------------------------------Custom Hooks----------------------------------------------- */}
        {/* <UseForm /> */}

      <DropdownMenu />
    </div>
  );
}

export default App;
