import Counter from './Counter.jsx';
export default function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter steps={1} />
      <Counter steps={5}/>
      <Counter steps={10}/>
    </div>
  )
}