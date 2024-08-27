import { Mynavbar } from "./navbar/Mynavbar"
import { Home } from "./pages/Home"
import Allroutes from "./routes"






export const App=()=>{
  return<div>
  
<Mynavbar />
<Home/>
  <Allroutes/>

 
  </div>
}
export default App